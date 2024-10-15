// Import Firebase scripts required for messaging
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyCyKLwO8LNRjzXV-lvGhH1dbSWj0UHbhtQ",
  authDomain: "admin-dashboard-741fb.firebaseapp.com",
  projectId: "admin-dashboard-741fb",
  storageBucket: "admin-dashboard-741fb.appspot.com",
  messagingSenderId: "916127095367",
  appId: "1:916127095367:web:60a9e9e1e48f554be86f62",
});

// Initialize messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
