// ṢOGBÉDÈ Secure Configuration System
// This file handles secure environment variables for production deployment

(function() {
    'use strict';
    
    // Production environment detection
    const isProduction = window.location.protocol === 'https:' || 
                        window.location.hostname !== 'localhost';
    
    // Configuration object
    const config = {
        supabase: {
            url: null,
            anon_key: null
        },
        environment: isProduction ? 'production' : 'development'
    };
    
    if (isProduction) {
        // In production, these will be injected by server-side includes
        // or loaded from a secure server endpoint
        config.supabase.url = '{{SUPABASE_URL}}';
        config.supabase.anon_key = '{{SUPABASE_ANON_KEY}}';
        
        // Fallback: Try to load from secure endpoint
        if (config.supabase.url === '{{SUPABASE_URL}}') {
            // This would be replaced by server-side processing
            loadConfigFromServer();
        }
    } else {
        // Development fallbacks (these should be removed for production)
        console.warn('🚨 Running in development mode');
        config.supabase.url = 'https://xshbjfajdlxyyedemhsz.supabase.co';
        config.supabase.anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzaGJqZmFqZGx4eXllZGVtaHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwODY4OTEsImV4cCI6MjA3MTY2Mjg5MX0.dsLCeifYQTn0t6NxN7eE1kbcIpK1osB0yj_FOW4njvQ';
    }
    
    // Validate configuration
    if (!config.supabase.url || !config.supabase.anon_key) {
        console.error('🚨 ṢOGBÉDÈ Configuration Error: Missing Supabase credentials');
        return;
    }
    
    // Export to global scope (but make it read-only)
    window.SOGBEDE_CONFIG = Object.freeze({
        supabase: Object.freeze(config.supabase),
        environment: config.environment
    });
    
    // Function to load config from secure server endpoint (for advanced setups)
    function loadConfigFromServer() {
        fetch('/api/config')
            .then(response => response.json())
            .then(serverConfig => {
                if (serverConfig.supabase) {
                    config.supabase.url = serverConfig.supabase.url;
                    config.supabase.anon_key = serverConfig.supabase.anon_key;
                    
                    // Update global config
                    window.SOGBEDE_CONFIG = Object.freeze({
                        supabase: Object.freeze(config.supabase),
                        environment: config.environment
                    });
                }
            })
            .catch(err => {
                console.error('🚨 Could not load server config:', err);
            });
    }
    
    console.log('🔧 ṢOGBÉDÈ Secure Config loaded:', config.environment);
    
})();