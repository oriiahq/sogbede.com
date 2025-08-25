<?php
/**
 * ṢOGBÉDÈ Secure Configuration Injector
 * This PHP script injects environment variables into the config file
 * for secure production deployment on Namecheap
 */

// Security: Only allow this script to run from localhost or your domain
$allowed_hosts = ['localhost', 'sogbede.com', 'www.sogbede.com'];
$current_host = $_SERVER['HTTP_HOST'] ?? 'localhost';

if (!in_array($current_host, $allowed_hosts)) {
    http_response_code(403);
    die('Access denied');
}

// Get environment variables (set these in your Namecheap hosting panel)
$supabase_url = $_ENV['SUPABASE_URL'] ?? getenv('SUPABASE_URL');
$supabase_anon_key = $_ENV['SUPABASE_ANON_KEY'] ?? getenv('SUPABASE_ANON_KEY');

// Validate required environment variables
if (empty($supabase_url) || empty($supabase_anon_key)) {
    http_response_code(500);
    die('Missing required environment variables');
}

// Security headers
header('Content-Type: application/javascript');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Inject secure configuration
?>
// ṢOGBÉDÈ Production Configuration (Auto-generated)
// Generated on: <?php echo date('Y-m-d H:i:s T'); ?>

(function() {
    'use strict';
    
    const config = {
        supabase: {
            url: <?php echo json_encode($supabase_url); ?>,
            anon_key: <?php echo json_encode($supabase_anon_key); ?>
        },
        environment: 'production'
    };
    
    // Export to global scope (read-only)
    window.SOGBEDE_CONFIG = Object.freeze({
        supabase: Object.freeze(config.supabase),
        environment: config.environment
    });
    
    console.log('🔧 ṢOGBÉDÈ Production Config loaded');
})();