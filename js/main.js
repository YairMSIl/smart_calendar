/**
 * @file-overview This is the main entry point for the calendar application.
 * It imports all necessary modules, sets up event listeners, and orchestrates
 * the application flow.
 */

import { generateCalendar } from './calendar.js';
import { updateURLFromState, loadStateFromURL, applyMarksFromURL, calculatePreservedMarks } from './state.js';
import { toggleMarking, fillSquares, resetCalendar, updateCellView, updateCounter, applySplitDayView } from './ui.js';
import { initNotes, loadNotesFromURL, clearAllNotes, getNotes } from './notes.js';

async function main() {
    const dependencies = {
        toggleMarking,
        updateURLFromState,
        updateCellView,
        updateCounter,
    };

    // Function to load the view based on the current URL (used for initial load and syncing)
    async function loadViewFromURL() {
        const state = loadStateFromURL(); // Load state and update inputs first
        await generateCalendar(dependencies);
        if (state) {
            applyMarksFromURL(state.marks, updateCellView);
            updateCounter();
            applySplitDayView();
        }
    }

    // Function to update the view based on user inputs (used for "Generate Calendar")
    async function updateViewFromInputs() {
        // FIRST: Get new dates from inputs (before anything else modifies them!)
        const newStartDate = document.getElementById('startDate').value;
        const newEndDate = document.getElementById('endDate').value;

        // SECOND: Get old state from URL (without modifying inputs)
        const params = new URLSearchParams(window.location.search);
        const urlOldStartDate = params.get('startDate');
        const urlOldEndDate = params.get('endDate');
        const oldMarksParam = params.get('marks');
        const oldMarks = oldMarksParam || '';

        // THIRD: Calculate preserved marks based on date changes
        const preservedMarks = calculatePreservedMarks(
            urlOldStartDate,
            urlOldEndDate,
            newStartDate,
            newEndDate,
            oldMarks
        );

        // FOURTH: Generate the new calendar (creates new empty cells)
        await generateCalendar(dependencies);

        // FIFTH: Apply the preserved marks to the new calendar
        if (preservedMarks) {
            applyMarksFromURL(preservedMarks, updateCellView);
            updateCounter();
            applySplitDayView();
        }

        // SIXTH: Update URL from the cells that now have marks applied
        updateURLFromState();
    }

    initNotes({
        updateURLFromState,
        refreshCalendarView: loadViewFromURL, // Use loadViewFromURL to sync after note updates
    });

    document.getElementById('generate-calendar-btn').addEventListener('click', updateViewFromInputs);
    document.getElementById('fill-squares-btn').addEventListener('click', () => fillSquares(updateURLFromState));
    document.getElementById('reset-calendar-btn').addEventListener('click', () => {
        // Count markers and notes before resetting
        const cells = document.querySelectorAll('.calendar-cell[data-marking]');
        let blueCount = 0;
        let pinkCount = 0;

        cells.forEach(cell => {
            const marking = cell.dataset.marking;
            if (marking === 'blue' || marking === 'blue-bg') blueCount++;
            if (marking === 'pink' || marking === 'pink-bg') pinkCount++;
        });

        const notesCount = getNotes().length;

        // Build confirmation message
        let message = 'האם אתה בטוח שברצונך לאפס את כל התוכן?\n\n';
        message += 'פעולה זו תמחק:\n';
        if (notesCount > 0) message += `- ${notesCount} הערות\n`;
        if (blueCount > 0) message += `- ${blueCount} סימונים כחולים\n`;
        if (pinkCount > 0) message += `- ${pinkCount} סימונים ורודים\n`;

        if (notesCount === 0 && blueCount === 0 && pinkCount === 0) {
            alert('אין תוכן למחיקה');
            return;
        }

        if (confirm(message)) {
            resetCalendar(updateURLFromState);
            clearAllNotes();
            updateURLFromState();
            loadViewFromURL();
        }
    });

    const splitDayToggleBtn = document.getElementById('split-day-toggle-btn');
    if (splitDayToggleBtn) {
        splitDayToggleBtn.addEventListener('click', () => {
            splitDayToggleBtn.classList.toggle('active');
            applySplitDayView();
            updateURLFromState();
        });
    }

    // Initial load logic
    const initialState = loadStateFromURL();
    if (initialState) {
        if (initialState.split) {
            splitDayToggleBtn.classList.add('active');
        }
        loadNotesFromURL(initialState.notes);
        await loadViewFromURL();
    } else {
        await generateCalendar(dependencies);
    }
}

document.addEventListener('DOMContentLoaded', main);