/**
 * @file-overview This file manages the notes functionality, including adding,
 * editing, deleting, and displaying notes.
 */

let notes = [];
let isNoteEditMode = false;
let selectedDate = null;
let updateURLCallback = () => {};
let refreshCalendarCallback = () => {};

export function initNotes(dependencies) {
    updateURLCallback = dependencies.updateURLFromState;
    refreshCalendarCallback = dependencies.refreshCalendarView;

    const addNoteBtn = document.getElementById('add-note-btn');
    const noteEditor = document.getElementById('note-editor');
    const saveNoteBtn = document.getElementById('save-note-btn');
    const cancelNoteBtn = document.getElementById('cancel-note-btn');
    const lockNoteBtn = document.getElementById('lock-note-btn');

    addNoteBtn.addEventListener('click', () => {
        isNoteEditMode = !isNoteEditMode;
        addNoteBtn.classList.toggle('active', isNoteEditMode);
        if (!isNoteEditMode) {
            hideNoteEditor();
        }
    });

    document.getElementById('calendar').addEventListener('click', (event) => {
        const cell = event.target.closest('.calendar-cell[data-date]');
        if (isNoteEditMode && cell) {
            selectedDate = cell.dataset.date;
            showNoteEditor(selectedDate);
        }
    });

    saveNoteBtn.addEventListener('click', saveNote);
    cancelNoteBtn.addEventListener('click', hideNoteEditor);
}

function showNoteEditor(date) {
    const noteEditor = document.getElementById('note-editor');
    const noteInput = document.getElementById('note-input');
    const existingNote = notes.find(n => n.date === date);

    noteInput.value = existingNote ? existingNote.text : '';
    noteEditor.classList.remove('hidden');
    noteInput.focus();
}

function hideNoteEditor() {
    const noteEditor = document.getElementById('note-editor');
    noteEditor.classList.add('hidden');
    selectedDate = null;

    if (!document.getElementById('lock-note-btn').checked) {
        isNoteEditMode = false;
        document.getElementById('add-note-btn').classList.remove('active');
    }
}

function saveNote() {
    const noteInput = document.getElementById('note-input');
    const text = noteInput.value.trim();

    if (selectedDate) {
        const existingNoteIndex = notes.findIndex(n => n.date === selectedDate);
        if (text) {
            if (existingNoteIndex > -1) {
                notes[existingNoteIndex].text = text;
            } else {
                notes.push({ date: selectedDate, text });
            }
        } else if (existingNoteIndex > -1) {
            notes.splice(existingNoteIndex, 1);
        }
    }

    renderNotesList();
    updateURLCallback();
    hideNoteEditor();
    refreshCalendarCallback();
}

function deleteNote(date) {
    const noteIndex = notes.findIndex(n => n.date === date);
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
        renderNotesList();
        updateURLCallback();
        refreshCalendarCallback();
    }
}

export function renderNotesList() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Get current date range
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startDate = startDateInput ? new Date(startDateInput.value) : null;
    const endDate = endDateInput ? new Date(endDateInput.value) : null;

    notes.forEach((note, index) => {
        const li = document.createElement('li');

        // Check if note is out of range
        const noteDate = new Date(note.date);
        const isOutOfRange = startDate && endDate && (noteDate < startDate || noteDate > endDate);

        if (isOutOfRange) {
            li.classList.add('note-out-of-range');
        }

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-note-btn';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'מחק הערה';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteNote(note.date);
        });

        // Create note content wrapper
        const noteContent = document.createElement('span');
        noteContent.innerHTML = `<strong>${index + 1}. ${note.date}:</strong> ${note.text}`;
        noteContent.style.cursor = 'pointer';
        noteContent.addEventListener('click', () => {
            highlightCalendarDay(note.date);
        });

        li.appendChild(deleteBtn);
        li.appendChild(noteContent);

        notesList.appendChild(li);
    });
}

/**
 * Highlights a calendar day and scrolls to it
 */
function highlightCalendarDay(date) {
    const cell = document.querySelector(`.calendar-cell[data-date="${date}"]`);
    if (!cell) return;

    // Scroll to the cell
    cell.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Add highlight class
    cell.classList.add('highlighted-day');

    // Remove highlight after 3 seconds
    setTimeout(() => {
        cell.classList.remove('highlighted-day');
    }, 3000);
}

/**
 * Highlights a note in the list and scrolls to it
 */
export function highlightNoteInList(date) {
    const noteIndex = notes.findIndex(n => n.date === date);
    if (noteIndex === -1) return;

    const notesList = document.getElementById('notes-list');
    const noteItems = notesList.querySelectorAll('li');
    const noteItem = noteItems[noteIndex];

    if (!noteItem) return;

    // Scroll to the note
    noteItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Add highlight class
    noteItem.classList.add('highlighted-note');

    // Remove highlight after 3 seconds
    setTimeout(() => {
        noteItem.classList.remove('highlighted-note');
    }, 3000);
}

export function loadNotesFromURL(notesData) {
    if (notesData) {
        notes = notesData;
        renderNotesList();
    }
}

export function getNotes() {
    return notes;
}

export function clearAllNotes() {
    notes = [];
    renderNotesList();
}
