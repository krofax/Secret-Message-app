document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()

  //Take the input message
  const input = document.querySelector('#message-input')

  //Encrypt the text input 
  const encrypted = btoa(input.value);

  //Generate the URL to share with friends
  document.querySelector('#link-input').value = `${window.location}#${encrypted}`;

})