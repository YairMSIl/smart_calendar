# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A web-based Hebrew calendar application built with vanilla JavaScript that displays Gregorian and Hebrew dates, Jewish holidays, and Torah portions (parsha). The app works completely offline using the `@hebcal/core` library for all calendar calculations. Users can mark days, add notes, and share calendar states via URL parameters.

## Development Commands

```bash
# Install dependencies
npm install

# Development (builds + watches JS + starts live server)
npm start
# or
npm run dev

# Build for production (creates dist/ directory)
npm run build

# Watch JS changes only
npm run watch:js

# Serve dist/ directory only
npm run serve

# Build and deploy to GitHub Pages
npm run deploy
```

## Project Architecture

### Build System

- **Browserify** with **Babelify** transpiles ES6 modules into a single `bundle.js`
- Source files in `js/` are bundled with `@hebcal/core` dependency
- Build outputs to `dist/` directory containing `bundle.js`, `index.html`, and `styles/`
- Uses Babel preset-env for ES6+ compatibility

### Module Structure

The application follows a modular architecture with clear separation of concerns:

**`js/main.js`** - Application entry point and orchestration
- Initializes all modules with dependency injection
- Manages two critical update flows:
  1. `loadViewFromURL()` - Initial load and URL sync (loads state → generates calendar → applies marks)
  2. `updateViewFromInputs()` - User-triggered updates (calculates preserved marks → generates calendar → applies marks → updates URL)
- Sets up all event listeners for buttons and interactions

**`js/calendar.js`** - Calendar generation and rendering
- Uses `@hebcal/core` library to fetch Hebrew dates, holidays, and parsha
- Generates calendar grid HTML with:
  - Gregorian dates and Hebrew dates (with gematriya rendering)
  - Month headers (both Gregorian and Hebrew)
  - Jewish holidays and Torah portions
  - Note indicators with click handlers
- Creates click handlers for cell marking
- Responsive day headers (full names vs short on mobile)

**`js/state.js`** - URL-based state management
- All application state is persisted in URL query parameters
- State includes: `startDate`, `endDate`, `marks` (encoded string), `split` (boolean), `notes` (JSON)
- Marks encoding: `0`=none, `1`=blue dot, `2`=pink dot, `3`=blue background, `4`=pink background
- `calculatePreservedMarks()` - Critical function that preserves user markings when date range changes by calculating day differences and shifting the marks string
- `updateURLFromState()` - Reads current DOM state and updates URL (called after any state change)
- `loadStateFromURL()` - Reads URL parameters and updates form inputs
- `applyMarksFromURL()` - Applies marks string to calendar cells

**`js/ui.js`** - UI interactions and visual updates
- `toggleMarking()` - Cycles cells through: none → blue dot → pink dot → none
- `fillSquares()` - Converts dots to background colors (e.g., blue → blue-bg)
- `updateCellView()` - Updates a single cell's visual representation based on `data-marking` attribute
- `updateCounter()` - Updates blue/pink counters in header
- `applySplitDayView()` - Creates gradient backgrounds at color boundaries when split view is active

**`js/notes.js`** - Notes functionality
- Manages notes array with date/text pairs
- Note edit mode with "lock" feature for adding multiple notes sequentially
- Bidirectional highlighting: clicking note in list highlights calendar day, clicking note indicator in calendar highlights list item
- Notes persist in URL as encoded JSON
- Renders note indicators in calendar cells with preview text and sequential numbering

### State Management Flow

**Critical concept**: The app has two distinct update paths that must preserve user markings correctly:

1. **URL → View** (page load, browser back/forward):
   - Read URL params → Update inputs → Generate calendar → Apply marks from URL

2. **User Input → View** (changing date range):
   - Get new dates from inputs
   - Get old dates and marks from URL
   - Calculate preserved marks (handles adding/removing days at start/end)
   - Generate new calendar
   - Apply preserved marks
   - Update URL from new state

### Data Flow

```
User Action → Update Function → DOM Manipulation → updateURLFromState() → URL Update
                                                ↓
URL Change → loadStateFromURL() → Update Inputs → Generate Calendar → Apply Marks
```

### Key Features

- **Offline-first**: All calendar calculations via `@hebcal/core`, no API calls
- **URL-based state**: Entire app state in URL for easy sharing
- **Smart mark preservation**: Marks follow their dates when range changes
- **Split day view**: Visual gradient at color boundaries
- **Notes with bidirectional navigation**: Click note to find day, or day to find note
- **Hebrew/Gregorian dual display**: Shows both calendars simultaneously
- **Responsive design**: Adapts to mobile with CSS and short day names

### Important Implementation Details

- HTML is RTL (`dir="rtl"`) for Hebrew text
- Uses CSS custom properties for theming (defined in `:root`)
- Calendar cells use `data-date` attribute (YYYY-MM-DD format) as unique identifier
- Calendar cells use `data-marking` attribute to track state (blue, pink, blue-bg, pink-bg)
- Weekend cells (Friday/Saturday) get `.weekend` class
- Today's date gets `.today` class
- Notes out of current date range are styled with `.note-out-of-range`
- Hebrew dates use timezone-safe string formatting (not `toISOString()`) to avoid date shifts

### When Making Changes

- Always update URL after state changes by calling `updateURLFromState()`
- When modifying date range logic, test mark preservation thoroughly
- When adding new state, add it to both `updateURLFromState()` and `loadStateFromURL()`
- Hebrew text rendering uses `@hebcal/core` methods like `renderGematriya()` and `render('he')`
- Keep the two update flows (URL→View and Input→View) synchronized
