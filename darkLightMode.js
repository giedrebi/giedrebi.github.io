const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `${year}`;

function switchMode() {
    let moon = document.getElementById("moon");
    let sectionColor = document.getElementsByClassName("section-color");
    let links = document.querySelectorAll("a");
    let arrow = document.getElementById("arrow-up-link");
    let arrowIcon = document.getElementsByClassName("fa-arrow-up");
    let moreButton = document.getElementById("load-more-button");
    let linkedIn = document.getElementsByClassName("fa-linkedin");

    if (moon.className === "moon") {
        moon.className = "sun";
        document.body.style.backgroundColor = "#494949";
        document.body.style.color = "#fffdf6";
        arrow.style.backgroundColor = "#ece8d9";
        moreButton.style.backgroundColor = "#ece8d9";
        moreButton.style.color = "#494949";

        for (var i = 0, length = sectionColor.length; i < length; i++) {
            sectionColor[i].style.backgroundColor = "#5d5d5d";
            sectionColor[i].style.color = "#fffdf6";
        }
        for (var i = 0, length = arrowIcon.length; i < length; i++) {
            if (arrowIcon[i]) {
                arrowIcon[i].style.color = "#494949";
            }
        }
        for (var i = 0, length = links.length; i < length; i++) {
            links[i].style.transition = "1.2s ease-in";
            links[i].style.color = "#fffdf6";
        }
        for (var i = 0, length = linkedIn.length; i < length; i++) {
            linkedIn[i].style.color = "#fffdf6";
        }
    } else {
        moon.className = "moon";
        document.body.style.backgroundColor = "#ece8d9";
        document.body.style.color = "#494949";
        arrow.style.backgroundColor = "#5d5d5d";
        moreButton.style.backgroundColor = "#5d5d5d";
        moreButton.style.color = "#ece8d9";

        for (var i = 0, length = sectionColor.length; i < length; i++) {
            sectionColor[i].style.backgroundColor = "#fffdf6";
            sectionColor[i].style.color = "#494949";
        }
        for (var i = 0, length = arrowIcon.length; i < length; i++) {
            if (arrowIcon[i]) {
                arrowIcon[i].style.color = "#ece8d9";
            }
        }
        for (var i = 0, length = links.length; i < length; i++) {
            links[i].style.color = "#494949";
        }
        for (var i = 0, length = linkedIn.length; i < length; i++) {
            linkedIn[i].style.color = "#494949";
        }
    }
}
