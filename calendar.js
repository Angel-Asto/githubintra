document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendario');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [], // Aquí puedes agregar eventos
        dateClick: function(info) {
            const evento = prompt("Ingrese un evento para " + info.dateStr);
            if (evento) {
                calendar.addEvent({
                    title: evento,
                    start: info.dateStr,
                    allDay: true
                });
            }
        }
    });

    calendar.render();
});
