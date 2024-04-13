// Form_PlugIn_CalendarHTML.js
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        firstDay: 1,  // Montag als ersten Tag der Woche setzen
        events: [
            { title: 'Neujahr', start: '2024-01-01' },
            { title: 'Tag der Arbeit', start: '2024-05-01' }
            // Weitere Feiertage können hier hinzugefügt werden
        ]
    });
    calendar.render();
});
