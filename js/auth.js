const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
const register_link = document.querySelector('.registerlink')

registerlink.addEventListener('click', () => {
    loginsec.classList.add('active')
});

register_link.addEventListener('click', () => {
    loginsec.classList.add('active')
});

loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active')
});