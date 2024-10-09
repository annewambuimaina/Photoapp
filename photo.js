document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, show content
            document.getElementById('content').innerHTML = `
                <h1>Photo View</h1>
                <div id="photoContainer"></div>
            `;
            loadPhoto(user.uid);
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

function loadPhoto(userId) {
    // Get photo ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const photoId = urlParams.get('id');

    if (photoId) {
        // Implement photo loading logic here
        console.log('Load photo:', photoId, 'for user:', userId);
    } else {
        console.error('No photo ID provided');
        document.getElementById('photoContainer').innerHTML = '<p>No photo selected</p>';
    }
}