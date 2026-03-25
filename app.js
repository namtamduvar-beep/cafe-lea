document.addEventListener('DOMContentLoaded', () => {

    // Helper to create simple carousels
    function initCarousel(carouselId) {
        const container = document.getElementById(carouselId);
        if (!container) return; // Only init if elements exist

        const track = container.querySelector('.carousel-track');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const slides = container.querySelectorAll('.carousel-slide');
        
        if (slides.length <= 1) return;

        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1; // loop to end
            }
            updateCarousel();
        });
    }

    // Initialize the three carousels
    initCarousel('carousel-plat');
    initCarousel('carousel-menu');
    initCarousel('carousel-boissons');

    // Calendar & Reservation Logic (Only on reservation.html)
    const calendarGrid = document.getElementById('calendar-grid');
    if (calendarGrid) {
        // Mock current month rendering
        const daysInMonth = 31;
        const startDayOffset = 3; // Wednesday start for mock

        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        
        // Render headers
        days.forEach(day => {
            const el = document.createElement('div');
            el.className = 'calendar-day-name';
            el.textContent = day;
            calendarGrid.appendChild(el);
        });

        // Render empty offset slots
        for(let i=0; i < startDayOffset; i++){
            const el = document.createElement('div');
            el.className = 'calendar-day empty';
            calendarGrid.appendChild(el);
        }

        const timeSlotsContainer = document.getElementById('time-slots');

        // Render days
        for(let i=1; i <= daysInMonth; i++) {
            const el = document.createElement('div');
            el.className = 'calendar-day';
            el.textContent = i;
            
            el.addEventListener('click', () => {
                // Deselect active day
                document.querySelectorAll('.calendar-day.selected').forEach(d => d.classList.remove('selected'));
                el.classList.add('selected');

                // Show time slots
                timeSlotsContainer.classList.add('active');
            });

            calendarGrid.appendChild(el);
        }

        // Handle time slot selection
        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                document.querySelectorAll('.time-slot.selected').forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
            });
        });

        // Handle confirm btn
        const confirmBtn = document.getElementById('confirm-btn');
        confirmBtn.addEventListener('click', () => {
            const selectedDate = document.querySelector('.calendar-day.selected');
            const selectedTime = document.querySelector('.time-slot.selected');

            if(selectedDate && selectedTime) {
                alert(`Réservation confirmée pour le ${selectedDate.textContent} à ${selectedTime.textContent}. Merci !`);
                window.location.href = 'index.html';
            } else {
                alert("Veuillez sélectionner une date et une heure.");
            }
        });
    }
});
