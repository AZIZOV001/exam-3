const btn = document.querySelector(".btn-link");
const btn3 = document.querySelector(".btn-link-2");
const btn2 = document.querySelector(".btn-tn");
const menu = document.querySelector(".menu");
const menu2 = document.querySelector(".menu-2");
const menu3 = document.querySelector(".menu-3");
const menu5 = document.querySelector(".menu-5");
const btn4 = document.querySelector(".btn32");

btn.addEventListener("click", (e) => {
    if(!menu.classList.contains("active")) {
        menu.classList.add("active")
    }else {
        menu.classList.remove('active')
    }
});

btn2.addEventListener("click", (e) => {
    if(!menu2.classList.contains("active")) {
        menu2.classList.add("active")
    }else {
        menu2.classList.remove('active')
    }
});


btn3.addEventListener("click", (e) => {
    if(!menu3.classList.contains("active")) {
        menu3.classList.add("active")
    }else {
        menu3.classList.remove('active')
    }
});

btn4.addEventListener("click", (e) => {
    if(!menu5.classList.contains("active")) {
        menu5.classList.add("active")
    }else {
        menu5.classList.remove('active')
    }
});