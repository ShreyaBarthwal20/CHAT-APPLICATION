
const socket = io(); 

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();  
  if (input.value) {
    socket.emit('chat message', input.value);  
    input.value = '';  
  }
});

socket.on('chat message', function (msg) {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});
