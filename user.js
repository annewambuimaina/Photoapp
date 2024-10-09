document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, show content
            document.getElementById('content').innerHTML = `
                <h1>User Profile</h1>
                <p>Email: ${user.email}</p>
                <p>User ID: ${user.uid}</p>
                <!-- Add more user profile information here -->
            `;
            // Load additional user data here if needed
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