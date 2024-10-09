document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, show content
            document.getElementById('content').innerHTML = `
                <h1>Your Albums</h1>
                <div id="albumList"></div>
                <button id="createAlbumBtn">Create New Album</button>
            `;
            loadAlbums(user.uid);
            document.getElementById('createAlbumBtn').addEventListener('click', () => createNewAlbum(user.uid));
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

function loadAlbums(userId) {
    // Implement album loading logic here
    console.log('Load albums for user:', userId);
}

function createNewAlbum(userId) {
    // Implement album creation logic here
    console.log('Create new album for user:', userId);
}