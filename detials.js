document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('currentImage');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('#imageModal .close');

    thumbnails.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            // Update main image src and alt
            mainImage.src = thumb.src;
            mainImage.alt = thumb.alt;

            // Update active thumbnail styling
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Automatic cycling through images every 4 seconds
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        thumbnails[currentIndex].click();
    }, 2000);

    // Enlarge image on main image click
    mainImage.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = mainImage.src;
        modalImage.alt = mainImage.alt;
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
