function sendMessage(){
  var msg = document.getElementById('Aidan Lish:'+'entryinput');
  alert(msg);
}

var alertButton = document.getElementById('entrybutton');
alertButton.addEventListener('click', sendMessage)