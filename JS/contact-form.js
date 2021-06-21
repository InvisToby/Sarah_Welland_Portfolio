function openContactForm() {
  document.getElementById("myContact").style.display = "block";
}

function closeContact() {
  document.getElementById("myContact").style.display = "none";
}

var modal = document.getElementById('myContact');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

