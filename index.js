//destructure the hash property
const { hash } = window.location;

const message = atob(hash.replace('#', ''))

if (message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')

  //Stick the message inside the h1 element
  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()

  //Toggle visibility betwwen the message form and the share link URL
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')

  //Take the input message
  const input = document.querySelector('#message-input')

  //Encrypt the text input 
  const encrypted = btoa(input.value);

  //Generate the URL to share with friends
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;

  //Select the url automatically when user clicks the create button
  linkInput.select();

})