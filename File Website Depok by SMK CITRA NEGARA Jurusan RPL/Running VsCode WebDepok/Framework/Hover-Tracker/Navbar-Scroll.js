const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // kasih shadow
    if (currentScroll > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // scroll ke bawah → sembunyi
    if (currentScroll > lastScrollY && currentScroll > 100) {
        navbar.classList.add("hide");
    } 
    // scroll ke atas → muncul
    else {
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScroll;
});
