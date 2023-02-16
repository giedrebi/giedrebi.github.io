const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `${year}`;

function switchMode() {
    let moon = document.getElementById("moon");
    let sectionColor = document.getElementsByClassName("section-color");
    let links = document.querySelectorAll("a:not(.navigation)");
    let arrow = document.getElementById("arrow-up-link")
    let arrowIcon = document.getElementsByClassName("fa-arrow-up");

    if (moon.className === "moon") {
        moon.className = "sun";
        document.body.style.backgroundColor = "#494949";
        document.body.style.color = "#fffdf6";
        arrow.style.backgroundColor = "#ece8d9";

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
    } else {
        moon.className = "moon";
        document.body.style.backgroundColor = "#ece8d9";
        document.body.style.color = "#494949";
        arrow.style.backgroundColor = "#5d5d5d";
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
    }
}

function rgbToHex(rgb) {
    var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
        return "";
    }

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    return "#" + hex(match[1]) + hex(match[2]) + hex(match[3]);
}
