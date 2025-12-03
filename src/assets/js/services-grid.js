document.addEventListener('DOMContentLoaded', () => {
    const roots = document.querySelectorAll('[data-services-carousel]');
    if (!roots.length) {
        return;
    }

    function getVisibleCount() {
        const width = window.innerWidth;
        if (width >= 1024) {
            return 3;
        }
        if (width >= 768) {
            return 2;
        }
        return 1;
    }

    roots.forEach((root) => {
        const cardsContainer = root.querySelector('[data-services-cards]');
        if (!cardsContainer) {
            return;
        }

        const cards = Array.from(cardsContainer.querySelectorAll('[data-service-card]'));
        if (!cards.length) {
            return;
        }

        const prevButton = root.querySelector('[data-services-prev]');
        const nextButton = root.querySelector('[data-services-next]');

        let startIndex = 0;

        cards.forEach((card) => {
            card.classList.add('transition-opacity', 'duration-300', 'ease-in-out');
        });

        function clampStartIndex(visible) {
            const maxStart = Math.max(0, cards.length - visible);
            if (startIndex > maxStart) {
                startIndex = maxStart;
            }
            if (startIndex < 0) {
                startIndex = 0;
            }

            if (prevButton) {
                prevButton.disabled = startIndex === 0;
                prevButton.classList.toggle('opacity-40', startIndex === 0);
                prevButton.classList.toggle('cursor-not-allowed', startIndex === 0);
            }

            if (nextButton) {
                nextButton.disabled = startIndex === maxStart;
                nextButton.classList.toggle('opacity-40', startIndex === maxStart);
                nextButton.classList.toggle('cursor-not-allowed', startIndex === maxStart);
            }
        }

        function showCard(card, animate) {
            if (card._servicesGridHandler) {
                card.removeEventListener('transitionend', card._servicesGridHandler);
                card._servicesGridHandler = undefined;
            }

            const wasHidden = card.classList.contains('hidden');
            card.classList.remove('hidden');
            card.classList.remove('pointer-events-none');

            if (!animate || !wasHidden) {
                card.classList.remove('opacity-0');
                return;
            }

            card.classList.add('opacity-0');
            requestAnimationFrame(() => {
                card.classList.remove('opacity-0');
            });
        }

        function hideCard(card, animate) {
            if (card.classList.contains('hidden')) {
                return;
            }

            if (!animate) {
                card.classList.add('hidden');
                card.classList.remove('pointer-events-none');
                card.classList.add('opacity-0');
                return;
            }

            const handler = (event) => {
                if (event.propertyName !== 'opacity') {
                    return;
                }
                card.classList.add('hidden');
                card.classList.remove('pointer-events-none');
                card.removeEventListener('transitionend', handler);
                card._servicesGridHandler = undefined;
            };

            card.classList.add('pointer-events-none');
            card.classList.add('opacity-0');
            card.addEventListener('transitionend', handler);
            card._servicesGridHandler = handler;
        }

        function updateVisibility(animate = true) {
            const visibleCount = getVisibleCount();
            clampStartIndex(visibleCount);

            cards.forEach((card, index) => {
                if (index >= startIndex && index < startIndex + visibleCount) {
                    showCard(card, animate);
                } else {
                    hideCard(card, animate);
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                startIndex -= getVisibleCount();
                updateVisibility();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                startIndex += getVisibleCount();
                updateVisibility();
            });
        }

        window.addEventListener('resize', () => {
            updateVisibility(false);
        });

        updateVisibility(false);
    });
});

