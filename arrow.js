var arrowUpLink = document.getElementById("arrow-up-link");

arrowUpLink.addEventListener("click", function(event) {
  event.preventDefault();
  var target = document.getElementById("top");
  target.scrollIntoView({ behavior: "smooth" });
});