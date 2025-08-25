// ṢOGBÉDÈ Configuration
// Production-ready configuration for deployment

// Supabase configuration
window.SUPABASE_CONFIG = {
    url: 'https://xshbjfajdlxyyedemhsz.supabase.co',
    anon_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzaGJqZmFqZGx4eXllZGVtaHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwODY4OTEsImV4cCI6MjA3MTY2Mjg5MX0.dsLCeifYQTn0t6NxN7eE1kbcIpK1osB0yj_FOW4njvQ'
};

// Export config for use in other files
window.SOGBEDE_CONFIG = {
    supabase: window.SUPABASE_CONFIG,
    environment: 'production'
};

console.log('🔧 ṢOGBÉDÈ Config loaded successfully');