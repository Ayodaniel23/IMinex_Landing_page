window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top on button click
document.getElementById('scrollToTopBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add event listener to the entire document
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
    }
}

// Function to close dropdown menu if clicked outside
function closeDropdown(e) {
    const dropdownToggle = document.getElementById('navbarDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Check if the click is outside the dropdown toggle and menu
    if (dropdownMenu && !dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
}

// Add event listener to the document for clicks outside
document.addEventListener('click', closeDropdown);

// Add event listener to the dropdown toggle
const dropdownToggle = document.getElementById('navbarDropdown');
if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent click event from propagating to the document
        toggleDropdown();
    });
}