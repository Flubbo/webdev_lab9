function sendMessage(){
  var msg = document.getElementById('entryinput');
  alert(msg);
}

var alertButton = document.getElementById('entrybutton');
alertButton.addEventListener('click', sendMessage)