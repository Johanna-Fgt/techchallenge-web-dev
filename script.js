//Opening navigation on small screens
function toggleNav() {
  document.getElementById("navigation").classList.toggle("open");
}

//Popup message on submiting message
const message = "Thank you for your message. Our team will answer you asap.";

document.getElementById("contact").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(message);
});
