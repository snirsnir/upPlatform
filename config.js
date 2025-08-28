// config.js
// Firebase configuration with environment variables for security

// Helper function to get environment variable or fallback
function getEnvVar(name, fallback = '') {
    // In browser environment, Netlify injects these as window variables
    if (typeof window !== 'undefined' && window.env) {
        return window.env[name] || fallback;
    }
    // Node.js environment
    if (typeof process !== 'undefined' && process.env) {
        return process.env[name] || fallback;
    }
    return fallback;
}

const firebaseConfig = {
    apiKey: getEnvVar('FIREBASE_API_KEY', 'YOUR_API_KEY_HERE'),
    authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN', 'YOUR_PROJECT.firebaseapp.com'),
    databaseURL: getEnvVar('FIREBASE_DATABASE_URL', 'https://YOUR_PROJECT-default-rtdb.firebaseio.com'),
    projectId: getEnvVar('FIREBASE_PROJECT_ID', 'YOUR_PROJECT_ID'),
    storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET', 'YOUR_PROJECT.firebasestorage.app'),
    messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID', 'YOUR_SENDER_ID'),
    appId: getEnvVar('FIREBASE_APP_ID', 'YOUR_APP_ID')
};

export default firebaseConfig;