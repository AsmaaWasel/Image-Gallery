document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-item img").forEach((image) => {
    image.addEventListener("click", function () {
      lightboxImage.src = this.src;
      lightboxCaption.textContent = this.nextElementSibling.textContent;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImage && e.target !== lightboxCaption) {
      lightbox.style.display = "none";
    }
  });
});
