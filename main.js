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



let capsLock = false;

function toggleCapsLock() {
    capsLock = !capsLock;
    updateKeyboardCase();
}

function updateKeyboardCase() {
    const buttons = document.querySelectorAll('#keyboard .keyboard-row button');
    buttons.forEach(button => {
        const char = button.textContent;
        if (capsLock && char.match(/[a-z]/)) {
            button.textContent = char.toUpperCase();
        } else if (!capsLock && char.match(/[A-Z]/)) {
            button.textContent = char.toLowerCase();
        }
    });
}

function showKeyboard() {
    var keyboard = document.getElementById('keyboard');
    keyboard.classList.remove('hidden');
}

function hideKeyboard() {
    var keyboard = document.getElementById('keyboard');
    keyboard.classList.add('hidden');
}

function insertCharacter(char) {
    var textarea = document.getElementById('message');
    var cursorPos = textarea.selectionStart;
    var textBefore = textarea.value.substring(0, cursorPos);
    var textAfter = textarea.value.substring(textarea.selectionEnd);
    textarea.value = textBefore + char + textAfter;
    textarea.selectionStart = cursorPos + 1;
    textarea.selectionEnd = cursorPos + 1;

    textarea.focus(); 

    event.preventDefault();
}


document.addEventListener('click', function(event) {
    var keyboard = document.getElementById('keyboard');
    var textarea = document.getElementById('message');
    var isKeyboardButton = event.target.closest('#keyboard .keyboard-row button');
    
    if (!textarea.contains(event.target) && !isKeyboardButton) {
        keyboard.classList.add('hidden');
    }
});

updateKeyboardCase();

let fontSize = 16; 

function decreaseFontSize() {
  fontSize -= 2; 
  applyFontSize();
}

function increaseFontSize() {
  fontSize += 2; 
  applyFontSize();
}

function applyFontSize() {
  const content = document.getElementById('magnifier');
  content.style.fontSize = fontSize + 'px';
}