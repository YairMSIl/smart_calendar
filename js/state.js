/**
 * @file-overview This file manages the application's state by interacting with the URL query parameters.
 * It handles loading the state from the URL on page load and updating the URL when the state changes.
 */

import { applySplitDayView } from './ui.js';
import { getNotes } from './notes.js';

/**
 * Helper function to calculate the number of days between two dates
 */
function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calculate preserved marks when date range changes
 */
export function calculatePreservedMarks(oldStartDate, oldEndDate, newStartDate, newEndDate, oldMarks) {
    if (!oldStartDate || !oldEndDate || !oldMarks || !newStartDate || !newEndDate) {
        return oldMarks;
    }

    // If dates didn't change, return original marks
    if (oldStartDate === newStartDate && oldEndDate === newEndDate) {
        return oldMarks;
    }

    const oldStart = new Date(oldStartDate);
    const oldEnd = new Date(oldEndDate);
    const newStart = new Date(newStartDate);
    const newEnd = new Date(newEndDate);

    const daysAddedBefore = oldStart > newStart ? daysBetween(newStart, oldStart) : 0;
    const daysRemovedBefore = newStart > oldStart ? daysBetween(oldStart, newStart) : 0;
    const daysAddedAfter = newEnd > oldEnd ? daysBetween(oldEnd, newEnd) : 0;
    const daysRemovedAfter = oldEnd > newEnd ? daysBetween(newEnd, oldEnd) : 0;

    let preservedMarks = oldMarks;

    // Handle changes at the start
    if (daysAddedBefore > 0) {
        preservedMarks = '0'.repeat(daysAddedBefore) + preservedMarks;
    } else if (daysRemovedBefore > 0) {
        preservedMarks = preservedMarks.substring(daysRemovedBefore);
    }

    // Handle changes at the end
    if (daysAddedAfter > 0) {
        preservedMarks = preservedMarks + '0'.repeat(daysAddedAfter);
    } else if (daysRemovedAfter > 0) {
        preservedMarks = preservedMarks.substring(0, preservedMarks.length - daysRemovedAfter);
    }

    return preservedMarks;
}

export function updateURLFromState() {
    const newStartDate = document.getElementById('startDate').value;
    const newEndDate = document.getElementById('endDate').value;

    // Get old state from URL
    const params = new URLSearchParams(window.location.search);
    const oldStartDate = params.get('startDate');
    const oldEndDate = params.get('endDate');
    const oldMarks = params.get('marks') || '';

    // Always read current marks from cells
    const cells = document.querySelectorAll('.calendar-cell[data-date]');
    const marks = Array.from(cells).map(cell => {
        const marking = cell.dataset.marking;
        if (marking === 'blue') return '1';
        if (marking === 'pink') return '2';
        if (marking === 'blue-bg') return '3';
        if (marking === 'pink-bg') return '4';
        return '0';
    }).join('');

    const newParams = new URLSearchParams();
    newParams.set('startDate', newStartDate);
    newParams.set('endDate', newEndDate);
    newParams.set('marks', marks);

    const splitButton = document.getElementById('split-day-toggle-btn');
    if (splitButton && splitButton.classList.contains('active')) {
        newParams.set('split', 'true');
    }

    const notes = getNotes();
    if (notes && notes.length > 0) {
        newParams.set('notes', encodeURIComponent(JSON.stringify(notes)));
    }

    history.replaceState({}, '', `?${newParams.toString()}`);
}

export function loadStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');

    if (startDate && endDate) {
        document.getElementById('startDate').value = startDate;
        document.getElementById('endDate').value = endDate;
        const marks = params.get('marks');
        const split = params.get('split');
        const notesParam = params.get('notes');
        let notes = [];
        if (notesParam) {
            try {
                notes = JSON.parse(decodeURIComponent(notesParam));
            } catch (e) {
                console.error("Error parsing notes from URL", e);
            }
        }
        return { marks: marks || '', split: split === 'true', notes };
    }
    return null;
}

export function applyMarksFromURL(marks, updateCellView) {
    if (!marks) return;
    const cells = document.querySelectorAll('.calendar-cell[data-date]');
    const markMapping = { '1': 'blue', '2': 'pink', '3': 'blue-bg', '4': 'pink-bg' };
    cells.forEach((cell, index) => {
        if (index < marks.length) {
            const markType = marks[index];
            if (markType !== '0') {
                cell.dataset.marking = markMapping[markType];
            } else {
                // Clear marking if it should be '0'
                delete cell.dataset.marking;
            }
            updateCellView(cell);
        }
    });
    applySplitDayView();
}