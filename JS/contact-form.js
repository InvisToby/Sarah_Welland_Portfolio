function openContactForm() {
  document.getElementById("myContact").style.display = "block";
}

function closeContact() {
  document.getElementById("myContact").style.display = "none";
}


var modal = document.getElementById('myContact');
var Bod = document.getElementsByTagName('body')[0];
var Banner = document.getElementsByClassName('bannerHere')[0];
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event);
  if (event.target == Bod || event.target == Banner) {
    modal.style.display = "none";
  }
}

