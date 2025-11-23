/**
 * @file-overview This is the main entry point for the calendar application.
 * It imports all necessary modules, sets up event listeners, and orchestrates
 * the application flow.
 */

import { generateCalendar } from './calendar.js';
import { updateURLFromState, loadStateFromURL, applyMarksFromURL } from './state.js';
import { toggleMarking, fillSquares, resetCalendar, updateCellView, updateCounter, applySplitDayView } from './ui.js';
import { initNotes, loadNotesFromURL, clearAllNotes } from './notes.js';

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
        await generateCalendar(dependencies);
        updateURLFromState(); // Update URL to match the new inputs
    }

    initNotes({
        updateURLFromState,
        refreshCalendarView: loadViewFromURL, // Use loadViewFromURL to sync after note updates
    });

    document.getElementById('generate-calendar-btn').addEventListener('click', updateViewFromInputs);
    document.getElementById('fill-squares-btn').addEventListener('click', () => fillSquares(updateURLFromState));
    document.getElementById('reset-calendar-btn').addEventListener('click', () => {
        resetCalendar(updateURLFromState);
        clearAllNotes();
        updateURLFromState();
        loadViewFromURL();
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