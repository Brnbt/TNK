var bouton = document.getElementById("monBouton");
var contenu = document.getElementById("monContenu");

bouton.addEventListener("click", function(event) {
  event.stopPropagation();
  this.classList.toggle("active");
});

document.addEventListener("click", function() {
  contenu.style.display = "none";
  bouton.classList.remove("active");
});
