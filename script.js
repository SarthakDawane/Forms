const main = document.querySelector(".main");
const register = document.querySelector(".registration");
const login = document.querySelector(".login-link");

register.onclick = () => {
    main.classList.add("active");
}

login.onclick = () => {
    main.classList.remove("active");
}