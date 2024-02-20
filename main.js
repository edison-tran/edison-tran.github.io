function promptName() {
    var userName = prompt("Please enter your name:");
    if (userName != null && userName != "") {
        document.getElementById("nameDisplay").innerText = "Your name is: " + userName;
    } else {
        document.getElementById("nameDisplay").innerText = "No name entered.";
    }
}