const admin = require('firebase-admin');

// Initialize Firebase Admin
// Note: In production, use service account key file
// For now, using the provided config
const firebaseConfig = {
  apiKey: "AIzaSyApGm7UXlf1hWGQgnNab4PtsRnno2BxmVU",
  authDomain: "rudobackend.firebaseapp.com",
  projectId: "rudobackend",
  storageBucket: "rudobackend.firebasestorage.app",
  messagingSenderId: "198504074090",
  appId: "1:198504074090:web:b99a960e137780f293f313",
  measurementId: "G-RESTW4ZRZR"
};

if (!admin.apps.length) {
  try {
    // Try to initialize with service account if available
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: firebaseConfig.projectId
      });
    } else {
      // Initialize with project ID (requires GOOGLE_APPLICATION_CREDENTIALS or default credentials)
      admin.initializeApp({
        projectId: firebaseConfig.projectId
      });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
    // Fallback: initialize with minimal config
    admin.initializeApp({
      projectId: firebaseConfig.projectId
    });
  }
}

module.exports = admin;

