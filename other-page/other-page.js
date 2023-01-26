import { checkAuth, logout } from '../fetch-utils.js';

// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
const logButton = document.getElementById('logout');

window.addEventListener('load', async () => {
    await checkAuth();
});

logButton.addEventListener('click', async () => {
    await logout();

    window.location.href = '../';
});
