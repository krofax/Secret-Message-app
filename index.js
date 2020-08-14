document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()

  //Take the input message
  const input = document.querySelector('#message-input')

  //Encrypt the text input so friends can share
  const encrypted = btoa(input.value);
  document.querySelector('#link-input').value = encrypted;
})