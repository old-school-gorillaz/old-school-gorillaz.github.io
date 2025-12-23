document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const submenuBtn = document.querySelector(".submenu-title");
    const submenu = document.querySelector(".submenu");

    // Menu principal (mobile)
    if (burger) {
        burger.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    // 🔥 Sous-menu : MOBILE UNIQUEMENT
    if (submenuBtn && submenu) {
        submenuBtn.addEventListener("click", (e) => {

            if (window.innerWidth > 768) {
                // Desktop : on empêche toute action JS
                e.preventDefault();
                return;
            }

            submenu.classList.toggle("open");
        });
    }
});