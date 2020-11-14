let menu = () => {
    const open = document.querySelector(".header__line"),
          close = document.querySelector(".nav__line"),
          menu = document.querySelector(".nav"),
          nav__box = document.querySelector(".nav__box");

    
    open.addEventListener("click", () => {
        menu.style.transform = "translateY(0px)"
        setTimeout(() => {
            nav__box.style.transform = "translateY(0px)"
        }, 700)
    });
    close.addEventListener("click", () => {
        nav__box.style.transform = "translateY(-385px)"
        setTimeout(() => {
            menu.style.transform = "translateY(-539px)"
        }, 700)
    });
}

export default menu;