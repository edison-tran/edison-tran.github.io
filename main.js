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

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    var clearBtn = document.getElementById('clearBtn');
    var form = document.getElementById('contactForm');

    submitBtn.addEventListener('click', function() {
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            device: document.getElementById('device').value,
            gender: document.getElementById('gender').value,
            interest: document.getElementById('interest').value,
            experience: document.getElementById('experience').value,
            message: document.getElementById('message').value
        };

        console.log(formData);
    });

    clearBtn.addEventListener('click', function() {
        form.reset();
    });
});
