function promptName() {
    var userName = prompt("Please enter your name:");
    if (userName != null && userName != "") {
        document.getElementById("nameDisplay").innerText = "Your name is: " + userName;
    } 
}

function enlargeImage(image) {
    if (image.style.transform === "scale(1.1)") { //use if-else logic to ensure image action is performed
        image.style.transform = "scale(1)"; 
    } else {
        image.style.transform = "scale(1.1)"; 
    }
}

