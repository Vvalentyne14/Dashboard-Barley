// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // No 'default' export
import { getMessaging, onMessage } from "firebase/messaging"; // For FCM
import { getAnalytics } from "firebase/analytics"; // For analytics
import { getToken } from "firebase/messaging";
// firebase.js (for Firebase configuration and FCM setup)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyKLwO8LNRjzXV-lvGhH1dbSWj0UHbhtQ",
  authDomain: "admin-dashboard-741fb.firebaseapp.com",
  projectId: "admin-dashboard-741fb",
  storageBucket: "admin-dashboard-741fb.appspot.com",
  messagingSenderId: "916127095367",
  appId: "1:916127095367:web:60a9e9e1e48f554be86f62",
  measurementId: "G-76KRK2NT34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics with a try-catch block to prevent failures due to ad-blockers
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.log("Analytics not initialized: ", error);
}

// Initialize Firebase Messaging
const messaging = getMessaging(app);

// Request permission to send notifications and get token
export const requestForToken = () => {
  return messaging
    .getToken({ vapidKey: 'BBHaAPZDBhm1kXaZHMJG4glCyRcH2zrQ5KNpRTjuZM7MdUGJHGoXVVqvnOgQxXrH2WU90MkDOOpSvXzx1Rv_m2o' }) // VAPID key for web push
    .then((currentToken) => {
      if (currentToken) {
        console.log("FCM Token received: ", currentToken);
        // Send token to your server or store it for future use
      } else {
        console.log("No registration token available.");
      }
    })
    .catch((err) => {
      console.log("Error while retrieving FCM token: ", err);
    });
};

// Function to request notification permission
export const askNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // If granted, call requestForToken to get FCM token
      requestForToken();
    } else {
      console.log("Notification permission denied.");
    }
  });
};

// Export messaging and analytics (analytics may be undefined if blocked)
export { messaging, analytics };
