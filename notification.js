// Check if the Notification API is supported
if ('Notification' in window) {
  // Request notification permission if not already granted
  if (Notification.permission === 'granted') {
    // Permission already granted, show notification
    showNotification();
  } else if (Notification.permission !== 'denied') {
    // Request permission from the user
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }
}

// Function to show a notification
function showNotification() {
  const notification = new Notification('New Notification', {
    body: 'This is a new notification'
  });

  notification.onclick = function(event) {
    // Action to take when the user clicks on the notification
    event.preventDefault();
    window.open('https://yourwebsite.com');
  };
}
