function sendMessage(){
  var msg = document.getElementById('entryinput');
  alert('Aidan Lish'+msg);
}

var alertButton = document.getElementById('entrybutton');
alertButton.addEventListener('click', sendMessage)