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
                return; // Desktop : CSS only
            }

            const isOpen = submenu.classList.toggle("open");
            submenuBtn.setAttribute("aria-expanded", isOpen);
        });
    }
});

