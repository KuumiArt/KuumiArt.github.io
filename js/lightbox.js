document.addEventListener('DOMContentLoaded', function () {
    const homepageImages = [
        "lilia.jpg",
        "mualani.jpg",
        "oyThere.jpg",
        "silvi.jpg",
        "sho.jpg",
        "sen.jpg",
        "tammi.jpg",
        "nox.jpg",
        "komi.jpg",
        "lone.jpg",
        "lucidia.jpg",
        "mandarin.jpg",
        "zhongli.jpg",
        "gin.jpg",
        "kaeya.jpg",
        "lunar.jpg",
        "red.jpg",
        "showdown.jpg"
    ];

    const galleryDiv = document.getElementById('homepageGallery');

    homepageImages.forEach(function (imageSrc) {

        const imgElement = document.createElement('img');

        imgElement.src = "images/homepage/" + imageSrc;

        imgElement.classList.add("gallery-item")

        galleryDiv.appendChild(imgElement);
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('close-btn');
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = image.src;
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});