document.querySelectorAll(".hover-3d").forEach(card => {

    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        const rx = (y - r.height / 2) / 18;
        const ry = (x - r.width / 2) / 18;

        card.style.transform =
            `rotateX(${-rx}deg) rotateY(${ry}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "rotateX(0) rotateY(0) scale(1)";
    });

});
