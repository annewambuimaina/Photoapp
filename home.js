document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, show content
            document.getElementById('content').innerHTML = `
                <h1>Welcome, ${user.email}!</h1>
                <p>Here are your recent albums:</p>
                <!-- Add album list or grid here -->
            `;
            // Load user's albums here
        } else {
            // User is signed out, redirect to login page
            window.location.href = 'login.html';
        }
    });

    // Logout functionality
    document.getElementById('logoutLink').addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            window.location.href = 'index.html';
        }).catch((error) => {
            console.error('Logout error:', error);
        });
    });
});