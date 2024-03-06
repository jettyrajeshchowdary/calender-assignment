const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

document.addEventListener('DOMContentLoaded', function () {
    updateCalendar();
});

function updateCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const monthYearHeader = document.getElementById('month-year');

    // Clear previous content
    calendarBody.innerHTML = '';

    // Set month and year in the header
    monthYearHeader.textContent = getMonthName(currentMonth) + ' ' + currentYear;

    // Get the first day of the month and the total number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayCount = 1;

    // Create calendar rows
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        // Create calendar cells for each day of the week
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            // Check if it's the first row and current column is before the first day of the month
            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (dayCount > totalDays) {
                // If the day count exceeds the total days, leave the cell empty
                cell.textContent = '';
            } else {
                // Fill in the day number and increment the count
                cell.textContent = dayCount;
                cell.onclick = function () {
                    alert('Clicked on ' + getMonthName(currentMonth) + ' ' + dayCount + ', ' + currentYear);
                };
                dayCount++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
}

function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}