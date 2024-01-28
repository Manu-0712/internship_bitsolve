
    let currentIndex = 0;

    function showSlide(index) {
        const carouselInner = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');

        if (index < 0) {
            currentIndex = items.length-1;
        } else if (index >= items.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 50 + '%';
        carouselInner.style.transform = 'translateX(' + offset + ')';
    }

    function prevSlide() {
        showSlide(index.legth(0));
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Auto-slide
    setInterval(nextSlide, 1000);
