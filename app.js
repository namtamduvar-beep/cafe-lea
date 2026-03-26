document.addEventListener('DOMContentLoaded', () => {

    // Calendar Initialization
    const calendarGrid = document.getElementById('calendar-grid');
    if (calendarGrid) {
        const daysInMonth = 31;
        const startDayOffset = 3;

        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        
        days.forEach(day => {
            const el = document.createElement('div');
            el.className = 'cal-day-name';
            el.textContent = day;
            calendarGrid.appendChild(el);
        });

        for(let i=0; i < startDayOffset; i++){
            const el = document.createElement('div');
            el.className = 'cal-day empty';
            calendarGrid.appendChild(el);
        }

        for(let i=1; i <= daysInMonth; i++) {
            const el = document.createElement('div');
            el.className = 'cal-day';
            if(i === 15) el.classList.add('selected'); // default selection
            el.textContent = i;
            
            el.addEventListener('click', () => {
                document.querySelectorAll('.cal-day.selected').forEach(d => d.classList.remove('selected'));
                el.classList.add('selected');
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

        // Submit logic
        const submitBtn = document.getElementById('res-submit');
        submitBtn.addEventListener('click', () => {
            const selectedDate = document.querySelector('.cal-day.selected');
            const selectedTime = document.querySelector('.time-slot.selected');
            if (selectedDate && selectedTime) {
                alert(`Demande de réservation confirmée pour le ${selectedDate.textContent} Mai à ${selectedTime.textContent}. Merci !`);
                window.location.href = 'index.html';
            }
        });
    }

});
