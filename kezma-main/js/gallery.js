console.log("Gallery JS Loaded");

// ================= GALLERY LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        document.body.style.overflow = "hidden"; // NEW: stops background scroll while lightbox is open

    });

});

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // NEW: restore scroll
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){
        closeLightbox();
    }

});

// NEW: close on Escape key
document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && lightbox.style.display === "flex") {
        closeLightbox();
    }
});