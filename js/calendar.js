import { HebrewCalendar, HDate } from '@hebcal/core';
/**
 * @file-overview This file contains the core calendar generation logic, including
 * fetching data from the Hebcal API and building the HTML for the calendar grid.
 */

const hebrewDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
const hebrewDaysShort = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];

/**
 * Generates the calendar grid based on a selected date range.
 * Fetches Hebrew dates and Torah portions from the Hebcal API.
 * @param {object} dependencies - Functions required by generateCalendar.
 * @param {Function} dependencies.applyMarksFromURL - Applies markings from URL parameters.
 * @param {Function} dependencies.updateCounter - Updates the UI counter for marked days.
 * @param {Function} dependencies.updateURLFromState - Updates the URL with the current calendar state.
 * @param {Function} dependencies.toggleMarking - Toggles the marking of a specific day.
 */
export async function generateCalendar({ toggleMarking, updateURLFromState }) {
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput = document.getElementById('endDate').value;
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (startDate > endDate) {
        alert('תאריך ההתחלה חייב להיות לפני תאריך הסיום');
        return;
    }

    const hebrewDatesMap = new Map();
    const events = [];
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const endMonth = endDate.getMonth() + 1;

    for (let year = startYear; year <= endYear; year++) {
        const monthStart = (year === startYear) ? startMonth : 1;
        const monthEnd = (year === endYear) ? endMonth : 12;
        for (let month = monthStart; month <= monthEnd; month++) {
            const monthEvents = HebrewCalendar.calendar({
                locale: 'he',
                sedrot: true,
                year: year,
                month: month,
                il: true
            });
            events.push(...monthEvents);
        }
    }

    for (const event of events) {
        const eventDate = event.getDate().greg();
        // Use a timezone-safe key instead of toISOString()
        const formattedDate = `${eventDate.getFullYear()}-${String(eventDate.getMonth() + 1).padStart(2, '0')}-${String(eventDate.getDate()).padStart(2, '0')}`;
        if (!hebrewDatesMap.has(formattedDate)) {
            hebrewDatesMap.set(formattedDate, {
                hdate: event.getDate(),
                events: []
            });
        }
        hebrewDatesMap.get(formattedDate).events.push(event.render('he'));
    }
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const days = window.innerWidth < 480 ? hebrewDaysShort : hebrewDays;
    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });

    const currentDate = new Date(startDate);
    let currentWeekday = startDate.getDay();

    for (let i = 0; i < currentWeekday; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-cell';
        calendar.appendChild(emptyCell);
    }

    let prevGregorianMonth = -1;

    const today = new Date();
    const todayFormatted = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    while (currentDate <= endDate) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        const weekday = currentDate.getDay();
        if (weekday === 5 || weekday === 6) {
            cell.classList.add('weekend');
        }

        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        cell.dataset.date = formattedDate;

        if (formattedDate === todayFormatted) {
            cell.classList.add('today');
        }

        let cellHTML = `<div class="date">${currentDate.getDate()}</div>`;

        const isFirstDayOfCalendar = currentDate.getTime() === startDate.getTime();
        const currentGregorianMonth = currentDate.getMonth();

        // Gregorian month display
        if (isFirstDayOfCalendar || currentGregorianMonth !== prevGregorianMonth) {
            const monthName = currentDate.toLocaleString('he-IL', { month: 'long' });
            cellHTML += `<div class="gregorian-month">${monthName}</div>`;
        }

        // Hebrew date display logic
        const hdate = new HDate(currentDate);
        console.log('Current Hebrew Date:', hdate.render('he')); // Debugging line
        const hebrewDayString = hdate.renderGematriya().split(' ')[0]; // "ט״ו"
        const hebrewMonth = hdate.render('he').split(' ')[1].replace('בְּ', '').replace(',', ''); // "אָב"
        const isFirstOfHebrewMonth = hdate.getDate() === 1;

        if (isFirstDayOfCalendar) {
            cellHTML += `<div class="hebrew-month">${hebrewMonth}</div>`;
        } else if (isFirstOfHebrewMonth) {
            cellHTML += `<div class="hebrew-month">${hebrewMonth}</div>`;
        }

        // Always show the Hebrew day.
        cellHTML += `<div class="hebrew-date">${hebrewDayString}</div>`;

        prevGregorianMonth = currentGregorianMonth;

        const hebrewDateInfo = hebrewDatesMap.get(formattedDate);
        if (hebrewDateInfo && hebrewDateInfo.events && hebrewDateInfo.events.length > 0) {
            cellHTML += '<div class="events">';
            hebrewDateInfo.events.forEach(event => {
                cellHTML += `<div>${event}</div>`;
            });
            cellHTML += '</div>';
        }

        cell.innerHTML = cellHTML;
        cell.addEventListener('click', function() {
            toggleMarking(this, updateURLFromState);
        });
        calendar.appendChild(cell);
        currentDate.setDate(currentDate.getDate() + 1);
    }

}