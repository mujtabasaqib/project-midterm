//code that when i click the button with class="hamburger-menu" a menu is opened and there is a close button also which when clicked closes this menu write styles also here so that dynamically content is generated

const menuButton = document.getElementById('menuButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

// Open the menu
menuButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Close the menu
closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Close the menu when clicking outside the menu content
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});

