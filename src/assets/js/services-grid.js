document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-services-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-services-track]');
    const cards = Array.from(carousel.querySelectorAll('[data-service-card]'));
    const prevButton = carousel.querySelector('.services-carousel-prev');
    const nextButton = carousel.querySelector('.services-carousel-next');

    if (!track || !cards.length) return;

    let currentIndex = 0;
    const gap = 24; // gap-6 = 1.5rem = 24px

    function getVisibleCount() {
        const width = window.innerWidth;
        if (width >= 1024) return 3;
        if (width >= 768) return 2;
        return 1;
    }

    function setCardWidths() {
        const container = track.parentElement; // overflow-hidden container with padding
        const visibleCount = getVisibleCount();
        
        // Get the actual inner width available for content
        // Use getBoundingClientRect for accurate measurement
        const containerRect = container.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(container);
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
        const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
        
        // Available width = container width minus padding
        const availableWidth = containerRect.width - paddingLeft - paddingRight;
        
        // Calculate card width: (available width - gaps between visible cards) / visible count
        const cardWidth = (availableWidth - (gap * (visibleCount - 1))) / visibleCount;
        
        // Ensure card width doesn't exceed available space
        const finalCardWidth = Math.max(0, Math.floor(cardWidth));
        
        // Verify total width doesn't exceed available space
        const totalCardsWidth = (finalCardWidth * visibleCount) + (gap * (visibleCount - 1));
        if (totalCardsWidth > availableWidth) {
            // Adjust if there's a rounding issue
            const adjustedCardWidth = Math.floor((availableWidth - (gap * (visibleCount - 1))) / visibleCount);
            cards.forEach(card => {
                card.style.width = `${adjustedCardWidth}px`;
                card.style.flexShrink = '0';
                card.style.maxWidth = `${adjustedCardWidth}px`;
                card.style.minWidth = `${adjustedCardWidth}px`;
            });
        } else {
            cards.forEach(card => {
                card.style.width = `${finalCardWidth}px`;
                card.style.flexShrink = '0';
                card.style.maxWidth = `${finalCardWidth}px`;
                card.style.minWidth = `${finalCardWidth}px`;
            });
        }
    }

    function getCardStep() {
        if (cards.length === 0) return 0;
        const firstCard = cards[0];
        if (!firstCard) return 0;
        
        const cardRect = firstCard.getBoundingClientRect();
        return cardRect.width + gap;
    }

    function getMaxIndex() {
        const visibleCount = getVisibleCount();
        return Math.max(0, cards.length - visibleCount);
    }

    function updateCarousel() {
        // First set card widths
        setCardWidths();
        
        // Then calculate scroll position
        requestAnimationFrame(() => {
            const step = getCardStep();
            const translateX = -currentIndex * step;
            
            track.style.transform = `translateX(${translateX}px)`;

            // Update button states
            const maxIndex = getMaxIndex();
            
            if (prevButton) {
                prevButton.disabled = currentIndex === 0;
                prevButton.classList.toggle('opacity-40', currentIndex === 0);
                prevButton.classList.toggle('cursor-not-allowed', currentIndex === 0);
            }

            if (nextButton) {
                nextButton.disabled = currentIndex >= maxIndex;
                nextButton.classList.toggle('opacity-40', currentIndex >= maxIndex);
                nextButton.classList.toggle('cursor-not-allowed', currentIndex >= maxIndex);
            }
        });
    }

    function goToNext() {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', goToNext);
    }

    if (prevButton) {
        prevButton.addEventListener('click', goToPrev);
    }

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const maxIndex = getMaxIndex();
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            updateCarousel();
        }, 150);
    });

    // Initialize
    track.style.transition = 'transform 0.5s ease-in-out';
    updateCarousel();

    // Wait for images and layout
    window.addEventListener('load', () => {
        updateCarousel();
    });
});
