function showQuest() {
    const text = document.querySelector('.text');
    const questButtons = document.querySelector('.quest-buttons');

    text.style.display = 'none'; 
    questButtons.classList.add('show'); 
}

function startQuest() {
    const questText = document.querySelector('.small-text');
    const passwordField = document.getElementById('passwordField');
    const passwordInput = document.getElementById('passwordInput');

    questText.innerHTML = "Enter the password from the received cards";
    passwordField.classList.remove('hidden');
}

const btn = document.querySelector('#noButton');
let isHovered = false;


btn.addEventListener('mouseenter', () => {
    isHovered = true; 
});


btn.addEventListener('mouseleave', () => {
    isHovered = false; 
});


function moveButton() {
    if (isHovered) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const randomX = Math.random() * windowWidth;
        const randomY = Math.random() * windowHeight;

        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
    }
}


btn.addEventListener('mousemove', moveButton);

btn.addEventListener('click', () => {
    alert('You dont love me');
});

const yesButton = document.getElementById('yesButton');


const tables = document.querySelectorAll('.table');


yesButton.addEventListener('click', function () {
    
    tables.forEach(function (table) {
        table.classList.remove('hidden');
    });

    startQuest(); 
});

function changeText(element, text) {
    element.innerHTML = text;
}


function addEventListeners() {
    var tables = document.querySelectorAll('.table');

    tables.forEach(function (table) {
        table.addEventListener("mouseover", function () {
            switch (this.id) {
                case 'tas1':
                    changeText(this, "Bed");
                    break;
                case 'tas2':
                    changeText(this, "Mirror");
                    break;
                case 'tas3':
                    changeText(this, "Washing machine");
                    break;
                case 'tas4':
                    changeText(this, "Pantry");
                    break;
                case 'tas5':
                    changeText(this, "Computer unit");
                    break;
                case 'tas6':
                    changeText(this, "A teacup with a vase");
                    break;
                default:
                    changeText(this, "Task " + taskId);
            }
        });

        table.addEventListener("mouseout", function () {
            var taskId = this.id.substr(3); 
            changeText(this, "Task " + taskId);
        });
    });
}


document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();
});

let yesButtonClicked = false;
let passwordAttempts = 0;


function checkPassword() {
    const enteredPassword = passwordInput.value;
    const photoWindow = document.getElementById('photoWindow');
    if (enteredPassword === '170923') {
        const imageSrc = 'https://i.pinimg.com/originals/0d/9d/c0/0d9dc0e014e173618adcf22fa8f47a9c.gif'; 
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;

        
        photoWindow.innerHTML = '';
        photoWindow.appendChild(imageElement);

        
        const messageElement = document.createElement('p');
        messageElement.textContent = "I love you! Your gift is in my hands";
        photoWindow.appendChild(messageElement);

        
        photoWindow.style.display = 'block';

        
        passwordField.style.display = 'none';
    } else {
        passwordAttempts++;
        if (passwordAttempts >= 3) {
            
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "You have one last chance";
            photoWindow.innerHTML = '';
            photoWindow.appendChild(errorMessage);
        } else {
            
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Nooooo";
            photoWindow.innerHTML = '';
            photoWindow.appendChild(errorMessage);
        }

       
        photoWindow.style.display = 'block';
    }
}


yesButton.addEventListener('click', function () {
    if (yesButtonClicked) {
        checkPassword();
    } else {
        // Змінюємо клас всіх елементів .table, щоб вони з'явилися
        tables.forEach(function (table) {
            table.classList.remove('hidden');
        });

        yesButtonClicked = true;
    }
});



