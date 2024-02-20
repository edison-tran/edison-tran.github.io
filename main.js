function promptName() {
    var userName = prompt("Please enter your name:");
    if (userName != null && userName != "") {
        document.getElementById("nameDisplay").innerText = "Your name is: " + userName;
    } 
}

document.getElementById('imageLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    enlargeImage();
});

function enlargeImage() {
    var img = document.getElementById('clickableImage');
    if (img.style.width === '350px') {
        img.style.width = '500px';
        img.style.height = '450px';
    } else {
        img.style.width = '350px';
        img.style.height = '300px';
    }
}