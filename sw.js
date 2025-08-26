// ṢOGBÉDÈ Service Worker - Performance Optimization
// Version 1.0

const CACHE_NAME = 'sogbede-v1.0';
const STATIC_CACHE = 'sogbede-static-v1.0';

// Resources to cache immediately
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/signup.html',
    '/admin.html',
    '/config.js',
    '/gallery-images.js',
    'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
];

// Images to cache on first request (lazy cache)
const IMAGE_PATTERNS = [
    /\/images\/.+\.(jpg|jpeg|png|webp|gif)$/i,
    /header\.(png|jpg|webp)$/i,
    /mobile\.(jpg|png|webp)$/i
];

// Install Service Worker
self.addEventListener('install', event => {
    console.log('🔧 ṢOGBÉDÈ: Installing service worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 ṢOGBÉDÈ: Caching static assets...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('✅ ṢOGBÉDÈ: Service worker installed successfully!');
                self.skipWaiting(); // Activate immediately
            })
            .catch(error => {
                console.error('❌ ṢOGBÉDÈ: Service worker installation failed:', error);
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    console.log('🚀 ṢOGBÉDÈ: Activating service worker...');
    
    event.waitUntil(
        // Clean up old caches
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
                        console.log('🗑️ ṢOGBÉDÈ: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ ṢOGBÉDÈ: Service worker activated!');
            self.clients.claim(); // Take control immediately
        })
    );
});

// Intercept Fetch Requests
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Only handle GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip external requests (except CDN resources we cache)
    if (url.origin !== location.origin && !request.url.includes('cdn.jsdelivr.net')) {
        return;
    }
    
    event.respondWith(
        handleRequest(request)
    );
});

// Smart Caching Strategy
async function handleRequest(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    try {
        // Strategy 1: Cache First for Static Assets
        if (isStaticAsset(pathname)) {
            return await cacheFirst(request);
        }
        
        // Strategy 2: Stale While Revalidate for Images
        if (isImage(pathname)) {
            return await staleWhileRevalidate(request);
        }
        
        // Strategy 3: Network First for HTML/API
        if (isDocument(pathname)) {
            return await networkFirst(request);
        }
        
        // Default: Network First
        return await networkFirst(request);
        
    } catch (error) {
        console.error('🚫 ṢOGBÉDÈ: Fetch error:', error);
        
        // Fallback for navigation requests
        if (isDocument(pathname)) {
            const cachedIndex = await caches.match('/index.html');
            if (cachedIndex) {
                return cachedIndex;
            }
        }
        
        return new Response('Offline - ṢOGBÉDÈ content unavailable', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Cache First Strategy (for static assets)
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
        const cache = await caches.open(STATIC_CACHE);
        cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
}

// Stale While Revalidate Strategy (for images)
async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);
    
    const networkPromise = fetch(request).then(response => {
        if (response.status === 200) {
            const cache = caches.open(CACHE_NAME);
            cache.then(c => c.put(request, response.clone()));
        }
        return response;
    }).catch(() => {
        // Network failed, return cached version
        return cachedResponse;
    });
    
    // Return cached version immediately if available
    if (cachedResponse) {
        return cachedResponse;
    }
    
    // Otherwise wait for network
    return networkPromise;
}

// Network First Strategy (for HTML/dynamic content)
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        throw error;
    }
}

// Helper Functions
function isStaticAsset(pathname) {
    return pathname.endsWith('.css') || 
           pathname.endsWith('.js') || 
           pathname.includes('cdn.jsdelivr.net');
}

function isImage(pathname) {
    return IMAGE_PATTERNS.some(pattern => pattern.test(pathname));
}

function isDocument(pathname) {
    return pathname.endsWith('.html') || 
           pathname === '/' || 
           !pathname.includes('.');
}

// Background Sync (for offline form submissions)
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync-sogbede') {
        console.log('🔄 ṢOGBÉDÈ: Background sync triggered');
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    // Handle queued form submissions when back online
    // This would sync with your Supabase backend
    console.log('🔄 ṢOGBÉDÈ: Performing background sync...');
}

// Performance Monitoring
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_CACHE_SIZE') {
        getCacheSize().then(size => {
            event.ports[0].postMessage({
                type: 'CACHE_SIZE',
                size: size
            });
        });
    }
});

async function getCacheSize() {
    const cacheNames = await caches.keys();
    let totalSize = 0;
    
    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        
        for (const request of requests) {
            const response = await cache.match(request);
            if (response) {
                totalSize += (await response.blob()).size;
            }
        }
    }
    
    return totalSize;
}