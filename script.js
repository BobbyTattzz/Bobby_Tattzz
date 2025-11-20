/// LOADER CONTROL
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 800); // You can increase this for a slower fade
});
/// NAVBAR REVEAL ON SCROLL
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "-90px";
    }
});

// PAGE TRANSITION (FADE + NEON EDGE)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        let overlay = document.getElementById("transition-overlay");
        overlay.style.opacity = 1;
        setTimeout(() => {
            window.location = link.href;
        }, 400);
        e.preventDefault();
    });
});

// PARALLAX HERO
window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = -(window.scrollY * 0.2) + "px";
});
// LIGHTBOX VIEWER
const tattooImages = document.querySelectorAll('.tattoo-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

tattooImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
// Enables the same lightbox viewer for digital art
const digitalImages = document.querySelectorAll('.digital-item img, .scroll-gallery img');

digitalImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});
// LIGHTBOX SUPPORT FOR MURAL PAGE
const muralImages = document.querySelectorAll('.masonry-item img, .clothing-row img, .mural-box img');

muralImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});
