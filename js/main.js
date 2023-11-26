// Retrieve the login status from localStorage
const loginUser = JSON.parse(localStorage.getItem('loginUser'));

// Check if the user is logged in
const isLoggedIn = loginUser !== null;

// Function to hide or show login, registration, accounts, and logout links
function updateNavigation() {
    const loginRegLinks = document.querySelectorAll('.login-reg');
    const publicLinks = document.querySelectorAll('.public');
    const privateLinks = document.querySelectorAll('.private');

    if (isLoggedIn) {
        // User is logged in, hide login and registration links
        loginRegLinks.forEach(link => link.style.display = 'none');
        // Show private links (e.g., accounts, logout)
        privateLinks.forEach(link => link.style.display = 'block');
    } else {
        // User is not logged in, hide private links
        privateLinks.forEach(link => link.style.display = 'none');
        // Show login and registration links
        loginRegLinks.forEach(link => link.style.display = 'block');
    }
}

// Call the updateNavigation function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    updateNavigation();
});



function logout() {
    localStorage.removeItem('loginUser')
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// checkLoginUser()