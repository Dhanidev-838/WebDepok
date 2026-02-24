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


document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".box").forEach(card => {

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 17;
            const rotateY = (x - centerX) / 17;

            card.style.transform =
                `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "rotateX(0) rotateY(0) scale(1)";
        });

    });

});
