document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout');
    const usernameSpan = document.getElementById('username');

    // 检查URL参数中是否包含用户信息
    function checkUrlForUserInfo() {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if (username) {
            // 如果URL中包含用户名，则保存到localStorage并显示
            localStorage.setItem('username', username);
            showLoggedInState(username);
        } else {
            // 如果URL中没有用户名，则检查localStorage
            checkLoginStatus();
        }
    }

    // 检查登录状态
    function checkLoginStatus() {
        const username = localStorage.getItem('username');
        if (username) {
            showLoggedInState(username);
        } else {
            showLoggedOutState();
        }
    }

    function showLoggedInState(username) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline';
        usernameSpan.textContent = `Welcome, ${username}`;
        usernameSpan.style.display = 'inline';
    }

    function showLoggedOutState() {
        loginButton.style.display = 'inline';
        logoutButton.style.display = 'none';
        usernameSpan.textContent = '';
        usernameSpan.style.display = 'none';
    }

    loginButton.addEventListener('click', () => {
        // 这里应该跳转到您的登录页面
        window.location.href = 'login.html';  // 替换为您的登录页面URL
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        showLoggedOutState();
    });

    // 页面加载时检查URL中的用户信息
    checkUrlForUserInfo();
});