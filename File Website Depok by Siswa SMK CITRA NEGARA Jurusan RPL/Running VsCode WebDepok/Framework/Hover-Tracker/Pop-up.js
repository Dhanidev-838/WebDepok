const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

const title = document.getElementById("popup-title");
const img = document.getElementById("popup-img");
const desc = document.getElementById("popup-desc");
const map = document.getElementById("popup-map");

document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        title.innerText = btn.dataset.title;
        img.src = btn.dataset.img;
        desc.innerText = btn.dataset.desc;
        map.href = btn.dataset.map;

        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
