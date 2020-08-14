document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()

  //Take the input message
  const input = document.querySelector('#message-input')

  //Encrypt the text input 
  const encrypted = btoa(input.value);

  //Generate the URL to share with friends
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;

  //Select the url when user clicks create
  linkInput.select();

})