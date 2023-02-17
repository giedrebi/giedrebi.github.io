let arrowUpLink = document.getElementById("arrow-up-link");

arrowUpLink.addEventListener("click", function (event) {
  event.preventDefault();
  let target = document.getElementById("top");
  target.scrollIntoView({ behavior: "smooth" });
});

let about = document.getElementsByClassName("about-btn");
for (var i = 0, length = about.length; i < length; i++) {
  about[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("top");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

let projects = document.getElementsByClassName("projects-btn");
for (var i = 0, length = projects.length; i < length; i++) {
  projects[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("projects");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

let contact = document.getElementsByClassName("contact-btn");
for (var i = 0, length = contact.length; i < length; i++) {
  contact[i].addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.getElementById("contact");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

const button = document.getElementById('load-more-button');
button.addEventListener('click', function() {
  const moreProjects = document.getElementById('loadMore');
  moreProjects.style.display = "block";
  moreProjects.scrollIntoView({ behavior: "smooth" });
  button.style.display = "none"
});
