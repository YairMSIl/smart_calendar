(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCalendar = generateCalendar;
var _core = require("@hebcal/core");
var _notes = require("./notes.js");
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * @file-overview This file contains the core calendar generation logic, including
 * fetching data from the Hebcal API and building the HTML for the calendar grid.
 */

var hebrewDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
var hebrewDaysShort = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];

/**
 * Generates the calendar grid based on a selected date range.
 * Fetches Hebrew dates and Torah portions from the Hebcal API.
 * @param {object} dependencies - Functions required by generateCalendar.
 * @param {Function} dependencies.applyMarksFromURL - Applies markings from URL parameters.
 * @param {Function} dependencies.updateCounter - Updates the UI counter for marked days.
 * @param {Function} dependencies.updateURLFromState - Updates the URL with the current calendar state.
 * @param {Function} dependencies.toggleMarking - Toggles the marking of a specific day.
 */
function generateCalendar(_x) {
  return _generateCalendar.apply(this, arguments);
}
function _generateCalendar() {
  _generateCalendar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var toggleMarking, updateURLFromState, startDateInput, endDateInput, startDate, endDate, hebrewDatesMap, events, startYear, endYear, startMonth, endMonth, year, monthStart, monthEnd, month, monthEvents, _i, _events, event, eventDate, formattedDate, calendar, days, currentDate, currentWeekday, i, emptyCell, prevGregorianMonth, today, todayFormatted, notes, _loop;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          toggleMarking = _ref.toggleMarking, updateURLFromState = _ref.updateURLFromState;
          startDateInput = document.getElementById('startDate').value;
          endDateInput = document.getElementById('endDate').value;
          startDate = new Date(startDateInput);
          endDate = new Date(endDateInput);
          if (!(startDate > endDate)) {
            _context2.n = 1;
            break;
          }
          alert('תאריך ההתחלה חייב להיות לפני תאריך הסיום');
          return _context2.a(2);
        case 1:
          hebrewDatesMap = new Map();
          events = [];
          startYear = startDate.getFullYear();
          endYear = endDate.getFullYear();
          startMonth = startDate.getMonth() + 1;
          endMonth = endDate.getMonth() + 1;
          for (year = startYear; year <= endYear; year++) {
            monthStart = year === startYear ? startMonth : 1;
            monthEnd = year === endYear ? endMonth : 12;
            for (month = monthStart; month <= monthEnd; month++) {
              monthEvents = _core.HebrewCalendar.calendar({
                locale: 'he',
                sedrot: true,
                year: year,
                month: month,
                il: true
              });
              events.push.apply(events, _toConsumableArray(monthEvents));
            }
          }
          for (_i = 0, _events = events; _i < _events.length; _i++) {
            event = _events[_i];
            eventDate = event.getDate().greg(); // Use a timezone-safe key instead of toISOString()
            formattedDate = "".concat(eventDate.getFullYear(), "-").concat(String(eventDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(eventDate.getDate()).padStart(2, '0'));
            if (!hebrewDatesMap.has(formattedDate)) {
              hebrewDatesMap.set(formattedDate, {
                hdate: event.getDate(),
                events: []
              });
            }
            hebrewDatesMap.get(formattedDate).events.push(event.render('he'));
          }
          calendar = document.getElementById('calendar');
          calendar.innerHTML = '';
          days = window.innerWidth < 480 ? hebrewDaysShort : hebrewDays;
          days.forEach(function (day) {
            var dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = day;
            calendar.appendChild(dayHeader);
          });
          currentDate = new Date(startDate);
          currentWeekday = startDate.getDay();
          for (i = 0; i < currentWeekday; i++) {
            emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-cell';
            calendar.appendChild(emptyCell);
          }
          prevGregorianMonth = -1;
          today = new Date();
          todayFormatted = "".concat(today.getFullYear(), "-").concat(String(today.getMonth() + 1).padStart(2, '0'), "-").concat(String(today.getDate()).padStart(2, '0'));
          notes = (0, _notes.getNotes)().sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          });
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var cell, weekday, formattedDate, cellHTML, isFirstDayOfCalendar, currentGregorianMonth, monthName, hdate, hebrewDayString, hebrewMonth, isFirstOfHebrewMonth, hebrewDateInfo, noteIndex, note, preview, noteDate, isInRange, noteClass;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  cell = document.createElement('div');
                  cell.className = 'calendar-cell';
                  weekday = currentDate.getDay();
                  if (weekday === 5 || weekday === 6) {
                    cell.classList.add('weekend');
                  }
                  formattedDate = "".concat(currentDate.getFullYear(), "-").concat(String(currentDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(currentDate.getDate()).padStart(2, '0'));
                  cell.dataset.date = formattedDate;
                  if (formattedDate === todayFormatted) {
                    cell.classList.add('today');
                  }
                  cellHTML = "<div class=\"date\">".concat(currentDate.getDate(), "</div>");
                  isFirstDayOfCalendar = currentDate.getTime() === startDate.getTime();
                  currentGregorianMonth = currentDate.getMonth(); // Gregorian month display
                  if (isFirstDayOfCalendar || currentGregorianMonth !== prevGregorianMonth) {
                    monthName = currentDate.toLocaleString('he-IL', {
                      month: 'long'
                    });
                    cellHTML += "<div class=\"gregorian-month\">".concat(monthName, "</div>");
                  }

                  // Hebrew date display logic
                  hdate = new _core.HDate(currentDate);
                  console.log('Current Hebrew Date:', hdate.render('he')); // Debugging line
                  hebrewDayString = hdate.renderGematriya().split(' ')[0]; // "ט״ו"
                  hebrewMonth = hdate.render('he').split(' ')[1].replace('בְּ', '').replace(',', ''); // "אָב"
                  isFirstOfHebrewMonth = hdate.getDate() === 1;
                  if (isFirstDayOfCalendar) {
                    cellHTML += "<div class=\"hebrew-month\">".concat(hebrewMonth, "</div>");
                  } else if (isFirstOfHebrewMonth) {
                    cellHTML += "<div class=\"hebrew-month\">".concat(hebrewMonth, "</div>");
                  }

                  // Always show the Hebrew day.
                  cellHTML += "<div class=\"hebrew-date\">".concat(hebrewDayString, "</div>");
                  prevGregorianMonth = currentGregorianMonth;
                  hebrewDateInfo = hebrewDatesMap.get(formattedDate);
                  if (hebrewDateInfo && hebrewDateInfo.events && hebrewDateInfo.events.length > 0) {
                    cellHTML += '<div class="events">';
                    hebrewDateInfo.events.forEach(function (event) {
                      cellHTML += "<div>".concat(event, "</div>");
                    });
                    cellHTML += '</div>';
                  }
                  noteIndex = notes.findIndex(function (n) {
                    return n.date === formattedDate;
                  });
                  if (noteIndex !== -1) {
                    note = notes[noteIndex];
                    preview = note.text.substring(0, 15); // Check if note is within current date range
                    noteDate = new Date(note.date);
                    isInRange = noteDate >= startDate && noteDate <= endDate;
                    noteClass = isInRange ? 'note-indicator' : 'note-indicator note-out-of-range';
                    cellHTML += "<div class=\"".concat(noteClass, "\" data-note-date=\"").concat(formattedDate, "\">(").concat(noteIndex + 1, ") ").concat(preview, "...</div>");
                  }
                  cell.innerHTML = cellHTML;

                  // Add click handler for marking
                  cell.addEventListener('click', function (event) {
                    // Check if clicking on note indicator
                    if (event.target.classList.contains('note-indicator')) {
                      event.stopPropagation();
                      var _noteDate = event.target.dataset.noteDate;
                      if (_noteDate) {
                        (0, _notes.highlightNoteInList)(_noteDate);
                      }
                    } else {
                      toggleMarking(this, updateURLFromState);
                    }
                  });
                  calendar.appendChild(cell);
                  currentDate.setDate(currentDate.getDate() + 1);
                case 1:
                  return _context.a(2);
              }
            }, _loop);
          });
        case 2:
          if (!(currentDate <= endDate)) {
            _context2.n = 4;
            break;
          }
          return _context2.d(_regeneratorValues(_loop()), 3);
        case 3:
          _context2.n = 2;
          break;
        case 4:
          return _context2.a(2);
      }
    }, _callee);
  }));
  return _generateCalendar.apply(this, arguments);
}

},{"./notes.js":3,"@hebcal/core":6}],2:[function(require,module,exports){
"use strict";

var _calendar = require("./calendar.js");
var _state = require("./state.js");
var _ui = require("./ui.js");
var _notes = require("./notes.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /**
 * @file-overview This is the main entry point for the calendar application.
 * It imports all necessary modules, sets up event listeners, and orchestrates
 * the application flow.
 */
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var dependencies, loadViewFromURL, _loadViewFromURL, updateViewFromInputs, _updateViewFromInputs, splitDayToggleBtn, initialState;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _updateViewFromInputs = function _updateViewFromInputs3() {
            _updateViewFromInputs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var newStartDate, newEndDate, params, urlOldStartDate, urlOldEndDate, oldMarksParam, oldMarks, preservedMarks;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    // FIRST: Get new dates from inputs (before anything else modifies them!)
                    newStartDate = document.getElementById('startDate').value;
                    newEndDate = document.getElementById('endDate').value; // SECOND: Get old state from URL (without modifying inputs)
                    params = new URLSearchParams(window.location.search);
                    urlOldStartDate = params.get('startDate');
                    urlOldEndDate = params.get('endDate');
                    oldMarksParam = params.get('marks');
                    oldMarks = oldMarksParam || ''; // THIRD: Calculate preserved marks based on date changes
                    preservedMarks = (0, _state.calculatePreservedMarks)(urlOldStartDate, urlOldEndDate, newStartDate, newEndDate, oldMarks); // FOURTH: Generate the new calendar (creates new empty cells)
                    _context2.n = 1;
                    return (0, _calendar.generateCalendar)(dependencies);
                  case 1:
                    // FIFTH: Apply the preserved marks to the new calendar
                    if (preservedMarks) {
                      (0, _state.applyMarksFromURL)(preservedMarks, _ui.updateCellView);
                      (0, _ui.updateCounter)();
                      (0, _ui.applySplitDayView)();
                    }

                    // SIXTH: Update URL from the cells that now have marks applied
                    (0, _state.updateURLFromState)();
                  case 2:
                    return _context2.a(2);
                }
              }, _callee2);
            }));
            return _updateViewFromInputs.apply(this, arguments);
          };
          updateViewFromInputs = function _updateViewFromInputs2() {
            return _updateViewFromInputs.apply(this, arguments);
          };
          _loadViewFromURL = function _loadViewFromURL3() {
            _loadViewFromURL = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var state;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    state = (0, _state.loadStateFromURL)(); // Load state and update inputs first
                    _context.n = 1;
                    return (0, _calendar.generateCalendar)(dependencies);
                  case 1:
                    if (state) {
                      (0, _state.applyMarksFromURL)(state.marks, _ui.updateCellView);
                      (0, _ui.updateCounter)();
                      (0, _ui.applySplitDayView)();
                    }
                  case 2:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return _loadViewFromURL.apply(this, arguments);
          };
          loadViewFromURL = function _loadViewFromURL2() {
            return _loadViewFromURL.apply(this, arguments);
          };
          dependencies = {
            toggleMarking: _ui.toggleMarking,
            updateURLFromState: _state.updateURLFromState,
            updateCellView: _ui.updateCellView,
            updateCounter: _ui.updateCounter
          }; // Function to load the view based on the current URL (used for initial load and syncing)
          // Function to update the view based on user inputs (used for "Generate Calendar")
          (0, _notes.initNotes)({
            updateURLFromState: _state.updateURLFromState,
            refreshCalendarView: loadViewFromURL // Use loadViewFromURL to sync after note updates
          });
          document.getElementById('generate-calendar-btn').addEventListener('click', updateViewFromInputs);
          document.getElementById('fill-squares-btn').addEventListener('click', function () {
            return (0, _ui.fillSquares)(_state.updateURLFromState);
          });
          document.getElementById('reset-calendar-btn').addEventListener('click', function () {
            // Count markers and notes before resetting
            var cells = document.querySelectorAll('.calendar-cell[data-marking]');
            var blueCount = 0;
            var pinkCount = 0;
            cells.forEach(function (cell) {
              var marking = cell.dataset.marking;
              if (marking === 'blue' || marking === 'blue-bg') blueCount++;
              if (marking === 'pink' || marking === 'pink-bg') pinkCount++;
            });
            var notesCount = (0, _notes.getNotes)().length;

            // Build confirmation message
            var message = 'האם אתה בטוח שברצונך לאפס את כל התוכן?\n\n';
            message += 'פעולה זו תמחק:\n';
            if (notesCount > 0) message += "- ".concat(notesCount, " \u05D4\u05E2\u05E8\u05D5\u05EA\n");
            if (blueCount > 0) message += "- ".concat(blueCount, " \u05E1\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05DB\u05D7\u05D5\u05DC\u05D9\u05DD\n");
            if (pinkCount > 0) message += "- ".concat(pinkCount, " \u05E1\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05D5\u05E8\u05D5\u05D3\u05D9\u05DD\n");
            if (notesCount === 0 && blueCount === 0 && pinkCount === 0) {
              alert('אין תוכן למחיקה');
              return;
            }
            if (confirm(message)) {
              (0, _ui.resetCalendar)(_state.updateURLFromState);
              (0, _notes.clearAllNotes)();
              (0, _state.updateURLFromState)();
              loadViewFromURL();
            }
          });
          splitDayToggleBtn = document.getElementById('split-day-toggle-btn');
          if (splitDayToggleBtn) {
            splitDayToggleBtn.addEventListener('click', function () {
              splitDayToggleBtn.classList.toggle('active');
              (0, _ui.applySplitDayView)();
              (0, _state.updateURLFromState)();
            });
          }

          // Initial load logic
          initialState = (0, _state.loadStateFromURL)();
          if (!initialState) {
            _context3.n = 2;
            break;
          }
          if (initialState.split) {
            splitDayToggleBtn.classList.add('active');
          }
          (0, _notes.loadNotesFromURL)(initialState.notes);
          _context3.n = 1;
          return loadViewFromURL();
        case 1:
          _context3.n = 3;
          break;
        case 2:
          _context3.n = 3;
          return (0, _calendar.generateCalendar)(dependencies);
        case 3:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _main.apply(this, arguments);
}
document.addEventListener('DOMContentLoaded', main);

},{"./calendar.js":1,"./notes.js":3,"./state.js":4,"./ui.js":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllNotes = clearAllNotes;
exports.getNotes = getNotes;
exports.highlightNoteInList = highlightNoteInList;
exports.initNotes = initNotes;
exports.loadNotesFromURL = loadNotesFromURL;
exports.renderNotesList = renderNotesList;
/**
 * @file-overview This file manages the notes functionality, including adding,
 * editing, deleting, and displaying notes.
 */

var notes = [];
var isNoteEditMode = false;
var selectedDate = null;
var updateURLCallback = function updateURLCallback() {};
var refreshCalendarCallback = function refreshCalendarCallback() {};
function initNotes(dependencies) {
  updateURLCallback = dependencies.updateURLFromState;
  refreshCalendarCallback = dependencies.refreshCalendarView;
  var addNoteBtn = document.getElementById('add-note-btn');
  var noteEditor = document.getElementById('note-editor');
  var saveNoteBtn = document.getElementById('save-note-btn');
  var cancelNoteBtn = document.getElementById('cancel-note-btn');
  var lockNoteBtn = document.getElementById('lock-note-btn');
  addNoteBtn.addEventListener('click', function () {
    isNoteEditMode = !isNoteEditMode;
    addNoteBtn.classList.toggle('active', isNoteEditMode);
    if (!isNoteEditMode) {
      hideNoteEditor();
    }
  });
  document.getElementById('calendar').addEventListener('click', function (event) {
    var cell = event.target.closest('.calendar-cell[data-date]');
    if (isNoteEditMode && cell) {
      selectedDate = cell.dataset.date;
      showNoteEditor(selectedDate);
    }
  });
  saveNoteBtn.addEventListener('click', saveNote);
  cancelNoteBtn.addEventListener('click', hideNoteEditor);
}
function showNoteEditor(date) {
  var noteEditor = document.getElementById('note-editor');
  var noteInput = document.getElementById('note-input');
  var existingNote = notes.find(function (n) {
    return n.date === date;
  });
  noteInput.value = existingNote ? existingNote.text : '';
  noteEditor.classList.remove('hidden');
  noteInput.focus();
}
function hideNoteEditor() {
  var noteEditor = document.getElementById('note-editor');
  noteEditor.classList.add('hidden');
  selectedDate = null;
  if (!document.getElementById('lock-note-btn').checked) {
    isNoteEditMode = false;
    document.getElementById('add-note-btn').classList.remove('active');
  }
}
function saveNote() {
  var noteInput = document.getElementById('note-input');
  var text = noteInput.value.trim();
  if (selectedDate) {
    var existingNoteIndex = notes.findIndex(function (n) {
      return n.date === selectedDate;
    });
    if (text) {
      if (existingNoteIndex > -1) {
        notes[existingNoteIndex].text = text;
      } else {
        notes.push({
          date: selectedDate,
          text: text
        });
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
function renderNotesList() {
  var notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';
  notes.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  // Get current date range
  var startDateInput = document.getElementById('startDate');
  var endDateInput = document.getElementById('endDate');
  var startDate = startDateInput ? new Date(startDateInput.value) : null;
  var endDate = endDateInput ? new Date(endDateInput.value) : null;
  notes.forEach(function (note, index) {
    var li = document.createElement('li');

    // Check if note is out of range
    var noteDate = new Date(note.date);
    var isOutOfRange = startDate && endDate && (noteDate < startDate || noteDate > endDate);
    if (isOutOfRange) {
      li.classList.add('note-out-of-range');
    }
    li.innerHTML = "<strong>".concat(index + 1, ". ").concat(note.date, ":</strong> ").concat(note.text);
    li.style.cursor = 'pointer';

    // Add click handler to highlight corresponding calendar day
    li.addEventListener('click', function () {
      highlightCalendarDay(note.date);
    });
    notesList.appendChild(li);
  });
}

/**
 * Highlights a calendar day and scrolls to it
 */
function highlightCalendarDay(date) {
  var cell = document.querySelector(".calendar-cell[data-date=\"".concat(date, "\"]"));
  if (!cell) return;

  // Scroll to the cell
  cell.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

  // Add highlight class
  cell.classList.add('highlighted-day');

  // Remove highlight after 3 seconds
  setTimeout(function () {
    cell.classList.remove('highlighted-day');
  }, 3000);
}

/**
 * Highlights a note in the list and scrolls to it
 */
function highlightNoteInList(date) {
  var noteIndex = notes.findIndex(function (n) {
    return n.date === date;
  });
  if (noteIndex === -1) return;
  var notesList = document.getElementById('notes-list');
  var noteItems = notesList.querySelectorAll('li');
  var noteItem = noteItems[noteIndex];
  if (!noteItem) return;

  // Scroll to the note
  noteItem.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

  // Add highlight class
  noteItem.classList.add('highlighted-note');

  // Remove highlight after 3 seconds
  setTimeout(function () {
    noteItem.classList.remove('highlighted-note');
  }, 3000);
}
function loadNotesFromURL(notesData) {
  if (notesData) {
    notes = notesData;
    renderNotesList();
  }
}
function getNotes() {
  return notes;
}
function clearAllNotes() {
  notes = [];
  renderNotesList();
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMarksFromURL = applyMarksFromURL;
exports.calculatePreservedMarks = calculatePreservedMarks;
exports.loadStateFromURL = loadStateFromURL;
exports.updateURLFromState = updateURLFromState;
var _ui = require("./ui.js");
var _notes = require("./notes.js");
/**
 * @file-overview This file manages the application's state by interacting with the URL query parameters.
 * It handles loading the state from the URL on page load and updating the URL when the state changes.
 */

/**
 * Helper function to calculate the number of days between two dates
 */
function daysBetween(date1, date2) {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calculate preserved marks when date range changes
 */
function calculatePreservedMarks(oldStartDate, oldEndDate, newStartDate, newEndDate, oldMarks) {
  if (!oldStartDate || !oldEndDate || !oldMarks || !newStartDate || !newEndDate) {
    return oldMarks;
  }

  // If dates didn't change, return original marks
  if (oldStartDate === newStartDate && oldEndDate === newEndDate) {
    return oldMarks;
  }
  var oldStart = new Date(oldStartDate);
  var oldEnd = new Date(oldEndDate);
  var newStart = new Date(newStartDate);
  var newEnd = new Date(newEndDate);
  var daysAddedBefore = oldStart > newStart ? daysBetween(newStart, oldStart) : 0;
  var daysRemovedBefore = newStart > oldStart ? daysBetween(oldStart, newStart) : 0;
  var daysAddedAfter = newEnd > oldEnd ? daysBetween(oldEnd, newEnd) : 0;
  var daysRemovedAfter = oldEnd > newEnd ? daysBetween(newEnd, oldEnd) : 0;
  var preservedMarks = oldMarks;

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
function updateURLFromState() {
  var newStartDate = document.getElementById('startDate').value;
  var newEndDate = document.getElementById('endDate').value;

  // Get old state from URL
  var params = new URLSearchParams(window.location.search);
  var oldStartDate = params.get('startDate');
  var oldEndDate = params.get('endDate');
  var oldMarks = params.get('marks') || '';

  // Always read current marks from cells
  var cells = document.querySelectorAll('.calendar-cell[data-date]');
  var marks = Array.from(cells).map(function (cell) {
    var marking = cell.dataset.marking;
    if (marking === 'blue') return '1';
    if (marking === 'pink') return '2';
    if (marking === 'blue-bg') return '3';
    if (marking === 'pink-bg') return '4';
    return '0';
  }).join('');
  var newParams = new URLSearchParams();
  newParams.set('startDate', newStartDate);
  newParams.set('endDate', newEndDate);
  newParams.set('marks', marks);
  var splitButton = document.getElementById('split-day-toggle-btn');
  if (splitButton && splitButton.classList.contains('active')) {
    newParams.set('split', 'true');
  }
  var notes = (0, _notes.getNotes)();
  if (notes && notes.length > 0) {
    newParams.set('notes', encodeURIComponent(JSON.stringify(notes)));
  }
  history.replaceState({}, '', "?".concat(newParams.toString()));
}
function loadStateFromURL() {
  var params = new URLSearchParams(window.location.search);
  var startDate = params.get('startDate');
  var endDate = params.get('endDate');
  if (startDate && endDate) {
    document.getElementById('startDate').value = startDate;
    document.getElementById('endDate').value = endDate;
    var marks = params.get('marks');
    var split = params.get('split');
    var notesParam = params.get('notes');
    var notes = [];
    if (notesParam) {
      try {
        notes = JSON.parse(decodeURIComponent(notesParam));
      } catch (e) {
        console.error("Error parsing notes from URL", e);
      }
    }
    return {
      marks: marks || '',
      split: split === 'true',
      notes: notes
    };
  }
  return null;
}
function applyMarksFromURL(marks, updateCellView) {
  if (!marks) return;
  var cells = document.querySelectorAll('.calendar-cell[data-date]');
  var markMapping = {
    '1': 'blue',
    '2': 'pink',
    '3': 'blue-bg',
    '4': 'pink-bg'
  };
  cells.forEach(function (cell, index) {
    if (index < marks.length) {
      var markType = marks[index];
      if (markType !== '0') {
        cell.dataset.marking = markMapping[markType];
      } else {
        // Clear marking if it should be '0'
        delete cell.dataset.marking;
      }
      updateCellView(cell);
    }
  });
  (0, _ui.applySplitDayView)();
}

},{"./notes.js":3,"./ui.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applySplitDayView = applySplitDayView;
exports.fillSquares = fillSquares;
exports.resetCalendar = resetCalendar;
exports.toggleMarking = toggleMarking;
exports.updateCellView = updateCellView;
exports.updateCounter = updateCounter;
/**
 * @file-overview This file contains UI interaction logic for the calendar,
 * including marking cells, filling squares, and resetting the view.
 */

// Helper function to update the counts of marked cells.
function updateCounter() {
  var cells = document.querySelectorAll('.calendar-cell[data-marking]');
  var blueCount = 0;
  var pinkCount = 0;
  cells.forEach(function (cell) {
    var marking = cell.dataset.marking;
    if (marking === 'blue' || marking === 'blue-bg') {
      blueCount++;
    } else if (marking === 'pink' || marking === 'pink-bg') {
      pinkCount++;
    }
  });
  document.getElementById('blueCount').textContent = blueCount;
  document.getElementById('pinkCount').textContent = pinkCount;
}

/**
 * Updates the visual representation of a single calendar cell based on its 'marking' dataset attribute.
 * Exported because it's needed by applyMarksFromURL in state.js.
 * @param {HTMLElement} cell The calendar cell element to update.
 */
function updateCellView(cell) {
  var marking = cell.dataset.marking;
  var existingMarking = cell.querySelector('.marking');
  if (existingMarking) {
    existingMarking.remove();
  }
  cell.classList.remove('blue-bg', 'pink-bg');
  if (marking === 'blue' || marking === 'pink') {
    var markingElement = document.createElement('div');
    markingElement.className = "marking ".concat(marking, "-marking");
    cell.appendChild(markingElement);
  } else if (marking === 'blue-bg') {
    cell.classList.add('blue-bg');
  } else if (marking === 'pink-bg') {
    cell.classList.add('pink-bg');
  }
}

/**
 * Toggles the marking of a cell between blue, pink, and none.
 * @param {HTMLElement} cell The cell to mark.
 * @param {function} updateURLFromState Function to call to update the URL state.
 */
function toggleMarking(cell, updateURLFromState) {
  var currentMarking = cell.dataset.marking || '';
  var newMarking = '';
  switch (currentMarking) {
    case '':
      newMarking = 'blue';
      break;
    case 'blue':
    case 'blue-bg':
      newMarking = 'pink';
      break;
    case 'pink':
    case 'pink-bg':
      newMarking = '';
      break;
  }
  if (newMarking) {
    cell.dataset.marking = newMarking;
  } else {
    delete cell.dataset.marking;
  }
  updateCellView(cell);
  updateCounter();
  updateURLFromState();
}

/**
 * Fills the marked squares, changing dots to background colors.
 * @param {function} updateURLFromState Function to call to update the URL state.
 */
function fillSquares(updateURLFromState) {
  var cells = document.querySelectorAll('.calendar-cell[data-marking]');
  cells.forEach(function (cell) {
    var marking = cell.dataset.marking;
    if (marking === 'blue') {
      cell.dataset.marking = 'blue-bg';
    } else if (marking === 'pink') {
      cell.dataset.marking = 'pink-bg';
    }
    updateCellView(cell);
  });
  updateCounter();
  updateURLFromState();
  applySplitDayView();
}

/**
 * Resets all markings from the calendar.
 * @param {function} updateURLFromState Function to call to update the URL state.
 */
function resetCalendar(updateURLFromState) {
  var cells = document.querySelectorAll('.calendar-cell[data-marking]');
  cells.forEach(function (cell) {
    delete cell.dataset.marking;
    updateCellView(cell);
  });
  updateCounter();
  updateURLFromState();
  applySplitDayView();
}

/**
 * Applies a split background to days that are at the boundary of two different colors.
 */
function applySplitDayView() {
  var toggleBtn = document.getElementById('split-day-toggle-btn');
  if (!toggleBtn) return;
  var cells = document.querySelectorAll('.calendar-cell[data-date]');
  var colorMap = {
    'blue-bg': 'var(--mark-blue-bg)',
    'pink-bg': 'var(--mark-pink-bg)'
  };
  cells.forEach(function (cell) {
    cell.classList.remove('split-bg');
    cell.style.removeProperty('--prev-color');
    cell.style.removeProperty('--current-color');
  });
  if (!toggleBtn.classList.contains('active')) {
    return;
  }
  for (var i = 0; i < cells.length; i++) {
    var currentCell = cells[i];
    var prevCell = i > 0 ? cells[i - 1] : null;
    if (prevCell) {
      var prevMarking = prevCell.dataset.marking;
      var currentMarking = currentCell.dataset.marking;
      if (prevMarking && currentMarking && prevMarking !== currentMarking && colorMap[prevMarking] && colorMap[currentMarking]) {
        currentCell.classList.add('split-bg');
        currentCell.style.setProperty('--prev-color', colorMap[prevMarking]);
        currentCell.style.setProperty('--current-color', colorMap[currentMarking]);
      }
    }
  }
}

},{}],6:[function(require,module,exports){
/*! @hebcal/core v5.10.1, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
'use strict';

require('temporal-polyfill/global');

/** DO NOT EDIT THIS AUTO-GENERATED FILE! */
const version = '5.10.1';

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
/* eslint-disable @typescript-eslint/no-namespace, no-inner-declarations */
/** @private */
const lengths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/** @private */
const monthLengths = [lengths, lengths.slice()];
monthLengths[1][2] = 29;
/**
 * @private
 */
function mod$1(x, y) {
    return x - y * Math.floor(x / y);
}
/**
 * @private
 */
function quotient(x, y) {
    return Math.floor(x / y);
}
/**
 * @private
 * @param abs - R.D. number of days
 */
function yearFromFixed(abs) {
    const l0 = abs - 1;
    const n400 = quotient(l0, 146097);
    const d1 = mod$1(l0, 146097);
    const n100 = quotient(d1, 36524);
    const d2 = mod$1(d1, 36524);
    const n4 = quotient(d2, 1461);
    const d3 = mod$1(d2, 1461);
    const n1 = quotient(d3, 365);
    const year = 400 * n400 + 100 * n100 + 4 * n4 + n1;
    return n100 !== 4 && n1 !== 4 ? year + 1 : year;
}
/*
const ABS_14SEP1752 = 639797;
const ABS_2SEP1752 = 639785;
*/
/*
 * Formerly in namespace, now top-level
 */
/**
 * Returns true if the Gregorian year is a leap year
 * @param year Gregorian year
 */
function isGregLeapYear(year) {
    return !(year % 4) && (!!(year % 100) || !(year % 400));
}
/**
 * Number of days in the Gregorian month for given year
 * @param month Gregorian month (1=January, 12=December)
 * @param year Gregorian year
 */
function daysInGregMonth(month, year) {
    // 1 based months
    return monthLengths[+isGregLeapYear(year)][month];
}
/**
 * Returns true if the object is a Javascript Date
 */
function isDate(obj) {
    // eslint-disable-next-line no-prototype-builtins
    return typeof obj === 'object' && Date.prototype.isPrototypeOf(obj);
}
/**
 * @private
 * @param year
 * @param month (1-12)
 * @param day (1-31)
 */
function toFixed(year, month, day) {
    const py = year - 1;
    return (365 * py +
        quotient(py, 4) -
        quotient(py, 100) +
        quotient(py, 400) +
        quotient(367 * month - 362, 12) +
        (month <= 2 ? 0 : isGregLeapYear(year) ? -1 : -2) +
        day);
}
/**
 * Converts Gregorian date to absolute R.D. (Rata Die) days
 * @param date Gregorian date
 */
function greg2abs(date) {
    if (!isDate(date)) {
        throw new TypeError(`not a Date: ${date}`);
    }
    else if (isNaN(date.getTime())) {
        throw new RangeError('Invalid Date');
    }
    const abs = toFixed(date.getFullYear(), date.getMonth() + 1, date.getDate());
    /*
      if (abs < ABS_14SEP1752 && abs > ABS_2SEP1752) {
        throw new RangeError(`Invalid Date: ${date}`);
      }
      */
    return abs;
}
/**
 * Converts from Rata Die (R.D. number) to Gregorian date.
 * See the footnote on page 384 of ``Calendrical Calculations, Part II:
 * Three Historical Calendars'' by E. M. Reingold,  N. Dershowitz, and S. M.
 * Clamen, Software--Practice and Experience, Volume 23, Number 4
 * (April, 1993), pages 383-404 for an explanation.
 *
 * Note that this function returns the daytime portion of the date.
 * For example, the 15th of Cheshvan 5769 began at sundown on
 * 12 November 2008 and continues through 13 November 2008. This
 * function would return only the date 13 November 2008.
 * @param abs - R.D. number of days
 * @example
 * const abs = hebrew2abs(5769, months.CHESHVAN, 15);
 * const date = abs2greg(abs); // 13 November 2008
 * const year = date.getFullYear(); // 2008
 * const monthNum = date.getMonth() + 1; // 11
 * const day = date.getDate(); // 13
 */
function abs2greg(abs) {
    if (typeof abs !== 'number' || isNaN(abs)) {
        throw new TypeError(`not a Number: ${abs}`);
    }
    abs = Math.trunc(abs);
    /*
      if (abs < ABS_14SEP1752 && abs > ABS_2SEP1752) {
        throw new RangeError(`Invalid Date: ${abs}`);
      }
      */
    const year = yearFromFixed(abs);
    const priorDays = abs - toFixed(year, 1, 1);
    const correction = abs < toFixed(year, 3, 1) ? 0 : isGregLeapYear(year) ? 1 : 2;
    const month = quotient(12 * (priorDays + correction) + 373, 367);
    const day = abs - toFixed(year, month, 1) + 1;
    const dt = new Date(year, month - 1, day);
    if (year < 100 && year >= 0) {
        dt.setFullYear(year);
    }
    return dt;
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-namespace */
/**
 * Gregorian date helper functions
 */
exports.greg = void 0;
(function (greg) {
})(exports.greg || (exports.greg = {}));
exports.greg.abs2greg = abs2greg;
exports.greg.daysInMonth = daysInGregMonth;
exports.greg.greg2abs = greg2abs;
exports.greg.isDate = isDate;
exports.greg.isLeapYear = isGregLeapYear;

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
/*
 * More minimal HDate
 */
const NISAN$4 = 1;
const IYYAR$1 = 2;
const SIVAN$1 = 3;
const TAMUZ$1 = 4;
const AV$1 = 5;
const ELUL$1 = 6;
const TISHREI$2 = 7;
const CHESHVAN$1 = 8;
const KISLEV$2 = 9;
const TEVET$2 = 10;
const SHVAT$1 = 11;
const ADAR_I$2 = 12;
const ADAR_II$2 = 13;
/**
 * Hebrew months of the year (NISAN=1, TISHREI=7)
 * @readonly
 * @enum {number}
 */
const months = {
    /** Nissan / ניסן */
    NISAN: NISAN$4,
    /** Iyyar / אייר */
    IYYAR: IYYAR$1,
    /** Sivan / סיון */
    SIVAN: SIVAN$1,
    /** Tamuz (sometimes Tammuz) / תמוז */
    TAMUZ: TAMUZ$1,
    /** Av / אב */
    AV: AV$1,
    /** Elul / אלול */
    ELUL: ELUL$1,
    /** Tishrei / תִּשְׁרֵי */
    TISHREI: TISHREI$2,
    /** Cheshvan / חשון */
    CHESHVAN: CHESHVAN$1,
    /** Kislev / כסלו */
    KISLEV: KISLEV$2,
    /** Tevet / טבת */
    TEVET: TEVET$2,
    /** Sh'vat / שבט */
    SHVAT: SHVAT$1,
    /** Adar or Adar Rishon / אדר */
    ADAR_I: ADAR_I$2,
    /** Adar Sheini (only on leap years) / אדר ב׳ */
    ADAR_II: ADAR_II$2,
};
const NISAN_STR = 'Nisan';
const monthNames0 = [
    '',
    NISAN_STR,
    'Iyyar',
    'Sivan',
    'Tamuz',
    'Av',
    'Elul',
    'Tishrei',
    'Cheshvan',
    'Kislev',
    'Tevet',
    "Sh'vat",
];
/*
 * Transliterations of Hebrew month names.
 * Regular years are index 0 and leap years are index 1.
 * @private
 */
const monthNames = [
    [...monthNames0, 'Adar', NISAN_STR],
    [...monthNames0, 'Adar I', 'Adar II', NISAN_STR],
];
const edCache = new Map();
const EPOCH = -1373428;
// Avg year length in the cycle (19 solar years with 235 lunar months)
const AVG_HEBYEAR_DAYS = 365.24682220597794;
/**
 * @private
 */
function assertNumber(n, name) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new TypeError(`param '${name}' not a number: ${n}`);
    }
}
/**
 * Converts Hebrew date to R.D. (Rata Die) fixed days.
 * R.D. 1 is the imaginary date Monday, January 1, 1 on the Gregorian
 * Calendar.
 * @param year Hebrew year
 * @param month Hebrew month
 * @param day Hebrew date (1-30)
 * @example
 * const abs = hebrew2abs(5769, months.CHESHVAN, 15);
 */
function hebrew2abs(year, month, day) {
    assertNumber(year, 'year');
    assertNumber(month, 'month');
    assertNumber(day, 'day');
    if (year < 1) {
        throw new RangeError(`hebrew2abs: invalid year ${year}`);
    }
    let tempabs = day;
    if (month < TISHREI$2) {
        for (let m = TISHREI$2; m <= monthsInYear(year); m++) {
            tempabs += daysInMonth(m, year);
        }
        for (let m = NISAN$4; m < month; m++) {
            tempabs += daysInMonth(m, year);
        }
    }
    else {
        for (let m = TISHREI$2; m < month; m++) {
            tempabs += daysInMonth(m, year);
        }
    }
    return EPOCH + elapsedDays(year) + tempabs - 1;
}
/**
 * @private
 */
function newYear(year) {
    return EPOCH + elapsedDays(year);
}
/**
 * Converts absolute R.D. days to Hebrew date
 * @param abs absolute R.D. days
 */
function abs2hebrew(abs) {
    assertNumber(abs, 'abs');
    abs = Math.trunc(abs);
    if (abs <= EPOCH) {
        throw new RangeError(`abs2hebrew: ${abs} is before epoch`);
    }
    // first, quickly approximate year
    let year = Math.floor((abs - EPOCH) / AVG_HEBYEAR_DAYS);
    while (newYear(year) <= abs) {
        ++year;
    }
    --year;
    let month = abs < hebrew2abs(year, 1, 1) ? 7 : 1;
    while (abs > hebrew2abs(year, month, daysInMonth(month, year))) {
        ++month;
    }
    const day = 1 + abs - hebrew2abs(year, month, 1);
    return { yy: year, mm: month, dd: day };
}
/**
 * Returns true if Hebrew year is a leap year
 * @param year Hebrew year
 */
function isLeapYear(year) {
    return (1 + year * 7) % 19 < 7;
}
/**
 * Number of months in this Hebrew year (either 12 or 13 depending on leap year)
 * @param year Hebrew year
 */
function monthsInYear(year) {
    return 12 + +isLeapYear(year); // boolean is cast to 1 or 0
}
/**
 * Number of days in Hebrew month in a given year (29 or 30)
 * @param month Hebrew month (e.g. months.TISHREI)
 * @param year Hebrew year
 */
function daysInMonth(month, year) {
    switch (month) {
        case IYYAR$1:
        case TAMUZ$1:
        case ELUL$1:
        case TEVET$2:
        case ADAR_II$2:
            return 29;
    }
    if ((month === ADAR_I$2 && !isLeapYear(year)) ||
        (month === CHESHVAN$1 && !longCheshvan(year)) ||
        (month === KISLEV$2 && shortKislev(year))) {
        return 29;
    }
    else {
        return 30;
    }
}
/**
 * Returns a transliterated string name of Hebrew month in year,
 * for example 'Elul' or 'Cheshvan'.
 * @param month Hebrew month (e.g. months.TISHREI)
 * @param year Hebrew year
 */
function getMonthName(month, year) {
    assertNumber(month, 'month');
    assertNumber(year, 'year');
    if (month < 1 || month > 14) {
        throw new TypeError(`bad monthNum: ${month}`);
    }
    return monthNames[+isLeapYear(year)][month];
}
/**
 * Days from sunday prior to start of Hebrew calendar to mean
 * conjunction of Tishrei in Hebrew YEAR
 * @param year Hebrew year
 */
function elapsedDays(year) {
    const n = edCache.get(year);
    if (typeof n === 'number') {
        return n;
    }
    const elapsed = elapsedDays0(year);
    edCache.set(year, elapsed);
    return elapsed;
}
/**
 * Days from sunday prior to start of Hebrew calendar to mean
 * conjunction of Tishrei in Hebrew YEAR
 * @private
 * @param year Hebrew year
 */
function elapsedDays0(year) {
    const prevYear = year - 1;
    const mElapsed = 235 * Math.floor(prevYear / 19) + // Months in complete 19 year lunar (Metonic) cycles so far
        12 * (prevYear % 19) + // Regular months in this cycle
        Math.floor(((prevYear % 19) * 7 + 1) / 19); // Leap months this cycle
    const pElapsed = 204 + 793 * (mElapsed % 1080);
    const hElapsed = 5 +
        12 * mElapsed +
        793 * Math.floor(mElapsed / 1080) +
        Math.floor(pElapsed / 1080);
    const parts = (pElapsed % 1080) + 1080 * (hElapsed % 24);
    const day = 1 + 29 * mElapsed + Math.floor(hElapsed / 24);
    let altDay = day;
    if (parts >= 19440 ||
        (2 === day % 7 && parts >= 9924 && !isLeapYear(year)) ||
        (1 === day % 7 && parts >= 16789 && isLeapYear(prevYear))) {
        altDay++;
    }
    if (altDay % 7 === 0 || altDay % 7 === 3 || altDay % 7 === 5) {
        return altDay + 1;
    }
    else {
        return altDay;
    }
}
/**
 * Number of days in the hebrew YEAR.
 * A common Hebrew calendar year can have a length of 353, 354 or 355 days
 * A leap Hebrew calendar year can have a length of 383, 384 or 385 days
 * @param year Hebrew year
 */
function daysInYear(year) {
    return elapsedDays(year + 1) - elapsedDays(year);
}
/**
 * true if Cheshvan is long in Hebrew year
 * @param year Hebrew year
 */
function longCheshvan(year) {
    return daysInYear(year) % 10 === 5;
}
/**
 * true if Kislev is short in Hebrew year
 * @param year Hebrew year
 */
function shortKislev(year) {
    return daysInYear(year) % 10 === 3;
}
/**
 * Converts Hebrew month string name to numeric
 * @param monthName monthName
 */
function monthFromName(monthName) {
    if (typeof monthName === 'number') {
        if (isNaN(monthName) || monthName < 1 || monthName > 14) {
            throw new RangeError(`bad monthName: ${monthName}`);
        }
        return monthName;
    }
    let c = monthName.trim().toLowerCase();
    // If Hebrew month starts with a bet (for example `בתמוז`) then ignore it
    if (c[0] === 'ב') {
        c = c.substring(1);
    }
    /*
    the Hebrew months are unique to their second letter
    N         Nisan  (November?)
    I         Iyyar
    E        Elul
    C        Cheshvan
    K        Kislev
    1        1Adar
    2        2Adar
    Si Sh     Sivan, Shvat
    Ta Ti Te Tamuz, Tishrei, Tevet
    Av Ad    Av, Adar
  
    אב אד אי אל   אב אדר אייר אלול
    ח            חשון
    ט            טבת
    כ            כסלו
    נ            ניסן
    ס            סיון
    ש            שבט
    תמ תש        תמוז תשרי
    */
    switch (c[0]) {
        case 'n':
        case 'נ':
            if (c[1] === 'o') {
                break; /* this catches "november" */
            }
            return NISAN$4;
        case 'i':
            return IYYAR$1;
        case 'e':
            return ELUL$1;
        case 'c':
        case 'ח':
            return CHESHVAN$1;
        case 'k':
        case 'כ':
            return KISLEV$2;
        case 's':
            switch (c[1]) {
                case 'i':
                    return SIVAN$1;
                case 'h':
                    return SHVAT$1;
            }
            break;
        case 't':
            switch (c[1]) {
                case 'a':
                    return TAMUZ$1;
                case 'i':
                    return TISHREI$2;
                case 'e':
                    return TEVET$2;
            }
            break;
        case 'a':
            switch (c[1]) {
                case 'v':
                    return AV$1;
                case 'd':
                    if (/(1|[^i]i|a|א)$/i.test(monthName)) {
                        return ADAR_I$2;
                    }
                    return ADAR_II$2; // else assume sheini
            }
            break;
        case 'ס':
            return SIVAN$1;
        case 'ט':
            return TEVET$2;
        case 'ש':
            return SHVAT$1;
        case 'א':
            switch (c[1]) {
                case 'ב':
                    return AV$1;
                case 'ד':
                    if (/(1|[^i]i|a|א)$/i.test(monthName)) {
                        return ADAR_I$2;
                    }
                    return ADAR_II$2; // else assume sheini
                case 'י':
                    return IYYAR$1;
                case 'ל':
                    return ELUL$1;
            }
            break;
        case 'ת':
            switch (c[1]) {
                case 'מ':
                    return TAMUZ$1;
                case 'ש':
                    return TISHREI$2;
            }
            break;
    }
    throw new RangeError(`bad monthName: ${monthName}`);
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

const NISAN$3 = months.NISAN;
const CHESHVAN = months.CHESHVAN;
const KISLEV$1 = months.KISLEV;
const TEVET$1 = months.TEVET;
const SHVAT = months.SHVAT;
const ADAR_I$1 = months.ADAR_I;
const ADAR_II$1 = months.ADAR_II;
/**
 * Returns true if the object is a SimpleHebrewDate
 * @private
 */
function isSimpleHebrewDate$1(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.yy === 'number' &&
        typeof obj.mm === 'number' &&
        typeof obj.dd === 'number');
}
/**
 * @private
 */
function toSimpleHebrewDate(obj) {
    if (isSimpleHebrewDate$1(obj)) {
        return obj;
    }
    else if (isDate(obj)) {
        const abs = greg2abs(obj);
        return abs2hebrew(abs);
    }
    else {
        // typeof obj === 'number'
        return abs2hebrew(obj);
    }
}
function getYahrzeitHD(hyear, date) {
    let hDeath = toSimpleHebrewDate(date);
    if (hyear <= hDeath.yy) {
        // Hebrew year ${hyear} occurs on or before original date in ${hDeath.yy}
        return undefined;
    }
    if (hDeath.mm === CHESHVAN &&
        hDeath.dd === 30 &&
        !longCheshvan(hDeath.yy + 1)) {
        // If it's Heshvan 30 it depends on the first anniversary;
        // if that was not Heshvan 30, use the day before Kislev 1.
        hDeath = abs2hebrew(hebrew2abs(hyear, KISLEV$1, 1) - 1);
    }
    else if (hDeath.mm === KISLEV$1 &&
        hDeath.dd === 30 &&
        shortKislev(hDeath.yy + 1)) {
        // If it's Kislev 30 it depends on the first anniversary;
        // if that was not Kislev 30, use the day before Teveth 1.
        hDeath = abs2hebrew(hebrew2abs(hyear, TEVET$1, 1) - 1);
    }
    else if (hDeath.mm === ADAR_II$1) {
        // If it's Adar II, use the same day in last month of year (Adar or Adar II).
        hDeath.mm = monthsInYear(hyear);
    }
    else if (hDeath.mm === ADAR_I$1 && hDeath.dd === 30 && !isLeapYear(hyear)) {
        // If it's the 30th in Adar I and year is not a leap year
        // (so Adar has only 29 days), use the last day in Shevat.
        hDeath.dd = 30;
        hDeath.mm = SHVAT;
    }
    // In all other cases, use the normal anniversary of the date of death.
    // advance day to rosh chodesh if needed
    if (hDeath.mm === CHESHVAN && hDeath.dd === 30 && !longCheshvan(hyear)) {
        hDeath.mm = KISLEV$1;
        hDeath.dd = 1;
    }
    else if (hDeath.mm === KISLEV$1 && hDeath.dd === 30 && shortKislev(hyear)) {
        hDeath.mm = TEVET$1;
        hDeath.dd = 1;
    }
    hDeath.yy = hyear;
    return hDeath;
}
function getBirthdayHD(hyear, date) {
    const orig = toSimpleHebrewDate(date);
    const origYear = orig.yy;
    if (hyear === origYear) {
        return orig;
    }
    else if (hyear < origYear) {
        // Hebrew year ${hyear} occurs on or before original date in ${origYear}
        return undefined;
    }
    const isOrigLeap = isLeapYear(origYear);
    let month = orig.mm;
    let day = orig.dd;
    if ((month === ADAR_I$1 && !isOrigLeap) || (month === ADAR_II$1 && isOrigLeap)) {
        month = monthsInYear(hyear);
    }
    else if (month === CHESHVAN && day === 30 && !longCheshvan(hyear)) {
        month = KISLEV$1;
        day = 1;
    }
    else if (month === KISLEV$1 && day === 30 && shortKislev(hyear)) {
        month = TEVET$1;
        day = 1;
    }
    else if (month === ADAR_I$1 &&
        day === 30 &&
        isOrigLeap &&
        !isLeapYear(hyear)) {
        month = NISAN$3;
        day = 1;
    }
    return { yy: hyear, mm: month, dd: day };
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
const GERESH = '׳';
const GERSHAYIM = '״';
const heb2num = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    כ: 20,
    ל: 30,
    מ: 40,
    נ: 50,
    ס: 60,
    ע: 70,
    פ: 80,
    צ: 90,
    ק: 100,
    ר: 200,
    ש: 300,
    ת: 400,
};
const num2heb = {};
for (const [key, val] of Object.entries(heb2num)) {
    num2heb[val] = key;
}
function num2digits(num) {
    const digits = [];
    while (num > 0) {
        if (num === 15 || num === 16) {
            digits.push(9);
            digits.push(num - 9);
            break;
        }
        let incr = 100;
        let i;
        for (i = 400; i > num; i -= incr) {
            if (i === incr) {
                incr = incr / 10;
            }
        }
        digits.push(i);
        num -= i;
    }
    return digits;
}
/**
 * Converts a numerical value to a string of Hebrew letters.
 *
 * When specifying years of the Hebrew calendar in the present millennium,
 * we omit the thousands (which is presently 5 [ה]).
 * @example
 * gematriya(5774) // 'תשע״ד' - cropped to 774
 * gematriya(25) // 'כ״ה'
 * gematriya(60) // 'ס׳'
 * gematriya(3761) // 'ג׳תשס״א'
 * gematriya(1123) // 'א׳קכ״ג'
 */
function gematriya(num) {
    const num1 = parseInt(num, 10);
    if (!num1 || num1 < 0) {
        throw new TypeError(`invalid number: ${num}`);
    }
    let str = '';
    const thousands = Math.floor(num1 / 1000);
    if (thousands > 0 && thousands !== 5) {
        const tdigits = num2digits(thousands);
        for (const tdig of tdigits) {
            str += num2heb[tdig];
        }
        str += GERESH;
    }
    const digits = num2digits(num1 % 1000);
    if (digits.length === 1) {
        return str + num2heb[digits[0]] + GERESH;
    }
    for (let i = 0; i < digits.length; i++) {
        if (i + 1 === digits.length) {
            str += GERSHAYIM;
        }
        str += num2heb[digits[i]];
    }
    return str;
}
/**
 * Converts a string of Hebrew letters to a numerical value.
 *
 * Only considers the value of Hebrew letters `א` through `ת`.
 * Ignores final Hebrew letters such as `ך` (kaf sofit) or `ם` (mem sofit)
 * and vowels (nekudot).
 */
function gematriyaStrToNum(str) {
    let num = 0;
    const gereshIdx = str.indexOf(GERESH);
    if (gereshIdx !== -1 && gereshIdx !== str.length - 1) {
        const thousands = str.substring(0, gereshIdx);
        num += gematriyaStrToNum(thousands) * 1000;
        str = str.substring(gereshIdx);
    }
    for (const ch of str) {
        const n = heb2num[ch];
        if (typeof n === 'number') {
            num += n;
        }
    }
    return num;
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

/**
 * Calculates the molad for a Hebrew month
 */
function molad(year, month) {
    let m_adj = month - 7;
    if (m_adj < 0) {
        m_adj += monthsInYear(year);
    }
    const mElapsed = 235 * Math.floor((year - 1) / 19) + // Months in complete 19 year lunar (Metonic) cycles so far
        12 * ((year - 1) % 19) + // Regular months in this cycle
        Math.floor((7 * ((year - 1) % 19) + 1) / 19) + // Leap months this cycle
        m_adj; // add elapsed months till the start of the molad of the month
    const pElapsed = 204 + Math.floor(793 * (mElapsed % 1080));
    const hElapsed = 5 +
        12 * mElapsed +
        793 * Math.floor(mElapsed / 1080) +
        Math.floor(pElapsed / 1080) -
        6;
    const parts = (pElapsed % 1080) + 1080 * (hElapsed % 24);
    const chalakim = parts % 1080;
    const day = 1 + 29 * mElapsed + Math.floor(hElapsed / 24);
    return {
        year,
        month,
        dayOfWeek: day % 7,
        hour: hElapsed % 24,
        minutes: Math.floor(chalakim / 18),
        chalakim: chalakim % 18,
    };
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
/**
 * Formats a number with leading zeros so the resulting string is 4 digits long.
 * Similar to `string.padStart(4, '0')` but will also format
 * negative numbers similar to how the JavaScript date formats
 * negative year numbers (e.g. `-37` is formatted as `-000037`).
 */
function pad4(num) {
    if (num < 0) {
        return '-00' + pad4(-num);
    }
    else if (num < 10) {
        return '000' + num;
    }
    else if (num < 100) {
        return '00' + num;
    }
    else if (num < 1000) {
        return '0' + num;
    }
    return String(num);
}
/**
 * Formats a number with leading zeros so the resulting string is 2 digits long.
 * Similar to `string.padStart(2, '0')`.
 */
function pad2(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    }
    return String(num);
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

const _formatters = new Map();
/**
 * @private
 */
function getFormatter$1(tzid) {
    const fmt = _formatters.get(tzid);
    if (fmt)
        return fmt;
    const f = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: tzid,
    });
    _formatters.set(tzid, f);
    return f;
}
const dateFormatRegex = /^(\d+).(\d+).(\d+),?\s+(\d+).(\d+).(\d+)/;
/**
 * Returns a string similar to `Date.toISOString()` but in the
 * timezone `tzid`. Contrary to the typical meaning of `Z` at the end
 * of the string, this is not actually a UTC date.
 */
function getPseudoISO(tzid, date) {
    const str = getFormatter$1(tzid).format(date);
    const m = dateFormatRegex.exec(str);
    if (m === null) {
        throw new Error(`Unable to parse formatted string: ${str}`);
    }
    let hour = m[4];
    if (hour === '24') {
        hour = '00';
    }
    m[3] = pad4(parseInt(m[3], 10));
    return `${m[3]}-${m[1]}-${m[2]}T${hour}:${m[5]}:${m[6]}Z`;
}
/**
 * Returns number of minutes `tzid` is offset from UTC on date `date`.
 */
function getTimezoneOffset(tzid, date) {
    const utcStr = getPseudoISO('UTC', date);
    const localStr = getPseudoISO(tzid, date);
    const diffMs = new Date(utcStr).getTime() - new Date(localStr).getTime();
    return Math.ceil(diffMs / 1000 / 60);
}
/**
 * Returns YYYY-MM-DD in the local timezone
 */
function isoDateString(dt) {
    return (pad4(dt.getFullYear()) +
        '-' +
        pad2(dt.getMonth() + 1) +
        '-' +
        pad2(dt.getDate()));
}

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
var poAshkenazi$1 = { "headers": { "plural-forms": "nplurals=2; plural=(n > 1);", "language": "en_CA@ashkenazi" }, "contexts": { "": { "Tevet": ["Teves"] } } };

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */
var poHe$1 = { "headers": { "plural-forms": "nplurals=2; plural=(n > 1);", "language": "he" }, "contexts": { "": { "Adar": ["אַדָר"], "Adar I": ["אַדָר א׳"], "Adar II": ["אַדָר ב׳"], "Av": ["אָב"], "Cheshvan": ["חֶשְׁוָן"], "Elul": ["אֱלוּל"], "Iyyar": ["אִיָיר"], "Kislev": ["כִּסְלֵו"], "Nisan": ["נִיסָן"], "Sh'vat": ["שְׁבָט"], "Sivan": ["סִיוָן"], "Tamuz": ["תַּמּוּז"], "Tevet": ["טֵבֵת"], "Tishrei": ["תִּשְׁרֵי"] } } };

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

const noopLocale = {
    headers: { 'plural-forms': 'nplurals=2; plural=(n!=1);' },
    contexts: { '': {} },
};
const alias = {
    h: 'he',
    a: 'ashkenazi',
    s: 'en',
    '': 'en',
};
/** @private */
const locales = new Map();
/** @private */
let activeLocale;
/** @private */
let activeName;
/** @private */
function getEnOrdinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
/** @private */
function checkLocale(locale) {
    if (typeof locale !== 'string') {
        throw new TypeError(`Invalid locale name: ${locale}`);
    }
    return locale.toLowerCase();
}
/** @private */
function getExistingLocale(locale) {
    const locale1 = checkLocale(locale);
    const loc = locales.get(locale1);
    if (!loc) {
        throw new RangeError(`Locale '${locale}' not found`);
    }
    return loc;
}
/**
 * A locale in Hebcal is used for translations/transliterations of
 * holidays. `@hebcal/hdate` supports four locales by default
 * * `en` - default, Sephardic transliterations (e.g. "Shabbat")
 * * `ashkenazi` - Ashkenazi transliterations (e.g. "Shabbos")
 * * `he` - Hebrew (e.g. "שַׁבָּת")
 * * `he-x-NoNikud` - Hebrew without nikud (e.g. "שבת")
 */
class Locale {
    /**
     * Returns translation only if `locale` offers a non-empty translation for `id`.
     * Otherwise, returns `undefined`.
     * @param id Message ID to translate
     * @param [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     */
    static lookupTranslation(id, locale) {
        const loc = (typeof locale === 'string' && locales.get(locale.toLowerCase())) ||
            activeLocale;
        const array = loc[id];
        if ((array === null || array === void 0 ? void 0 : array.length) && array[0].length) {
            return array[0];
        }
        return undefined;
    }
    /**
     * By default, if no translation was found, returns `id`.
     * @param id Message ID to translate
     * @param [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     */
    static gettext(id, locale) {
        const text = this.lookupTranslation(id, locale);
        if (typeof text === 'undefined') {
            return id;
        }
        return text;
    }
    /**
     * Register locale translations.
     * @param locale Locale name (i.e.: `'he'`, `'fr'`)
     * @param data parsed data from a `.po` file.
     */
    static addLocale(locale, data) {
        locale = checkLocale(locale);
        if (typeof data.contexts !== 'object' ||
            typeof data.contexts[''] !== 'object') {
            throw new TypeError(`Locale '${locale}' invalid compact format`);
        }
        locales.set(locale, data.contexts['']);
    }
    /**
     * Adds a translation to `locale`, replacing any previous translation.
     * @param locale Locale name (i.e: `'he'`, `'fr'`).
     * @param id Message ID to translate
     * @param translation Translation text
     */
    static addTranslation(locale, id, translation) {
        const loc = getExistingLocale(locale);
        if (typeof id !== 'string' || id.length === 0) {
            throw new TypeError(`Invalid id string: ${id}`);
        }
        const isArray = Array.isArray(translation);
        if (isArray) {
            const t0 = translation[0];
            if (typeof t0 !== 'string' || t0.length === 0) {
                throw new TypeError(`Invalid translation array: ${translation}`);
            }
        }
        else if (typeof translation !== 'string') {
            throw new TypeError(`Invalid translation string: ${translation}`);
        }
        loc[id] = isArray ? translation : [translation];
    }
    /**
     * Adds multiple translations to `locale`, replacing any previous translations.
     * @param locale Locale name (i.e: `'he'`, `'fr'`).
     * @param data parsed data from a `.po` file.
     */
    static addTranslations(locale, data) {
        const loc = getExistingLocale(locale);
        if (typeof data.contexts !== 'object' ||
            typeof data.contexts[''] !== 'object') {
            throw new TypeError(`Locale '${locale}' invalid compact format`);
        }
        const ctx = data.contexts[''];
        Object.assign(loc, ctx);
    }
    /**
     * Activates a locale. Throws an error if the locale has not been previously added.
     * After setting the locale to be used, all strings marked for translations
     * will be represented by the corresponding translation in the specified locale.
     * @param locale Locale name (i.e: `'he'`, `'fr'`)
     * @deprecated
     */
    static useLocale(locale) {
        const locale0 = checkLocale(locale);
        const obj = getExistingLocale(locale0);
        activeName = alias[locale0] || locale0;
        activeLocale = obj;
        return activeLocale;
    }
    /**
     * Returns the name of the active locale (i.e. 'he', 'ashkenazi', 'fr')
     * @deprecated
     */
    static getLocaleName() {
        return activeName;
    }
    /**
     * Returns the names of registered locales
     */
    static getLocaleNames() {
        const keys = Array.from(locales.keys());
        return keys.sort((a, b) => a.localeCompare(b));
    }
    /**
     * Renders a number in ordinal, such as 1st, 2nd or 3rd
     * @param [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     */
    static ordinal(n, locale) {
        const locale1 = locale === null || locale === void 0 ? void 0 : locale.toLowerCase();
        const locale0 = locale1 || activeName;
        if (!locale0) {
            return getEnOrdinal(n);
        }
        switch (locale0) {
            case 'en':
            case 's':
            case 'a':
                return getEnOrdinal(n);
            case 'es':
                return n + 'º';
            case 'h':
            case 'he':
            case 'he-x-nonikud':
                return String(n);
        }
        if (locale0.startsWith('ashkenazi')) {
            return getEnOrdinal(n);
        }
        return n + '.';
    }
    /**
     * Removes nekudot from Hebrew string
     */
    static hebrewStripNikkud(str) {
        const a = str.normalize();
        // now strip out niqqud and trope
        return a.replace(/[\u0590-\u05bd]/g, '').replace(/[\u05bf-\u05c7]/g, '');
    }
}
Locale.addLocale('en', noopLocale);
Locale.addLocale('s', noopLocale);
Locale.addLocale('', noopLocale);
Locale.useLocale('en');
/* Ashkenazic transliterations */
Locale.addLocale('ashkenazi', poAshkenazi$1);
Locale.addLocale('a', poAshkenazi$1);
/* Hebrew with nikkud */
Locale.addLocale('he', poHe$1);
Locale.addLocale('h', poHe$1);
/* Hebrew without nikkud */
const heStrs$1 = poHe$1.contexts[''];
const heNoNikud$1 = {};
for (const [key, val] of Object.entries(heStrs$1)) {
    heNoNikud$1[key] = [Locale.hebrewStripNikkud(val[0])];
}
const poHeNoNikud$1 = {
    headers: poHe$1.headers,
    contexts: { '': heNoNikud$1 },
};
Locale.addLocale('he-x-NoNikud', poHeNoNikud$1);

/*! @hebcal/hdate v0.14.2, distributed under GPLv2 https://www.gnu.org/licenses/gpl-2.0.txt */

/*
    Hebcal - A Jewish Calendar Generator
    Copyright (c) 1994-2020 Danny Sadinoff
    Portions copyright Eyal Schachter and Michael J. Radwin

    https://github.com/hebcal/hebcal-es6

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
function mod(x, y) {
    return x - y * Math.floor(x / y);
}
function isSimpleHebrewDate(obj) {
    return obj.yy !== undefined;
}
const UNITS_DAY = 'day';
const UNITS_WEEK = 'week';
const UNITS_MONTH = 'month';
const UNITS_YEAR = 'year';
/**
 * A `HDate` represents a Hebrew calendar date.
 *
 * An instance of this class encapsulates a date in the Hebrew calendar system.
 * It consists of a year, month, and day, without any associated time or location data.
 * The Hebrew calendar is a lunisolar calendar, meaning it is based on both lunar and solar cycles.
 *
 * A Hebrew date internally stores three numbers:
 * - year: The Hebrew year (1-9999). Counted from the traditional Hebrew date of creation (3761 BCE in the Gregorian calendar)
 * - month: The Hebrew month (1-13). Month 1 is Nisan, month 7 is Tishrei. There are 12 months in a regular year and 13 months in a leap year.
 * - day: The day of the month (1-30)
 *
 * This class uses Rata Die to convert between the Hebrew and Gregorian calendars.
 *
 * To calculate times of day, use `Zmanim` class from `@hebcal/core`
 * @see {@link https://en.wikipedia.org/wiki/Rata_Die | Rata Die}
 * @see {@link https://hebcal.github.io/api/core/classes/Zmanim.html | Zmanim}
 */
class HDate {
    /**
     * Create a Hebrew date. There are 3 basic forms for the `HDate()` constructor.
     *
     * 1. No parameters - represents the current Hebrew date at time of instantiation
     * 2. One parameter
     *    * `Date` - represents the Hebrew date corresponding to the Gregorian date using
     *       local time. Hours, minutes, seconds and milliseconds are ignored.
     *    * `HDate` - clones a copy of the given Hebrew date
     *    * `number` - Converts absolute R.D. days to Hebrew date.
     *       R.D. 1 == the imaginary date January 1, 1 (Gregorian)
     * 3. Three parameters: Hebrew day, Hebrew month, Hebrew year. Hebrew day should
     *    be a number between 1-30, Hebrew month can be a number or string, and
     *    Hebrew year is always a number.
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     *
     * const hd1 = new HDate();
     * const hd2 = new HDate(new Date(2008, 10, 13));
     * const hd3 = new HDate(15, 'Cheshvan', 5769);
     * const hd4 = new HDate(15, months.CHESHVAN, 5769);
     * const hd5 = new HDate(733359); // ==> 15 Cheshvan 5769
     * const monthName = 'אייר';
     * const hd6 = new HDate(5, monthName, 5773);
     * @param [day] - Day of month (1-30) if a `number`.
     *   If a `Date` is specified, represents the Hebrew date corresponding to the
     *   Gregorian date using local time.
     *   If an `HDate` is specified, clones a copy of the given Hebrew date.
     * @param [month] - Hebrew month of year (1=NISAN, 7=TISHREI)
     * @param [year] - Hebrew year
     */
    constructor(day, month, year) {
        if (arguments.length === 2 || arguments.length > 3) {
            throw new TypeError('HDate constructor requires 0, 1 or 3 arguments');
        }
        if (arguments.length === 3) {
            // Hebrew day, Hebrew month, Hebrew year
            this.dd = this.mm = 1;
            const yy = typeof year === 'string' ? parseInt(year, 10) : year;
            if (isNaN(yy)) {
                throw new TypeError(`HDate called with bad year: ${year}`);
            }
            this.yy = yy;
            setMonth(this, month); // will throw if we can't parse
            const dd = typeof day === 'string' ? parseInt(day, 10) : day;
            if (isNaN(dd)) {
                throw new TypeError(`HDate called with bad day: ${day}`);
            }
            setDate(this, dd);
        }
        else {
            // 0 arguments
            if (typeof day === 'undefined' || day === null) {
                day = new Date();
            }
            // 1 argument
            const abs0 = typeof day === 'number' && !isNaN(day)
                ? day
                : isDate(day)
                    ? greg2abs(day)
                    : isSimpleHebrewDate(day)
                        ? day
                        : null;
            if (abs0 === null) {
                throw new TypeError(`HDate called with bad arg: ${day}`);
            }
            const isNumber = typeof abs0 === 'number';
            const d = isNumber ? abs2hebrew(abs0) : abs0;
            this.yy = d.yy;
            this.mm = d.mm;
            this.dd = d.dd;
            if (isNumber) {
                this.rd = abs0;
            }
        }
    }
    /**
     * Returns the Hebrew year of this Hebrew date
     * @returns an integer >= 1
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getFullYear(); // 5769
     */
    getFullYear() {
        return this.yy;
    }
    /**
     * Returns `true` if this Hebrew date occurs during a Hebrew leap year
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.isLeapYear(); // false
     */
    isLeapYear() {
        return isLeapYear(this.yy);
    }
    /**
     * Returns the Hebrew month (1=NISAN, 7=TISHREI) of this Hebrew date
     * @returns an integer 1-13
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getMonth(); // 8
     */
    getMonth() {
        return this.mm;
    }
    /**
     * The Tishrei-based month of this Hebrew date. 1 is Tishrei, 7 is Nisan, 13 is Elul in a leap year
     * @returns an integer 1-13
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getTishreiMonth(); // 2
     */
    getTishreiMonth() {
        const nummonths = monthsInYear(this.getFullYear());
        return (this.getMonth() + nummonths - 6) % nummonths || nummonths;
    }
    /**
     * Number of days in the month of this Hebrew date (29 or 30)
     * @returns an integer 29-30
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.daysInMonth(); // 29
     */
    daysInMonth() {
        return daysInMonth(this.getMonth(), this.getFullYear());
    }
    /**
     * Gets the day within the month (1-30)
     * @returns an integer 1-30
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getDate(); // 15
     */
    getDate() {
        return this.dd;
    }
    /**
     * Returns the day of the week for this Hebrew date,
     * where 0 represents Sunday, 1 represents Monday, 6 represents Saturday.
     *
     * For the day of the month, see `getDate()`
     * @returns an integer 0-6
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getDate(); // 4
     */
    getDay() {
        return mod(this.abs(), 7);
    }
    /**
     * Converts this Hebrew date to the corresponding Gregorian date.
     *
     * The returned `Date` object will be in the local (i.e. host system) time zone.
     * Hours, minutes, seconds and milliseconds will all be zero.
     *
     * Note that this function returns the daytime portion of the date.
     * For example, the 15th of Cheshvan 5769 began at sundown on
     * 12 November 2008 and continues through 13 November 2008. This
     * function would return only the date 13 November 2008.
     * @example
     * const hd = new HDate(15, 'Cheshvan', 5769);
     * const date = hd.greg(); // 13 November 2008
     * const year = date.getFullYear(); // 2008
     * const monthNum = date.getMonth() + 1; // 11
     * const day = date.getDate(); // 13
     */
    greg() {
        return abs2greg(this.abs());
    }
    /**
     * Converts from Hebrew date representation to R.D. (Rata Die) fixed days.
     * R.D. 1 is the imaginary date Monday, January 1, 1 (Gregorian).
     * Note also that R.D. = Julian Date − 1,721,424.5
     * @see {@link https://en.wikipedia.org/wiki/Rata_Die | Rata Die}
     * @example
     * const hd = new HDate(15, 'Cheshvan', 5769);
     * hd.abs(); // 733359
     */
    abs() {
        if (typeof this.rd !== 'number') {
            this.rd = hebrew2abs(this.yy, this.mm, this.dd);
        }
        return this.rd;
    }
    /**
     * Converts Hebrew date to R.D. (Rata Die) fixed days.
     * R.D. 1 is the imaginary date Monday, January 1, 1 on the Gregorian
     * Calendar.
     * @param year Hebrew year
     * @param month Hebrew month (1=NISAN, 7=TISHREI)
     * @param day Hebrew date (1-30)
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * HDate.hebrew2abs(5769, months.CHESHVAN, 15); // 733359
     */
    static hebrew2abs(year, month, day) {
        return hebrew2abs(year, month, day);
    }
    /**
     * Returns a transliterated Hebrew month name, e.g. `'Elul'` or `'Cheshvan'`.
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.getMonthName(); // 'Cheshvan'
     */
    getMonthName() {
        return getMonthName(this.getMonth(), this.getFullYear());
    }
    /**
     * Renders this Hebrew date as a translated or transliterated string,
     * including ordinal e.g. `'15th of Cheshvan, 5769'`.
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     *
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * console.log(hd.render('en')); // '15th of Cheshvan, 5769'
     * console.log(hd.render('he')); // '15 חֶשְׁוָן, 5769'
     * console.log(hd.render('en', false)); // '15th of Cheshvan'
     * console.log(hd.render('he', false)); // '15 חֶשְׁוָן'
     * @param [locale] Optional locale name (defaults to active locale).
     * @param [showYear=true] Display year (defaults to true).
     * @see {@link Locale}
     */
    render(locale, showYear = true) {
        const locale0 = locale || Locale.getLocaleName();
        const day = this.getDate();
        const monthName0 = Locale.gettext(this.getMonthName(), locale0);
        const monthName = monthName0.replace(/'/g, '’');
        const nth = Locale.ordinal(day, locale0);
        const dayOf = getDayOfTranslation(locale0);
        const dateStr = `${nth}${dayOf} ${monthName}`;
        if (showYear) {
            const fullYear = this.getFullYear();
            return `${dateStr}, ${fullYear}`;
        }
        else {
            return dateStr;
        }
    }
    /**
     * Renders this Hebrew date in Hebrew gematriya, regardless of locale.
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * hd.renderGematriya(); // 'ט״ו חֶשְׁוָן תשס״ט'
     * hd.renderGematriya(true); // 'ט״ו חשון תשס״ט'
     */
    renderGematriya(suppressNikud = false) {
        const d = this.getDate();
        const locale = suppressNikud ? 'he-x-NoNikud' : 'he';
        const m = Locale.gettext(this.getMonthName(), locale);
        const y = this.getFullYear();
        return gematriya(d) + ' ' + m + ' ' + gematriya(y);
    }
    /**
     * Returns an `HDate` corresponding to the specified day of week
     * **before** this Hebrew date
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).before(6).greg() // Sat Feb 15 2014
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    before(dayOfWeek) {
        return onOrBefore(dayOfWeek, this, -1);
    }
    /**
     * Returns an `HDate` corresponding to the specified day of week
     * **on or before** this Hebrew date
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).onOrBefore(6).greg() // Sat Feb 15 2014
     * new HDate(new Date('Saturday February 22, 2014')).onOrBefore(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Sunday February 23, 2014')).onOrBefore(6).greg() // Sat Feb 22 2014
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    onOrBefore(dayOfWeek) {
        return onOrBefore(dayOfWeek, this, 0);
    }
    /**
     * Returns an `HDate` corresponding to the specified day of week
     * **nearest** to this Hebrew date
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).nearest(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Tuesday February 18, 2014')).nearest(6).greg() // Sat Feb 15 2014
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    nearest(dayOfWeek) {
        return onOrBefore(dayOfWeek, this, 3);
    }
    /**
     * Returns an `HDate` corresponding to the specified day of week
     * **on or after** this Hebrew date
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).onOrAfter(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Saturday February 22, 2014')).onOrAfter(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Sunday February 23, 2014')).onOrAfter(6).greg() // Sat Mar 01 2014
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    onOrAfter(dayOfWeek) {
        return onOrBefore(dayOfWeek, this, 6);
    }
    /**
     * Returns an `HDate` corresponding to the specified day of week
     * **after** this Hebrew date
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).after(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Saturday February 22, 2014')).after(6).greg() // Sat Mar 01 2014
     * new HDate(new Date('Sunday February 23, 2014')).after(6).greg() // Sat Mar 01 2014
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    after(dayOfWeek) {
        return onOrBefore(dayOfWeek, this, 7);
    }
    /**
     * Returns the next Hebrew date
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.next(); // '16 Cheshvan 5769'
     */
    next() {
        return new HDate(this.abs() + 1);
    }
    /**
     * Returns the previous Hebrew date
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.prev(); // '14 Cheshvan 5769'
     */
    prev() {
        return new HDate(this.abs() - 1);
    }
    /**
     * Returns a cloned `HDate` object with a specified amount of time added
     *
     * Units are case insensitive, and support plural and short forms.
     * Note, short forms are case sensitive.
     *
     * | Unit | Shorthand | Description
     * | --- | --- | --- |
     * | `day` | `d` | days |
     * | `week` | `w` | weeks |
     * | `month` | `M` | months |
     * | `year` | `y` | years |
     */
    add(amount, units = 'd') {
        amount =
            typeof amount === 'string' ? parseInt(amount, 10) : amount;
        if (!amount) {
            return new HDate(this);
        }
        units = standardizeUnits(units);
        if (units === UNITS_DAY) {
            return new HDate(this.abs() + amount);
        }
        else if (units === UNITS_WEEK) {
            return new HDate(this.abs() + 7 * amount);
        }
        else if (units === UNITS_YEAR) {
            return new HDate(this.getDate(), this.getMonth(), this.getFullYear() + amount);
        }
        else {
            // units === UNITS_MONTH
            let hd = new HDate(this);
            const sign = amount > 0 ? 1 : -1;
            amount = Math.abs(amount);
            for (let i = 0; i < amount; i++) {
                hd = new HDate(hd.abs() + sign * hd.daysInMonth());
            }
            return hd;
        }
    }
    /**
     * Returns a cloned `HDate` object with a specified amount of time subracted
     *
     * Units are case insensitive, and support plural and short forms.
     * Note, short forms are case sensitive.
     *
     * | Unit | Shorthand | Description
     * | --- | --- | --- |
     * | `day` | `d` | days |
     * | `week` | `w` | weeks |
     * | `month` | `M` | months |
     * | `year` | `y` | years |
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     *
     * const hd1 = new HDate(15, months.CHESHVAN, 5769);
     * const hd2 = hd1.add(1, 'weeks'); // 7 Kislev 5769
     * const hd3 = hd1.add(-3, 'M'); // 30 Av 5768
     */
    subtract(amount, units = 'd') {
        return this.add(amount * -1, units);
    }
    /**
     * Returns the difference in days between the two given HDates.
     *
     * The result is positive if `this` date is comes chronologically
     * after the `other` date, and negative
     * if the order of the two dates is reversed.
     *
     * The result is zero if the two dates are identical.
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     *
     * const hd1 = new HDate(25, months.KISLEV, 5770);
     * const hd2 = new HDate(15, months.CHESHVAN, 5769);
     * const days = hd1.deltaDays(hd2); // 394
     * @param other Hebrew date to compare
     */
    deltaDays(other) {
        return this.abs() - other.abs();
    }
    /**
     * Compares this Hebrew date to another date, returning `true` if the dates match.
     * @param other Hebrew date to compare
     * @example
     * const hd1 = new HDate(new Date(2008, 10, 13));
     * const hd2 = new HDate(15, 'Cheshvan', 5769);
     * hd1.isSameDate(hd2); // true
     */
    isSameDate(other) {
        return this.yy === other.yy && this.mm === other.mm && this.dd === other.dd;
    }
    /**
     * Returns a string representation of this Hebrew date using English transliterations
     * @example
     * const hd = new HDate(new Date(2008, 10, 13)); // 15 Cheshvan 5769
     * hd.toString(); // '15 Cheshvan 5769'
     */
    toString() {
        const day = this.getDate();
        const fullYear = this.getFullYear();
        const monthName = this.getMonthName();
        return `${day} ${monthName} ${fullYear}`;
    }
    /**
     * Returns true if Hebrew year is a leap year
     * @param year Hebrew year
     * @example
     * HDate.isLeapYear(5783); // false
     * HDate.isLeapYear(5784); // true
     */
    static isLeapYear(year) {
        return isLeapYear(year);
    }
    /**
     * Number of months in this Hebrew year (either 12 or 13 depending on leap year)
     * @param year Hebrew year
     * @example
     * HDate.monthsInYear(5783); // 12
     * HDate.monthsInYear(5784); // 13
     */
    static monthsInYear(year) {
        return monthsInYear(year);
    }
    /**
     * Number of days in Hebrew month in a given year (29 or 30)
     * @param month Hebrew month (e.g. months.TISHREI)
     * @param year Hebrew year
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * HDate.daysInMonth(months.CHESHVAN, 5769); // 29
     */
    static daysInMonth(month, year) {
        return daysInMonth(month, year);
    }
    /**
     * Returns a transliterated string name of Hebrew month in year,
     * for example 'Elul' or 'Cheshvan'.
     * @param month Hebrew month (e.g. months.TISHREI)
     * @param year Hebrew year
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * HDate.getMonthName(months.CHESHVAN, 5769); // 'Cheshvan'
     */
    static getMonthName(month, year) {
        return getMonthName(month, year);
    }
    /**
     * Returns the Hebrew month number (NISAN=1, TISHREI=7)
     * @param month A number, or Hebrew month name string
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * HDate.monthNum(months.CHESHVAN); // 8
     * HDate.monthNum('Cheshvan'); // 8
     * HDate.monthNum('חשון'); // 8
     */
    static monthNum(month) {
        if (typeof month === 'number') {
            if (isNaN(month) || month > 14) {
                throw new RangeError(`bad monthNum: ${month}`);
            }
            return month;
        }
        return month.charCodeAt(0) >= 48 && month.charCodeAt(0) <= 57 /* number */
            ? parseInt(month, 10)
            : HDate.monthFromName(month);
    }
    /**
     * Number of days in the Hebrew year.
     * Regular years can have 353, 354, or 355 days.
     * Leap years can have 383, 384, or 385 days.
     * @param year Hebrew year
     * @example
     * HDate.daysInYear(5783); // 355
     * HDate.daysInYear(5784); // 383
     */
    static daysInYear(year) {
        return daysInYear(year);
    }
    /**
     * true if Cheshvan is long in Hebrew year
     * @param year Hebrew year
     * @example
     * HDate.longCheshvan(5783); // true
     * HDate.longCheshvan(5784); // false
     */
    static longCheshvan(year) {
        return longCheshvan(year);
    }
    /**
     * true if Kislev is short in Hebrew year
     * @param year Hebrew year
     * @example
     * HDate.shortKislev(5783); // false
     * HDate.shortKislev(5784); // true
     */
    static shortKislev(year) {
        return shortKislev(year);
    }
    /**
     * Converts Hebrew month string name to numeric
     * @example
     * import {HDate, months} from '@hebcal/hdate';
     * HDate.monthFromName(months.CHESHVAN); // 8
     * HDate.monthFromName('Cheshvan'); // 8
     * HDate.monthFromName('חשון'); // 8
     */
    static monthFromName(monthName) {
        if (typeof monthName === 'number') {
            if (isNaN(monthName) || monthName < 1 || monthName > 14) {
                throw new RangeError(`bad monthName: ${monthName}`);
            }
            return monthName;
        }
        const name = Locale.hebrewStripNikkud(monthName);
        return monthFromName(name);
    }
    /**
     * Convenience function for determining the R.D. date
     * near a specified R.D. date, corresponding to the specified day of week.
     *
     * Note: Applying this function to d+6 gives us the `dayOfWeek` on or after an
     * absolute day d. Similarly, applying it to d+3 gives the `dayOfWeek` nearest to
     * absolute date d, applying it to d-1 gives the `dayOfWeek` previous to absolute
     * date d, and applying it to d+7 gives the `dayOfWeek` following absolute date d.
     * @param dayOfWeek day of week: Sunday=0, Saturday=6
     */
    static dayOnOrBefore(dayOfWeek, absdate) {
        return absdate - ((absdate - dayOfWeek) % 7);
    }
    /**
     * Tests if the object is an instance of `HDate`
     * @example
     * HDate.isHDate(new HDate()); // true
     * HDate.isHDate(new Date()); // false
     * HDate.isHDate(null); // false
     * HDate.isHDate(12345); // false
     * HDate.isHDate('15 Cheshvan 5769'); // false
     */
    static isHDate(obj) {
        return (obj !== null &&
            typeof obj === 'object' &&
            typeof obj.yy === 'number' &&
            typeof obj.mm === 'number' &&
            typeof obj.dd === 'number' &&
            typeof obj.greg === 'function' &&
            typeof obj.abs === 'function');
    }
    /**
     * Construct a new instance of `HDate` from a Gematriya-formatted string
     * @example
     * HDate.fromGematriyaString('כ״ז בְּתַמּוּז תשפ״ג') // 27 Tamuz 5783
     * HDate.fromGematriyaString('כ׳ סיון תש״ד') // 20 Sivan 5704
     * HDate.fromGematriyaString('ה׳ אִיָיר תש״ח') // 5 Iyyar 5708
     */
    static fromGematriyaString(str, currentThousands = 5000) {
        const parts = str.split(' ').filter(x => x.length !== 0);
        const numParts = parts.length;
        if (numParts !== 3 && numParts !== 4) {
            throw new RangeError(`cannot parse gematriya str: "${str}"`);
        }
        const day = gematriyaStrToNum(parts[0]);
        const monthStr = numParts === 3 ? parts[1] : parts[1] + ' ' + parts[2];
        const month = HDate.monthFromName(monthStr);
        const yearStr = numParts === 3 ? parts[2] : parts[3];
        let year = gematriyaStrToNum(yearStr);
        if (year < 1000) {
            year += currentThousands;
        }
        return new HDate(day, month, year);
    }
}
function standardizeUnits(units) {
    switch (units) {
        case 'd':
            return UNITS_DAY;
        case 'w':
            return UNITS_WEEK;
        case 'M':
            return UNITS_MONTH;
        case 'y':
            return UNITS_YEAR;
    }
    const str = String(units || '')
        .toLowerCase()
        .replace(/s$/, '');
    switch (str) {
        case UNITS_DAY:
        case UNITS_WEEK:
        case UNITS_MONTH:
        case UNITS_YEAR:
            return str;
    }
    throw new TypeError(`Invalid units '${units}'`);
}
function getDayOfTranslation(locale) {
    switch (locale) {
        case 'en':
        case 's':
        case 'a':
        case 'ashkenazi':
            return ' of';
    }
    const ofStr = Locale.lookupTranslation('of', locale);
    if (ofStr) {
        return ' ' + ofStr;
    }
    if (locale.startsWith('ashkenazi')) {
        return ' of';
    }
    return '';
}
/**
 * Sets the day of the month of the date. Returns the object it was called upon
 * @private
 * @param month A number, or Hebrew month name string
 */
function setMonth(hd, month) {
    hd.mm = HDate.monthNum(month);
    fix(hd);
    return hd;
}
function setDate(hd, date) {
    hd.dd = date;
    fix(hd);
    return hd;
}
function fix(hd) {
    fixMonth(hd);
    fixDate(hd);
}
function fixDate(hd) {
    if (hd.dd < 1) {
        if (hd.mm === months.TISHREI) {
            hd.yy -= 1;
        }
        hd.dd += daysInMonth(hd.mm, hd.yy);
        hd.mm -= 1;
        fix(hd);
    }
    if (hd.dd > daysInMonth(hd.mm, hd.yy)) {
        if (hd.mm === months.ELUL) {
            hd.yy += 1;
        }
        hd.dd -= daysInMonth(hd.mm, hd.yy);
        if (hd.mm === monthsInYear(hd.yy)) {
            hd.mm = 1; // rollover to NISAN
        }
        else {
            hd.mm += 1;
        }
        fix(hd);
    }
    fixMonth(hd);
}
function fixMonth(hd) {
    if (hd.mm === months.ADAR_II && !hd.isLeapYear()) {
        hd.mm -= 1; // to Adar I
        fix(hd);
    }
    else if (hd.mm < 1) {
        hd.mm += monthsInYear(hd.yy);
        hd.yy -= 1;
        fix(hd);
    }
    else if (hd.mm > monthsInYear(hd.yy)) {
        hd.mm -= monthsInYear(hd.yy);
        hd.yy += 1;
        fix(hd);
    }
    delete hd.rd;
}
function onOrBefore(day, t, offset) {
    return new HDate(HDate.dayOnOrBefore(day, t.abs() + offset));
}

var poAshkenazi = { "headers": { "plural-forms": "nplurals=2; plural=(n > 1);", "language": "en_CA@ashkenazi" }, "contexts": { "": { "Shabbat": ["Shabbos"], "Achrei Mot": ["Achrei Mos"], "Bechukotai": ["Bechukosai"], "Beha'alotcha": ["Beha’aloscha"], "Bereshit": ["Bereshis"], "Chukat": ["Chukas"], "Erev Shavuot": ["Erev Shavuos"], "Erev Sukkot": ["Erev Sukkos"], "Ki Tavo": ["Ki Savo"], "Ki Teitzei": ["Ki Seitzei"], "Ki Tisa": ["Ki Sisa"], "Matot": ["Matos"], "Purim Katan": ["Purim Koton"], "Shabbat Chazon": ["Shabbos Chazon"], "Shabbat HaChodesh": ["Shabbos HaChodesh"], "Shabbat HaGadol": ["Shabbos HaGadol"], "Shabbat Nachamu": ["Shabbos Nachamu"], "Shabbat Parah": ["Shabbos Parah"], "Shabbat Shekalim": ["Shabbos Shekalim"], "Shabbat Shuva": ["Shabbos Shuvah"], "Shabbat Zachor": ["Shabbos Zachor"], "Shavuot": ["Shavuos"], "Shavuot I": ["Shavuos I"], "Shavuot II": ["Shavuos II"], "Shemot": ["Shemos"], "Shmini Atzeret": ["Shmini Atzeres"], "Simchat Torah": ["Simchas Torah"], "Sukkot": ["Sukkos"], "Sukkot I": ["Sukkos I"], "Sukkot II": ["Sukkos II"], "Sukkot II (CH''M)": ["Sukkos II (CH’’M)"], "Sukkot III (CH''M)": ["Sukkos III (CH’’M)"], "Sukkot IV (CH''M)": ["Sukkos IV (CH’’M)"], "Sukkot V (CH''M)": ["Sukkos V (CH’’M)"], "Sukkot VI (CH''M)": ["Sukkos VI (CH’’M)"], "Sukkot VII (Hoshana Raba)": ["Sukkos VII (Hoshana Raba)"], "Ta'anit Bechorot": ["Ta’anis Bechoros"], "Ta'anit Esther": ["Ta’anis Esther"], "Toldot": ["Toldos"], "Vaetchanan": ["Vaeschanan"], "Yitro": ["Yisro"], "Vezot Haberakhah": ["Vezos Haberakhah"], "Parashat": ["Parshas"], "Leil Selichot": ["Leil Selichos"], "Shabbat Mevarchim Chodesh": ["Shabbos Mevorchim Chodesh"], "Shabbat Shirah": ["Shabbos Shirah"], "Asara B'Tevet": ["Asara B’Teves"], "Alot HaShachar": ["Alos HaShachar"], "Kriat Shema, sof zeman": ["Krias Shema, sof zman"], "Tefilah, sof zeman": ["Tefilah, sof zman"], "Kriat Shema, sof zeman (MGA)": ["Krias Shema, sof zman (MGA)"], "Tefilah, sof zeman (MGA)": ["Tefilah, sof zman (MGA)"], "Chatzot HaLailah": ["Chatzos HaLailah"], "Chatzot hayom": ["Chatzos"], "Tzeit HaKochavim": ["Tzeis HaKochavim"], "Birkat Hachamah": ["Birkas Hachamah"], "Shushan Purim Katan": ["Shushan Purim Koton"] } } };

var poHe = { "headers": { "plural-forms": "nplurals=2; plural=(n > 1);", "language": "he_IL" }, "contexts": { "": { "Shabbat": ["שַׁבָּת"], "Parashat": ["פָּרָשַׁת"], "Achrei Mot": ["אַחֲרֵי מוֹת"], "Balak": ["בָּלָק"], "Bamidbar": ["בְּמִדְבַּר"], "Bechukotai": ["בְּחֻקֹּתַי"], "Beha'alotcha": ["בְּהַעֲלֹתְךָ"], "Behar": ["בְּהַר"], "Bereshit": ["בְּרֵאשִׁית"], "Beshalach": ["בְּשַׁלַּח"], "Bo": ["בֹּא"], "Chayei Sara": ["חַיֵּי שָֹרָה"], "Chukat": ["חֻקַּת"], "Devarim": ["דְּבָרִים"], "Eikev": ["עֵקֶב"], "Emor": ["אֱמוֹר"], "Ha'azinu": ["הַאֲזִינוּ"], "Kedoshim": ["קְדשִׁים"], "Ki Tavo": ["כִּי־תָבוֹא"], "Ki Teitzei": ["כִּי־תֵצֵא"], "Ki Tisa": ["כִּי תִשָּׂא"], "Korach": ["קֹרַח"], "Lech-Lecha": ["לֶךְ־לְךָ"], "Masei": ["מַסְעֵי"], "Matot": ["מַטּוֹת"], "Metzora": ["מְצֹרָע"], "Miketz": ["מִקֵּץ"], "Mishpatim": ["מִשְׁפָּטִים"], "Nasso": ["נָשׂא"], "Nitzavim": ["נִצָּבִים"], "Noach": ["נֹחַ"], "Pekudei": ["פְקוּדֵי"], "Pinchas": ["פִּינְחָס"], "Re'eh": ["רְאֵה"], "Sh'lach": ["שְׁלַח־לְךָ"], "Shemot": ["שְׁמוֹת"], "Shmini": ["שְּׁמִינִי"], "Shoftim": ["שׁוֹפְטִים"], "Tazria": ["תַזְרִיעַ"], "Terumah": ["תְּרוּמָה"], "Tetzaveh": ["תְּצַוֶּה"], "Toldot": ["תּוֹלְדוֹת"], "Tzav": ["צַו"], "Vaera": ["וָאֵרָא"], "Vaetchanan": ["וָאֶתְחַנַּן"], "Vayakhel": ["וַיַּקְהֵל"], "Vayechi": ["וַיְחִי"], "Vayeilech": ["וַיֵּלֶךְ"], "Vayera": ["וַיֵּרָא"], "Vayeshev": ["וַיֵּשֶׁב"], "Vayetzei": ["וַיֵּצֵא"], "Vayigash": ["וַיִּגַּשׁ"], "Vayikra": ["וַיִּקְרָא"], "Vayishlach": ["וַיִּשְׁלַח"], "Vezot Haberakhah": ["וְזֹאת הַבְּרָכָה"], "Yitro": ["יִתְרוֹ"], "Asara B'Tevet": ["עֲשָׂרָה בְּטֵבֵת"], "Candle lighting": ["הַדְלָקַת נֵרוֹת"], "Chanukah": ["חֲנוּכָּה"], "Chanukah: 1 Candle": ["חֲנוּכָּה: א׳ נֵר"], "Chanukah: 2 Candles": ["חֲנוּכָּה: ב׳ נֵרוֹת"], "Chanukah: 3 Candles": ["חֲנוּכָּה: ג׳ נֵרוֹת"], "Chanukah: 4 Candles": ["חֲנוּכָּה: ד׳ נֵרוֹת"], "Chanukah: 5 Candles": ["חֲנוּכָּה: ה׳ נֵרוֹת"], "Chanukah: 6 Candles": ["חֲנוּכָּה: ו׳ נֵרוֹת"], "Chanukah: 7 Candles": ["חֲנוּכָּה: ז׳ נֵרוֹת"], "Chanukah: 8 Candles": ["חֲנוּכָּה: ח׳ נֵרוֹת"], "Chanukah: 8th Day": ["חֲנוּכָּה: יוֹם ח׳"], "Days of the Omer": ["סְפִירַת הָעוֹמֶר"], "Omer": ["עוֹמֶר"], "day of the Omer": ["בָּעוֹמֶר"], "Erev Pesach": ["עֶרֶב פֶּסַח"], "Erev Purim": ["עֶרֶב פּוּרִים"], "Erev Rosh Hashana": ["עֶרֶב רֹאשׁ הַשָּׁנָה"], "Erev Shavuot": ["עֶרֶב שָׁבוּעוֹת"], "Erev Simchat Torah": ["עֶרֶב שִׂמְחַת תּוֹרָה"], "Erev Sukkot": ["עֶרֶב סוּכּוֹת"], "Erev Tish'a B'Av": ["עֶרֶב תִּשְׁעָה בְּאָב"], "Erev Yom Kippur": ["עֶרֶב יוֹם כִּפּוּר"], "Havdalah": ["הַבְדָּלָה"], "Lag BaOmer": ["ל״ג בָּעוֹמֶר"], "Leil Selichot": ["סְלִיחוֹת"], "Pesach": ["פֶּסַח"], "Pesach I": ["פֶּסַח א׳"], "Pesach II": ["פֶּסַח ב׳"], "Pesach II (CH''M)": ["פֶּסַח ב׳ (חוה״מ)"], "Pesach III (CH''M)": ["פֶּסַח ג׳ (חוה״מ)"], "Pesach IV (CH''M)": ["פֶּסַח ד׳ (חוה״מ)"], "Pesach Sheni": ["פֶּסַח שֵׁנִי"], "Pesach V (CH''M)": ["פֶּסַח ה׳ (חוה״מ)"], "Pesach VI (CH''M)": ["פֶּסַח ו׳ (חוה״מ)"], "Pesach VII": ["פֶּסַח ז׳"], "Pesach VIII": ["פֶּסַח ח׳"], "Purim": ["פּוּרִים"], "Purim Katan": ["פּוּרִים קָטָן"], "Rosh Chodesh %s": ["רֹאשׁ חוֹדֶשׁ %s"], "Rosh Chodesh": ["רֹאשׁ חוֹדֶשׁ"], "Rosh Hashana": ["רֹאשׁ הַשָּׁנָה"], "Rosh Hashana I": ["רֹאשׁ הַשָּׁנָה א׳"], "Rosh Hashana II": ["רֹאשׁ הַשָּׁנָה ב׳"], "Shabbat Chazon": ["שַׁבַּת חֲזוֹן"], "Shabbat HaChodesh": ["שַׁבַּת הַחֹדֶשׁ"], "Shabbat HaGadol": ["שַׁבַּת הַגָּדוֹל"], "Shabbat Nachamu": ["שַׁבַּת נַחֲמוּ"], "Shabbat Parah": ["שַׁבַּת פָּרָה"], "Shabbat Shekalim": ["שַׁבַּת שְׁקָלִים"], "Shabbat Shuva": ["שַׁבַּת שׁוּבָה"], "Shabbat Zachor": ["שַׁבַּת זָכוֹר"], "Shavuot": ["שָׁבוּעוֹת"], "Shavuot I": ["שָׁבוּעוֹת א׳"], "Shavuot II": ["שָׁבוּעוֹת ב׳"], "Shmini Atzeret": ["שְׁמִינִי עֲצֶרֶת"], "Shushan Purim": ["שׁוּשָׁן פּוּרִים"], "Sigd": ["חַג הַסִּיגְד"], "Simchat Torah": ["שִׂמְחַת תּוֹרָה"], "Sukkot": ["סוּכּוֹת"], "Sukkot I": ["סוּכּוֹת א׳"], "Sukkot II": ["סוּכּוֹת ב׳"], "Sukkot II (CH''M)": ["סוּכּוֹת ב׳ (חוה״מ)"], "Sukkot III (CH''M)": ["סוּכּוֹת ג׳ (חוה״מ)"], "Sukkot IV (CH''M)": ["סוּכּוֹת ד׳ (חוה״מ)"], "Sukkot V (CH''M)": ["סוּכּוֹת ה׳ (חוה״מ)"], "Sukkot VI (CH''M)": ["סוּכּוֹת ו׳ (חוה״מ)"], "Sukkot VII (Hoshana Raba)": ["סוּכּוֹת ז׳ (הוֹשַׁעְנָא רַבָּה)"], "Ta'anit Bechorot": ["תַּעֲנִית בְּכוֹרוֹת"], "Ta'anit Esther": ["תַּעֲנִית אֶסְתֵּר"], "Tish'a B'Av": ["תִּשְׁעָה בְּאָב"], "Tu B'Av": ["ט״וּ בְּאָב"], "Tu BiShvat": ["ט״וּ בִּשְׁבָט"], "Tu B'Shvat": ["ט״וּ בִּשְׁבָט"], "Tzom Gedaliah": ["צוֹם גְּדַלְיָה"], "Tzom Tammuz": ["צוֹם י״ז בְּתַמּוּז"], "Yom HaAtzma'ut": ["יוֹם הָעַצְמָאוּת"], "Yom HaShoah": ["יוֹם הַשּׁוֹאָה"], "Yom HaZikaron": ["יוֹם הַזִּכָּרוֹן"], "Yom Kippur": ["יוֹם כִּפּוּר"], "Yom Yerushalayim": ["יוֹם יְרוּשָׁלַיִם"], "Yom HaAliyah": ["יוֹם הַעֲלִיָּה"], "Yom HaAliyah School Observance": ["שְׁמִירָת בֵּית הַסֵפֶר לְיוֹם הַעֲלִיָּה"], "Rosh Chodesh Adar": ["רֹאשׁ חוֹדֶשׁ אֲדָר"], "Rosh Chodesh Adar I": ["רֹאשׁ חוֹדֶשׁ אֲדָר א׳"], "Rosh Chodesh Adar II": ["רֹאשׁ חוֹדֶשׁ אֲדָר ב׳"], "Rosh Chodesh Av": ["רֹאשׁ חוֹדֶשׁ אָב"], "Rosh Chodesh Cheshvan": ["רֹאשׁ חוֹדֶשׁ חֶשְׁוָן"], "Rosh Chodesh Elul": ["רֹאשׁ חוֹדֶשׁ אֱלוּל"], "Rosh Chodesh Iyyar": ["רֹאשׁ חוֹדֶשׁ אִיָּיר"], "Rosh Chodesh Kislev": ["רֹאשׁ חוֹדֶשׁ כִּסְלֵו"], "Rosh Chodesh Nisan": ["רֹאשׁ חוֹדֶשׁ נִיסָן"], "Rosh Chodesh Sh'vat": ["רֹאשׁ חוֹדֶשׁ שְׁבָט"], "Rosh Chodesh Sivan": ["רֹאשׁ חוֹדֶשׁ סִיוָן"], "Rosh Chodesh Tamuz": ["רֹאשׁ חוֹדֶשׁ תַּמּוּז"], "Rosh Chodesh Tevet": ["רֹאשׁ חוֹדֶשׁ טֵבֵת"], "min": ["דַּקּוֹת"], "Fast begins": ["תְּחִילַּת הַצוֹם"], "Fast ends": ["סִיּוּם הַצוֹם"], "Rosh Hashana LaBehemot": ["רֹאשׁ הַשָּׁנָה לְמַעְשַׂר בְּהֵמָה"], "Tish'a B'Av (observed)": ["(תִּשְׁעָה בְּאָב (נִדְחָה"], "Shabbat Mevarchim Chodesh": ["שַׁבַּת מְבָרְכִים חוֹדֶשׁ"], "Shabbat Shirah": ["שַׁבַּת שִׁירָה"], "Lovingkindness": ["חֶסֶד"], "Might": ["גְּבוּרָה"], "Beauty": ["תִּפְאֶרֶת"], "Eternity": ["נֶּצַח"], "Splendor": ["הוֹד"], "Foundation": ["יְּסוֹד"], "Majesty": ["מַּלְכוּת"], "day": ["יוֹם"], "Yom Kippur Katan": ["יוֹם כִּפּוּר קָטָן"], "Yizkor": ["יִזְכּוֹר"], "Family Day": ["יוֹם הַמִּשׁפָּחָה"], "Yitzhak Rabin Memorial Day": ["יוֹם הַזִּכָּרוֹן לְיִצְחָק רַבִּין"], "Jabotinsky Day": ["יוֹם זַ׳בּוֹטִינְסְקִי"], "Herzl Day": ["יוֹם הֵרְצְל"], "Ben-Gurion Day": ["יוֹם בן־גוריון"], "Hebrew Language Day": ["יוֹם הַשָׂפָה הַעִברִית"], "Birkat Hachamah": ["בִּרְכַּת הַחַמָּה"], "Shushan Purim Katan": ["שׁוּשָׁן פּוּרִים קָטָן"], "Purim Meshulash": ["פּוּרִים מְשׁוּלָּשׁ"], "Chag HaBanot": ["חַג הַבָּנוֹת"], "Molad": ["מוֹלָד הָלְּבָנָה"], "chalakim": ["חֲלָקִים"] } } };

var noNikudOverride = { "headers": { "plural-forms": "nplurals=2; plural=(n != 1);", "language": "he-x-NoNikud" }, "contexts": { "": { "Korach": ["קורח"], "Chukat": ["חוקת"] } } };

Locale.addTranslations('he', poHe);
Locale.addTranslations('h', poHe);
Locale.addTranslations('ashkenazi', poAshkenazi);
Locale.addTranslations('a', poAshkenazi);
/* Hebrew without nikkud */
const heStrs = poHe.contexts[''];
const heNoNikud = {};
for (const [key, val] of Object.entries(heStrs)) {
    heNoNikud[key] = [Locale.hebrewStripNikkud(val[0])];
}
const poHeNoNikud = {
    headers: poHe.headers,
    contexts: { '': heNoNikud },
};
Locale.addTranslations('he-x-NoNikud', poHeNoNikud);
Locale.addTranslations('he-x-NoNikud', noNikudOverride);

/**
 * Holiday flags for Event. These flags are typically
 * combined using bitwise arithmetic to form a mask.
 * @readonly
 * @enum {number}
 */
const flags = {
    /** Chag, yontiff, yom tov */
    CHAG: 0x000001,
    /** Light candles 18 minutes before sundown */
    LIGHT_CANDLES: 0x000002,
    /** End of holiday (end of Yom Tov)  */
    YOM_TOV_ENDS: 0x000004,
    /** Observed only in the Diaspora (chutz l'aretz)  */
    CHUL_ONLY: 0x000008,
    /** Observed only in Israel */
    IL_ONLY: 0x000010,
    /** Light candles in the evening at Tzeit time (3 small stars) */
    LIGHT_CANDLES_TZEIS: 0x000020,
    /** Candle-lighting for Chanukah */
    CHANUKAH_CANDLES: 0x000040,
    /** Rosh Chodesh, beginning of a new Hebrew month */
    ROSH_CHODESH: 0x000080,
    /** Minor fasts like Tzom Tammuz, Ta'anit Esther, ... */
    MINOR_FAST: 0x000100,
    /** Shabbat Shekalim, Zachor, ... */
    SPECIAL_SHABBAT: 0x000200,
    /** Weekly sedrot on Saturdays */
    PARSHA_HASHAVUA: 0x000400,
    /** Daily page of Talmud (Bavli) */
    DAF_YOMI: 0x000800,
    /** Days of the Omer */
    OMER_COUNT: 0x001000,
    /** Yom HaShoah, Yom HaAtzma'ut, ... */
    MODERN_HOLIDAY: 0x002000,
    /** Yom Kippur and Tish'a B'Av */
    MAJOR_FAST: 0x004000,
    /** On the Saturday before Rosh Chodesh */
    SHABBAT_MEVARCHIM: 0x008000,
    /** Molad */
    MOLAD: 0x010000,
    /** Yahrzeit or Hebrew Anniversary */
    USER_EVENT: 0x020000,
    /** Daily Hebrew date ("11th of Sivan, 5780") */
    HEBREW_DATE: 0x040000,
    /** A holiday that's not major, modern, rosh chodesh, or a fast day */
    MINOR_HOLIDAY: 0x080000,
    /** Evening before a major or minor holiday */
    EREV: 0x100000,
    /** Chol haMoed, intermediate days of Pesach or Sukkot */
    CHOL_HAMOED: 0x200000,
    /** Mishna Yomi */
    MISHNA_YOMI: 0x400000,
    /** Yom Kippur Katan, minor day of atonement on the day preceeding each Rosh Chodesh */
    YOM_KIPPUR_KATAN: 0x800000,
    /** Daily page of Jerusalem Talmud (Yerushalmi) */
    YERUSHALMI_YOMI: 0x1000000,
    /** Nach Yomi */
    NACH_YOMI: 0x2000000,
    /** Daily Learning */
    DAILY_LEARNING: 0x4000000,
    /** Yizkor */
    YIZKOR: 0x8000000,
};
const flagToCategory = [
    [flags.MAJOR_FAST, 'holiday', 'major', 'fast'],
    [flags.CHANUKAH_CANDLES, 'holiday', 'major'],
    [flags.HEBREW_DATE, 'hebdate'],
    [flags.MINOR_FAST, 'holiday', 'fast'],
    [flags.MINOR_HOLIDAY, 'holiday', 'minor'],
    [flags.MODERN_HOLIDAY, 'holiday', 'modern'],
    [flags.MOLAD, 'molad'],
    [flags.OMER_COUNT, 'omer'],
    [flags.PARSHA_HASHAVUA, 'parashat'], // backwards-compat
    [flags.ROSH_CHODESH, 'roshchodesh'],
    [flags.SHABBAT_MEVARCHIM, 'mevarchim'],
    [flags.SPECIAL_SHABBAT, 'holiday', 'shabbat'],
    [flags.USER_EVENT, 'user'],
    [flags.YIZKOR, 'yizkor'],
];
/**
 * Represents an Event with a title, date, and flags.
 *
 * Events are used to represent holidays, candle-lighting times,
 * Torah readings, and more.
 *
 * To get the title of the event a language other than English
 * with Sephardic transliterations, use the `render()` method.
 */
class Event {
    /**
     * Constructs Event
     * @param date Hebrew date event occurs
     * @param desc Description (not translated)
     * @param [mask=0] optional bitmask of holiday flags (see {@link flags})
     * @param [attrs={}] optional additional attributes (e.g. `eventTimeStr`, `cholHaMoedDay`)
     */
    constructor(date, desc, mask = 0, attrs) {
        if (!HDate.isHDate(date)) {
            throw new TypeError(`Invalid Event date: ${date}`);
        }
        else if (typeof desc !== 'string') {
            throw new TypeError(`Invalid Event description: ${desc}`);
        }
        this.date = date;
        this.desc = desc;
        this.mask = +mask;
        if (typeof attrs === 'object' && attrs !== null) {
            Object.assign(this, attrs);
        }
    }
    /**
     * Hebrew date of this event
     */
    getDate() {
        return this.date;
    }
    /**
     * Untranslated title of this event. Note that these description
     * strings are always in English and will remain stable across releases.
     * To get the title of the event in another language, use the
     * `render()` method.
     */
    getDesc() {
        return this.desc;
    }
    /**
     * Bitmask of optional event flags. See {@link flags}
     */
    getFlags() {
        return this.mask;
    }
    /**
     * Returns (translated) description of this event
     * @example
     * const ev = new Event(new HDate(6, 'Sivan', 5749), 'Shavuot', flags.CHAG);
     * ev.render('en'); // 'Shavuot'
     * ev.render('he'); // 'שָׁבוּעוֹת'
     * ev.render('ashkenazi'); // 'Shavuos'
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        return Locale.gettext(this.desc, locale);
    }
    /**
     * Returns a brief (translated) description of this event.
     * For most events, this is the same as render(). For some events, it procudes
     * a shorter text (e.g. without a time or added description).
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        return this.render(locale);
    }
    /**
     * Optional holiday-specific Emoji or `null`.
     */
    getEmoji() {
        return this.emoji || null;
    }
    /**
     * Returns a simplified (untranslated) description for this event. For example,
     * the `HolidayEvent` class supports
     * "Erev Pesach" => "Pesach", and "Sukkot III (CH''M)" => "Sukkot".
     * For many holidays the basename and the event description are the same.
     */
    basename() {
        return this.getDesc();
    }
    /**
     * Returns a URL to hebcal.com or sefaria.org for more detail on the event.
     * Returns `undefined` for events with no detail page.
     */
    url() {
        return undefined;
    }
    /**
     * Is this event observed in Israel?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedInIsrael(); // false
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedInIsrael(); // true
     */
    observedInIsrael() {
        return !(this.mask & flags.CHUL_ONLY);
    }
    /**
     * Is this event observed in the Diaspora?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedInDiaspora(); // true
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedInDiaspora(); // true
     */
    observedInDiaspora() {
        return !(this.mask & flags.IL_ONLY);
    }
    /**
     * Is this event observed in Israel/Diaspora?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedIn(false); // true
     * ev1.observedIn(true); // false
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedIn(false); // true
     * ev2.observedIn(true); // true
     * @param il
     */
    observedIn(il) {
        return il ? this.observedInIsrael() : this.observedInDiaspora();
    }
    /**
     * Makes a clone of this Event object
     * @deprecated
     */
    clone() {
        const ev = new Event(this.date, this.desc, this.mask);
        // overwrite all enumerable properties
        Object.assign(ev, this);
        return ev;
    }
    /**
     * Returns a list of event categories
     */
    getCategories() {
        const mask = this.getFlags();
        for (const attrs of flagToCategory) {
            const attr0 = attrs[0];
            if (mask & attr0) {
                return attrs.slice(1);
            }
        }
        return ['unknown'];
    }
}

/** Daily Hebrew date ("11th of Sivan, 5780") */
class HebrewDateEvent extends Event {
    /**
     * @param date
     */
    constructor(date) {
        super(date, date.toString(), flags.HEBREW_DATE);
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     * @example
     * import {HDate, HebrewDateEvent, months} from '@hebcal/core';
     *
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * const ev = new HebrewDateEvent(hd);
     * console.log(ev.render('en')); // '15th of Cheshvan, 5769'
     * console.log(ev.render('he')); // 'ט״ו חֶשְׁוָן תשס״ט'
     */
    render(locale) {
        const locale1 = locale === null || locale === void 0 ? void 0 : locale.toLowerCase();
        const locale0 = locale1 !== null && locale1 !== void 0 ? locale1 : Locale.getLocaleName();
        const hd = this.getDate();
        switch (locale0) {
            case 'h':
            case 'he':
                return hd.renderGematriya(false);
            case 'he-x-nonikud':
                return hd.renderGematriya(true);
            default:
                return hd.render(locale0, true);
        }
    }
    /**
     * @private
     * @param locale
     */
    renderBriefHebrew(locale) {
        const hd = this.getDate();
        const dd = hd.getDate();
        const mm = Locale.gettext(hd.getMonthName(), locale);
        return gematriya(dd) + ' ' + mm;
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     * @example
     * import {HDate, HebrewDateEvent, months} from '@hebcal/core';
     *
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * const ev = new HebrewDateEvent(hd);
     * console.log(ev.renderBrief()); // '15th of Cheshvan'
     * console.log(ev.renderBrief('he')); // 'ט״ו חֶשְׁוָן'
     */
    renderBrief(locale) {
        const locale1 = locale === null || locale === void 0 ? void 0 : locale.toLowerCase();
        const locale0 = locale1 !== null && locale1 !== void 0 ? locale1 : Locale.getLocaleName();
        const hd = this.getDate();
        if (hd.getMonth() === months.TISHREI && hd.getDate() === 1) {
            return this.render(locale0);
        }
        switch (locale0) {
            case 'h':
            case 'he':
            case 'he-x-nonikud':
                return this.renderBriefHebrew(locale0);
            default:
                return hd.render(locale0, false);
        }
    }
}

/**
 * java.lang.Math.toRadians
 * @private
 * @param degrees
 */
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
/**
 * java.lang.Math.toDegrees
 * @private
 * @param radians
 */
function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * A class that contains location information such as latitude and longitude required for astronomical calculations. The
 * elevation field may not be used by some calculation engines and would be ignored if set.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2016
 * @version 1.1
 */
class GeoLocation {
    /**
     * GeoLocation constructor with parameters for all required fields.
     *
     * @param {string} name
     *            The location name for display use such as &quot;Lakewood, NJ&quot;
     * @param {number} latitude
     *            the latitude in a double format such as 40.095965 for Lakewood, NJ.
     *            <b>Note: </b> For latitudes south of the equator, a negative value should be used.
     * @param {number} longitude
     *            double the longitude in a double format such as -74.222130 for Lakewood, NJ.
     *            <b>Note: </b> For longitudes west of the <a href="http://en.wikipedia.org/wiki/Prime_Meridian">Prime
     *            Meridian </a> (Greenwich), a negative value should be used.
     * @param {number} elevation
     *            the elevation above sea level in Meters. Elevation is not used in most algorithms used for calculating
     *            sunrise and set.
     * @param {string} timeZoneId
     *            the <code>TimeZone</code> for the location.
     */
    constructor(name, latitude, longitude, elevation, timeZoneId) {
        /**
         * @private
         */
        this.locationName = null;
        this.setLocationName(name);
        this.setLatitude(latitude);
        this.setLongitude(longitude);
        this.setElevation(elevation);
        this.setTimeZone(timeZoneId);
    }
    /**
     * Method to get the elevation in Meters.
     *
     * @return {number} Returns the elevation in Meters.
     */
    getElevation() {
        return this.elevation;
    }
    /**
     * Method to set the elevation in Meters <b>above </b> sea level.
     *
     * @param {number} elevation
     *            The elevation to set in Meters. An Error will be thrown if the value is a negative.
     */
    setElevation(elevation) {
        if (typeof elevation !== 'number')
            throw new TypeError('Invalid elevation');
        if (elevation < 0) {
            throw new RangeError(`elevation ${elevation} must be zero or positive`);
        }
        this.elevation = elevation;
    }
    setLatitude(latitude) {
        if (typeof latitude !== 'number')
            throw new TypeError('Invalid latitude');
        if (latitude < -90 || latitude > 90) {
            throw new RangeError(`Latitude ${latitude} out of range [-90,90]`);
        }
        this.latitude = latitude;
    }
    /**
     * @return {number} Returns the latitude.
     */
    getLatitude() {
        return this.latitude;
    }
    setLongitude(longitude) {
        if (typeof longitude !== 'number')
            throw new TypeError('Invalid longitude');
        if (longitude < -180 || longitude > 180) {
            throw new RangeError(`Longitude ${longitude} out of range [-180,180]`);
        }
        this.longitude = longitude;
    }
    /**
     * @return {number} Returns the longitude.
     */
    getLongitude() {
        return this.longitude;
    }
    /**
     * @return {string|null} Returns the location name.
     */
    getLocationName() {
        return this.locationName;
    }
    /**
     * @param {string|null} name
     *            The setter method for the display name.
     */
    setLocationName(name) {
        this.locationName = name;
    }
    /**
     * @return {string} Returns the timeZone.
     */
    getTimeZone() {
        return this.timeZoneId;
    }
    /**
     * Method to set the TimeZone.
     * @param {string} timeZoneId
     *            The timeZone to set.
     */
    setTimeZone(timeZoneId) {
        if (!timeZoneId) {
            throw new RangeError('Invalid timeZoneId');
        }
        this.timeZoneId = timeZoneId;
    }
}
/**
 * The commonly used average solar refraction. Calendrical Calculations lists a more accurate global average of
 * 34.478885263888294
 * @private
 */
const refraction = 34 / 60;
// private double refraction = 34.478885263888294 / 60d;
/**
 * The commonly used average solar radius in minutes of a degree.
 * @private
 */
const solarRadius = 16 / 60;
/**
 * The commonly used average earth radius in KM. At this time, this only affects elevation adjustment and not the
 * sunrise and sunset calculations. The value currently defaults to 6356.9 KM.
 * @private
 */
const earthRadius = 6356.9; // in KM
/**
 * Implementation of sunrise and sunset methods to calculate astronomical times based on the <a
 * href="http://noaa.gov">NOAA</a> algorithm. This calculator uses the Java algorithm based on the implementation by <a
 * href="http://noaa.gov">NOAA - National Oceanic and Atmospheric Administration</a>'s <a href =
 * "http://www.srrb.noaa.gov/highlights/sunrise/sunrise.html">Surface Radiation Research Branch</a>. NOAA's <a
 * href="http://www.srrb.noaa.gov/highlights/sunrise/solareqns.PDF">implementation</a> is based on equations from <a
 * href="http://www.willbell.com/math/mc1.htm">Astronomical Algorithms</a> by <a
 * href="http://en.wikipedia.org/wiki/Jean_Meeus">Jean Meeus</a>. Added to the algorithm is an adjustment of the zenith
 * to account for elevation. The algorithm can be found in the <a
 * href="http://en.wikipedia.org/wiki/Sunrise_equation">Wikipedia Sunrise Equation</a> article.
 *
 * @author &copy; Eliyahu Hershfeld 2011 - 2019
 */
class NOAACalculator {
    /**
     * A constructor that takes in <a href="http://en.wikipedia.org/wiki/Geolocation">geolocation</a> information as a
     * parameter.
     *
     * @param {GeoLocation} geoLocation
     *            The location information used for calculating astronomical sun times.
     * @param {Temporal.PlainDate} date
     */
    constructor(geoLocation, date) {
        this.date = date;
        this.geoLocation = geoLocation;
    }
    /**
     * The getSunrise method Returns a `Date` representing the
     * {@link getElevationAdjustment elevation adjusted} sunrise time. The zenith used
     * for the calculation uses {@link GEOMETRIC_ZENITH geometric zenith} of 90&deg; plus
     * {@link getElevationAdjustment}. This is adjusted
     * to add approximately 50/60 of a degree to account for 34 archminutes of refraction
     * and 16 archminutes for the sun's radius for a total of {@link adjustZenith 90.83333&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} the `Date` representing the exact sunrise time. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the page.
     * @see adjustZenith
     * @see getSeaLevelSunrise()
     * @see getUTCSunrise
     */
    getSunrise() {
        const sunrise = this.getUTCSunrise0(NOAACalculator.GEOMETRIC_ZENITH);
        if (isNaN(sunrise))
            return null;
        return this.getDateFromTime(sunrise, true);
    }
    /**
     * A method that returns the sunrise without {@link getElevationAdjustment elevation
     * adjustment}. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible light,
     * something that is not affected by elevation. This method returns sunrise calculated at sea level. This forms the
     * base for dawn calculations that are calculated as a dip below the horizon before sunrise.
     *
     * @return {Temporal.ZonedDateTime | null} the `Date` representing the exact sea-level sunrise time. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the page.
     * @see getSunrise
     * @see getUTCSeaLevelSunrise
     * @see getSeaLevelSunset()
     */
    getSeaLevelSunrise() {
        const sunrise = this.getUTCSeaLevelSunrise(NOAACalculator.GEOMETRIC_ZENITH);
        if (isNaN(sunrise))
            return null;
        return this.getDateFromTime(sunrise, true);
    }
    /**
     * A method that returns the beginning of civil twilight (dawn) using a zenith of {@link CIVIL_ZENITH 96&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the beginning of civil twilight using a zenith of 96&deg;. If the calculation
     *         can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see CIVIL_ZENITH
     */
    getBeginCivilTwilight() {
        return this.getSunriseOffsetByDegrees(NOAACalculator.CIVIL_ZENITH);
    }
    /**
     * A method that returns the beginning of nautical twilight using a zenith of {@link NAUTICAL_ZENITH 102&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the beginning of nautical twilight using a zenith of 102&deg;. If the
     *         calculation can't be computed null will be returned. See detailed explanation on top of the page.
     * @see NAUTICAL_ZENITH
     */
    getBeginNauticalTwilight() {
        return this.getSunriseOffsetByDegrees(NOAACalculator.NAUTICAL_ZENITH);
    }
    /**
     * A method that returns the beginning of astronomical twilight using a zenith of {@link ASTRONOMICAL_ZENITH
     * 108&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the beginning of astronomical twilight using a zenith of 108&deg;. If the
     *         calculation can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see ASTRONOMICAL_ZENITH
     */
    getBeginAstronomicalTwilight() {
        return this.getSunriseOffsetByDegrees(NOAACalculator.ASTRONOMICAL_ZENITH);
    }
    /**
     * The getSunset method Returns a `Date` representing the
     * {@link getElevationAdjustment elevation adjusted} sunset time. The zenith used for
     * the calculation uses {@link GEOMETRIC_ZENITH geometric zenith} of 90&deg; plus
     * {@link getElevationAdjustment}. This is adjusted
     * to add approximately 50/60 of a degree to account for 34 archminutes of refraction
     * and 16 archminutes for the sun's radius for a total of {@link adjustZenith 90.83333&deg;}.
     * Note:
     * In certain cases the calculates sunset will occur before sunrise. This will typically happen when a timezone
     * other than the local timezone is used (calculating Los Angeles sunset using a GMT timezone for example). In this
     * case the sunset date will be incremented to the following date.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` representing the exact sunset time. If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the page.
     * @see adjustZenith
     * @see getSeaLevelSunset()
     * @see getUTCSunset
     */
    getSunset() {
        const sunset = this.getUTCSunset0(NOAACalculator.GEOMETRIC_ZENITH);
        if (isNaN(sunset))
            return null;
        return this.getDateFromTime(sunset, false);
    }
    /**
     * A method that returns the sunset without {@link getElevationAdjustment elevation
     * adjustment}. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible light,
     * something that is not affected by elevation. This method returns sunset calculated at sea level. This forms the
     * base for dusk calculations that are calculated as a dip below the horizon after sunset.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` representing the exact sea-level sunset time. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the page.
     * @see getSunset
     * @see getUTCSeaLevelSunset
     */
    getSeaLevelSunset() {
        const sunset = this.getUTCSeaLevelSunset(NOAACalculator.GEOMETRIC_ZENITH);
        if (isNaN(sunset))
            return null;
        return this.getDateFromTime(sunset, false);
    }
    /**
     * A method that returns the end of civil twilight using a zenith of {@link CIVIL_ZENITH 96&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the end of civil twilight using a zenith of {@link CIVIL_ZENITH 96&deg;}. If
     *         the calculation can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see CIVIL_ZENITH
     */
    getEndCivilTwilight() {
        return this.getSunsetOffsetByDegrees(NOAACalculator.CIVIL_ZENITH);
    }
    /**
     * A method that returns the end of nautical twilight using a zenith of {@link NAUTICAL_ZENITH 102&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the end of nautical twilight using a zenith of {@link NAUTICAL_ZENITH 102&deg;}
     *         . If the calculation can't be computed, null will be returned. See detailed explanation on top of the
     *         page.
     * @see NAUTICAL_ZENITH
     */
    getEndNauticalTwilight() {
        return this.getSunsetOffsetByDegrees(NOAACalculator.NAUTICAL_ZENITH);
    }
    /**
     * A method that returns the end of astronomical twilight using a zenith of {@link ASTRONOMICAL_ZENITH 108&deg;}.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` of the end of astronomical twilight using a zenith of {@link ASTRONOMICAL_ZENITH
     *         108&deg;}. If the calculation can't be computed, null will be returned. See detailed explanation on top
     *         of the page.
     * @see ASTRONOMICAL_ZENITH
     */
    getEndAstronomicalTwilight() {
        return this.getSunsetOffsetByDegrees(NOAACalculator.ASTRONOMICAL_ZENITH);
    }
    /**
     * A utility method that returns a date offset by the offset time passed in. Please note that the level of light
     * during twilight is not affected by elevation, so if this is being used to calculate an offset before sunrise or
     * after sunset with the intent of getting a rough "level of light" calculation, the sunrise or sunset time passed
     * to this method should be sea level sunrise and sunset.
     *
     * @param {Temporal.ZonedDateTime | null} time
     *            the start time
     * @param {number} offset
     *            the offset in milliseconds to add to the time.
     * @return {Temporal.ZonedDateTime | null} the `Date` with the offset in milliseconds added to it
     */
    static getTimeOffset(time, offset) {
        if (time === null || isNaN(offset)) {
            return null;
        }
        return time.add({ milliseconds: offset });
    }
    /**
     * A utility method that returns the time of an offset by degrees below or above the horizon of
     * {@link getSunrise() sunrise}. Note that the degree offset is from the vertical, so for a calculation of 14&deg;
     * before sunrise, an offset of 14 + {@link GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     *
     * @param {number} offsetZenith
     *            the degrees before {@link getSunrise} to use in the calculation. For time after sunrise use
     *            negative numbers. Note that the degree offset is from the vertical, so for a calculation of 14&deg;
     *            before sunrise, an offset of 14 + {@link GEOMETRIC_ZENITH} = 104 would have to be passed as a
     *            parameter.
     * @return {Temporal.ZonedDateTime | null} The `Date` of the offset after (or before) {@link getSunrise}. If the calculation
     *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does
     *         not rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         page.
     */
    getSunriseOffsetByDegrees(offsetZenith) {
        const dawn = this.getUTCSunrise0(offsetZenith);
        if (isNaN(dawn))
            return null;
        return this.getDateFromTime(dawn, true);
    }
    /**
     * A utility method that returns the time of an offset by degrees below or above the horizon of {@link getSunset()
     * sunset}. Note that the degree offset is from the vertical, so for a calculation of 14&deg; after sunset, an
     * offset of 14 + {@link GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     *
     * @param {number} offsetZenith
     *            the degrees after {@link getSunset} to use in the calculation. For time before sunset use negative
     *            numbers. Note that the degree offset is from the vertical, so for a calculation of 14&deg; after
     *            sunset, an offset of 14 + {@link GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     * @return {Temporal.ZonedDateTime | null} The `Date`of the offset after (or before) {@link getSunset}. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         page.
     */
    getSunsetOffsetByDegrees(offsetZenith) {
        const sunset = this.getUTCSunset0(offsetZenith);
        if (isNaN(sunset))
            return null;
        return this.getDateFromTime(sunset, false);
    }
    /**
     * A method that returns the sunrise in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time.
     *
     * @param {number} zenith
     *            the degrees below the horizon. For time after sunrise use negative numbers.
     * @return {number} The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, `NaN` will be returned. See detailed explanation on top of the page.
     */
    getUTCSunrise0(zenith) {
        return this.getUTCSunrise(this.getAdjustedDate(), this.geoLocation, zenith, true);
    }
    /**
     * A method that returns the sunrise in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible
     * light, something that is not affected by elevation. This method returns UTC sunrise calculated at sea level. This
     * forms the base for dawn calculations that are calculated as a dip below the horizon before sunrise.
     *
     * @param {number} zenith
     *            the degrees below the horizon. For time after sunrise use negative numbers.
     * @return {number} The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, `NaN` will be returned. See detailed explanation on top of the page.
     * @see getUTCSunrise
     * @see getUTCSeaLevelSunset
     */
    getUTCSeaLevelSunrise(zenith) {
        return this.getUTCSunrise(this.getAdjustedDate(), this.geoLocation, zenith, false);
    }
    /**
     * A method that returns the sunset in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time.
     *
     * @param {number} zenith
     *            the degrees below the horizon. For time after sunset use negative numbers.
     * @return {number} The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, `NaN` will be returned. See detailed explanation on top of the page.
     * @see getUTCSeaLevelSunset
     */
    getUTCSunset0(zenith) {
        return this.getUTCSunset(this.getAdjustedDate(), this.geoLocation, zenith, true);
    }
    /**
     * A method that returns the sunset in UTC time without correction for elevation, time zone offset from GMT and
     * without using daylight savings time. Non-sunrise and sunset calculations such as dawn and dusk, depend on the
     * amount of visible light, something that is not affected by elevation. This method returns UTC sunset calculated
     * at sea level. This forms the base for dusk calculations that are calculated as a dip below the horizon after
     * sunset.
     *
     * @param {number} zenith
     *            the degrees below the horizon. For time before sunset use negative numbers.
     * @return {number} The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, `NaN` will be returned. See detailed explanation on top of the page.
     * @see getUTCSunset
     * @see getUTCSeaLevelSunrise
     */
    getUTCSeaLevelSunset(zenith) {
        return this.getUTCSunset(this.getAdjustedDate(), this.geoLocation, zenith, false);
    }
    /**
     * Adjusts the <code>Calendar</code> to deal with edge cases where the location crosses the antimeridian.
     * @private
     * @see GeoLocation#getAntimeridianAdjustment()
     * @return the adjusted Calendar
     */
    getAdjustedDate() {
        return this.date;
    }
    /**
     * Method to return the adjustment to the zenith required to account for the elevation. Since a person at a higher
     * elevation can see farther below the horizon, the calculation for sunrise / sunset is calculated below the horizon
     * used at sea level. This is only used for sunrise and sunset and not times before or after it such as
     * {@link getBeginNauticalTwilight() nautical twilight} since those
     * calculations are based on the level of available light at the given dip below the horizon, something that is not
     * affected by elevation, the adjustment should only made if the zenith == 90&deg; {@link adjustZenith adjusted}
     * for refraction and solar radius. The algorithm used is
     *
     * <pre>
     * elevationAdjustment = Math.toDegrees(Math.acos(earthRadiusInMeters / (earthRadiusInMeters + elevationMeters)));
     * </pre>
     *
     * The source of this algorithm is <a href="http://www.calendarists.com">Calendrical Calculations</a> by Edward M.
     * Reingold and Nachum Dershowitz. An alternate algorithm that produces an almost identical (but not accurate)
     * result found in Ma'aglay Tzedek by Moishe Kosower and other sources is:
     *
     * <pre>
     * elevationAdjustment = 0.0347 * Math.sqrt(elevationMeters);
     * </pre>
     *
     * @param {number} elevation
     *            elevation in Meters.
     * @return {number} the adjusted zenith
     */
    getElevationAdjustment(elevation) {
        // double elevationAdjustment = 0.0347 * Math.sqrt(elevation);
        const elevationAdjustment = radiansToDegrees(Math.acos(earthRadius / (earthRadius + elevation / 1000)));
        return elevationAdjustment;
    }
    /**
     * Adjusts the zenith of astronomical sunrise and sunset to account for solar refraction, solar radius and
     * elevation. The value for Sun's zenith and true rise/set Zenith (used in this class and subclasses) is the angle
     * that the center of the Sun makes to a line perpendicular to the Earth's surface. If the Sun were a point and the
     * Earth were without an atmosphere, true sunset and sunrise would correspond to a 90&deg; zenith. Because the Sun
     * is not a point, and because the atmosphere refracts light, this 90&deg; zenith does not, in fact, correspond to
     * true sunset or sunrise, instead the centre of the Sun's disk must lie just below the horizon for the upper edge
     * to be obscured. This means that a zenith of just above 90&deg; must be used. The Sun subtends an angle of 16
     * minutes of arc, and atmospheric refraction
     * accounts for 34 minutes or so, giving a total
     * of 50 arcminutes. The total value for ZENITH is 90+(5/6) or 90.8333333&deg; for true sunrise/sunset. Since a
     * person at an elevation can see blow the horizon of a person at sea level, this will also adjust the zenith to
     * account for elevation if available. Note that this will only adjust the value if the zenith is exactly 90 degrees.
     * For values below and above this no correction is done. As an example, astronomical twilight is when the sun is
     * 18&deg; below the horizon or {@link ASTRONOMICAL_ZENITH 108&deg;
     * below the zenith}. This is traditionally calculated with none of the above mentioned adjustments. The same goes
     * for various <em>tzais</em> and <em>alos</em> times such as the
     * {@link ZmanimCalendar#ZENITH_16_POINT_1 16.1&deg;} dip used in
     * {@link ComplexZmanimCalendar#getAlos16Point1Degrees}.
     *
     * @param {number} zenith
     *            the azimuth below the vertical zenith of 90&deg;. For sunset typically the {@link adjustZenith
     *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link getEndNauticalTwilight} that passes
     *            {@link NAUTICAL_ZENITH} to this method.
     * @param {number} elevation
     *            elevation in Meters.
     * @return {number} The zenith adjusted to include the sun's radius, refracton
     *         and {@link getElevationAdjustment elevation} adjustment. This will only be adjusted for
     *         sunrise and sunset (if the zenith == 90&deg;)
     * @see getElevationAdjustment
     */
    adjustZenith(zenith, elevation) {
        let adjustedZenith = zenith;
        if (zenith === NOAACalculator.GEOMETRIC_ZENITH) {
            // only adjust if it is exactly sunrise or sunset
            adjustedZenith =
                zenith +
                    (solarRadius + refraction + this.getElevationAdjustment(elevation));
        }
        return adjustedZenith;
    }
    /**
     * A method that calculates UTC sunrise as well as any time based on an angle above or below sunrise.
     * @param date
     *            Used to calculate day of year.
     * @param geoLocation
     *            The location information used for astronomical calculating sun times.
     * @param zenith
     *            the azimuth below the vertical zenith of 90 degrees. for sunrise typically the {@link adjustZenith
     *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link getBeginNauticalTwilight} that passes
     *            {@link NAUTICAL_ZENITH} to this method.
     * @param adjustForElevation
     *            Should the time be adjusted for elevation
     * @return The UTC time of sunrise in 24 hour format. 5:45:00 AM will return 5.75.0. If an error was encountered in
     *         the calculation (expected behavior for some locations such as near the poles,
     *         `NaN` will be returned.
     */
    getUTCSunrise(date, geoLocation, zenith, adjustForElevation) {
        const elevation = adjustForElevation
            ? geoLocation.getElevation()
            : 0;
        const adjustedZenith = this.adjustZenith(zenith, elevation);
        let sunrise = NOAACalculator.getSunriseUTC(NOAACalculator.getJulianDay(date), geoLocation.getLatitude(), -geoLocation.getLongitude(), adjustedZenith);
        sunrise = sunrise / 60;
        // ensure that the time is >= 0 and < 24
        while (sunrise < 0) {
            sunrise += 24;
        }
        while (sunrise >= 24) {
            sunrise -= 24;
        }
        return sunrise;
    }
    /**
     * A method that calculates UTC sunset as well as any time based on an angle above or below sunset.
     * @param date
     *            Used to calculate day of year.
     * @param geoLocation
     *            The location information used for astronomical calculating sun times.
     * @param zenith
     *            the azimuth below the vertical zenith of 90&deg;. For sunset typically the {@link adjustZenith
     *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link getEndNauticalTwilight} that passes
     *            {@link NAUTICAL_ZENITH} to this method.
     * @param adjustForElevation
     *            Should the time be adjusted for elevation
     * @return The UTC time of sunset in 24 hour format. 5:45:00 AM will return 5.75.0. If an error was encountered in
     *         the calculation (expected behavior for some locations such as near the poles,
     *         `NaN` will be returned.
     */
    getUTCSunset(date, geoLocation, zenith, adjustForElevation) {
        const elevation = adjustForElevation
            ? geoLocation.getElevation()
            : 0;
        const adjustedZenith = this.adjustZenith(zenith, elevation);
        let sunset = NOAACalculator.getSunsetUTC(NOAACalculator.getJulianDay(date), geoLocation.getLatitude(), -geoLocation.getLongitude(), adjustedZenith);
        sunset = sunset / 60;
        // ensure that the time is >= 0 and < 24
        while (sunset < 0) {
            sunset += 24;
        }
        while (sunset >= 24) {
            sunset -= 24;
        }
        return sunset;
    }
    /**
     * A utility method that will allow the calculation of a temporal (solar) hour based on the sunrise and sunset
     * passed as parameters to this method. An example of the use of this method would be the calculation of a
     * non-elevation adjusted temporal hour by passing in {@link getSeaLevelSunrise() sea level sunrise} and
     * {@link getSeaLevelSunset() sea level sunset} as parameters.
     *
     * @param {Temporal.ZonedDateTime | null} startOfDay
     *            The start of the day.
     * @param {Temporal.ZonedDateTime | null} endOfDay
     *            The end of the day.
     *
     * @return {number} the <code>long</code> millisecond length of the temporal hour. If the calculation can't be computed a
     *         `NaN` will be returned. See detailed explanation on top of the page.
     *
     * @see getTemporalHour()
     */
    getTemporalHour(startOfDay = this.getSeaLevelSunrise(), endOfDay = this.getSeaLevelSunset()) {
        if (startOfDay === null || endOfDay === null) {
            return NaN;
        }
        const delta = endOfDay.epochMilliseconds - startOfDay.epochMilliseconds;
        return Math.floor(delta / 12);
    }
    /**
     * A method that returns sundial or solar noon. It occurs when the Sun is <a href
     * ="http://en.wikipedia.org/wiki/Transit_%28astronomy%29">transiting</a> the <a
     * href="http://en.wikipedia.org/wiki/Meridian_%28astronomy%29">celestial meridian</a>. In this class it is
     * calculated as halfway between the sunrise and sunset passed to this method. This time can be slightly off the
     * real transit time due to changes in declination (the lengthening or shortening day).
     *
     * @param {Temporal.ZonedDateTime | null} startOfDay
     *            the start of day for calculating the sun's transit. This can be sea level sunrise, visual sunrise (or
     *            any arbitrary start of day) passed to this method.
     * @param {Temporal.ZonedDateTime | null} endOfDay
     *            the end of day for calculating the sun's transit. This can be sea level sunset, visual sunset (or any
     *            arbitrary end of day) passed to this method.
     *
     * @return {Temporal.ZonedDateTime | null} The `Date` representing Sun's transit. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, null will be returned. See detailed explanation on top of the page.
     */
    getSunTransit(startOfDay = this.getSeaLevelSunrise(), endOfDay = this.getSeaLevelSunset()) {
        const temporalHour = this.getTemporalHour(startOfDay, endOfDay);
        return NOAACalculator.getTimeOffset(startOfDay, temporalHour * 6);
    }
    /**
     * A method that returns a `Date` from the time passed in as a parameter.
     * @protected
     * @param {number} time
     *            The time to be set as the time for the `Date`. The time expected is in the format: 18.75
     *            for 6:45:00 PM.
     * @param {boolean} isSunrise true if the time is sunrise, and false if it is sunset
     * @return {Temporal.ZonedDateTime | null} The Date.
     */
    getDateFromTime(time, isSunrise) {
        if (isNaN(time)) {
            return null;
        }
        let calculatedTime = time;
        let cal = this.getAdjustedDate();
        //    let cal = new Temporal.PlainDate(adj.year, adj.month, adj.day);
        const hours = Math.trunc(calculatedTime); // retain only the hours
        calculatedTime -= hours;
        const minutes = Math.trunc((calculatedTime *= 60)); // retain only the minutes
        calculatedTime -= minutes;
        const seconds = Math.trunc((calculatedTime *= 60)); // retain only the seconds
        calculatedTime -= seconds; // remaining milliseconds
        // Check if a date transition has occurred, or is about to occur - this indicates the date of the event is
        // actually not the target date, but the day prior or after
        const localTimeHours = Math.trunc(this.geoLocation.getLongitude() / 15);
        if (isSunrise && localTimeHours + hours > 18) {
            cal = cal.add({ days: -1 });
            //      cal = cal.minus({days: 1});
        }
        else if (!isSunrise && localTimeHours + hours < 6) {
            cal = cal.add({ days: 1 });
        }
        return cal
            .toZonedDateTime({
            timeZone: 'UTC',
            plainTime: new Temporal.PlainTime(hours, minutes, seconds, Math.trunc(calculatedTime * 1000)),
        })
            .withTimeZone(this.geoLocation.getTimeZone());
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> from a Java Calendar
     * @private
     * @param {Temporal.ZonedDateTime} date
     *            The Java Calendar
     * @return the Julian day corresponding to the date Note: Number is returned for start of day. Fractional days
     *         should be added later.
     */
    static getJulianDay(date) {
        let { year, month } = date;
        const { day } = date;
        if (month <= 2) {
            year -= 1;
            month += 12;
        }
        const a = Math.trunc(year / 100);
        const b = Math.trunc(2 - a + a / 4);
        return (Math.floor(365.25 * (year + 4716)) +
            Math.floor(30.6001 * (month + 1)) +
            day +
            b -
            1524.5);
    }
    /**
     * Convert <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> to centuries since J2000.0.
     * @private
     * @param julianDay
     *            the Julian Day to convert
     * @return the centuries since 2000 Julian corresponding to the Julian Day
     */
    static getJulianCenturiesFromJulianDay(julianDay) {
        return ((julianDay - NOAACalculator.JULIAN_DAY_JAN_1_2000) /
            NOAACalculator.JULIAN_DAYS_PER_CENTURY);
    }
    /**
     * Convert centuries since J2000.0 to <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a>.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Julian Day corresponding to the Julian centuries passed in
     */
    static getJulianDayFromJulianCenturies(julianCenturies) {
        return (julianCenturies * NOAACalculator.JULIAN_DAYS_PER_CENTURY +
            NOAACalculator.JULIAN_DAY_JAN_1_2000);
    }
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_longitude">Mean Longitude</a> of the Sun.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Longitude of the Sun in degrees
     */
    static getSunGeometricMeanLongitude(julianCenturies) {
        let longitude = 280.46646 + julianCenturies * (36000.76983 + 0.0003032 * julianCenturies);
        while (longitude > 360) {
            longitude -= 360;
        }
        while (longitude < 0) {
            longitude += 360;
        }
        return longitude; // in degrees
    }
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_anomaly">Mean Anomaly</a> of the Sun.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Anomaly of the Sun in degrees
     */
    static getSunGeometricMeanAnomaly(julianCenturies) {
        return (357.52911 + julianCenturies * (35999.05029 - 0.0001537 * julianCenturies)); // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Eccentricity_%28orbit%29">eccentricity of earth's orbit</a>.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the unitless eccentricity
     */
    static getEarthOrbitEccentricity(julianCenturies) {
        return (0.016708634 -
            julianCenturies * (0.000042037 + 0.0000001267 * julianCenturies)); // unitless
    }
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Equation_of_the_center">equation of center</a> for the sun.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the equation of center for the sun in degrees
     */
    static getSunEquationOfCenter(julianCenturies) {
        const m = NOAACalculator.getSunGeometricMeanAnomaly(julianCenturies);
        const mrad = degreesToRadians(m);
        const sinm = Math.sin(mrad);
        const sin2m = Math.sin(mrad + mrad);
        const sin3m = Math.sin(mrad + mrad + mrad);
        return (sinm *
            (1.914602 - julianCenturies * (0.004817 + 0.000014 * julianCenturies)) +
            sin2m * (0.019993 - 0.000101 * julianCenturies) +
            sin3m * 0.000289); // in degrees
    }
    /**
     * Return the true longitude of the sun
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the sun's true longitude in degrees
     */
    static getSunTrueLongitude(julianCenturies) {
        const sunLongitude = NOAACalculator.getSunGeometricMeanLongitude(julianCenturies);
        const center = NOAACalculator.getSunEquationOfCenter(julianCenturies);
        return sunLongitude + center; // in degrees
    }
    /**
     * Return the apparent longitude of the sun
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return sun's apparent longitude in degrees
     */
    static getSunApparentLongitude(julianCenturies) {
        const sunTrueLongitude = NOAACalculator.getSunTrueLongitude(julianCenturies);
        const omega = 125.04 - 1934.136 * julianCenturies;
        const lambda = sunTrueLongitude - 0.00569 - 0.00478 * Math.sin(degreesToRadians(omega));
        return lambda; // in degrees
    }
    /**
     * Returns the mean <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial tilt).
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the mean obliquity in degrees
     */
    static getMeanObliquityOfEcliptic(julianCenturies) {
        const seconds = 21.448 -
            julianCenturies *
                (46.815 + julianCenturies * (0.00059 - julianCenturies * 0.001813));
        return 23 + (26 + seconds / 60) / 60; // in degrees
    }
    /**
     * Returns the corrected <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial
     * tilt).
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the corrected obliquity in degrees
     */
    static getObliquityCorrection(julianCenturies) {
        const obliquityOfEcliptic = NOAACalculator.getMeanObliquityOfEcliptic(julianCenturies);
        const omega = 125.04 - 1934.136 * julianCenturies;
        return obliquityOfEcliptic + 0.00256 * Math.cos(degreesToRadians(omega)); // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Declination">declination</a> of the sun.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return
     *            the sun's declination in degrees
     */
    static getSunDeclination(julianCenturies) {
        const obliquityCorrection = NOAACalculator.getObliquityCorrection(julianCenturies);
        const lambda = NOAACalculator.getSunApparentLongitude(julianCenturies);
        const sint = Math.sin(degreesToRadians(obliquityCorrection)) *
            Math.sin(degreesToRadians(lambda));
        const theta = radiansToDegrees(Math.asin(sint));
        return theta; // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Equation_of_time">Equation of Time</a> - the difference between
     * true solar time and mean solar time
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return equation of time in minutes of time
     */
    static getEquationOfTime(julianCenturies) {
        const epsilon = NOAACalculator.getObliquityCorrection(julianCenturies);
        const geomMeanLongSun = NOAACalculator.getSunGeometricMeanLongitude(julianCenturies);
        const eccentricityEarthOrbit = NOAACalculator.getEarthOrbitEccentricity(julianCenturies);
        const geomMeanAnomalySun = NOAACalculator.getSunGeometricMeanAnomaly(julianCenturies);
        let y = Math.tan(degreesToRadians(epsilon) / 2);
        y *= y;
        const sin2l0 = Math.sin(2 * degreesToRadians(geomMeanLongSun));
        const sinm = Math.sin(degreesToRadians(geomMeanAnomalySun));
        const cos2l0 = Math.cos(2 * degreesToRadians(geomMeanLongSun));
        const sin4l0 = Math.sin(4 * degreesToRadians(geomMeanLongSun));
        const sin2m = Math.sin(2 * degreesToRadians(geomMeanAnomalySun));
        const equationOfTime = y * sin2l0 -
            2 * eccentricityEarthOrbit * sinm +
            4 * eccentricityEarthOrbit * y * sinm * cos2l0 -
            0.5 * y * y * sin4l0 -
            1.25 * eccentricityEarthOrbit * eccentricityEarthOrbit * sin2m;
        return radiansToDegrees(equationOfTime) * 4; // in minutes of time
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Hour_angle">hour angle</a> of the sun at sunrise for the
     * latitude.
     * @private
     * @param {number} lat
     *            , the latitude of observer in degrees
     * @param solarDec
     *            the declination angle of sun in degrees
     * @param {number} zenith
     *            the zenith
     * @return hour angle of sunrise in radians
     */
    static getSunHourAngleAtSunrise(lat, solarDec, zenith) {
        const latRad = degreesToRadians(lat);
        const sdRad = degreesToRadians(solarDec);
        return Math.acos(Math.cos(degreesToRadians(zenith)) /
            (Math.cos(latRad) * Math.cos(sdRad)) -
            Math.tan(latRad) * Math.tan(sdRad)); // in radians
    }
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Hour_angle">hour angle</a> of the sun at sunset for the
     * latitude.
     * @private
     * @param {number} lat
     *            the latitude of observer in degrees
     * @param solarDec
     *            the declination angle of sun in degrees
     * @param {number} zenith
     *            the zenith
     * @return the hour angle of sunset in radians
     */
    static getSunHourAngleAtSunset(lat, solarDec, zenith) {
        const latRad = degreesToRadians(lat);
        const sdRad = degreesToRadians(solarDec);
        const hourAngle = Math.acos(Math.cos(degreesToRadians(zenith)) /
            (Math.cos(latRad) * Math.cos(sdRad)) -
            Math.tan(latRad) * Math.tan(sdRad));
        return -hourAngle; // in radians
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Celestial_coordinate_system">Solar Elevation</a> for the
     * horizontal coordinate system at the given location at the given time. Can be negative if the sun is below the
     * horizon. Not corrected for altitude.
     *
     * @param {Temporal.ZonedDateTime} date
     *            time of calculation
     * @param {number} lat
     *            latitude of location for calculation
     * @param {number} lon
     *            longitude of location for calculation
     * @return {number} solar elevation in degrees - horizon is 0 degrees, civil twilight is -6 degrees
     */
    static getSolarElevation(date, lat, lon) {
        const julianDay = NOAACalculator.getJulianDay(date.toPlainDate());
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        const equationOfTime = NOAACalculator.getEquationOfTime(julianCenturies);
        let longitude = date.hour + 12 + (date.minute + equationOfTime + date.second / 60) / 60;
        longitude = -((longitude * 360) / 24) % 360;
        const hourAngleRad = degreesToRadians(lon - longitude);
        const declination = NOAACalculator.getSunDeclination(julianCenturies);
        const decRad = degreesToRadians(declination);
        const latRad = degreesToRadians(lat);
        return radiansToDegrees(Math.asin(Math.sin(latRad) * Math.sin(decRad) +
            Math.cos(latRad) * Math.cos(decRad) * Math.cos(hourAngleRad)));
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Celestial_coordinate_system">Solar Azimuth</a> for the
     * horizontal coordinate system at the given location at the given time. Not corrected for altitude. True south is 0
     * degrees.
     *
     * @param {Temporal.ZonedDateTime} date
     *            time of calculation
     * @param {number} latitude
     *            latitude of location for calculation
     * @param {number} lon
     *            longitude of location for calculation
     * @return {number}
     */
    static getSolarAzimuth(date, latitude, lon) {
        const julianDay = NOAACalculator.getJulianDay(date.toPlainDate());
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        const equationOfTime = NOAACalculator.getEquationOfTime(julianCenturies);
        let longitude = date.hour + 12 + (date.minute + equationOfTime + date.second / 60) / 60;
        longitude = -((longitude * 360) / 24) % 360;
        const hourAngleRad = degreesToRadians(lon - longitude);
        const declination = NOAACalculator.getSunDeclination(julianCenturies);
        const decRad = degreesToRadians(declination);
        const latRad = degreesToRadians(latitude);
        return (radiansToDegrees(Math.atan(Math.sin(hourAngleRad) /
            (Math.cos(hourAngleRad) * Math.sin(latRad) -
                Math.tan(decRad) * Math.cos(latRad)))) + 180);
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of sunrise for the given day at the given location on earth
     * @private
     * @param julianDay
     *            the Julian day
     * @param {number} latitude
     *            the latitude of observer in degrees
     * @param {number} longitude
     *            the longitude of observer in degrees
     * @param {number} zenith
     *            the zenith
     * @return the time in minutes from zero UTC
     */
    static getSunriseUTC(julianDay, latitude, longitude, zenith) {
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        // Find the time of solar noon at the location, and use that declination. This is better than start of the
        // Julian day
        const noonmin = NOAACalculator.getSolarNoonUTC(julianCenturies, longitude);
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay + noonmin / 1440);
        // First pass to approximate sunrise (using solar noon)
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        let solarDec = NOAACalculator.getSunDeclination(tnoon);
        let hourAngle = NOAACalculator.getSunHourAngleAtSunrise(latitude, solarDec, zenith);
        let delta = longitude - radiansToDegrees(hourAngle);
        let timeDiff = 4 * delta; // in minutes of time
        let timeUTC = 720 + timeDiff - eqTime; // in minutes
        // Second pass includes fractional Julian Day in gamma calc
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) +
            timeUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        solarDec = NOAACalculator.getSunDeclination(newt);
        hourAngle = NOAACalculator.getSunHourAngleAtSunrise(latitude, solarDec, zenith);
        delta = longitude - radiansToDegrees(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes
        return timeUTC;
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of <a href="http://en.wikipedia.org/wiki/Noon#Solar_noon">solar noon</a> for the given day at the given location
     * on earth.
     * @private
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @param {number} longitude
     *            the longitude of observer in degrees
     * @return the time in minutes from zero UTC
     */
    static getSolarNoonUTC(julianCenturies, longitude) {
        // First pass uses approximate solar noon to calculate eqtime
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) +
            longitude / 360);
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        const solNoonUTC = 720 + longitude * 4 - eqTime; // min
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) -
            0.5 +
            solNoonUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        return 720 + longitude * 4 - eqTime; // min
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of sunset for the given day at the given location on earth
     * @private
     * @param julianDay
     *            the Julian day
     * @param {number} latitude
     *            the latitude of observer in degrees
     * @param {number} longitude
     *            : longitude of observer in degrees
     * @param {number} zenith
     *            the zenith
     * @return the time in minutes from zero Universal Coordinated Time (UTC)
     */
    static getSunsetUTC(julianDay, latitude, longitude, zenith) {
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        // Find the time of solar noon at the location, and use that declination. This is better than start of the
        // Julian day
        const noonmin = NOAACalculator.getSolarNoonUTC(julianCenturies, longitude);
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay + noonmin / 1440);
        // First calculates sunrise and approx length of day
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        let solarDec = NOAACalculator.getSunDeclination(tnoon);
        let hourAngle = NOAACalculator.getSunHourAngleAtSunset(latitude, solarDec, zenith);
        let delta = longitude - radiansToDegrees(hourAngle);
        let timeDiff = 4 * delta;
        let timeUTC = 720 + timeDiff - eqTime;
        // Second pass includes fractional Julian Day in gamma calc
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) +
            timeUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        solarDec = NOAACalculator.getSunDeclination(newt);
        hourAngle = NOAACalculator.getSunHourAngleAtSunset(latitude, solarDec, zenith);
        delta = longitude - radiansToDegrees(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes
        return timeUTC;
    }
}
/**
 * The zenith of astronomical sunrise and sunset. The sun is 90&deg; from the vertical 0&deg;
 * @private
 */
NOAACalculator.GEOMETRIC_ZENITH = 90;
/**
 * Default value for Sun's zenith and true rise/set Zenith (used in this class and subclasses) is the angle that the
 * center of the Sun makes to a line perpendicular to the Earth's surface. If the Sun were a point and the Earth
 * were without an atmosphere, true sunset and sunrise would correspond to a 90&deg; zenith. Because the Sun is not
 * a point, and because the atmosphere refracts light, this 90&deg; zenith does not, in fact, correspond to true
 * sunset or sunrise, instead the center of the Sun's disk must lie just below the horizon for the upper edge to be
 * obscured. This means that a zenith of just above 90&deg; must be used. The Sun subtends an angle of 16 minutes of
 * arc, and atmospheric refraction accounts for
 * 34 minutes or so, giving a total of 50
 * arcminutes. The total value for ZENITH is 90+(5/6) or 90.8333333&deg; for true sunrise/sunset.
 */
// const ZENITH: number = GEOMETRIC_ZENITH + 5.0 / 6.0;
/** Sun's zenith at civil twilight (96&deg;). */
NOAACalculator.CIVIL_ZENITH = 96;
/** Sun's zenith at nautical twilight (102&deg;). */
NOAACalculator.NAUTICAL_ZENITH = 102;
/** Sun's zenith at astronomical twilight (108&deg;). */
NOAACalculator.ASTRONOMICAL_ZENITH = 108;
/**
 * The <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> of January 1, 2000
 * @private
 */
NOAACalculator.JULIAN_DAY_JAN_1_2000 = 2451545;
/**
 * Julian days per century
 * @private
 */
NOAACalculator.JULIAN_DAYS_PER_CENTURY = 36525;

/*
    Hebcal - A Jewish Calendar Generator
    Copyright (c) 1994-2020 Danny Sadinoff
    Portions copyright Eyal Schachter and Michael J. Radwin

    https://github.com/hebcal/hebcal-es6

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
const classicCities0 = [
    ['Ashdod', 'IL', 31.79213, 34.64966, 'Asia/Jerusalem', 27],
    ['Atlanta', 'US', 33.749, -84.38798, 'America/New_York', 336],
    ['Austin', 'US', 30.26715, -97.74306, 'America/Chicago', 165],
    ['Baghdad', 'IQ', 33.34058, 44.40088, 'Asia/Baghdad', 41],
    ['Beer Sheva', 'IL', 31.25181, 34.7913, 'Asia/Jerusalem', 285],
    ['Berlin', 'DE', 52.52437, 13.41053, 'Europe/Berlin', 43],
    ['Baltimore', 'US', 39.29038, -76.61219, 'America/New_York', 35],
    ['Bogota', 'CO', 4.60971, -74.08175, 'America/Bogota', 2582],
    ['Boston', 'US', 42.35843, -71.05977, 'America/New_York', 38],
    ['Budapest', 'HU', 47.49801, 19.03991, 'Europe/Budapest', 104],
    [
        'Buenos Aires',
        'AR',
        -34.61315,
        -58.37723,
        'America/Argentina/Buenos_Aires',
        31,
    ],
    ['Buffalo', 'US', 42.88645, -78.87837, 'America/New_York', 191],
    ['Chicago', 'US', 41.85003, -87.65005, 'America/Chicago', 180],
    ['Cincinnati', 'US', 39.162, -84.45689, 'America/New_York', 267],
    ['Cleveland', 'US', 41.4995, -81.69541, 'America/New_York', 204],
    ['Dallas', 'US', 32.78306, -96.80667, 'America/Chicago', 139],
    ['Denver', 'US', 39.73915, -104.9847, 'America/Denver', 1636],
    ['Detroit', 'US', 42.33143, -83.04575, 'America/Detroit', 192],
    ['Eilat', 'IL', 29.55805, 34.94821, 'Asia/Jerusalem', 63],
    ['Gibraltar', 'GI', 36.14474, -5.35257, 'Europe/Gibraltar', 11],
    ['Haifa', 'IL', 32.81841, 34.9885, 'Asia/Jerusalem', 40],
    ['Hawaii', 'US', 21.30694, -157.85833, 'Pacific/Honolulu', 18],
    ['Helsinki', 'FI', 60.16952, 24.93545, 'Europe/Helsinki', 26],
    ['Houston', 'US', 29.76328, -95.36327, 'America/Chicago', 30],
    ['Jerusalem', 'IL', 31.76904, 35.21633, 'Asia/Jerusalem', 786],
    ['Johannesburg', 'ZA', -26.20227, 28.04363, 'Africa/Johannesburg', 1767],
    ['Kiev', 'UA', 50.45466, 30.5238, 'Europe/Kiev', 187],
    ['La Paz', 'BO', -16.5, -68.15, 'America/La_Paz', 3782],
    ['Livingston', 'US', 40.79593, -74.31487, 'America/New_York', 98],
    ['Las Vegas', 'US', 36.17497, -115.13722, 'America/Los_Angeles', 613],
    ['London', 'GB', 51.50853, -0.12574, 'Europe/London', 25],
    ['Los Angeles', 'US', 34.05223, -118.24368, 'America/Los_Angeles', 96],
    ['Marseilles', 'FR', 43.29695, 5.38107, 'Europe/Paris', 28],
    ['Miami', 'US', 25.77427, -80.19366, 'America/New_York', 25],
    ['Minneapolis', 'US', 44.97997, -93.26384, 'America/Chicago', 262],
    ['Melbourne', 'AU', -37.814, 144.96332, 'Australia/Melbourne', 25],
    ['Mexico City', 'MX', 19.42847, -99.12766, 'America/Mexico_City', 2240],
    ['Montreal', 'CA', 45.50884, -73.58781, 'America/Toronto', 216],
    ['Moscow', 'RU', 55.75222, 37.61556, 'Europe/Moscow', 144],
    ['New York', 'US', 40.71427, -74.00597, 'America/New_York', 57],
    ['Omaha', 'US', 41.25861, -95.93779, 'America/Chicago', 315],
    ['Ottawa', 'CA', 45.41117, -75.69812, 'America/Toronto', 71],
    ['Panama City', 'PA', 8.9936, -79.51973, 'America/Panama', 17],
    ['Paris', 'FR', 48.85341, 2.3488, 'Europe/Paris', 42],
    ['Pawtucket', 'US', 41.87871, -71.38256, 'America/New_York', 0], // -11
    ['Petach Tikvah', 'IL', 32.08707, 34.88747, 'Asia/Jerusalem', 54],
    ['Philadelphia', 'US', 39.95233, -75.16379, 'America/New_York', 8],
    ['Phoenix', 'US', 33.44838, -112.07404, 'America/Phoenix', 366],
    ['Pittsburgh', 'US', 40.44062, -79.99589, 'America/New_York', 239],
    ['Providence', 'US', 41.82399, -71.41283, 'America/New_York', 0], // -15
    ['Portland', 'US', 45.52345, -122.67621, 'America/Los_Angeles', 15],
    ['Saint Louis', 'US', 38.62727, -90.19789, 'America/Chicago', 149],
    ['Saint Petersburg', 'RU', 59.93863, 30.31413, 'Europe/Moscow', 11],
    ['San Diego', 'US', 32.71533, -117.15726, 'America/Los_Angeles', 20],
    ['San Francisco', 'US', 37.77493, -122.41942, 'America/Los_Angeles', 28],
    ['Sao Paulo', 'BR', -23.5475, -46.63611, 'America/Sao_Paulo', 769],
    ['Seattle', 'US', 47.60621, -122.33207, 'America/Los_Angeles', 56],
    ['Sydney', 'AU', -33.86785, 151.20732, 'Australia/Sydney', 58],
    ['Tel Aviv', 'IL', 32.08088, 34.78057, 'Asia/Jerusalem', 15],
    ['Tiberias', 'IL', 32.79221, 35.53124, 'Asia/Jerusalem', 0], // -140
    ['Toronto', 'CA', 43.70011, -79.4163, 'America/Toronto', 175],
    ['Vancouver', 'CA', 49.24966, -123.11934, 'America/Vancouver', 70],
    ['White Plains', 'US', 41.03399, -73.76291, 'America/New_York', 82],
    ['Washington DC', 'US', 38.89511, -77.03637, 'America/New_York', 6],
    ['Worcester', 'US', 42.26259, -71.80229, 'America/New_York', 164],
];
const classicCities = new Map();
// Zip-Codes.com TimeZone IDs
const ZIPCODES_TZ_MAP = {
    '0': 'UTC',
    '4': 'America/Puerto_Rico', // Atlantic (GMT -04:00)
    '5': 'America/New_York', //    Eastern  (GMT -05:00)
    '6': 'America/Chicago', //     Central  (GMT -06:00)
    '7': 'America/Denver', //      Mountain (GMT -07:00)
    '8': 'America/Los_Angeles', // Pacific  (GMT -08:00)
    '9': 'America/Anchorage', //   Alaska   (GMT -09:00)
    '10': 'Pacific/Honolulu', //   Hawaii-Aleutian Islands (GMT -10:00)
    '11': 'Pacific/Pago_Pago', //  American Samoa (GMT -11:00)
    '13': 'Pacific/Funafuti', //   Marshall Islands (GMT +12:00)
    '14': 'Pacific/Guam', //       Guam     (GMT +10:00)
    '15': 'Pacific/Palau', //      Palau    (GMT +9:00)
    '16': 'Pacific/Chuuk', //      Micronesia (GMT +11:00)
};
/** @private */
const timeFormatCache = new Map();
/**
 * Gets a 24-hour time formatter (e.g. 07:41 or 20:03) from cache
 * or makes a new one if needed
 * @private
 */
function getFormatter(tzid) {
    const fmt = timeFormatCache.get(tzid);
    if (fmt)
        return fmt;
    const f = new Intl.DateTimeFormat('en-US', {
        timeZone: tzid,
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
    timeFormatCache.set(tzid, f);
    return f;
}
/** Class representing Location */
class Location extends GeoLocation {
    /**
     * Initialize a Location instance
     * @param latitude - Latitude as a decimal, valid range -90 thru +90 (e.g. 41.85003)
     * @param longitude - Longitude as a decimal, valid range -180 thru +180 (e.g. -87.65005)
     * @param il - in Israel (true) or Diaspora (false)
     * @param tzid - Olson timezone ID, e.g. "America/Chicago"
     * @param [cityName] - optional descriptive city name
     * @param [countryCode] - ISO 3166 alpha-2 country code (e.g. "FR")
     * @param [geoid] - optional string or numeric geographic ID
     * @param [elevation] - in meters (default `0`)
     */
    constructor(latitude, longitude, il, tzid, cityName, countryCode, geoid, elevation) {
        const lat = typeof latitude === 'number' ? latitude : parseFloat(latitude);
        if (isNaN(lat) || lat < -90 || lat > 90) {
            throw new RangeError(`Latitude ${latitude} out of range [-90,90]`);
        }
        const long = typeof longitude === 'number' ? longitude : parseFloat(longitude);
        if (isNaN(long) || long < -180 || long > 180) {
            throw new RangeError(`Longitude ${longitude} out of range [-180,180]`);
        }
        if (!tzid) {
            throw new RangeError(`Invalid timezone`);
        }
        const elev = typeof elevation === 'number' && elevation > 0 ? elevation : 0;
        super(cityName || null, lat, long, elev, tzid);
        this.il = Boolean(il);
        this.cc = countryCode;
        this.geoid = geoid;
    }
    getIsrael() {
        return this.il;
    }
    getName() {
        return this.getLocationName();
    }
    /**
     * Returns the location name, up to the first comma
     */
    getShortName() {
        const name = this.getLocationName();
        if (!name)
            return name;
        const comma = name.indexOf(', ');
        if (comma === -1)
            return name;
        if (this.cc === 'US' && name[comma + 2] === 'D') {
            if (name[comma + 3] === 'C') {
                return name.substring(0, comma + 4);
            }
            else if (name[comma + 3] === '.' && name[comma + 4] === 'C') {
                return name.substring(0, comma + 6);
            }
        }
        return name.substring(0, comma);
    }
    getCountryCode() {
        return this.cc;
    }
    getTzid() {
        return this.getTimeZone();
    }
    /**
     * Gets a 24-hour time formatter (e.g. 07:41 or 20:03) for this location
     */
    getTimeFormatter() {
        return getFormatter(this.getTimeZone());
    }
    getGeoId() {
        return this.geoid;
    }
    /**
     * Creates a location object from one of 60 "classic" Hebcal city names.
     * The following city names are supported:
     * 'Ashdod', 'Atlanta', 'Austin', 'Baghdad', 'Beer Sheva',
     * 'Berlin', 'Baltimore', 'Bogota', 'Boston', 'Budapest',
     * 'Buenos Aires', 'Buffalo', 'Chicago', 'Cincinnati', 'Cleveland',
     * 'Dallas', 'Denver', 'Detroit', 'Eilat', 'Gibraltar', 'Haifa',
     * 'Hawaii', 'Helsinki', 'Houston', 'Jerusalem', 'Johannesburg',
     * 'Kiev', 'La Paz', 'Livingston', 'Las Vegas', 'London', 'Los Angeles',
     * 'Marseilles', 'Miami', 'Minneapolis', 'Melbourne', 'Mexico City',
     * 'Montreal', 'Moscow', 'New York', 'Omaha', 'Ottawa', 'Panama City',
     * 'Paris', 'Pawtucket', 'Petach Tikvah', 'Philadelphia', 'Phoenix',
     * 'Pittsburgh', 'Providence', 'Portland', 'Saint Louis', 'Saint Petersburg',
     * 'San Diego', 'San Francisco', 'Sao Paulo', 'Seattle', 'Sydney',
     * 'Tel Aviv', 'Tiberias', 'Toronto', 'Vancouver', 'White Plains',
     * 'Washington DC', 'Worcester'
     * @param name
     */
    static lookup(name) {
        return classicCities.get(name.toLowerCase());
    }
    toString() {
        return JSON.stringify(this);
    }
    /**
     * Converts legacy Hebcal timezone to a standard Olson tzid.
     * @param tz integer, GMT offset in hours
     * @param dst 'none', 'eu', 'usa', or 'israel'
     */
    static legacyTzToTzid(tz, dst) {
        tz = +tz;
        if (dst === 'none') {
            if (tz === 0) {
                return 'UTC';
            }
            else {
                const plus = tz > 0 ? '+' : '';
                return `Etc/GMT${plus}${tz}`;
            }
        }
        else if (tz === 2 && dst === 'israel') {
            return 'Asia/Jerusalem';
        }
        else if (dst === 'eu') {
            switch (tz) {
                case -2:
                    return 'Atlantic/Cape_Verde';
                case -1:
                    return 'Atlantic/Azores';
                case 0:
                    return 'Europe/London';
                case 1:
                    return 'Europe/Paris';
                case 2:
                    return 'Europe/Athens';
            }
        }
        else if (dst === 'usa') {
            return ZIPCODES_TZ_MAP[String(tz * -1)];
        }
        return undefined;
    }
    /**
     * Converts timezone info from Zip-Codes.com to a standard Olson tzid.
     * @example
     * Location.getUsaTzid('AZ', 7, 'Y') // 'America/Denver'
     * @param state two-letter all-caps US state abbreviation like 'CA'
     * @param tz positive number, 5=America/New_York, 8=America/Los_Angeles
     * @param dst single char 'Y' or 'N'
     */
    static getUsaTzid(state, tz, dst) {
        tz = +tz;
        if (tz === 10 && state === 'AK') {
            return 'America/Adak';
        }
        else if (tz === 7 && state === 'AZ') {
            return dst === 'Y' ? 'America/Denver' : 'America/Phoenix';
        }
        else {
            return ZIPCODES_TZ_MAP[tz];
        }
    }
    /**
     * Adds a location name for `Location.lookup()` only if the name isn't
     * already being used. Returns `false` if the name is already taken
     * and `true` if successfully added.
     */
    static addLocation(cityName, location) {
        const name = cityName.toLowerCase();
        if (classicCities.has(name)) {
            return false;
        }
        classicCities.set(name, location);
        return true;
    }
}
for (const city of classicCities0) {
    const location = new Location(city[2], city[3], city[1] === 'IL', city[4], city[0], city[1], undefined, city[5]);
    Location.addLocation(city[0], location);
}

/**
 * @private
 */
function zdtToDate(zdt) {
    if (zdt === null) {
        return new Date(NaN);
    }
    const res = new Date(zdt.epochMilliseconds);
    res.setMilliseconds(0);
    return res;
}
function getDate(date) {
    if (isDate(date))
        return date;
    if (HDate.isHDate(date))
        return date.greg();
    throw new TypeError(`invalid date: ${date}`);
}
/**
 * Calculate halachic times (zmanim / זְמַנִּים) for a given day and location.
 * Calculations are available for tzeit / tzais (nightfall),
 * shkiah (sunset) and more.
 *
 * Zmanim are estimated using an algorithm published by the US National Oceanic
 * and Atmospheric Administration. The NOAA solar calculator is based on equations
 * from _Astronomical Algorithms_ by Jean Meeus.
 *
 * The sunrise and sunset results are theoretically accurate to within a minute for
 * locations between +/- 72° latitude, and within 10 minutes outside of those latitudes.
 * However, due to variations in atmospheric composition, temperature, pressure and
 * conditions, observed values may vary from calculations.
 * https://gml.noaa.gov/grad/solcalc/calcdetails.html
 *
 * @example
 * const {GeoLocation, Zmanim} = require('@hebcal/core');
 * const latitude = 41.822232;
 * const longitude = -71.448292;
 * const tzid = 'America/New_York';
 * const friday = new Date(2023, 8, 8);
 * const gloc = new GeoLocation(null, latitude, longitude, 0, tzid);
 * const zmanim = new Zmanim(gloc, friday, false);
 * const candleLighting = zmanim.sunsetOffset(-18, true);
 * const timeStr = Zmanim.formatISOWithTimeZone(tzid, candleLighting);
 */
class Zmanim {
    /**
     * Initialize a Zmanim instance.
     * @param gloc GeoLocation including latitude, longitude, and timezone
     * @param date Regular or Hebrew Date. If `date` is a regular `Date`,
     *    hours, minutes, seconds and milliseconds are ignored.
     * @param useElevation use elevation for calculations (default `false`).
     *    If `true`, use elevation to affect the calculation of all sunrise/sunset based
     *    zmanim. Note: there are some zmanim such as degree-based zmanim that are driven
     *    by the amount of light in the sky and are not impacted by elevation.
     *    These zmanim intentionally do not support elevation adjustment.
     */
    constructor(gloc, date, useElevation) {
        const dt = getDate(date);
        this.date = dt;
        this.gloc = gloc;
        const plainDate = Temporal.PlainDate.from({
            year: dt.getFullYear(),
            month: dt.getMonth() + 1,
            day: dt.getDate(),
        });
        this.noaa = new NOAACalculator(gloc, plainDate);
        this.useElevation = Boolean(useElevation);
    }
    /**
     * Returns `true` if elevation adjustment is enabled
     * for zmanim support elevation adjustment
     */
    getUseElevation() {
        return this.useElevation;
    }
    /**
     * Enables or disables elevation adjustment for zmanim support elevation adjustment
     * @param useElevation
     */
    setUseElevation(useElevation) {
        this.useElevation = useElevation;
    }
    /**
     * Convenience function to get the time when sun is above or below the horizon
     * for a certain angle (in degrees).
     * This function does not support elevation adjustment.
     * @param angle
     * @param rising
     */
    timeAtAngle(angle, rising) {
        const offsetZenith = 90 + angle;
        const zdt = rising
            ? this.noaa.getSunriseOffsetByDegrees(offsetZenith)
            : this.noaa.getSunsetOffsetByDegrees(offsetZenith);
        return zdtToDate(zdt);
    }
    /**
     * Upper edge of the Sun appears over the eastern horizon in the morning (0.833° above horizon)
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    sunrise() {
        const zdt = this.useElevation
            ? this.noaa.getSunrise()
            : this.noaa.getSeaLevelSunrise();
        return zdtToDate(zdt);
    }
    /**
     * Upper edge of the Sun appears over the eastern horizon in the morning (0.833° above horizon).
     * This function does not support elevation adjustment.
     */
    seaLevelSunrise() {
        const zdt = this.noaa.getSeaLevelSunrise();
        return zdtToDate(zdt);
    }
    /**
     * When the upper edge of the Sun disappears below the horizon (0.833° below horizon).
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    sunset() {
        const zdt = this.useElevation
            ? this.noaa.getSunset()
            : this.noaa.getSeaLevelSunset();
        return zdtToDate(zdt);
    }
    /**
     * When the upper edge of the Sun disappears below the horizon (0.833° below horizon).
     * This function does not support elevation adjustment.
     */
    seaLevelSunset() {
        const zdt = this.noaa.getSeaLevelSunset();
        return zdtToDate(zdt);
    }
    /**
     * Civil dawn; Sun is 6° below the horizon in the morning.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    dawn() {
        const zdt = this.noaa.getBeginCivilTwilight();
        return zdtToDate(zdt);
    }
    /**
     * Civil dusk; Sun is 6° below the horizon in the evening.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    dusk() {
        const zdt = this.noaa.getEndCivilTwilight();
        return zdtToDate(zdt);
    }
    /**
     * Returns sunset for the previous day.
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    gregEve() {
        const prev = new Date(this.date);
        prev.setDate(prev.getDate() - 1);
        const zman = new Zmanim(this.gloc, prev, this.useElevation);
        return zman.sunset();
    }
    /**
     * @private
     */
    nightHour() {
        return (this.sunrise().getTime() - this.gregEve().getTime()) / 12; // ms in hour
    }
    /**
     * Midday – Chatzot; Sunrise plus 6 halachic hours
     */
    chatzot() {
        const startOfDay = this.noaa.getSeaLevelSunrise();
        const endOfDay = this.noaa.getSeaLevelSunset();
        const zdt = this.noaa.getSunTransit(startOfDay, endOfDay);
        return zdtToDate(zdt);
    }
    /**
     * Midnight – Chatzot; Sunset plus 6 halachic hours.
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    chatzotNight() {
        return new Date(this.sunrise().getTime() - this.nightHour() * 6);
    }
    /**
     * Dawn – Alot haShachar; Sun is 16.1° below the horizon in the morning.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    alotHaShachar() {
        return this.timeAtAngle(16.1, true);
    }
    /**
     * Dawn – Alot haShachar; calculated as 72 minutes before sunrise or
     * sea level sunrise.
     */
    alotHaShachar72() {
        return this.sunriseOffset(-72, false, false);
    }
    /**
     * Earliest talis & tefillin – Misheyakir; Sun is 11.5° below the horizon in the morning.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    misheyakir() {
        return this.timeAtAngle(11.5, true);
    }
    /**
     * Earliest talis & tefillin – Misheyakir Machmir; Sun is 10.2° below the horizon in the morning.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    misheyakirMachmir() {
        return this.timeAtAngle(10.2, true);
    }
    /**
     * Utility method for using elevation-aware sunrise/sunset
     * @private
     * @param hours
     */
    getShaahZmanisBasedZman(hours) {
        const startOfDay = this.useElevation
            ? this.noaa.getSunrise()
            : this.noaa.getSeaLevelSunrise();
        const endOfDay = this.useElevation
            ? this.noaa.getSunset()
            : this.noaa.getSeaLevelSunset();
        const temporalHour = this.noaa.getTemporalHour(startOfDay, endOfDay);
        const offset = Math.round(temporalHour * hours);
        const zdt = NOAACalculator.getTimeOffset(startOfDay, offset);
        return zdtToDate(zdt);
    }
    /**
     * Latest Shema (Gra); Sunrise plus 3 halachic hours, according to the Gra.
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    sofZmanShma() {
        // Gra
        return this.getShaahZmanisBasedZman(3);
    }
    /**
     * Latest Shacharit (Gra); Sunrise plus 4 halachic hours, according to the Gra.
     *
     * This method returns the latest *zman tfila* (time to recite shema in the morning)
     * that is 4 *shaos zmaniyos* (solar hours) after sunrise or sea level sunrise
     * (depending on the `useElevation` setting), according
     * to the [GRA](https://en.wikipedia.org/wiki/Vilna_Gaon).
     *
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    sofZmanTfilla() {
        // Gra
        return this.getShaahZmanisBasedZman(4);
    }
    /**
     * Returns an array with alot (Date) and ms in hour (number)
     * @private
     */
    getTemporalHour72(forceSeaLevel) {
        const alot72 = this.sunriseOffset(-72, false, forceSeaLevel);
        const tzeit72 = this.sunsetOffset(72, false, forceSeaLevel);
        const temporalHour = (tzeit72.getTime() - alot72.getTime()) / 12;
        return [alot72, temporalHour];
    }
    /**
     * Returns an array with alot (Date) and ms in hour (number)
     * @private
     */
    getTemporalHourByDeg(angle) {
        const alot = this.timeAtAngle(angle, true);
        const tzeit = this.timeAtAngle(angle, false);
        const temporalHour = (tzeit.getTime() - alot.getTime()) / 12;
        return [alot, temporalHour];
    }
    /**
     * Latest Shema (MGA); Sunrise plus 3 halachic hours, according to Magen Avraham.
     * Based on the opinion of the MGA that the day is calculated from
     * dawn being fixed 72 minutes before sea-level sunrise, and nightfall is fixed
     * 72 minutes after sea-level sunset.
     */
    sofZmanShmaMGA() {
        // Magen Avraham
        const [alot72, temporalHour] = this.getTemporalHour72(true);
        const offset = Math.floor(3 * temporalHour);
        return new Date(alot72.getTime() + offset);
    }
    /**
     * Latest Shema (MGA); Sunrise plus 3 halachic hours, according to Magen Avraham.
     * Based on the opinion of the MGA that the day is calculated from
     * dawn to nightfall with both being 16.1° below the horizon.
     */
    sofZmanShmaMGA16Point1() {
        const [alot, temporalHour] = this.getTemporalHourByDeg(16.1);
        const offset = Math.floor(3 * temporalHour);
        return new Date(alot.getTime() + offset);
    }
    /**
     * Latest Shema (MGA); Sunrise plus 3 halachic hours, according to Magen Avraham.
     * Based on the opinion of the MGA that the day is calculated from
     * dawn to nightfall with both being 19.8° below the horizon.
     *
     * This calculation is based on the position of the sun 90 minutes after sunset in Jerusalem
     * around the equinox / equilux which calculates to 19.8° below geometric zenith.
     * https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/
     */
    sofZmanShmaMGA19Point8() {
        const [alot, temporalHour] = this.getTemporalHourByDeg(19.8);
        const offset = Math.floor(3 * temporalHour);
        return new Date(alot.getTime() + offset);
    }
    /**
     * Latest Shacharit (MGA); Sunrise plus 4 halachic hours, according to Magen Avraham
     */
    sofZmanTfillaMGA() {
        // Magen Avraham
        const [alot72, temporalHour] = this.getTemporalHour72(true);
        const offset = Math.floor(4 * temporalHour);
        return new Date(alot72.getTime() + offset);
    }
    /**
     * Latest Shacharit (MGA); Sunrise plus 4 halachic hours, according to Magen Avraham.
     * Based on the opinion of the MGA that the day is calculated from
     * dawn to nightfall with both being 16.1° below the horizon.
     */
    sofZmanTfillaMGA16Point1() {
        const [alot, temporalHour] = this.getTemporalHourByDeg(16.1);
        const offset = Math.floor(4 * temporalHour);
        return new Date(alot.getTime() + offset);
    }
    /**
     * Latest Shacharit (MGA); Sunrise plus 4 halachic hours, according to Magen Avraham.
     * Based on the opinion of the MGA that the day is calculated from
     * dawn to nightfall with both being 19.8° below the horizon.
     *
     * This calculation is based on the position of the sun 90 minutes after sunset in Jerusalem
     * around the equinox / equilux which calculates to 19.8° below geometric zenith.
     * https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/
     */
    sofZmanTfillaMGA19Point8() {
        const [alot, temporalHour] = this.getTemporalHourByDeg(19.8);
        const offset = Math.floor(4 * temporalHour);
        return new Date(alot.getTime() + offset);
    }
    /**
     * Earliest Mincha – Mincha Gedola (GRA); Sunrise plus 6.5 halachic hours.
     * If elevation is enabled, this function will include elevation in the calculation.
     *
     * This method returns the latest mincha gedola, the earliest time one can pray mincha
     * that is 6.5 shaos zmaniyos (solar hours) after sunrise or sea level sunrise
     * (depending on the `useElevation` setting), according
     * to the [GRA](https://en.wikipedia.org/wiki/Vilna_Gaon).
     *
     * The Ramba"m is of the opinion that it is better to delay *mincha* until
     * *mincha ketana* while the Ra"sh, Tur, GRA and others are of the
     * opinion that *mincha* can be prayed *lechatchila* starting at *mincha gedola*.
     */
    minchaGedola() {
        return this.getShaahZmanisBasedZman(6.5);
    }
    /**
     * Earliest Mincha – Mincha Gedola (MGA); Sunrise plus 6.5 halachic hours.
     * If elevation is enabled, this function will include elevation in the calculation.
     *
     * This method returns the time of *mincha gedola* according to the Magen Avraham
     * with the day starting 72 minutes before sunrise and ending 72 minutes after sunset.
     * This is the earliest time to pray *mincha*.
     */
    minchaGedolaMGA() {
        const [alot72, temporalHour] = this.getTemporalHour72(false);
        const offset = Math.floor(6.5 * temporalHour);
        return new Date(alot72.getTime() + offset);
    }
    /**
     * Preferable earliest time to recite Minchah – Mincha Ketana; Sunrise plus 9.5 halachic hours.
     * If elevation is enabled, this function will include elevation in the calculation.
     *
     * This method returns *mincha ketana*, the preferred earliest time to pray *mincha* in the
     * opinion of the [Rambam](https://en.wikipedia.org/wiki/Maimonides) and others,
     * that is 9.5 *shaos zmaniyos* (solar hours) after sunrise or sea level sunrise
     * (depending on the `useElevation` setting), according
     * to the [GRA](https://en.wikipedia.org/wiki/Vilna_Gaon).
     */
    minchaKetana() {
        return this.getShaahZmanisBasedZman(9.5);
    }
    /**
     * This method returns the time of *mincha ketana* according to the Magen Avraham
     * with the day starting 72 minutes before sunrise and ending 72 minutes after sunset.
     * This is the preferred earliest time to pray *mincha* according to the opinion of
     * the [Rambam](https://en.wikipedia.org/wiki/Maimonides) and others.
     *
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    minchaKetanaMGA() {
        const [alot72, temporalHour] = this.getTemporalHour72(false);
        return new Date(alot72.getTime() + Math.floor(9.5 * temporalHour));
    }
    /**
     * Plag haMincha; Sunrise plus 10.75 halachic hours.
     * If elevation is enabled, this function will include elevation in the calculation.
     */
    plagHaMincha() {
        return this.getShaahZmanisBasedZman(10.75);
    }
    /**
     * @param [angle=8.5] optional time for solar depression.
     *   Default is 8.5 degrees for 3 small stars, use 7.083 degrees for 3 medium-sized stars.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    tzeit(angle = 8.5) {
        return this.timeAtAngle(angle, false);
    }
    /**
     * Alias for sunrise
     */
    neitzHaChama() {
        return this.sunrise();
    }
    /**
     * Alias for sunset
     */
    shkiah() {
        return this.sunset();
    }
    /**
     * Rabbeinu Tam holds that bein hashmashos is a specific time
     * between sunset and tzeis hakochavim.
     * One opinion on how to calculate this time is that
     * it is 13.5 minutes before tzies 7.083.
     * Because degree-based functions estimate the amount of light in the sky,
     * the result is not impacted by elevation.
     */
    beinHaShmashos() {
        const tzeit = this.tzeit(7.083);
        const millis = tzeit.getTime();
        if (isNaN(millis)) {
            return tzeit;
        }
        return new Date(millis - 13.5 * 60 * 1000);
    }
    /**
     * Uses timeFormat to return a date like '20:34'.
     * Returns `XX:XX` if the date is invalid.
     */
    static formatTime(dt, timeFormat) {
        if (isNaN(dt.getTime())) {
            return 'XX:XX'; // Invalid Date
        }
        const time = timeFormat.format(dt);
        const hm = time.split(':');
        if (hm[0] === '24') {
            return '00:' + hm[1];
        }
        return time;
    }
    /**
     * Discards seconds, rounding to nearest minute.
     * @param dt
     */
    static roundTime(dt) {
        const millis = dt.getTime();
        if (isNaN(millis)) {
            return dt;
        }
        // Round up to next minute if needed
        const millisOnly = dt.getMilliseconds();
        const seconds = dt.getSeconds();
        if (seconds === 0 && millisOnly === 0) {
            return dt;
        }
        const secAndMillis = seconds * 1000 + millisOnly;
        const delta = secAndMillis >= 30000 ? 60000 - secAndMillis : -1 * secAndMillis;
        return new Date(millis + delta);
    }
    /**
     * Get offset string (like "+05:00" or "-08:00") from tzid (like "Europe/Moscow")
     * @param tzid
     * @param date
     */
    static timeZoneOffset(tzid, date) {
        const offset = getTimezoneOffset(tzid, date);
        const offsetAbs = Math.abs(offset);
        const hours = Math.floor(offsetAbs / 60);
        const minutes = offsetAbs % 60;
        return (offset < 0 ? '+' : '-') + pad2(hours) + ':' + pad2(minutes);
    }
    /**
     * Returns a string like "2022-04-01T13:06:00-11:00"
     * @param tzid
     * @param date
     */
    static formatISOWithTimeZone(tzid, date) {
        if (isNaN(date.getTime())) {
            return '0000-00-00T00:00:00Z';
        }
        return (getPseudoISO(tzid, date).substring(0, 19) +
            Zmanim.timeZoneOffset(tzid, date));
    }
    /**
     * Returns sunrise + `offset` minutes (either positive or negative).
     * If elevation is enabled, this function will include elevation in the calculation
     *  unless `forceSeaLevel` is `true`.
     * @param offset minutes
     * @param roundMinute round time to nearest minute (default true)
     * @param forceSeaLevel use sea-level sunrise (default false)
     */
    sunriseOffset(offset, roundMinute = true, forceSeaLevel = false) {
        const sunrise = forceSeaLevel ? this.seaLevelSunrise() : this.sunrise();
        if (isNaN(sunrise.getTime())) {
            return sunrise;
        }
        if (roundMinute) {
            // For positive offsets only, round up to next minute if needed
            if (offset > 0 && sunrise.getSeconds() >= 30) {
                offset++;
            }
            sunrise.setSeconds(0, 0);
        }
        return new Date(sunrise.getTime() + offset * 60 * 1000);
    }
    /**
     * Returns sunset + `offset` minutes (either positive or negative).
     * If elevation is enabled, this function will include elevation in the calculation
     *  unless `forceSeaLevel` is `true`.
     * @param offset minutes
     * @param roundMinute round time to nearest minute (default true)
     * @param forceSeaLevel use sea-level sunset (default false)
     */
    sunsetOffset(offset, roundMinute = true, forceSeaLevel = false) {
        const sunset = forceSeaLevel ? this.seaLevelSunset() : this.sunset();
        if (isNaN(sunset.getTime())) {
            return sunset;
        }
        if (roundMinute) {
            // For Havdalah only, round up to next minute if needed
            if (offset > 0 && sunset.getSeconds() >= 30) {
                offset++;
            }
            sunset.setSeconds(0, 0);
        }
        return new Date(sunset.getTime() + offset * 60 * 1000);
    }
    /**
     * Returns the Hebrew date relative to the specified location and Gregorian date,
     * taking into consideration whether the time is before or after sunset.
     *
     * For example, if the given date and is `2024-09-22T10:35` (before sunset), and
     * sunset for the specified location is **19:04**, then this function would
     * return a Hebrew date of `19th of Elul, 5784`.
     * If the given date is the same Gregorian day after sunset
     * (for example `2024-09-22T20:07`), this function would return a
     * Hebrew date of `20th of Elul, 5784`.
     * @example
     * const {GeoLocation, Zmanim, HDate} = require('@hebcal/core');
     * const latitude = 48.85341;
     * const longitude = 2.3488;
     * const timezone = 'Europe/Paris';
     * const gloc = new GeoLocation(null, latitude, longitude, 0, timezone);
     * const before = Zmanim.makeSunsetAwareHDate(gloc, new Date('2024-09-22T17:38:46.123Z'), false);
     * console.log(before.toString()); // '19 Elul 5784'
     * const after = Zmanim.makeSunsetAwareHDate(gloc, new Date('2024-09-22T23:45:18.345Z'), false);
     * console.log(after.toString()); // '20 Elul 5784'
     */
    static makeSunsetAwareHDate(gloc, date, useElevation) {
        const zmanim = new Zmanim(gloc, date, useElevation);
        const sunset = zmanim.sunset();
        let hd = new HDate(date);
        const sunsetMillis = sunset.getTime();
        if (isNaN(sunsetMillis)) {
            return hd;
        }
        if (date.getTime() >= sunsetMillis) {
            hd = hd.next();
        }
        return hd;
    }
}

class QuickLRU extends Map {
	constructor(options = {}) {
		super();

		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		if (typeof options.maxAge === 'number' && options.maxAge === 0) {
			throw new TypeError('`maxAge` must be a number greater than 0');
		}

		// TODO: Use private class fields when ESLint supports them.
		this.maxSize = options.maxSize;
		this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	// TODO: Use private class methods when targeting Node.js 16.
	_emitEvictions(cache) {
		if (typeof this.onEviction !== 'function') {
			return;
		}

		for (const [key, item] of cache) {
			this.onEviction(key, item.value);
		}
	}

	_deleteIfExpired(key, item) {
		if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
			if (typeof this.onEviction === 'function') {
				this.onEviction(key, item.value);
			}

			return this.delete(key);
		}

		return false;
	}

	_getOrDeleteIfExpired(key, item) {
		const deleted = this._deleteIfExpired(key, item);
		if (deleted === false) {
			return item.value;
		}
	}

	_getItemValue(key, item) {
		return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
	}

	_peek(key, cache) {
		const item = cache.get(key);

		return this._getItemValue(key, item);
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;
			this._emitEvictions(this.oldCache);
			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	_moveToRecent(key, item) {
		this.oldCache.delete(key);
		this._set(key, item);
	}

	* _entriesAscending() {
		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield item;
				}
			}
		}

		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield item;
			}
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			const item = this.cache.get(key);

			return this._getItemValue(key, item);
		}

		if (this.oldCache.has(key)) {
			const item = this.oldCache.get(key);
			if (this._deleteIfExpired(key, item) === false) {
				this._moveToRecent(key, item);
				return item.value;
			}
		}
	}

	set(key, value, {maxAge = this.maxAge} = {}) {
		const expiry =
			typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ?
				Date.now() + maxAge :
				undefined;
		if (this.cache.has(key)) {
			this.cache.set(key, {
				value,
				expiry
			});
		} else {
			this._set(key, {value, expiry});
		}

		return this;
	}

	has(key) {
		if (this.cache.has(key)) {
			return !this._deleteIfExpired(key, this.cache.get(key));
		}

		if (this.oldCache.has(key)) {
			return !this._deleteIfExpired(key, this.oldCache.get(key));
		}

		return false;
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this._peek(key, this.cache);
		}

		if (this.oldCache.has(key)) {
			return this._peek(key, this.oldCache);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	resize(newSize) {
		if (!(newSize && newSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		const items = [...this._entriesAscending()];
		const removeCount = items.length - newSize;
		if (removeCount < 0) {
			this.cache = new Map(items);
			this.oldCache = new Map();
			this._size = items.length;
		} else {
			if (removeCount > 0) {
				this._emitEvictions(items.slice(0, removeCount));
			}

			this.oldCache = new Map(items.slice(removeCount));
			this.cache = new Map();
			this._size = 0;
		}

		this.maxSize = newSize;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesDescending() {
		let items = [...this.cache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		items = [...this.oldCache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesAscending() {
		for (const [key, value] of this._entriesAscending()) {
			yield [key, value.value];
		}
	}

	get size() {
		if (!this._size) {
			return this.oldCache.size;
		}

		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return Math.min(this._size + oldCacheSize, this.maxSize);
	}

	entries() {
		return this.entriesAscending();
	}

	forEach(callbackFunction, thisArgument = this) {
		for (const [key, value] of this.entriesAscending()) {
			callbackFunction.call(thisArgument, value, key, this);
		}
	}

	get [Symbol.toStringTag]() {
		return JSON.stringify([...this.entriesAscending()]);
	}
}

const SUN$1 = 0;
const TUE$1 = 2;
const FRI$2 = 5;
const SAT$2 = 6;
const NISAN$2 = months.NISAN;
const IYYAR = months.IYYAR;
/**
 * Yom HaShoah first observed in 1951.
 * When the actual date of Yom Hashoah falls on a Friday, the
 * state of Israel observes Yom Hashoah on the preceding
 * Thursday. When it falls on a Sunday, Yom Hashoah is observed
 * on the following Monday.
 * http://www.ushmm.org/remembrance/dor/calendar/
 * @private
 * @param year
 */
function dateYomHaShoah(year) {
    if (year < 5711) {
        return null;
    }
    let nisan27dt = new HDate(27, NISAN$2, year);
    if (nisan27dt.getDay() === FRI$2) {
        nisan27dt = new HDate(26, NISAN$2, year);
    }
    else if (nisan27dt.getDay() === SUN$1) {
        nisan27dt = new HDate(28, NISAN$2, year);
    }
    return nisan27dt;
}
/**
 * Yom HaAtzma'ut only celebrated after 1948
 * @private
 * @param year
 */
function dateYomHaZikaron(year) {
    if (year < 5708) {
        return null;
    }
    let day;
    const pesach = new HDate(15, NISAN$2, year);
    const pdow = pesach.getDay();
    if (pdow === SUN$1) {
        day = 2;
    }
    else if (pdow === SAT$2) {
        day = 3;
    }
    else if (year < 5764) {
        day = 4;
    }
    else if (pdow === TUE$1) {
        day = 5;
    }
    else {
        day = 4;
    }
    return new HDate(day, IYYAR, year);
}

/** @private */
function renderParshaName(parsha, locale) {
    const locale0 = locale !== null && locale !== void 0 ? locale : Locale.getLocaleName();
    let name = Locale.gettext(parsha[0], locale0);
    if (parsha.length === 2) {
        const hyphen = locale0 === 'he' ? '־' : '-';
        name += hyphen + Locale.gettext(parsha[1], locale0);
    }
    name = name.replace(/'/g, '’');
    const str = Locale.gettext('Parashat', locale) + ' ' + name;
    return str.normalize();
}

/*
    Hebcal - A Jewish Calendar Generator
    Copyright (c) 1994-2020 Danny Sadinoff
    Portions copyright Eyal Schachter and Michael J. Radwin

    https://github.com/hebcal/hebcal-es6

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * Many of the following algorithms were taken from hebrew calendar
 * routines by Maimonedes, from his Mishneh Torah, and implemented by
 *  Nachum Dershowitz                Department of Computer Science
 *  (217) 333-4219                   University of Illinois at Urbana-Champaign
 *  nachum@cs.uiuedu               1304 West Springfield Avenue
 *                                   Urbana, Illinois 61801
 *
 * The routines were included in the emacs 19 distribution.
 *
 */
const INCOMPLETE = 0;
const REGULAR = 1;
const COMPLETE = 2;
function yearType(hyear) {
    const longC = HDate.longCheshvan(hyear);
    const shortK = HDate.shortKislev(hyear);
    if (longC && !shortK) {
        return COMPLETE;
    }
    else if (!longC && shortK) {
        return INCOMPLETE;
    }
    else {
        return REGULAR;
    }
}
/**
 * Represents Parashah HaShavua for an entire Hebrew year
 */
class Sedra {
    /**
     * Caculates the Parashah HaShavua for an entire Hebrew year
     * @param hyear - Hebrew year (e.g. 5749)
     * @param il - Use Israel sedra schedule (false for Diaspora)
     */
    constructor(hyear, il) {
        hyear = +hyear;
        this.year = hyear;
        const rh0 = new HDate(1, months.TISHREI, hyear);
        const rh = rh0.abs();
        const rhDay = rh0.getDay() + 1;
        // find the first Saturday on or after Rosh Hashana
        this.firstSaturday = HDate.dayOnOrBefore(6, rh + 6);
        const leap = +HDate.isLeapYear(hyear);
        this.il = Boolean(il);
        const type = yearType(hyear);
        let key = `${leap}${rhDay}${type}`;
        if (types[key]) {
            this.theSedraArray = types[key];
            this.yearKey = key;
        }
        else {
            key = key + +this.il; // cast to num, then concat
            this.theSedraArray = types[key];
            this.yearKey = key;
        }
        if (!this.theSedraArray) {
            throw new Error(`improper sedra year type ${key} calculated for ${hyear}`);
        }
    }
    /**
     * Returns the parsha (or parshiyot) read on Hebrew date
     * @deprecated Use {@link lookup} instead
     * @param hd Hebrew date or R.D. days
     */
    get(hd) {
        return this.lookup(hd).parsha;
    }
    /**
     * Looks up parsha for the date, then returns a translated or transliterated string
     * @deprecated Use {@link lookup} instead
     * @param hd Hebrew date or R.D. days
     * @param [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale
     */
    getString(hd, locale) {
        const parsha = this.get(hd);
        return renderParshaName(parsha, locale);
    }
    /**
     * Checks to see if this day would be a regular parasha HaShavua
     * Torah reading or special holiday reading
     * @deprecated Use {@link lookup} instead
     * @param hd Hebrew date or R.D. days
     */
    isParsha(hd) {
        return !this.lookup(hd).chag;
    }
    /**
     * Returns the date that a parsha occurs
     * or `null` if the parsha doesn't occur this year
     * @param parsha if a `string`, specified with Sephardic transliterations
     *  like `'Noach'` or `'Matot-Masei'`. If an array, must be a 1- or 2-element
     *  array such as `['Noach']` or `['Matot', 'Masei']`. If a `number`, should
     *  be a 0-based parsha index (`0` for Bereshit, `1` for Noach) or a negative
     *  number for a doubled parsha (e.g. `-21` for Vayakhel-Pekudei)
     */
    find(parsha) {
        if (typeof parsha === 'number') {
            if (parsha >= parshiot.length || (parsha < 0 && !isValidDouble(parsha))) {
                throw new RangeError(`Invalid parsha number: ${parsha}`);
            }
            return this.findInternal(parsha);
        }
        else if (typeof parsha === 'string') {
            const num = parsha2id.get(parsha);
            if (typeof num === 'number') {
                return this.find(num);
            }
            else if (parsha.indexOf('-') !== -1) {
                if (parsha === CHMPESACH || parsha === CHMSUKOT) {
                    return this.findInternal(parsha);
                }
                return this.find(parsha.split('-'));
            }
            else {
                // try to find Saturday holiday like 'Yom Kippur'
                return this.findInternal(parsha);
            }
        }
        else if (Array.isArray(parsha)) {
            const plen = parsha.length;
            if ((plen !== 1 && plen !== 2) || typeof parsha[0] !== 'string') {
                throw new TypeError(`Invalid parsha argument: ${JSON.stringify(parsha)}`);
            }
            if (plen === 1) {
                return this.find(parsha[0]);
            }
            const p1 = parsha[0];
            const p2 = parsha[1];
            const num1 = parsha2id.get(p1);
            const num2 = parsha2id.get(p2);
            if (typeof num1 !== 'number' ||
                typeof num2 !== 'number' ||
                num2 !== num1 + 1 ||
                !isValidDouble(-num1)) {
                throw new RangeError(`Unrecognized parsha name: ${p1}-${p2}`);
            }
            return this.find(-num1);
        }
        return null; /* NOTREACHED */
    }
    findInternal(parsha) {
        const idx = this.theSedraArray.indexOf(parsha);
        if (idx === -1) {
            return null; // doesn't occur this year
        }
        return new HDate(this.firstSaturday + idx * 7);
    }
    /**
     * Returns the date that a parsha (or its doubled or undoubled counterpart)
     * occurs, or `null` if the parsha doesn't occur this year
     */
    findContaining(parsha) {
        const hdate = this.find(parsha);
        if (hdate) {
            return hdate;
        }
        if (typeof parsha === 'number') {
            // a valid negative number (double parsha in a year where they are
            // combined) would've been found above, and a invalid negative number
            // would've thrown an error, so this parsha must be a positive number
            // representing either p1 or p2
            const p1 = -parsha;
            if (isValidDouble(p1)) {
                return this.find(p1);
            }
            else {
                // this must be the second individual parsha of a doubled pair
                // for example 29 for Kedoshim, so check for -28 for Achrei Mot-Kedoshim
                return this.find(p1 + 1);
            }
        }
        else {
            const num = parsha2id.get(parsha);
            if (num) {
                // parsha is either the first or second individual parsha of
                // a pair that is doubled this year
                const p1 = -num;
                if (isValidDouble(p1)) {
                    return this.find(p1);
                }
                else {
                    return this.find(p1 + 1);
                }
            }
            else {
                // this was indeed a doubled parsha, so return date of the first half
                const [p1] = parsha.split('-');
                return this.find(p1);
            }
        }
    }
    /**
     * Returns the underlying annual sedra schedule.
     * Used by `@hebcal/triennial`
     */
    getSedraArray() {
        return this.theSedraArray;
    }
    /**
     * R.D. date of the first Saturday on or after Rosh Hashana
     */
    getFirstSaturday() {
        return this.firstSaturday;
    }
    getYear() {
        return this.year;
    }
    /**
     * Returns an object describing the parsha on the first Saturday on or after `hd`
     * @param hd Hebrew date or R.D. days
     */
    lookup(hd) {
        const abs = typeof hd === 'number' ? hd : HDate.isHDate(hd) ? hd.abs() : NaN;
        if (isNaN(abs)) {
            throw new TypeError(`Bad date argument: ${hd}`);
        }
        // find the first saturday on or after today's date
        const saturday = HDate.dayOnOrBefore(6, abs + 6);
        const weekNum = (saturday - this.firstSaturday) / 7;
        const index = this.theSedraArray[weekNum];
        if (typeof index === 'undefined') {
            const sedra = getSedra(this.year + 1, this.il);
            return sedra.lookup(saturday); // must be next year
        }
        const hdate = new HDate(saturday);
        if (typeof index === 'string') {
            // Shabbat has a chag. Return a description
            return { parsha: [index], chag: true, hdate };
        }
        if (index >= 0) {
            return { parsha: [parshiot[index]], chag: false, num: index + 1, hdate };
        }
        const p1 = D(index); // undouble the parsha
        return {
            parsha: [parshiot[p1], parshiot[p1 + 1]],
            chag: false,
            num: [p1 + 1, p1 + 2],
            hdate,
        };
    }
}
/**
 * The 54 parshiyot of the Torah as transilterated strings.
 * parshiot[0] == 'Bereshit', parshiot[1] == 'Noach', parshiot[52] == "Ha'azinu".
 * @readonly
 * @type {string[]}
 */
const parshiot = [
    'Bereshit',
    'Noach',
    'Lech-Lecha',
    'Vayera',
    'Chayei Sara',
    'Toldot',
    'Vayetzei',
    'Vayishlach',
    'Vayeshev',
    'Miketz',
    'Vayigash',
    'Vayechi',
    'Shemot',
    'Vaera',
    'Bo',
    'Beshalach',
    'Yitro',
    'Mishpatim',
    'Terumah',
    'Tetzaveh',
    'Ki Tisa',
    'Vayakhel',
    'Pekudei',
    'Vayikra',
    'Tzav',
    'Shmini',
    'Tazria',
    'Metzora',
    'Achrei Mot',
    'Kedoshim',
    'Emor',
    'Behar',
    'Bechukotai',
    'Bamidbar',
    'Nasso',
    "Beha'alotcha",
    "Sh'lach",
    'Korach',
    'Chukat',
    'Balak',
    'Pinchas',
    'Matot',
    'Masei',
    'Devarim',
    'Vaetchanan',
    'Eikev',
    "Re'eh",
    'Shoftim',
    'Ki Teitzei',
    'Ki Tavo',
    'Nitzavim',
    'Vayeilech',
    "Ha'azinu",
];
// 0-based parsha IDs
const parsha2id = new Map();
for (let id = 0; id < parshiot.length; id++) {
    const name = parshiot[id];
    parsha2id.set(name, id);
}
// 0-based parsha IDs
const doubles = [
    21, // Vayakhel-Pekudei
    26, // Tazria-Metzora
    28, // Achrei Mot-Kedoshim
    31, // Behar-Bechukotai
    38, // Chukat-Balak
    41, // Matot-Masei
    50, // Nitzavim-Vayeilech
];
/**
 * @private
 * @param id a negative number
 */
function isValidDouble(id) {
    return doubles.includes(-id);
}
/**
 * parsha doubler/undoubler
 * @private
 * @param p
 */
function D(p) {
    return -p;
}
const RH = 'Rosh Hashana'; // 0
const YK = 'Yom Kippur'; // 1
const SUKKOT = 'Sukkot'; // 0
const CHMSUKOT = 'Sukkot Shabbat Chol ha-Moed'; // 0
const SHMINI = 'Shmini Atzeret'; // 0
const PESACH = 'Pesach'; // 25
const PESACH1 = 'Pesach I';
const CHMPESACH = 'Pesach Shabbat Chol ha-Moed'; // 25
const PESACH7 = 'Pesach VII'; // 25
const PESACH8 = 'Pesach VIII';
const SHAVUOT$1 = 'Shavuot'; // 33
/**
 * Returns an array from start to end
 * @private
 * @param start beginning number, inclusive
 * @param stop ending number, inclusive
 */
function range$1(start, stop) {
    return Array.from({ length: stop - start + 1 }, (v, k) => k + start);
}
const yearStartVayeilech = [51, 52, CHMSUKOT];
const yearStartHaazinu = [52, YK, CHMSUKOT];
const yearStartRH = [RH, 52, SUKKOT, SHMINI];
const r020 = range$1(0, 20);
const r027 = range$1(0, 27);
const r3340 = range$1(33, 40);
const r4349 = range$1(43, 49);
const r4350 = range$1(43, 50);
/**
 * The ordinary year types (keviot)
 * names are leap/nonleap - day - incomplete/regular/complete - diaspora/Israel
 * @private
 * @readonly
 */
const types = {
    /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Tuesday. */
    // e.g. 5753
    '020': yearStartVayeilech.concat(r020, D(21), 23, 24, CHMPESACH, 25, D(26), D(28), 30, D(31), r3340, D(41), r4349, D(50)),
    /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Thursday. */
    // e.g. 5756
    '0220': yearStartVayeilech.concat(r020, D(21), 23, 24, CHMPESACH, 25, D(26), D(28), 30, D(31), 33, SHAVUOT$1, range$1(34, 37), D(38), 40, D(41), r4349, D(50)),
    /* Hebrew year that starts on Thursday, is `regular' (Heshvan has 29
     * days and Kislev has 30 days), and has Passover start on Saturday. */
    // e.g. 5701
    '0510': yearStartHaazinu.concat(r020, D(21), 23, 24, PESACH1, PESACH8, 25, D(26), D(28), 30, D(31), r3340, D(41), r4350),
    /* Hebrew year that starts on Thursday, is `regular' (Heshvan has 29
     * days and Kislev has 30 days), and has Passover start on Saturday. */
    // e.g. 5745
    '0511': yearStartHaazinu.concat(r020, D(21), 23, 24, PESACH, 25, D(26), D(28), range$1(30, 40), D(41), r4350),
    /* Hebrew year that starts on Thursday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Sunday. */
    // e.g. 5754
    '052': yearStartHaazinu.concat(range$1(0, 24), PESACH7, 25, D(26), D(28), 30, D(31), r3340, D(41), r4350),
    /* Hebrew year that starts on Saturday, is `incomplete' (Heshvan and Kislev
     * each have 29 days), and has Passover start on Sunday. */
    // e.g. 5761
    '070': yearStartRH.concat(r020, D(21), 23, 24, PESACH7, 25, D(26), D(28), 30, D(31), r3340, D(41), r4350),
    /* Hebrew year that starts on Saturday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Tuesday. */
    // e.g. 5716
    '072': yearStartRH.concat(r020, D(21), 23, 24, CHMPESACH, 25, D(26), D(28), 30, D(31), r3340, D(41), r4349, D(50)),
    /* --  The leap year types (keviot) -- */
    /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Thursday. */
    // e.g. 5746
    '1200': yearStartVayeilech.concat(r027, CHMPESACH, range$1(28, 33), SHAVUOT$1, range$1(34, 37), D(38), 40, D(41), r4349, D(50)),
    /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Thursday. */
    // e.g. 5746
    '1201': yearStartVayeilech.concat(r027, CHMPESACH, range$1(28, 40), D(41), r4349, D(50)),
    /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Saturday. */
    // e.g.5752
    '1220': yearStartVayeilech.concat(r027, PESACH1, PESACH8, range$1(28, 40), D(41), r4350),
    /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Saturday. */
    // e.g.5752
    '1221': yearStartVayeilech.concat(r027, PESACH, range$1(28, 50)),
    /* Hebrew year that starts on Thursday, is `incomplete' (Heshvan and
     * Kislev both have 29 days), and has Passover start on Sunday. */
    // e.g. 5768
    '150': yearStartHaazinu.concat(range$1(0, 28), PESACH7, range$1(29, 50)),
    /* Hebrew year that starts on Thursday, is `complete' (Heshvan and
     * Kislev both have 30 days), and has Passover start on Tuesday. */
    // eg. 5771
    '152': yearStartHaazinu.concat(range$1(0, 28), CHMPESACH, range$1(29, 49), D(50)),
    /* Hebrew year that starts on Saturday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Tuesday. */
    // e.g.5757
    '170': yearStartRH.concat(r027, CHMPESACH, range$1(28, 40), D(41), r4349, D(50)),
    /* Hebrew year that starts on Saturday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Thursday. */
    '1720': yearStartRH.concat(r027, CHMPESACH, range$1(28, 33), SHAVUOT$1, range$1(34, 37), D(38), 40, D(41), r4349, D(50)),
};
/* Hebrew year that starts on Monday, is `complete' (Heshvan and
 * Kislev each have 30 days), and has Passover start on Thursday. */
types['0221'] = types['020'];
/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Thursday. */
// e.g. 5715
types['0310'] = types['0220'];
/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Thursday. */
types['0311'] = types['020'];
/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Saturday. */
// e.g. 5715
types['1310'] = types['1220'];
/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Saturday. */
types['1311'] = types['1221'];
/* Hebrew year that starts on Saturday, is `complete' (Heshvan and
 * Kislev each have 30 days), and has Passover start on Thursday. */
types['1721'] = types['170'];
const sedraCache = new QuickLRU({ maxSize: 400 });
/**
 * Convenience function to create an instance of `Sedra` or reuse a previously
 * created and cached instance.
 * @param hyear
 * @param il
 */
function getSedra(hyear, il) {
    const cacheKey = `${hyear}-${il ? 1 : 0}`;
    let sedra = sedraCache.get(cacheKey);
    if (!sedra) {
        sedra = new Sedra(hyear, il);
        sedraCache.set(cacheKey, sedra);
    }
    return sedra;
}

const Nisan = months.NISAN;
const Iyyar = months.IYYAR;
const Sivan = months.SIVAN;
const Tamuz = months.TAMUZ;
const Av = months.AV;
const Elul = months.ELUL;
const Tishrei = months.TISHREI;
const Cheshvan = months.CHESHVAN;
const Kislev = months.KISLEV;
const Shvat = months.SHVAT;
const Adar2 = months.ADAR_II;
const CHAG$1 = flags.CHAG;
const LIGHT_CANDLES$3 = flags.LIGHT_CANDLES;
const YOM_TOV_ENDS$1 = flags.YOM_TOV_ENDS;
const CHUL_ONLY$1 = flags.CHUL_ONLY;
const IL_ONLY$2 = flags.IL_ONLY;
const LIGHT_CANDLES_TZEIS$3 = flags.LIGHT_CANDLES_TZEIS;
const CHANUKAH_CANDLES$2 = flags.CHANUKAH_CANDLES;
const MAJOR_FAST$2 = flags.MAJOR_FAST;
const MINOR_HOLIDAY$2 = flags.MINOR_HOLIDAY;
const EREV$2 = flags.EREV;
const CHOL_HAMOED$1 = flags.CHOL_HAMOED;
const emojiPesach = '🫓';
const emojiSukkot = '🌿🍋';
const ROSH_HASHANA_II = 'Rosh Hashana II';
const EREV_YOM_KIPPUR = 'Erev Yom Kippur';
const YOM_KIPPUR = 'Yom Kippur';
const EREV_SUKKOT = 'Erev Sukkot';
const SUKKOT_I = 'Sukkot I';
const SUKKOT_II = 'Sukkot II';
const SUKKOT_III_CHM = "Sukkot III (CH''M)";
const SUKKOT_IV_CHM = "Sukkot IV (CH''M)";
const SUKKOT_V_CHM = "Sukkot V (CH''M)";
const SUKKOT_VI_CHM = "Sukkot VI (CH''M)";
const SHMINI_ATZERET = 'Shmini Atzeret';
const SIMCHAT_TORAH = 'Simchat Torah';
const SUKKOT_II_CHM = "Sukkot II (CH''M)";
const SUKKOT_VII_HOSHANA_RABA = 'Sukkot VII (Hoshana Raba)';
const CHANUKAH_1_CANDLE = 'Chanukah: 1 Candle';
const TU_BISHVAT = 'Tu BiShvat';
const EREV_PURIM = 'Erev Purim';
const PURIM = 'Purim';
const SHUSHAN_PURIM = 'Shushan Purim';
const EREV_PESACH = 'Erev Pesach';
const PESACH_I = 'Pesach I';
const PESACH_II = 'Pesach II';
const PESACH_II_CHM = "Pesach II (CH''M)";
const PESACH_III_CHM = "Pesach III (CH''M)";
const PESACH_IV_CHM = "Pesach IV (CH''M)";
const PESACH_V_CHM = "Pesach V (CH''M)";
const PESACH_VI_CHM = "Pesach VI (CH''M)";
const PESACH_VII = 'Pesach VII';
const PESACH_VIII = 'Pesach VIII';
const PESACH_SHENI = 'Pesach Sheni';
const LAG_BAOMER = 'Lag BaOmer';
const EREV_SHAVUOT = 'Erev Shavuot';
const SHAVUOT = 'Shavuot';
const SHAVUOT_I = 'Shavuot I';
const SHAVUOT_II = 'Shavuot II';
const TU_BAV = "Tu B'Av";
const ROSH_HASHANA_LABEHEMOT = 'Rosh Hashana LaBehemot';
const EREV_ROSH_HASHANA = 'Erev Rosh Hashana';
const YOM_YERUSHALAYIM = 'Yom Yerushalayim';
const BEN_GURION_DAY = 'Ben-Gurion Day';
const FAMILY_DAY = 'Family Day';
const YITZHAK_RABIN_MEMORIAL_DAY = 'Yitzhak Rabin Memorial Day';
const HERZL_DAY = 'Herzl Day';
const JABOTINSKY_DAY = 'Jabotinsky Day';
const SIGD = 'Sigd';
const YOM_HAALIYAH = 'Yom HaAliyah';
const YOM_HAALIYAH_SCHOOL_OBSERVANCE = 'Yom HaAliyah School Observance';
const HEBREW_LANGUAGE_DAY = 'Hebrew Language Day';
/**
 * Transliterated names of holidays, used by `Event.getDesc()`
 * @readonly
 * @enum {string}
 */
const holidayDesc = {
    /** Asara B'Tevet */
    ASARA_BTEVET: "Asara B'Tevet",
    /** Birkat Hachamah */
    BIRKAT_HACHAMAH: 'Birkat Hachamah',
    /** Chag HaBanot */
    CHAG_HABANOT: 'Chag HaBanot',
    /** Chanukah: 8th Day */
    CHANUKAH_8TH_DAY: 'Chanukah: 8th Day',
    /** Erev Tish'a B'Av */
    EREV_TISHA_BAV: "Erev Tish'a B'Av",
    /** Leil Selichot */
    LEIL_SELICHOT: 'Leil Selichot',
    /** Purim Katan */
    PURIM_KATAN: 'Purim Katan',
    /** Purim Meshulash */
    PURIM_MESHULASH: 'Purim Meshulash',
    /** Shabbat Chazon */
    SHABBAT_CHAZON: 'Shabbat Chazon',
    /** Shabbat HaChodesh */
    SHABBAT_HACHODESH: 'Shabbat HaChodesh',
    /** Shabbat HaGadol */
    SHABBAT_HAGADOL: 'Shabbat HaGadol',
    /** Shabbat Nachamu */
    SHABBAT_NACHAMU: 'Shabbat Nachamu',
    /** Shabbat Parah */
    SHABBAT_PARAH: 'Shabbat Parah',
    /** Shabbat Shekalim */
    SHABBAT_SHEKALIM: 'Shabbat Shekalim',
    /** Shabbat Shirah */
    SHABBAT_SHIRAH: 'Shabbat Shirah',
    /** Shabbat Shuva */
    SHABBAT_SHUVA: 'Shabbat Shuva',
    /** Shabbat Zachor */
    SHABBAT_ZACHOR: 'Shabbat Zachor',
    /** Shushan Purim Katan */
    SHUSHAN_PURIM_KATAN: 'Shushan Purim Katan',
    /** Ta'anit Bechorot */
    TAANIT_BECHOROT: "Ta'anit Bechorot",
    /** Ta'anit Esther */
    TAANIT_ESTHER: "Ta'anit Esther",
    /** Tish'a B'Av */
    TISHA_BAV: "Tish'a B'Av",
    /** Tzom Gedaliah */
    TZOM_GEDALIAH: 'Tzom Gedaliah',
    /** Tzom Tammuz */
    TZOM_TAMMUZ: 'Tzom Tammuz',
    /** Yom HaAtzma'ut */
    YOM_HAATZMA_UT: "Yom HaAtzma'ut",
    /** Yom HaShoah */
    YOM_HASHOAH: 'Yom HaShoah',
    /** Yom HaZikaron */
    YOM_HAZIKARON: 'Yom HaZikaron',
    /** Ben-Gurion Day */
    BEN_GURION_DAY,
    /** Chanukah: 1 Candle */
    CHANUKAH_1_CANDLE,
    /** Erev Pesach */
    EREV_PESACH,
    /** Erev Purim */
    EREV_PURIM,
    /** Erev Rosh Hashana */
    EREV_ROSH_HASHANA,
    /** Erev Shavuot */
    EREV_SHAVUOT,
    /** Erev Sukkot */
    EREV_SUKKOT,
    /** Erev Yom Kippur */
    EREV_YOM_KIPPUR,
    /** Family Day */
    FAMILY_DAY,
    /** Hebrew Language Day */
    HEBREW_LANGUAGE_DAY,
    /** Herzl Day */
    HERZL_DAY,
    /** Jabotinsky Day */
    JABOTINSKY_DAY,
    /** Lag BaOmer */
    LAG_BAOMER,
    /** Pesach I */
    PESACH_I,
    /** Pesach II */
    PESACH_II,
    /** Pesach III (CH''M) */
    PESACH_III_CHM,
    /** Pesach II (CH''M) */
    PESACH_II_CHM,
    /** Pesach IV (CH''M) */
    PESACH_IV_CHM,
    /** Pesach Sheni */
    PESACH_SHENI,
    /** Pesach VII */
    PESACH_VII,
    /** Pesach VIII */
    PESACH_VIII,
    /** Pesach VI (CH''M) */
    PESACH_VI_CHM,
    /** Pesach V (CH''M) */
    PESACH_V_CHM,
    /** Purim */
    PURIM,
    /** Rosh Hashana II */
    ROSH_HASHANA_II,
    /** Rosh Hashana LaBehemot */
    ROSH_HASHANA_LABEHEMOT,
    /** Shavuot */
    SHAVUOT,
    /** Shavuot I */
    SHAVUOT_I,
    /** Shavuot II */
    SHAVUOT_II,
    /** Shmini Atzeret */
    SHMINI_ATZERET,
    /** Shushan Purim */
    SHUSHAN_PURIM,
    /** Sigd */
    SIGD,
    /** Simchat Torah */
    SIMCHAT_TORAH,
    /** Sukkot I */
    SUKKOT_I,
    /** Sukkot II */
    SUKKOT_II,
    /** Sukkot III (CH''M) */
    SUKKOT_III_CHM,
    /** Sukkot II (CH''M) */
    SUKKOT_II_CHM,
    /** Sukkot IV (CH''M) */
    SUKKOT_IV_CHM,
    /** Sukkot VII (Hoshana Raba) */
    SUKKOT_VII_HOSHANA_RABA,
    /** Sukkot VI (CH''M) */
    SUKKOT_VI_CHM,
    /** Sukkot V (CH''M) */
    SUKKOT_V_CHM,
    /** Tu B\'Av */
    TU_BAV,
    /** Tu BiShvat */
    TU_BISHVAT,
    /** Yitzhak Rabin Memorial Day */
    YITZHAK_RABIN_MEMORIAL_DAY,
    /** Yom HaAliyah */
    YOM_HAALIYAH,
    /** Yom HaAliyah School Observance */
    YOM_HAALIYAH_SCHOOL_OBSERVANCE,
    /** Yom Kippur */
    YOM_KIPPUR,
    /** Yom Yerushalayim */
    YOM_YERUSHALAYIM,
};
const staticHolidays = [
    {
        mm: Tishrei,
        dd: 2,
        desc: ROSH_HASHANA_II,
        flags: CHAG$1 | YOM_TOV_ENDS$1,
        emoji: '🍏🍯',
    },
    { mm: Tishrei, dd: 9, desc: EREV_YOM_KIPPUR, flags: EREV$2 | LIGHT_CANDLES$3 },
    {
        mm: Tishrei,
        dd: 10,
        desc: YOM_KIPPUR,
        flags: CHAG$1 | MAJOR_FAST$2 | YOM_TOV_ENDS$1,
    },
    {
        mm: Tishrei,
        dd: 14,
        desc: EREV_SUKKOT,
        flags: CHUL_ONLY$1 | EREV$2 | LIGHT_CANDLES$3,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 15,
        desc: SUKKOT_I,
        flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$3,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 16,
        desc: SUKKOT_II,
        flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 17,
        desc: SUKKOT_III_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 1,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 18,
        desc: SUKKOT_IV_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 2,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 19,
        desc: SUKKOT_V_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 3,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 20,
        desc: SUKKOT_VI_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 4,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 22,
        desc: SHMINI_ATZERET,
        flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$3,
    },
    {
        mm: Tishrei,
        dd: 23,
        desc: SIMCHAT_TORAH,
        flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
    },
    {
        mm: Tishrei,
        dd: 14,
        desc: EREV_SUKKOT,
        flags: IL_ONLY$2 | EREV$2 | LIGHT_CANDLES$3,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 15,
        desc: SUKKOT_I,
        flags: IL_ONLY$2 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 16,
        desc: SUKKOT_II_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 1,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 17,
        desc: SUKKOT_III_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 2,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 18,
        desc: SUKKOT_IV_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 3,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 19,
        desc: SUKKOT_V_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 4,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 20,
        desc: SUKKOT_VI_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 5,
        emoji: emojiSukkot,
    },
    {
        mm: Tishrei,
        dd: 22,
        desc: SHMINI_ATZERET,
        flags: IL_ONLY$2 | CHAG$1 | YOM_TOV_ENDS$1,
    },
    {
        mm: Tishrei,
        dd: 21,
        desc: SUKKOT_VII_HOSHANA_RABA,
        flags: LIGHT_CANDLES$3 | CHOL_HAMOED$1,
        chmDay: -1,
        emoji: emojiSukkot,
    },
    {
        mm: Kislev,
        dd: 24,
        desc: CHANUKAH_1_CANDLE,
        flags: EREV$2 | MINOR_HOLIDAY$2 | CHANUKAH_CANDLES$2,
        emoji: '🕎1️⃣',
    },
    { mm: Shvat, dd: 15, desc: TU_BISHVAT, flags: MINOR_HOLIDAY$2, emoji: '🌳' },
    {
        mm: Adar2,
        dd: 13,
        desc: EREV_PURIM,
        flags: EREV$2 | MINOR_HOLIDAY$2,
        emoji: '🎭️📜',
    },
    { mm: Adar2, dd: 14, desc: PURIM, flags: MINOR_HOLIDAY$2, emoji: '🎭️📜' },
    {
        mm: Adar2,
        dd: 15,
        desc: SHUSHAN_PURIM,
        flags: MINOR_HOLIDAY$2,
        emoji: '🎭️📜',
    },
    // Pesach Israel
    {
        mm: Nisan,
        dd: 14,
        desc: EREV_PESACH,
        flags: IL_ONLY$2 | EREV$2 | LIGHT_CANDLES$3,
        emoji: '🫓🍷',
    },
    {
        mm: Nisan,
        dd: 15,
        desc: PESACH_I,
        flags: IL_ONLY$2 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 16,
        desc: PESACH_II_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 1,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 17,
        desc: PESACH_III_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 2,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 18,
        desc: PESACH_IV_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 3,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 19,
        desc: PESACH_V_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1,
        chmDay: 4,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 20,
        desc: PESACH_VI_CHM,
        flags: IL_ONLY$2 | CHOL_HAMOED$1 | LIGHT_CANDLES$3,
        chmDay: 5,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 21,
        desc: PESACH_VII,
        flags: IL_ONLY$2 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiPesach,
    },
    // Pesach chutz l'aretz
    {
        mm: Nisan,
        dd: 14,
        desc: EREV_PESACH,
        flags: CHUL_ONLY$1 | EREV$2 | LIGHT_CANDLES$3,
        emoji: '🫓🍷',
    },
    {
        mm: Nisan,
        dd: 15,
        desc: PESACH_I,
        flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$3,
        emoji: '🫓🍷',
    },
    {
        mm: Nisan,
        dd: 16,
        desc: PESACH_II,
        flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 17,
        desc: PESACH_III_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 1,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 18,
        desc: PESACH_IV_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 2,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 19,
        desc: PESACH_V_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
        chmDay: 3,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 20,
        desc: PESACH_VI_CHM,
        flags: CHUL_ONLY$1 | CHOL_HAMOED$1 | LIGHT_CANDLES$3,
        chmDay: 4,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 21,
        desc: PESACH_VII,
        flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$3,
        emoji: emojiPesach,
    },
    {
        mm: Nisan,
        dd: 22,
        desc: PESACH_VIII,
        flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: emojiPesach,
    },
    { mm: Iyyar, dd: 14, desc: PESACH_SHENI, flags: MINOR_HOLIDAY$2 },
    { mm: Iyyar, dd: 18, desc: LAG_BAOMER, flags: MINOR_HOLIDAY$2, emoji: '🔥' },
    {
        mm: Sivan,
        dd: 5,
        desc: EREV_SHAVUOT,
        flags: EREV$2 | LIGHT_CANDLES$3,
        emoji: '⛰️🌸',
    },
    {
        mm: Sivan,
        dd: 6,
        desc: SHAVUOT,
        flags: IL_ONLY$2 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: '⛰️🌸',
    },
    {
        mm: Sivan,
        dd: 6,
        desc: SHAVUOT_I,
        flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$3,
        emoji: '⛰️🌸',
    },
    {
        mm: Sivan,
        dd: 7,
        desc: SHAVUOT_II,
        flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
        emoji: '⛰️🌸',
    },
    { mm: Av, dd: 15, desc: TU_BAV, flags: MINOR_HOLIDAY$2, emoji: '❤️' },
    {
        mm: Elul,
        dd: 1,
        desc: ROSH_HASHANA_LABEHEMOT,
        flags: MINOR_HOLIDAY$2,
        emoji: '🐑',
    },
    {
        mm: Elul,
        dd: 29,
        desc: EREV_ROSH_HASHANA,
        flags: EREV$2 | LIGHT_CANDLES$3,
        emoji: '🍏🍯',
    },
];
const staticModernHolidays = [
    { firstYear: 5727, mm: Iyyar, dd: 28, desc: YOM_YERUSHALAYIM, chul: true },
    {
        firstYear: 5737,
        mm: Kislev,
        dd: 6,
        desc: BEN_GURION_DAY,
        satPostponeToSun: true,
        friPostponeToSun: true,
    },
    { firstYear: 5750, mm: Shvat, dd: 30, desc: FAMILY_DAY },
    {
        firstYear: 5758,
        mm: Cheshvan,
        dd: 12,
        desc: YITZHAK_RABIN_MEMORIAL_DAY,
        friSatMovetoThu: true,
    },
    { firstYear: 5764, mm: Iyyar, dd: 10, desc: HERZL_DAY, satPostponeToSun: true },
    {
        firstYear: 5765,
        mm: Tamuz,
        dd: 29,
        desc: JABOTINSKY_DAY,
        satPostponeToSun: true,
    },
    {
        firstYear: 5769,
        mm: Cheshvan,
        dd: 29,
        desc: SIGD,
        chul: true,
        suppressEmoji: true,
        friSatMovetoThu: true,
    },
    { firstYear: 5777, mm: Nisan, dd: 10, desc: YOM_HAALIYAH, chul: true },
    { firstYear: 5777, mm: Cheshvan, dd: 7, desc: YOM_HAALIYAH_SCHOOL_OBSERVANCE },
    // https://www.gov.il/he/departments/policies/2012_des5234
    {
        firstYear: 5773,
        mm: months.TEVET,
        dd: 21,
        desc: HEBREW_LANGUAGE_DAY,
        friSatMovetoThu: true,
    },
];

/** Represents a built-in holiday like Pesach, Purim or Tu BiShvat */
class HolidayEvent extends Event {
    basename() {
        return this.getDesc()
            .replace(/ \d{4}$/, '')
            .replace(/ \(CH''M\)$/, '')
            .replace(/ \(observed\)$/, '')
            .replace(/ \(Hoshana Raba\)$/, '')
            .replace(/ [IV]+$/, '')
            .replace(/: \d Candles?$/, '')
            .replace(/: 8th Day$/, '')
            .replace(/^Erev /, '');
    }
    url() {
        const year = this.getDate().greg().getFullYear();
        if (year < 100) {
            return undefined;
        }
        const url = 'https://www.hebcal.com/holidays/' +
            this.basename().toLowerCase().replace(/'/g, '').replace(/ /g, '-') +
            '-' +
            this.urlDateSuffix();
        return this.getFlags() & flags.IL_ONLY ? url + '?i=on' : url;
    }
    urlDateSuffix() {
        const year = this.getDate().greg().getFullYear();
        return String(year);
    }
    getEmoji() {
        if (this.emoji) {
            return this.emoji;
        }
        else if (this.getFlags() & flags.SPECIAL_SHABBAT) {
            return '🕍';
        }
        else {
            return '✡️';
        }
    }
    getCategories() {
        if (this.cholHaMoedDay) {
            return ['holiday', 'major', 'cholhamoed'];
        }
        const cats = super.getCategories();
        if (cats[0] !== 'unknown') {
            return cats;
        }
        // Don't depend on flags.MINOR_HOLIDAY always being set. Look for minor holidays.
        const desc = this.getDesc();
        switch (desc) {
            case holidayDesc.LAG_BAOMER:
            case holidayDesc.LEIL_SELICHOT:
            case holidayDesc.PESACH_SHENI:
            case holidayDesc.EREV_PURIM:
            case holidayDesc.PURIM_KATAN:
            case holidayDesc.SHUSHAN_PURIM:
            case holidayDesc.TU_BAV:
            case holidayDesc.TU_BISHVAT:
            case holidayDesc.ROSH_HASHANA_LABEHEMOT:
                return ['holiday', 'minor'];
        }
        return ['holiday', 'major'];
    }
    /**
     * Returns (translated) description of this event
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        const str = super.render(locale);
        return str.replace(/'/g, '’');
    }
    /**
     * Returns a brief (translated) description of this event.
     * For most events, this is the same as render(). For some events, it procudes
     * a shorter text (e.g. without a time or added description).
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        const str = super.renderBrief(locale);
        return str.replace(/'/g, '’');
    }
    /**
     * Makes a clone of this Event object
     * @deprecated
     */
    clone() {
        const ev = new HolidayEvent(this.date, this.desc, this.mask);
        // overwrite all enumerable properties
        Object.assign(ev, this);
        return ev;
    }
}
/**
 * Because Asara B'Tevet often occurs twice in the same Gregorian year,
 * we subclass HolidayEvent to generate the correct URL.
 */
class AsaraBTevetEvent extends HolidayEvent {
    urlDateSuffix() {
        const isoDate = isoDateString(this.getDate().greg());
        return isoDate.replace(/-/g, '');
    }
}
/**
 * Because Chanukah sometimes starts in December and ends in January,
 * we subclass HolidayEvent to generate the correct URL.
 */
class ChanukahEvent extends HolidayEvent {
    urlDateSuffix() {
        const dt = this.getDate().greg();
        let year = dt.getFullYear();
        if (dt.getMonth() === 0) {
            year--;
        }
        return String(year);
    }
}
/** Represents Rosh Hashana, the Jewish New Year */
class RoshHashanaEvent extends HolidayEvent {
    /**
     * @private
     * @param date Hebrew date event occurs
     * @param hyear Hebrew year
     * @param mask optional holiday flags
     */
    constructor(date, hyear, mask) {
        super(date, `Rosh Hashana ${hyear}`, mask);
        this.hyear = hyear;
    }
    /**
     * Returns (translated) description of this event
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        return Locale.gettext('Rosh Hashana', locale) + ' ' + this.hyear;
    }
    getEmoji() {
        return '🍏🍯';
    }
}
const roshChodeshStr = 'Rosh Chodesh';
/** Represents Rosh Chodesh, the beginning of a new month */
class RoshChodeshEvent extends HolidayEvent {
    /**
     * Constructs Rosh Chodesh event
     * @param date Hebrew date event occurs
     * @param monthName Hebrew month name (not translated)
     */
    constructor(date, monthName) {
        super(date, `${roshChodeshStr} ${monthName}`, flags.ROSH_CHODESH);
    }
    /**
     * Returns (translated) description of this event
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        const monthName = this.getDesc().substring(roshChodeshStr.length + 1);
        const monthName0 = Locale.gettext(monthName, locale);
        const monthName1 = monthName0.replace(/'/g, '’');
        return Locale.gettext(roshChodeshStr, locale) + ' ' + monthName1;
    }
    basename() {
        return this.getDesc();
    }
    getEmoji() {
        return this.emoji || '🌒';
    }
}

const ykk = 'Yom Kippur Katan';
/** YKK is minor day of atonement on the day preceeding each Rosh Chodesh */
class YomKippurKatanEvent extends HolidayEvent {
    /**
     * @private
     * @param date Hebrew date event occurs
     * @param nextMonthName name of the upcoming month
     */
    constructor(date, nextMonthName) {
        super(date, `${ykk} ${nextMonthName}`, flags.MINOR_FAST | flags.YOM_KIPPUR_KATAN);
        this.nextMonthName = nextMonthName;
        this.memo = `Minor Day of Atonement on the day preceeding Rosh Chodesh ${nextMonthName}`;
    }
    basename() {
        return this.getDesc();
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        const monthName0 = Locale.gettext(this.nextMonthName, locale);
        const monthName = monthName0.replace(/'/g, '’');
        return Locale.gettext(ykk, locale) + ' ' + monthName;
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        return Locale.gettext(ykk, locale);
    }
    url() {
        return undefined;
    }
}

/*
    Hebcal - A Jewish Calendar Generator
    Copyright (c) 1994-2020 Danny Sadinoff
    Portions copyright Eyal Schachter and Michael J. Radwin

    https://github.com/hebcal/hebcal-es6

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/** @private */
function observedInIsrael(ev) {
    return ev.observedInIsrael();
}
/** @private */
function observedInDiaspora(ev) {
    return ev.observedInDiaspora();
}
/** @private */
function holidayFilter(il) {
    return il ? observedInIsrael : observedInDiaspora;
}
/**
 * Returns an array of Events on this date (or `undefined` if no events)
 * @param date Hebrew Date, Gregorian date, or absolute R.D. day number
 * @param [il] use the Israeli schedule for holidays
 */
function getHolidaysOnDate(date, il) {
    const hd = HDate.isHDate(date) ? date : new HDate(date);
    const hdStr = hd.toString();
    const yearMap = getHolidaysForYear_(hd.getFullYear());
    const events = yearMap.get(hdStr);
    // if il isn't a boolean return both diaspora + IL for day
    if (typeof il === 'undefined' || typeof events === 'undefined') {
        return events;
    }
    const filtered = events.filter(holidayFilter(il));
    return filtered;
}
const CHAG = flags.CHAG;
const IL_ONLY$1 = flags.IL_ONLY;
const LIGHT_CANDLES_TZEIS$2 = flags.LIGHT_CANDLES_TZEIS;
const CHANUKAH_CANDLES$1 = flags.CHANUKAH_CANDLES;
const MINOR_FAST$1 = flags.MINOR_FAST;
const SPECIAL_SHABBAT$1 = flags.SPECIAL_SHABBAT;
const MODERN_HOLIDAY$1 = flags.MODERN_HOLIDAY;
const MAJOR_FAST$1 = flags.MAJOR_FAST;
const MINOR_HOLIDAY$1 = flags.MINOR_HOLIDAY;
const EREV$1 = flags.EREV;
const SUN = 0;
const TUE = 2;
const THU = 4;
const FRI$1 = 5;
const SAT$1 = 6;
const NISAN$1 = months.NISAN;
const TAMUZ = months.TAMUZ;
const AV = months.AV;
const TISHREI$1 = months.TISHREI;
const KISLEV = months.KISLEV;
const TEVET = months.TEVET;
const ADAR_I = months.ADAR_I;
const ADAR_II = months.ADAR_II;
const emojiIsraelFlag = { emoji: '🇮🇱' };
const chanukahEmoji = '🕎';
const yearCache = new QuickLRU({ maxSize: 400 });
const KEYCAP_DIGITS = [
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
];
/**
 * Lower-level holidays interface, which returns a `Map` of `Event`s indexed by
 * `HDate.toString()`. These events must filtered especially for `flags.IL_ONLY`
 * or `flags.CHUL_ONLY` depending on Israel vs. Diaspora holiday scheme.
 * @private
 */
function getHolidaysForYear_(year) {
    if (typeof year !== 'number') {
        throw new TypeError(`bad Hebrew year: ${year}`);
    }
    else if (year < 1 || year > 32658) {
        throw new RangeError(`Hebrew year ${year} out of range 1-32658`);
    }
    const cached = yearCache.get(year);
    if (cached) {
        return cached;
    }
    const RH = new HDate(1, TISHREI$1, year);
    const pesach = new HDate(15, NISAN$1, year);
    const map = new Map();
    function add(...events) {
        for (const ev of events) {
            const key = ev.date.toString();
            const arr = map.get(key);
            if (typeof arr === 'object') {
                if (arr[0].getFlags() & EREV$1) {
                    arr.unshift(ev);
                }
                else {
                    arr.push(ev);
                }
            }
            else {
                map.set(key, [ev]);
            }
        }
    }
    for (const h of staticHolidays) {
        const hd = new HDate(h.dd, h.mm, year);
        const ev = new HolidayEvent(hd, h.desc, h.flags);
        if (h.emoji)
            ev.emoji = h.emoji;
        if (h.chmDay)
            ev.cholHaMoedDay = h.chmDay;
        add(ev);
    }
    // standard holidays that don't shift based on year
    add(new RoshHashanaEvent(RH, year, CHAG | LIGHT_CANDLES_TZEIS$2));
    // Variable date holidays
    const tzomGedaliahDay = RH.getDay() === THU ? 4 : 3;
    add(new HolidayEvent(new HDate(tzomGedaliahDay, TISHREI$1, year), holidayDesc.TZOM_GEDALIAH, MINOR_FAST$1));
    // first SAT after RH
    add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, 7 + RH.abs())), holidayDesc.SHABBAT_SHUVA, SPECIAL_SHABBAT$1));
    const rchTevet = HDate.shortKislev(year)
        ? new HDate(1, TEVET, year)
        : new HDate(30, KISLEV, year);
    add(new HolidayEvent(rchTevet, holidayDesc.CHAG_HABANOT, MINOR_HOLIDAY$1));
    // yes, we know Kislev 30-32 are wrong
    // HDate() corrects the month automatically
    for (let candles = 2; candles <= 8; candles++) {
        const hd = new HDate(23 + candles, KISLEV, year);
        add(new ChanukahEvent(hd, `Chanukah: ${candles} Candles`, MINOR_HOLIDAY$1 | CHANUKAH_CANDLES$1, {
            chanukahDay: candles - 1,
            emoji: chanukahEmoji + KEYCAP_DIGITS[candles],
        }));
    }
    add(new ChanukahEvent(new HDate(32, KISLEV, year), holidayDesc.CHANUKAH_8TH_DAY, MINOR_HOLIDAY$1, { chanukahDay: 8, emoji: chanukahEmoji }));
    add(new AsaraBTevetEvent(new HDate(10, TEVET, year), holidayDesc.ASARA_BTEVET, MINOR_FAST$1));
    const pesachAbs = pesach.abs();
    add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, pesachAbs - 43)), holidayDesc.SHABBAT_SHEKALIM, SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, pesachAbs - 30)), holidayDesc.SHABBAT_ZACHOR, SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(pesachAbs - (pesach.getDay() === TUE ? 33 : 31)), holidayDesc.TAANIT_ESTHER, MINOR_FAST$1));
    const haChodeshAbs = HDate.dayOnOrBefore(SAT$1, pesachAbs - 14);
    add(new HolidayEvent(new HDate(haChodeshAbs - 7), holidayDesc.SHABBAT_PARAH, SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(haChodeshAbs), holidayDesc.SHABBAT_HACHODESH, SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, pesachAbs - 1)), holidayDesc.SHABBAT_HAGADOL, SPECIAL_SHABBAT$1), new HolidayEvent(
    // if the fast falls on Shabbat, move to Thursday
    pesach.prev().getDay() === SAT$1
        ? pesach.onOrBefore(THU)
        : new HDate(14, NISAN$1, year), holidayDesc.TAANIT_BECHOROT, MINOR_FAST$1));
    add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, new HDate(1, TISHREI$1, year + 1).abs() - 4)), holidayDesc.LEIL_SELICHOT, MINOR_HOLIDAY$1, { emoji: '🕍' }));
    if (pesach.getDay() === SUN) {
        add(new HolidayEvent(new HDate(16, ADAR_II, year), holidayDesc.PURIM_MESHULASH, MINOR_HOLIDAY$1));
    }
    if (HDate.isLeapYear(year)) {
        add(new HolidayEvent(new HDate(14, ADAR_I, year), holidayDesc.PURIM_KATAN, MINOR_HOLIDAY$1, { emoji: '🎭️' }));
        add(new HolidayEvent(new HDate(15, ADAR_I, year), holidayDesc.SHUSHAN_PURIM_KATAN, MINOR_HOLIDAY$1, { emoji: '🎭️' }));
    }
    const nisan27dt = dateYomHaShoah(year);
    if (nisan27dt) {
        add(new HolidayEvent(nisan27dt, holidayDesc.YOM_HASHOAH, MODERN_HOLIDAY$1));
    }
    const yomHaZikaronDt = dateYomHaZikaron(year);
    if (yomHaZikaronDt) {
        add(new HolidayEvent(yomHaZikaronDt, holidayDesc.YOM_HAZIKARON, MODERN_HOLIDAY$1, emojiIsraelFlag), new HolidayEvent(yomHaZikaronDt.next(), holidayDesc.YOM_HAATZMA_UT, MODERN_HOLIDAY$1, emojiIsraelFlag));
    }
    for (const h of staticModernHolidays) {
        if (year >= h.firstYear) {
            let hd = new HDate(h.dd, h.mm, year);
            const dow = hd.getDay();
            if (h.friSatMovetoThu && (dow === FRI$1 || dow === SAT$1)) {
                hd = hd.onOrBefore(THU);
            }
            else if (h.friPostponeToSun && dow === FRI$1) {
                hd = new HDate(hd.abs() + 2);
            }
            else if (h.satPostponeToSun && dow === SAT$1) {
                hd = hd.next();
            }
            const mask = h.chul ? MODERN_HOLIDAY$1 : MODERN_HOLIDAY$1 | IL_ONLY$1;
            const ev = new HolidayEvent(hd, h.desc, mask);
            if (!h.suppressEmoji) {
                ev.emoji = '🇮🇱';
            }
            add(ev);
        }
    }
    let tamuz17 = new HDate(17, TAMUZ, year);
    let tamuz17attrs;
    if (tamuz17.getDay() === SAT$1) {
        tamuz17 = new HDate(18, TAMUZ, year);
        tamuz17attrs = { observed: true };
    }
    add(new HolidayEvent(tamuz17, holidayDesc.TZOM_TAMMUZ, MINOR_FAST$1, tamuz17attrs));
    let av9dt = new HDate(9, AV, year);
    let av9title = holidayDesc.TISHA_BAV;
    let av9attrs;
    if (av9dt.getDay() === SAT$1) {
        av9dt = av9dt.next();
        av9attrs = { observed: true };
        av9title += ' (observed)';
    }
    const av9abs = av9dt.abs();
    add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, av9abs)), holidayDesc.SHABBAT_CHAZON, SPECIAL_SHABBAT$1), new HolidayEvent(av9dt.prev(), holidayDesc.EREV_TISHA_BAV, EREV$1 | MAJOR_FAST$1, av9attrs), new HolidayEvent(av9dt, av9title, MAJOR_FAST$1, av9attrs), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$1, av9abs + 7)), holidayDesc.SHABBAT_NACHAMU, SPECIAL_SHABBAT$1));
    const monthsInYear = HDate.monthsInYear(year);
    for (let month = 1; month <= monthsInYear; month++) {
        const monthName = HDate.getMonthName(month, year);
        if ((month === NISAN$1
            ? HDate.daysInMonth(HDate.monthsInYear(year - 1), year - 1)
            : HDate.daysInMonth(month - 1, year)) === 30) {
            add(new RoshChodeshEvent(new HDate(1, month, year), monthName));
            add(new RoshChodeshEvent(new HDate(30, month - 1, year), monthName));
        }
        else if (month !== TISHREI$1) {
            add(new RoshChodeshEvent(new HDate(1, month, year), monthName));
        }
    }
    // Begin: Yom Kippur Katan
    // start at Iyyar because one may not fast during Nisan
    for (let month = months.IYYAR; month <= monthsInYear; month++) {
        const nextMonth = month + 1;
        // Yom Kippur Katan is not observed on the day before Rosh Hashanah.
        // Not observed prior to Rosh Chodesh Cheshvan because Yom Kippur has just passed.
        // Not observed before Rosh Chodesh Tevet, because that day is Hanukkah.
        if (nextMonth === TISHREI$1 ||
            nextMonth === months.CHESHVAN ||
            nextMonth === TEVET) {
            continue;
        }
        let ykk = new HDate(29, month, year);
        const dow = ykk.getDay();
        if (dow === FRI$1 || dow === SAT$1) {
            ykk = ykk.onOrBefore(THU);
        }
        const nextMonthName = HDate.getMonthName(nextMonth, year);
        const ev = new YomKippurKatanEvent(ykk, nextMonthName);
        add(ev);
    }
    const sedra = getSedra(year, false);
    const beshalachHd = sedra.find(15);
    add(new HolidayEvent(beshalachHd, holidayDesc.SHABBAT_SHIRAH, SPECIAL_SHABBAT$1));
    // Birkat Hachamah appears only once every 28 years
    const birkatHaChama = getBirkatHaChama(year);
    if (birkatHaChama) {
        const hd = new HDate(birkatHaChama);
        add(new HolidayEvent(hd, holidayDesc.BIRKAT_HACHAMAH, MINOR_HOLIDAY$1, { emoji: '☀️' }));
    }
    yearCache.set(year, map);
    return map;
}
/**
 * Birkat Hachamah appears only once every 28 years.
 * Although almost always in Nisan, it can occur in Adar II.
 *   - 27 Adar II 5461 (Gregorian year 1701)
 *   - 29 Adar II 5993 (Gregorian year 2233)
 *
 * Due to drift, this will eventually slip into Iyyar
 *   - 2 Iyyar 7141 (Gregorian year 3381)
 * @private
 */
function getBirkatHaChama(year) {
    const leap = HDate.isLeapYear(year);
    const startMonth = leap ? ADAR_II : NISAN$1;
    const startDay = leap ? 20 : 1;
    const baseRd = HDate.hebrew2abs(year, startMonth, startDay);
    for (let day = 0; day <= 40; day++) {
        const abs = baseRd + day;
        const elapsed = abs + 1373429;
        if (elapsed % 10227 === 172) {
            return abs;
        }
    }
    return 0;
}
/**
 * Returns an array of holidays for the year
 * @param year Hebrew year
 * @param il use the Israeli schedule for holidays
 */
function getHolidaysForYearArray(year, il) {
    const yearMap = getHolidaysForYear_(year);
    const startAbs = HDate.hebrew2abs(year, TISHREI$1, 1);
    const endAbs = HDate.hebrew2abs(year + 1, TISHREI$1, 1) - 1;
    let events = [];
    const myFilter = il ? observedInIsrael : observedInDiaspora;
    for (let absDt = startAbs; absDt <= endAbs; absDt++) {
        const hd = new HDate(absDt);
        const holidays = yearMap.get(hd.toString());
        if (holidays) {
            const filtered = holidays.filter(myFilter);
            events = events.concat(filtered);
        }
    }
    return events;
}

const LIGHT_CANDLES$2 = flags.LIGHT_CANDLES | flags.LIGHT_CANDLES_TZEIS;
function isTomorrowShabbosOrYomTov(dow, events) {
    if (dow === 5) {
        return true;
    }
    const erev = events.find(ev => ev.getFlags() & LIGHT_CANDLES$2);
    if (erev) {
        return true;
    }
    return false;
}
/**
 * Returns true if it is <em>Shabbos</em> or if it is a <em>Yom Tov</em> day that has a <em>melacha</em> (work)  prohibition.
 *
 * @return if the day is a <em>Yom Tov</em> that is <em>assur bemlacha</em> or <em>Shabbos</em>
 */
function isTodayAssurBemelacha(dow, events) {
    if (dow === 6) {
        return true;
    }
    const chag = events.find(ev => ev.getFlags() & flags.CHAG);
    if (chag) {
        return true;
    }
    return false;
}
/**
 * Utility method to determine if the date and time has a <em>melacha</em> (work) prohibition.
 * Although there are many opinions on the time of <em>tzais</em>, for simplicity
 * this function uses solar depression of 8.5 degrees.
 *
 * @return `true` if <em>melacha</em> is prohibited or `false` if it is not.
 */
function isAssurBemlacha(currentTime, location, useElevation) {
    const zmanim = new Zmanim(location, currentTime, useElevation);
    // erev shabbos, YT or YT sheni and after shkiah
    const sunset = zmanim.sunset();
    const sunsetMillis = sunset.getTime();
    if (isNaN(sunsetMillis)) {
        throw new Error('Could not determine sunset');
    }
    // erev shabbos, YT or YT sheni and after shkiah
    const il = location.getIsrael();
    const currentMillis = currentTime.getTime();
    const hd = new HDate(currentTime);
    const dow = hd.getDay();
    const events = getHolidaysOnDate(hd, il) || [];
    if (isTomorrowShabbosOrYomTov(dow, events) && currentMillis >= sunsetMillis) {
        return true;
    }
    // is shabbos or YT and it is before tzais
    if (isTodayAssurBemelacha(dow, events)) {
        const tzais = zmanim.tzeit();
        const tzaisMillis = tzais.getTime();
        return currentMillis <= tzaisMillis;
    }
    return false;
}

const hour12cc = {
    US: 1,
    CA: 1,
    BR: 1,
    AU: 1,
    NZ: 1,
    DO: 1,
    PR: 1,
    GR: 1,
    IN: 1,
    KR: 1,
    NP: 1,
    ZA: 1,
};
/**
 * @private
 * @param timeStr - original time like "20:30"
 * @param suffix - "p" or "pm" or " P.M.". Add leading space if you want it
 * @param options
 */
function reformatTimeStr(timeStr, suffix, options) {
    var _a;
    if (typeof timeStr !== 'string')
        throw new TypeError(`Bad timeStr: ${timeStr}`);
    const cc = ((_a = options === null || options === void 0 ? void 0 : options.location) === null || _a === void 0 ? void 0 : _a.getCountryCode()) || ((options === null || options === void 0 ? void 0 : options.il) ? 'IL' : 'US');
    const hour12 = options === null || options === void 0 ? void 0 : options.hour12;
    if (typeof hour12 !== 'undefined' && !hour12) {
        return timeStr;
    }
    if (!hour12 && typeof hour12cc[cc] === 'undefined') {
        return timeStr;
    }
    const hm = timeStr.split(':');
    let hour = parseInt(hm[0], 10);
    if (hour < 12 && suffix) {
        suffix = suffix.replace('p', 'a').replace('P', 'A');
        if (hour === 0) {
            hour = 12;
        }
    }
    else if (hour > 12) {
        hour = hour % 12;
    }
    else if (hour === 0) {
        hour = '00';
    }
    return `${hour}:${hm[1]}${suffix}`;
}

/** An event that has an `eventTime` and `eventTimeStr` */
class TimedEvent extends Event {
    /**
     * @param desc Description (not translated)
     */
    constructor(date, desc, mask, eventTime, location, linkedEvent, options) {
        super(date, desc, mask);
        this.eventTime = Zmanim.roundTime(eventTime);
        this.location = location;
        const timeFormat = location.getTimeFormatter();
        this.eventTimeStr = Zmanim.formatTime(this.eventTime, timeFormat);
        const opts = Object.assign(Object.assign({}, options), { location });
        this.fmtTime = reformatTimeStr(this.eventTimeStr, 'pm', opts);
        if (typeof linkedEvent !== 'undefined') {
            this.linkedEvent = linkedEvent;
        }
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        return Locale.gettext(this.getDesc(), locale) + ': ' + this.fmtTime;
    }
    /**
     * Returns translation of "Candle lighting" without the time.
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        return Locale.gettext(this.getDesc(), locale);
    }
    getCategories() {
        const desc = this.getDesc();
        switch (desc) {
            // LIGHT_CANDLES or LIGHT_CANDLES_TZEIS
            case 'Candle lighting':
                return ['candles'];
            // YOM_TOV_ENDS
            case 'Havdalah':
                return ['havdalah'];
            // flags.MINOR_FAST or flags.MAJOR_FAST
            case 'Fast begins':
            case 'Fast ends':
                return ['zmanim', 'fast'];
        }
        /* NOTREACHED */
        return ['unknown'];
    }
}
/** Candle lighting before Shabbat or holiday */
class CandleLightingEvent extends TimedEvent {
    constructor(date, mask, eventTime, location, linkedEvent, options) {
        super(date, 'Candle lighting', mask, eventTime, location, linkedEvent, options);
    }
    getEmoji() {
        return '🕯️';
    }
}
/** Havdalah after Shabbat or holiday */
class HavdalahEvent extends TimedEvent {
    constructor(date, mask, eventTime, location, havdalahMins, linkedEvent, options) {
        super(date, 'Havdalah', mask, eventTime, location, linkedEvent, options);
        if (havdalahMins) {
            this.havdalahMins = havdalahMins;
        }
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        return this.renderBrief(locale) + ': ' + this.fmtTime;
    }
    /**
     * Returns translation of "Havdalah" without the time.
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        let str = Locale.gettext(this.getDesc(), locale);
        if (this.havdalahMins) {
            const min = Locale.gettext('min', locale);
            str += ` (${this.havdalahMins} ${min})`;
        }
        return str;
    }
    getEmoji() {
        return '✨';
    }
}

/* eslint-disable max-len */
const LIGHT_CANDLES$1 = flags.LIGHT_CANDLES;
const LIGHT_CANDLES_TZEIS$1 = flags.LIGHT_CANDLES_TZEIS;
/**
 * @private
 */
function makeCandleEvent(ev, hd, options, isFriday, isSaturday) {
    let havdalahTitle = false;
    let useHavdalahOffset = isSaturday;
    let mask = ev ? ev.getFlags() : LIGHT_CANDLES$1;
    if (typeof ev !== 'undefined') {
        // if linked event && dow == FRI, use Candle lighting time & title
        if (!isFriday) {
            if (mask & (LIGHT_CANDLES_TZEIS$1 | flags.CHANUKAH_CANDLES)) {
                useHavdalahOffset = true;
            }
            else if (mask & flags.YOM_TOV_ENDS) {
                havdalahTitle = true;
                useHavdalahOffset = true;
            }
        }
    }
    else if (isSaturday) {
        havdalahTitle = true;
        mask = LIGHT_CANDLES_TZEIS$1;
    }
    // if Havdalah offset is 0 or undefined, we'll use tzeit time
    const offset = useHavdalahOffset
        ? Number(options.havdalahMins)
        : Number(options.candleLightingMins);
    const location = options.location;
    const useElevation = Boolean(options.useElevation);
    const zmanim = new Zmanim(location, hd, useElevation);
    const time = useHavdalahOffset && !offset
        ? zmanim.tzeit(options.havdalahDeg)
        : zmanim.sunsetOffset(offset, true);
    if (isNaN(time.getTime())) {
        return undefined; // no sunset
    }
    if (havdalahTitle) {
        return new HavdalahEvent(hd, mask, time, location, options.havdalahMins, ev, options);
    }
    else {
        mask |= LIGHT_CANDLES$1;
        return new CandleLightingEvent(hd, mask, time, location, ev, options);
    }
}
const FAST_BEGINS = 'Fast begins';
const FAST_ENDS = 'Fast ends';
/** A fast day also contains a start and end time */
class FastDayEvent extends HolidayEvent {
    constructor(linkedEvent, startEvent, endEvent) {
        super(linkedEvent.getDate(), linkedEvent.getDesc(), linkedEvent.getFlags());
        this.linkedEvent = linkedEvent;
        this.startEvent = startEvent;
        this.endEvent = endEvent;
    }
    render(locale) {
        return this.linkedEvent.render(locale);
    }
    renderBrief(locale) {
        return this.linkedEvent.renderBrief(locale);
    }
    urlDateSuffix() {
        return this.linkedEvent.urlDateSuffix();
    }
    url() {
        return this.linkedEvent.url();
    }
    getEmoji() {
        return this.linkedEvent.getEmoji();
    }
    getCategories() {
        return this.linkedEvent.getCategories();
    }
}
/**
 * Makes a pair of events representing fast start and end times
 * @private
 */
function makeFastStartEnd(ev, options) {
    const desc = ev.getDesc();
    if (desc === 'Yom Kippur') {
        throw new RangeError('YK does not require this function');
    }
    const hd = ev.getDate();
    const dt = hd.greg();
    const location = options.location;
    const fastEndDeg = options.fastEndDeg;
    const useElevation = Boolean(options.useElevation);
    const zmanim = new Zmanim(location, dt, useElevation);
    let startEvent;
    let endEvent;
    if (desc === "Erev Tish'a B'Av") {
        const sunset = zmanim.sunset();
        if (!isNaN(sunset.getTime())) {
            startEvent = makeTimedEvent(ev, sunset, FAST_BEGINS, options);
        }
    }
    else if (desc.startsWith("Tish'a B'Av")) {
        const tzeit = zmanim.tzeit(fastEndDeg);
        if (!isNaN(tzeit.getTime())) {
            endEvent = makeTimedEvent(ev, tzeit, FAST_ENDS, options);
        }
    }
    else {
        const dawn = zmanim.alotHaShachar();
        if (!isNaN(dawn.getTime())) {
            startEvent = makeTimedEvent(ev, dawn, FAST_BEGINS, options);
        }
        if (dt.getDay() !== 5 &&
            !(hd.getDate() === 14 && hd.getMonth() === months.NISAN)) {
            const tzeit = zmanim.tzeit(fastEndDeg);
            if (!isNaN(tzeit.getTime())) {
                endEvent = makeTimedEvent(ev, tzeit, FAST_ENDS, options);
            }
        }
    }
    const ev2 = new FastDayEvent(ev, startEvent, endEvent);
    // copy properties such as memo or emoji
    Object.assign(ev2, ev);
    return ev2;
}
/**
 * @private
 */
function makeTimedEvent(ev, time, desc, options) {
    const location = options.location;
    const hd = ev.getDate();
    return new TimedEvent(hd, desc, ev.getFlags(), time, location, ev, options);
}
class TimedChanukahEvent extends ChanukahEvent {
    constructor(date, desc, mask, eventTime, location) {
        super(date, desc, mask);
        this.eventTime = Zmanim.roundTime(eventTime);
        const timeFormat = location.getTimeFormatter();
        this.eventTimeStr = Zmanim.formatTime(this.eventTime, timeFormat);
        this.location = location;
    }
}
/**
 * Makes a candle-lighting event for Chankah (not on Friday/Saturday).
 * At one point this used civil dusk (6 degrees below horizon).
 * Another source suggests 4.6667 degrees below horizon.
 * @private
 */
function makeWeekdayChanukahCandleLighting(ev, hd, options) {
    const location = options.location;
    const useElevation = Boolean(options.useElevation);
    const zmanim = new Zmanim(location, hd.greg(), useElevation);
    const candleLightingTime = zmanim.beinHaShmashos();
    if (isNaN(candleLightingTime.getTime())) {
        return null;
    }
    const ev2 = new TimedChanukahEvent(hd, ev.getDesc(), ev.getFlags(), candleLightingTime, location);
    ev2.emoji = ev.emoji;
    ev2.chanukahDay = ev.chanukahDay;
    return ev2;
}

/* eslint-disable camelcase */
const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const heDayNames = [
    'רִאשׁוֹן',
    'שֵׁנִי',
    'שְׁלִישִׁי',
    'רְבִיעִי',
    'חֲמִישִׁי',
    'שִׁישִּׁי',
    'שַׁבָּת',
];
const frDayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const night = 'בַּלַּ֥יְלָה';
function getHebrewTimeOfDay(hour) {
    if (hour < 5)
        return night;
    else if (hour < 12)
        return 'בַּבֹּקֶר';
    else if (hour < 17)
        return 'בַּצׇּהֳרַיִים';
    else if (hour < 21)
        return 'בָּעֶרֶב';
    return night;
}
/**
 * Represents a molad, the moment when the new moon is "born"
 */
class Molad {
    /**
     * Calculates the molad for a Hebrew month
     * @param year
     * @param month
     */
    constructor(year, month) {
        this.m = molad(year, month);
    }
    /**
     */
    getYear() {
        return this.m.year;
    }
    /**
     */
    getMonth() {
        return this.m.month;
    }
    /**
     */
    getMonthName() {
        return HDate.getMonthName(this.m.month, this.m.year);
    }
    /**
     * @returns Day of Week (0=Sunday, 6=Saturday)
     */
    getDow() {
        return this.m.dayOfWeek;
    }
    /**
     * @returns hour of day (0-23)
     */
    getHour() {
        return this.m.hour;
    }
    /**
     * @returns minutes past hour (0-59)
     */
    getMinutes() {
        return this.m.minutes;
    }
    /**
     * @returns parts of a minute (0-17)
     */
    getChalakim() {
        return this.m.chalakim;
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale)
     * @param options
     */
    render(locale, options) {
        var _a;
        locale = locale !== null && locale !== void 0 ? locale : Locale.getLocaleName();
        if (typeof locale === 'string') {
            locale = locale.toLowerCase();
        }
        const isHebrewLocale = locale === 'he' || locale === 'he-x-nonikud' || locale === 'h';
        const isFrenchLocale = locale === 'fr';
        const monthName = Locale.gettext(this.getMonthName(), locale);
        const dayNames = isHebrewLocale ? heDayNames : (isFrenchLocale ? frDayNames : shortDayNames);
        const dow = dayNames[this.getDow()];
        const minutes = this.getMinutes();
        const hour = this.getHour();
        const chalakim = this.getChalakim();
        const moladStr = Locale.gettext('Molad', locale);
        const minutesStr = (_a = Locale.lookupTranslation('min', locale)) !== null && _a !== void 0 ? _a : 'minutes';
        const chalakimStr = Locale.gettext('chalakim', locale);
        const and = Locale.gettext('and', locale);
        const after = Locale.gettext('after', locale);
        if (isHebrewLocale) {
            const ampm = getHebrewTimeOfDay(hour);
            const result = `${moladStr} ${monthName} יִהְיֶה בַּיּוֹם ${dow} בשָׁבוּעַ, ` +
                `בְּשָׁעָה ${hour} ${ampm}, ` +
                `ו-${minutes} ${minutesStr} ` +
                `ו-${chalakim} ${chalakimStr}`;
            if (locale === 'he-x-nonikud') {
                return Locale.hebrewStripNikkud(result);
            }
            return result;
        }
        const fmtTime = reformatTimeStr(`${hour}:00`, 'pm', options);
        const month = monthName.replace(/'/g, '’');
        return `${moladStr} ${month}: ${dow}, ${minutes} ${minutesStr} ${and} ${chalakim} ${chalakimStr} ${after} ${fmtTime}`;
    }
}
/** Represents a Molad announcement on Shabbat Mevarchim */
class MoladEvent extends Event {
    /**
     * @param date Hebrew date event occurs
     * @param hyear molad year
     * @param hmonth molad month
     * @param options
     */
    constructor(date, hyear, hmonth, options) {
        const m = new Molad(hyear, hmonth);
        const monthName = m.getMonthName();
        super(date, `Molad ${monthName} ${hyear}`, flags.MOLAD);
        this.molad = m;
        this.options = options;
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        return this.molad.render(locale, this.options);
    }
}

const sefirot = {
    en: {
        infix: 'within ',
        infix26: 'within ',
        words: [
            '',
            'Lovingkindness',
            'Might',
            'Beauty',
            'Eternity',
            'Splendor',
            'Foundation',
            'Majesty',
        ],
        pfxWords: null,
    },
    he: {
        infix: null,
        infix26: null,
        words: [
            '',
            'חֶֽסֶד',
            'גְּבוּרָה',
            'תִּפְאֶֽרֶת',
            'נֶּֽצַח',
            'הוֹד',
            'יְּסוֹד',
            'מַלְכוּת',
        ],
        pfxWords: [
            '',
            'שֶׁבְּחֶֽסֶד',
            'שֶׁבִּגְבוּרָה',
            'שֶׁבְּתִפְאֶֽרֶת',
            'שֶׁבְּנֶֽצַח',
            'שֶׁבְּהוֹד',
            'שֶׁבִּיְסוֹד',
            'שֶׁבְּמַלְכוּת',
        ],
    },
    translit: {
        infix: "sheb'",
        infix26: 'shebi',
        words: [
            '',
            'Chesed',
            'Gevurah',
            'Tiferet',
            'Netzach',
            'Hod',
            'Yesod',
            'Malkhut',
        ],
        pfxWords: null,
    },
};
function checkDay(omerDay) {
    if (omerDay < 1 || omerDay > 49) {
        throw new RangeError(`Invalid Omer day ${omerDay}`);
    }
}
function getWeeks(omerDay) {
    const weekNum = Math.floor((omerDay - 1) / 7) + 1;
    const daysWithinWeeks = omerDay % 7 || 7;
    return [weekNum, daysWithinWeeks];
}
function omerTodayIsEn(omerDay) {
    const [weekNumber, daysWithinWeeks] = getWeeks(omerDay);
    const totalDaysStr = omerDay === 1 ? 'day' : 'days';
    let str = `Today is ${omerDay} ${totalDaysStr}`;
    if (weekNumber > 1 || omerDay === 7) {
        const day7 = daysWithinWeeks === 7;
        const numWeeks = day7 ? weekNumber : weekNumber - 1;
        const weeksStr = numWeeks === 1 ? 'week' : 'weeks';
        str += `, which is ${numWeeks} ${weeksStr}`;
        if (!day7) {
            const daysStr = daysWithinWeeks === 1 ? 'day' : 'days';
            str += ` and ${daysWithinWeeks} ${daysStr}`;
        }
    }
    return str + ' of the Omer';
}
// adapted from pip hdate package (GPL)
// https://github.com/py-libhdate/py-libhdate/blob/master/hdate/date.py
const tens = ['', 'עֲשָׂרָה', 'עֶשְׂרִים', 'שְׁלוֹשִׁים', 'אַרְבָּעִים'];
const ones = [
    '',
    'אֶחָד',
    'שְׁנַיִם',
    'שְׁלוֹשָׁה',
    'אַרְבָּעָה',
    'חֲמִשָּׁה',
    'שִׁשָּׁה',
    'שִׁבְעָה',
    'שְׁמוֹנָה',
    'תִּשְׁעָה',
];
const shnei = 'שְׁנֵי';
const yamim = 'יָמִים';
const shneiYamim = shnei + ' ' + yamim;
const shavuot = 'שָׁבוּעוֹת';
const yom = 'יוֹם';
const yomEchad = yom + ' ' + ones[1];
const asar = 'עָשָׂר';
function omerTodayIsHe(omerDay) {
    const ten = Math.floor(omerDay / 10);
    const one = omerDay % 10;
    let str = 'הַיּוֹם ';
    if (omerDay === 11) {
        str += 'אַחַד ' + asar;
    }
    else if (omerDay === 12) {
        str += 'שְׁנֵים ' + asar;
    }
    else if (12 < omerDay && omerDay < 20) {
        str += ones[one] + ' ' + asar;
    }
    else if (omerDay > 9) {
        str += ones[one];
        if (one) {
            str += ' ';
            str += ten === 3 ? 'וּ' : 'וְ';
        }
    }
    if (omerDay > 2) {
        if (omerDay > 20 || omerDay === 10 || omerDay === 20) {
            str += tens[ten];
        }
        if (omerDay < 11) {
            str += ones[one] + ' ' + yamim + ' ';
        }
        else {
            str += ' ' + yom + ' ';
        }
    }
    else if (omerDay === 1) {
        str += yomEchad + ' ';
    }
    else {
        // omer == 2
        str += shneiYamim + ' ';
    }
    if (omerDay > 6) {
        str = str.trim(); // remove trailing space before comma
        str += ', שֶׁהֵם ';
        const weeks = Math.floor(omerDay / 7);
        const days = omerDay % 7;
        if (weeks > 2) {
            str += ones[weeks] + ' ' + shavuot + ' ';
        }
        else if (weeks === 1) {
            str += 'שָׁבֽוּעַ' + ' ' + ones[1] + ' ';
        }
        else {
            // weeks == 2
            str += shnei + ' ' + shavuot + ' ';
        }
        if (days) {
            if (days === 2 || days === 3) {
                str += 'וּ';
            }
            else if (days === 5) {
                str += 'וַ';
            }
            else {
                str += 'וְ';
            }
            if (days > 2) {
                str += ones[days] + ' ' + yamim + ' ';
            }
            else if (days === 1) {
                str += yomEchad + ' ';
            }
            else {
                // days == 2
                str += shneiYamim + ' ';
            }
        }
    }
    str += 'לָעֽוֹמֶר';
    return str.normalize();
}
/** Represents a day 1-49 of counting the Omer from Pesach to Shavuot */
class OmerEvent extends Event {
    /**
     * @param date
     * @param omerDay
     */
    constructor(date, omerDay) {
        super(date, `Omer ${omerDay}`, flags.OMER_COUNT);
        checkDay(omerDay);
        this.weekNumber = Math.floor((omerDay - 1) / 7) + 1;
        this.daysWithinWeeks = omerDay % 7 || 7;
        this.omer = omerDay;
    }
    /**
     * Returns the sefira. For example, on day 8:
     *  * חֶֽסֶד שֶׁבִּגְבוּרָה
     *  * Chesed shebiGevurah
     *  * Lovingkindness within Might
     * @param lang `en` (English), `he` (Hebrew with nikud), or `translit` (Hebrew in Sephardic transliteration)
     * @returns a string such as `Lovingkindness within Might` or `חֶֽסֶד שֶׁבִּגְבוּרָה`
     */
    sefira(lang = 'en') {
        if (lang !== 'he' && lang !== 'translit') {
            lang = 'en';
        }
        const [weekNum, daysWithinWeeks] = getWeeks(this.omer);
        const config = sefirot[lang];
        const pfxWords = config.pfxWords;
        const words = config.words;
        const week = pfxWords ? pfxWords[weekNum] : words[weekNum];
        const dayWithinWeek = words[daysWithinWeeks];
        const infix = pfxWords
            ? ''
            : weekNum === 2 || weekNum === 6
                ? config.infix26
                : config.infix;
        return (dayWithinWeek + ' ' + infix + week).normalize();
    }
    /**
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        locale = locale !== null && locale !== void 0 ? locale : Locale.getLocaleName();
        if (typeof locale === 'string') {
            locale = locale.toLowerCase();
        }
        const isHebrewLocale = locale === 'he' || locale === 'he-x-nonikud' || locale === 'h';
        const omer = this.omer;
        const nth = isHebrewLocale ? gematriya(omer) : Locale.ordinal(omer, locale);
        return nth + ' ' + Locale.gettext('day of the Omer', locale);
    }
    /**
     * Returns translation of "Omer day 22" without ordinal numbers.
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        return (Locale.gettext('Omer', locale) +
            ' ' +
            Locale.gettext('day', locale) +
            ' ' +
            this.omer);
    }
    /**
     * Returns an emoji number symbol with a circle, for example `㊲`
     *  from the “Enclosed CJK Letters and Months” block of the Unicode standard
     * @returns a single Unicode character from `①` through `㊾`
     */
    getEmoji() {
        if (typeof this.emoji === 'string')
            return this.emoji;
        let codePoint;
        const omerDay = this.omer;
        if (omerDay <= 20) {
            codePoint = 9312 + omerDay - 1;
        }
        else if (omerDay <= 35) {
            // between 21 and 35 inclusive
            codePoint = 12881 + omerDay - 21;
        }
        else {
            // between 36 and 49 inclusive
            codePoint = 12977 + omerDay - 36;
        }
        return String.fromCodePoint(codePoint);
    }
    getWeeks() {
        const day7 = this.daysWithinWeeks === 7;
        return day7 ? this.weekNumber : this.weekNumber - 1;
    }
    getDaysWithinWeeks() {
        return this.daysWithinWeeks;
    }
    /**
     * Returns a sentence with that evening's omer count
     * @returns a string such as `Today is 10 days, which is 1 week and 3 days of the Omer`
     *  or `הַיוֹם עֲשָׂרָה יָמִים, שְׁהֵם שָׁבוּעַ אֶחָד וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר`
     */
    getTodayIs(locale) {
        locale = locale !== null && locale !== void 0 ? locale : Locale.getLocaleName();
        if (typeof locale === 'string') {
            locale = locale.toLowerCase();
        }
        const isHebrew = locale === 'he' || locale === 'he-x-nonikud';
        const str = isHebrew ? omerTodayIsHe(this.omer) : omerTodayIsEn(this.omer);
        if (locale === 'he-x-nonikud') {
            return Locale.hebrewStripNikkud(str);
        }
        return str;
    }
    url() {
        return `https://www.hebcal.com/omer/${this.getDate().getFullYear()}/${this.omer}`;
    }
}

/**
 * Represents one of 54 weekly Torah portions, always on a Saturday
 */
class ParshaEvent extends Event {
    /**
     * @param parsha - untranslated name of single or double parsha,
     *   such as ['Bereshit'] or ['Achrei Mot', 'Kedoshim']
     */
    constructor(date, parsha, il = false, num = -1) {
        if (!Array.isArray(parsha) || parsha.length === 0 || parsha.length > 2) {
            throw new TypeError('Bad parsha argument');
        }
        const desc = 'Parashat ' + parsha.join('-');
        super(date, desc, flags.PARSHA_HASHAVUA);
        this.parsha = parsha;
        this.il = Boolean(il);
        this.num = num || -1;
    }
    /**
     * @param [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     */
    render(locale) {
        return renderParshaName(this.parsha, locale);
    }
    basename() {
        return this.parsha.join('-');
    }
    url() {
        const year = this.getDate().greg().getFullYear();
        if (year < 100) {
            return undefined;
        }
        const dt = this.urlDateSuffix();
        const url = 'https://www.hebcal.com/sedrot/' +
            this.basename().toLowerCase().replace(/'/g, '').replace(/ /g, '-') +
            '-' +
            dt;
        return this.il ? url + '?i=on' : url;
    }
    urlDateSuffix() {
        const isoDate = isoDateString(this.getDate().greg());
        return isoDate.replace(/-/g, '');
    }
}

/**
 * Calculates weekly Torah Reading on Saturdays for entire year
 * @param year Hebrew year
 * @param il Israel (false for Diaspora)
 * @returns an array of `ParshaEvent` occurring on Saturdays that contain a regular
 *  (non-holiday) Parashat HaShavua
 */
function parshaYear(year, il) {
    const sedra = getSedra(year, il);
    const startAbs = sedra.getFirstSaturday();
    const endAbs = HDate.hebrew2abs(year, months.ELUL, 29);
    const events = [];
    for (let absDt = startAbs; absDt <= endAbs; absDt += 7) {
        const parsha = sedra.lookup(absDt);
        if (!parsha.chag) {
            const ev = new ParshaEvent(parsha.hdate, parsha.parsha, il, parsha.num);
            events.push(ev);
        }
    }
    return events;
}

const mevarchimChodeshStr = 'Shabbat Mevarchim Chodesh';
/** Represents Mevarchim haChodesh, the announcement of the new month */
class MevarchimChodeshEvent extends Event {
    /**
     * Constructs Mevarchim haChodesh event
     * @param date Hebrew date event occurs
     * @param monthName Hebrew month name (not translated)
     * @param [memo]
     * @param locale Optional locale name
     */
    constructor(date, monthName, memo, locale) {
        super(date, `${mevarchimChodeshStr} ${monthName}`, flags.SHABBAT_MEVARCHIM);
        this.monthName = Locale.gettext(monthName, locale);
        if (memo) {
            this.memo = memo;
        }
        else {
            const hyear = date.getFullYear();
            const hmonth = date.getMonth();
            const monNext = hmonth === HDate.monthsInYear(hyear) ? months.NISAN : hmonth + 1;
            const molad = new Molad(hyear, monNext);
            this.memo = molad.render('en', { hour12: false });
        }
    }
    basename() {
        return this.getDesc();
    }
    /**
     * Returns (translated) description of this event
     * @param [locale] Optional locale name (defaults to active locale).
     */
    render(locale) {
        const monthName0 = Locale.gettext(this.monthName, locale);
        const monthName = monthName0.replace(/'/g, '’');
        return Locale.gettext(mevarchimChodeshStr, locale) + ' ' + monthName;
    }
    /**
     * Returns (translated) description of this event
     * @param [locale] Optional locale name (defaults to active locale).
     */
    renderBrief(locale) {
        const str = this.render(locale);
        const space = str.indexOf(' ');
        return str.substring(space + 1);
    }
}

const cals = new Map();
/**
 * Plug-ins for daily learning calendars such as Daf Yomi, Mishna Yomi, Nach Yomi, etc.
 *
 * Learning schedules are provided by the `@hebcal/learning` package.
 */
class DailyLearning {
    /**
     * Register a new learning calendar.
     * @param name case insensitive
     * @param calendar a function that returns an `Event` or `null`
     * @param startDate the first date for which this calendar is valid
     */
    static addCalendar(name, calendar, startDate) {
        if (typeof calendar !== 'function') {
            throw new TypeError(`Invalid calendar function: ${calendar}`);
        }
        cals.set(name.toLowerCase(), {
            fn: calendar,
            startDate: startDate,
        });
    }
    /**
     * Returns an event from daily calendar for a given date. Returns `null` if there
     * is no learning from this calendar on this date.
     * @param name case insensitive
     * @param hd Hebrew Date
     * @param il true for Israel, false for Diaspora
     */
    static lookup(name, hd, il) {
        const cal = cals.get(name.toLowerCase());
        if (typeof cal === 'object') {
            return cal.fn(hd, il);
        }
        return null;
    }
    static getStartDate(name) {
        const cal = cals.get(name.toLowerCase());
        if (typeof cal === 'object') {
            return cal.startDate;
        }
        return undefined;
    }
    /**
     * Tests to see if learning calendar has been registered
     * @param name case insensitive
     */
    static has(name) {
        return cals.has(name.toLowerCase());
    }
    /** Returns the names of all calendars registered */
    static getCalendars() {
        return Array.from(cals.keys());
    }
}

const NONE$1 = 0;
const HALF = 1;
const WHOLE = 2;
/**
 * @private
 */
function hallel_(events, hdate) {
    const whole = events
        .filter(ev => {
        const desc = ev.getDesc();
        const hd = ev.getDate();
        const month = hd.getMonth();
        const mday = hd.getDate();
        return (desc.startsWith('Chanukah') ||
            desc.startsWith('Shavuot') ||
            desc.startsWith('Sukkot') ||
            (month === months.NISAN &&
                (mday === 15 || mday === 16) &&
                ev.getFlags() & flags.CHAG) || // Pesach
            desc === "Yom HaAtzma'ut" ||
            desc === 'Yom Yerushalayim');
    })
        .map(ev => {
        return ev.getDate().abs();
    });
    const abs = hdate.abs();
    if (whole.includes(abs)) {
        return WHOLE;
    }
    const half = events
        .filter(ev => {
        const desc = ev.getDesc();
        return (ev.getFlags() & flags.ROSH_CHODESH ||
            (desc.startsWith('Pesach') &&
                desc !== 'Pesach I' &&
                desc !== 'Pesach II'));
    })
        .map(ev => {
        return ev.getDate().abs();
    });
    if (half.includes(abs)) {
        return HALF;
    }
    return NONE$1;
}

function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
const NONE = {
    shacharit: false,
    mincha: false,
    allCongs: false,
};
/**
 * Return details on what Tachanun (or Tzidchatcha on Shabbat) is said on `hdate`.
 *
 * Tachanun is not said on Rosh Chodesh, the month of Nisan, Lag Baomer,
 * Rosh Chodesh Sivan until Isru Chag, Tisha B'av, 15 Av, Erev Rosh Hashanah,
 * Rosh Hashanah, Erev Yom Kippur until after Simchat Torah, Chanukah,
 * Tu B'shvat, Purim and Shushan Purim, and Purim and Shushan Purim Katan.
 *
 * In some congregations Tachanun is not said until from Rosh Chodesh Sivan
 * until 14th Sivan, Sukkot until after Rosh Chodesh Cheshvan, Pesach Sheini,
 * Yom Ha'atzmaut, and Yom Yerushalayim.
 *
 * Tachanun is not said at Mincha on days before it is not said at Shacharit.
 *
 * Tachanun is not said at Shacharit on Shabbat, but is at Mincha, usually.
 */
function tachanun(hdate, il) {
    return tachanun0(hdate, il, true);
}
function tachanun0(hdate, il, checkNext) {
    const year = hdate.yy;
    const dates = tachanunYear(year, il);
    const abs = hdate.abs();
    if (dates.none.indexOf(abs) > -1) {
        return NONE;
    }
    const dow = hdate.getDay();
    const ret = {
        shacharit: false,
        mincha: false,
        allCongs: false,
    };
    if (dates.some.indexOf(abs) === -1) {
        ret.allCongs = true;
    }
    if (dow !== 6) {
        ret.shacharit = true;
    }
    const tomorrow = abs + 1;
    if (checkNext && dates.yesPrev.indexOf(tomorrow) === -1) {
        const tmp = tachanun0(new HDate(tomorrow), il, false);
        ret.mincha = tmp.shacharit;
    }
    else {
        ret.mincha = dow !== 5;
    }
    if (ret.allCongs && !ret.mincha && !ret.shacharit) {
        return NONE;
    }
    return ret;
}
function tachanunYear(year, il) {
    const leap = HDate.isLeapYear(year);
    const monthsInYear = HDate.monthsInYear(year);
    let av9dt = new HDate(9, months.AV, year);
    if (av9dt.getDay() === 6) {
        av9dt = av9dt.next();
    }
    let shushPurim = new HDate(15, months.ADAR_II, year);
    if (shushPurim.getDay() === 6) {
        shushPurim = shushPurim.next();
    }
    const none = [
        new HDate(2, months.TISHREI, year), // Rosh Hashana II
    ].concat(
    // Rosh Chodesh - 1st of every month. Also includes RH day 1 (1 Tishrei)
    range(1, monthsInYear).map(month => new HDate(1, month, year)), 
    // Rosh Chodesh - 30th of months that have one
    range(1, monthsInYear)
        .filter(month => HDate.daysInMonth(month, year) === 30)
        .map(month => new HDate(30, month, year)), 
    // entire month of Nisan
    range(1, HDate.daysInMonth(months.NISAN, year)).map(mday => new HDate(mday, months.NISAN, year)), new HDate(18, months.IYYAR, year), // Lag BaOmer
    // Rosh Chodesh Sivan thru Isru Chag
    range(1, 8 - (il ? 1 : 0)).map(mday => new HDate(mday, months.SIVAN, year)), av9dt, // Tisha B'Av
    new HDate(15, months.AV, year), // Tu B'Av
    new HDate(29, months.ELUL, year), // Erev Rosh Hashanah
    // Erev Yom Kippur thru Isru Chag
    range(9, 24 - (il ? 1 : 0)).map(mday => new HDate(mday, months.TISHREI, year)), 
    // Chanukah
    range(25, 33).map(mday => new HDate(mday, months.KISLEV, year)), new HDate(15, months.SHVAT, year), // Tu BiShvat
    new HDate(14, months.ADAR_II, year), // Purim
    shushPurim, leap ? new HDate(14, months.ADAR_I, year) : [] // Purim Katan
    );
    const some = [
        new HDate(14, months.IYYAR, year), // Pesach Sheini
    ].concat(
    // Until 14 Sivan
    range(1, 13).map(mday => new HDate(mday, months.SIVAN, year)), 
    // Until after Rosh Chodesh Cheshvan
    range(20, 31).map(mday => new HDate(mday, months.TISHREI, year)), 
    // Yom HaAtzma'ut, which changes based on day of week
    year >= 5708 ? dateYomHaZikaron(year).next() : [], 
    // Yom Yerushalayim
    year >= 5727 ? new HDate(28, months.IYYAR, year) : []);
    const yesPrev = [
        new HDate(29, months.ELUL, year - 1), // Erev Rosh Hashanah
        new HDate(9, months.TISHREI, year), // Erev Yom Kippur
        new HDate(14, months.IYYAR, year), // Pesach Sheini
    ];
    return {
        none: none.map(hd => hd.abs()).sort((a, b) => a - b),
        some: some.map(hd => hd.abs()).sort((a, b) => a - b),
        yesPrev: yesPrev.map(hd => hd.abs()).sort((a, b) => a - b),
    };
}

const TISHREI = months.TISHREI;
/**
 * Gets the R.D. days for a number, Date, or HDate
 * @private
 */
function getAbs(d) {
    if (typeof d === 'number')
        return d;
    if (isDate(d))
        return greg2abs(d);
    if (HDate.isHDate(d))
        return d.abs();
    throw new TypeError(`Invalid date type: ${d}`);
}
function getYear(options) {
    if (typeof options.year !== 'undefined') {
        return Number(options.year);
    }
    return options.isHebrewYear
        ? new HDate().getFullYear()
        : new Date().getFullYear();
}
/**
 * Parse options object to determine start & end days
 * @private
 */
function getStartAndEnd(options) {
    if ((options.start && !options.end) || (options.end && !options.start)) {
        throw new TypeError('Both options.start and options.end are required');
    }
    else if (options.start && options.end) {
        return [getAbs(options.start), getAbs(options.end)];
    }
    const isHebrewYear = Boolean(options.isHebrewYear);
    const theYear = getYear(options);
    if (isNaN(theYear)) {
        throw new RangeError(`Invalid year ${options.year}`);
    }
    else if (isHebrewYear && theYear < 1) {
        throw new RangeError(`Invalid Hebrew year ${theYear}`);
    }
    const theMonth = getMonth(options);
    const numYears = Number(options.numYears) || 1;
    if (isHebrewYear) {
        return startEndHebrew(theMonth, theYear, numYears);
    }
    else {
        return startEndGregorian(theMonth, theYear, numYears);
    }
}
function getMonth(options) {
    if (options.month) {
        if (options.isHebrewYear) {
            return HDate.monthNum(options.month);
        }
        else if (typeof options.month === 'number') {
            return options.month;
        }
    }
    return NaN;
}
function startEndGregorian(theMonth, theYear, numYears) {
    const gregMonth = theMonth ? theMonth - 1 : 0;
    const startGreg = new Date(theYear, gregMonth, 1);
    if (theYear < 100) {
        startGreg.setFullYear(theYear);
    }
    const startAbs = greg2abs(startGreg);
    let endAbs;
    if (theMonth) {
        endAbs = startAbs + daysInGregMonth(theMonth, theYear) - 1;
    }
    else {
        const endYear = theYear + numYears;
        const endGreg = new Date(endYear, 0, 1);
        if (endYear < 100) {
            endGreg.setFullYear(endYear);
        }
        endAbs = greg2abs(endGreg) - 1;
    }
    return [startAbs, endAbs];
}
function startEndHebrew(theMonth, theYear, numYears) {
    const startDate = new HDate(1, theMonth || TISHREI, theYear);
    let startAbs = startDate.abs();
    const endAbs = theMonth
        ? startAbs + startDate.daysInMonth()
        : new HDate(1, TISHREI, theYear + numYears).abs() - 1;
    // for full Hebrew year, start on Erev Rosh Hashana which
    // is technically in the previous Hebrew year
    // (but conveniently lets us get candle-lighting time for Erev)
    if (!theMonth && theYear > 1) {
        startAbs--;
    }
    return [startAbs, endAbs];
}

/**
 * Calculates holidays and other Hebrew calendar events based on {@link CalOptions}.
 *
 * Each holiday is represented by an {@link Event} object which includes a date,
 * a description, flags and optional attributes.
 * If given no options, returns holidays for the Diaspora for the current Gregorian year.
 *
 * The date range returned by this function can be controlled by:
 * * `options.year` - Gregorian (e.g. 1993) or Hebrew year (e.g. 5749)
 * * `options.isHebrewYear` - to interpret `year` as Hebrew year
 * * `options.numYears` - generate calendar for multiple years (default 1)
 * * `options.month` - Gregorian or Hebrew month (to filter results to a single month)
 *
 * Alternatively, specify start and end days with `Date` or {@link HDate} instances:
 * * `options.start` - use specific start date (requires `end` date)
 * * `options.end` - use specific end date (requires `start` date)
 *
 * Unless `options.noHolidays == true`, default holidays include:
 * * Major holidays - Rosh Hashana, Yom Kippur, Pesach, Sukkot, etc.
 * * Minor holidays - Purim, Chanukah, Tu BiShvat, Lag BaOmer, etc.
 * * Minor fasts - Ta'anit Esther, Tzom Gedaliah, etc. (unless `options.noMinorFast`)
 * * Special Shabbatot - Shabbat Shekalim, Zachor, etc. (unless `options.noSpecialShabbat`)
 * * Modern Holidays - Yom HaShoah, Yom HaAtzma'ut, etc. (unless `options.noModern`)
 * * Rosh Chodesh (unless `options.noRoshChodesh`)
 *
 * Holiday and Torah reading schedules differ between Israel and the Disapora.
 * Set `options.il=true` to use the Israeli schedule.
 *
 * Additional non-default event types can be specified:
 * * Parashat HaShavua - weekly Torah Reading on Saturdays (`options.sedrot`)
 * * Counting of the Omer (`options.omer`)
 * * Shabbat Mevarchim HaChodesh on Saturday before Rosh Chodesh (`options.shabbatMevarchim`)
 * * Molad announcement on Saturday before Rosh Chodesh (`options.molad`)
 * * Yom Kippur Katan (`options.yomKippurKatan`)
 * * Yizkor (`options.yizkor`)
 *
 * Daily Study of texts are supported by the
 * {@link https://github.com/hebcal/hebcal-learning @hebcal/learning} package,
 * for example:
 * * Babylonian Talmud Daf Yomi (`options.dailyLearning.dafYomi`)
 * * Jerusalem Talmud (Yerushalmi) Yomi (`options.dailyLearning.yerushalmi`)
 * * Mishna Yomi (`options.dailyLearning.mishnaYomi`)
 * * Nach Yomi (`options.dailyLearning.nachYomi`)
 *
 * Candle-lighting and Havdalah times are approximated using latitude and longitude
 * specified by the {@link Location} class. The `Location` class contains a small
 * database of cities with their associated geographic information and time-zone information.
 * If you ever have any doubts about Hebcal's times, consult your local halachic authority.
 * If you enter geographic coordinates above the arctic circle or antarctic circle,
 * the times are guaranteed to be wrong.
 *
 * To add candle-lighting options, set `options.candlelighting=true` and set
 * `options.location` to an instance of `Location`. By default, candle lighting
 * time is 18 minutes before sundown (40 minutes for Jerusalem,
 * 30 minutes for Haifa and Zikhron Ya'akov) and Havdalah is
 * calculated according to Tzeit Hakochavim - Nightfall (the point when 3 small stars
 * are observable in the night time sky with the naked eye). The default Havdalah
 * option (Tzeit Hakochavim) is calculated when the sun is 8.5° below the horizon.
 * These defaults can be changed using these options:
 * * `options.candleLightingMins` - minutes before sundown to light candles
 * * `options.havdalahMins` - minutes after sundown for Havdalah (typical values are 42, 50, or 72).
 *    Havdalah times are suppressed when `options.havdalahMins=0`.
 * * `options.havdalahDeg` - degrees for solar depression for Havdalah.
 *    Default is 8.5 degrees for 3 small stars. Use 7.083 degrees for 3 medium-sized stars.
 *    Havdalah times are suppressed when `options.havdalahDeg=0`.
 *
 * If both `options.candlelighting=true` and `options.location` is specified,
 * Chanukah candle-lighting times and minor fast start/end times will also be generated.
 * Chanukah candle-lighting is at Bein HaShmashos (13.5 minutes before
 * the sun is 7.083° below the horizon in the evening)
 * on weekdays, at regular candle-lighting time on Fridays, and at regular Havdalah time on
 * Saturday night (see above).
 *
 * Minor fasts begin at Alot HaShachar (sun is 16.1° below the horizon in the morning) and
 * end when 3 medium-sized stars are observable in the night sky (sun is 7.083° below the horizon
 * in the evening).
 *
 * Two options also exist for generating an Event with the Hebrew date:
 * * `options.addHebrewDates` - print the Hebrew date for the entire date range
 * * `options.addHebrewDatesForEvents` - print the Hebrew date for dates with some events
 *
 * Lastly, translation and transliteration of event titles is controlled by
 * `options.locale` and the {@link Locale} API.
 * `@hebcal/core` supports three locales by default:
 * * `en` - default, Sephardic transliterations (e.g. "Shabbat")
 * * `ashkenazi` - Ashkenazi transliterations (e.g. "Shabbos")
 * * `he` - Hebrew (e.g. "שַׁבָּת")
 *
 * Additional locales (such as `ru` or `fr`) are supported by the
 * {@link https://github.com/hebcal/hebcal-locales @hebcal/locales} package
 *
 * @example
 * import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';
 * const options: CalOptions = {
 *   year: 1981,
 *   isHebrewYear: false,
 *   candlelighting: true,
 *   location: Location.lookup('San Francisco'),
 *   sedrot: true,
 *   omer: true,
 * };
 * const events = HebrewCalendar.calendar(options);
 * for (const ev of events) {
 *   const hd = ev.getDate();
 *   const date = hd.greg();
 *   console.log(date.toLocaleDateString(), ev.render('en'), hd.toString());
 * }
 */
function calendar(options = {}) {
    options = Object.assign({}, options); // so we can modify freely
    checkCandleOptions(options);
    const location = (options.location = options.location || defaultLocation);
    const il = (options.il = options.il || location.getIsrael() || false);
    const hasUserMask = typeof options.mask === 'number';
    options.mask = getMaskFromOptions(options);
    if (options.ashkenazi || options.locale) {
        if (options.locale && typeof options.locale !== 'string') {
            throw new TypeError(`Invalid options.locale: ${options.locale}`);
        }
        const locale = options.ashkenazi ? 'ashkenazi' : options.locale;
        const translationObj = Locale.useLocale(locale);
        if (!translationObj) {
            throw new TypeError(`Locale '${locale}' not found; did you forget to import @hebcal/locales?`);
        }
    }
    else {
        Locale.useLocale('en');
    }
    const evts = [];
    let sedra;
    let holidaysYear;
    let beginOmer = -1;
    let endOmer = -1;
    let currentYear = -1;
    const startAndEnd = getStartAndEnd(options);
    warnUnrecognizedOptions(options);
    const startAbs = startAndEnd[0];
    const endAbs = startAndEnd[1];
    const startGreg = abs2greg(startAbs);
    if (startGreg.getFullYear() < 100) {
        options.candlelighting = false;
    }
    for (let abs = startAbs; abs <= endAbs; abs++) {
        const hd = new HDate(abs);
        const hyear = hd.getFullYear();
        if (hyear !== currentYear) {
            currentYear = hyear;
            holidaysYear = getHolidaysForYear_(currentYear);
            if (options.sedrot) {
                sedra = getSedra(currentYear, il);
            }
            if (options.omer) {
                beginOmer = HDate.hebrew2abs(currentYear, NISAN, 16);
                endOmer = HDate.hebrew2abs(currentYear, SIVAN, 5);
            }
        }
        const prevEventsLength = evts.length;
        const dow = hd.getDay();
        const isFriday = dow === FRI;
        const isSaturday = dow === SAT;
        let candlesEv;
        const holidays = holidaysYear.get(hd.toString()) || [];
        for (const ev of holidays) {
            candlesEv = appendHolidayAndRelated(candlesEv, evts, ev, options, isFriday, isSaturday, hasUserMask);
        }
        if (options.sedrot && isSaturday) {
            const parsha0 = sedra.lookup(abs);
            if (!parsha0.chag) {
                evts.push(new ParshaEvent(hd, parsha0.parsha, il, parsha0.num));
            }
        }
        if (options.yizkor) {
            const mm = hd.getMonth();
            const dd = hd.getDate();
            if ((mm === months.TISHREI && (dd === 10 || dd === 22)) ||
                (mm === NISAN && dd === (il ? 21 : 22)) ||
                (mm === SIVAN && dd === (il ? 6 : 7))) {
                const linkedEvent = holidays.filter(ev => ev.observedIn(il))[0];
                const ev = new Event(hd, 'Yizkor', flags.YIZKOR, {
                    emoji: '🕯️',
                    linkedEvent,
                });
                evts.push(ev);
            }
        }
        const dailyLearning = options.dailyLearning;
        let numDailyLearning = 0;
        if (typeof dailyLearning === 'object') {
            const events = makeDailyLearning(hd, dailyLearning, il);
            numDailyLearning = events.length;
            if (numDailyLearning) {
                evts.push(...events);
            }
        }
        if (options.omer && abs >= beginOmer && abs <= endOmer) {
            const omer = abs - beginOmer + 1;
            const omerEv = makeOmerEvent(hd, omer, options);
            evts.push(omerEv);
        }
        if (isSaturday && (options.molad || options.shabbatMevarchim)) {
            const events = makeMoladAndMevarchimChodesh(hd, options);
            evts.push(...events);
        }
        if (!candlesEv && options.candlelighting && (isFriday || isSaturday)) {
            candlesEv = makeCandleEvent(undefined, hd, options, isFriday, isSaturday);
            if (isFriday && candlesEv && sedra) {
                const parsha = sedra.lookup(abs);
                const pe = new ParshaEvent(hd.next(), parsha.parsha, il, parsha.num);
                candlesEv.memo = pe.render(options.locale);
            }
        }
        // suppress Havdalah when options.havdalahMins=0 or options.havdalahDeg=0
        if (candlesEv instanceof HavdalahEvent &&
            (options.havdalahMins === 0 || options.havdalahDeg === 0)) {
            candlesEv = undefined;
        }
        if (candlesEv) {
            evts.push(candlesEv);
        }
        if (options.addHebrewDates ||
            (options.addHebrewDatesForEvents &&
                prevEventsLength !== evts.length - numDailyLearning)) {
            const e2 = new HebrewDateEvent(hd);
            if (prevEventsLength === evts.length) {
                evts.push(e2);
            }
            else {
                evts.splice(prevEventsLength, 0, e2);
            }
        }
    }
    return evts;
}
const FRI = 5;
const SAT = 6;
const NISAN = months.NISAN;
const SIVAN = months.SIVAN;
const ELUL = months.ELUL;
const LIGHT_CANDLES = flags.LIGHT_CANDLES;
const YOM_TOV_ENDS = flags.YOM_TOV_ENDS;
const CHUL_ONLY = flags.CHUL_ONLY;
const IL_ONLY = flags.IL_ONLY;
const LIGHT_CANDLES_TZEIS = flags.LIGHT_CANDLES_TZEIS;
const CHANUKAH_CANDLES = flags.CHANUKAH_CANDLES;
const MINOR_FAST = flags.MINOR_FAST;
const SPECIAL_SHABBAT = flags.SPECIAL_SHABBAT;
const MODERN_HOLIDAY = flags.MODERN_HOLIDAY;
const MAJOR_FAST = flags.MAJOR_FAST;
const ROSH_CHODESH = flags.ROSH_CHODESH;
const PARSHA_HASHAVUA = flags.PARSHA_HASHAVUA;
const DAF_YOMI = flags.DAF_YOMI;
const MISHNA_YOMI = flags.MISHNA_YOMI;
const NACH_YOMI = flags.NACH_YOMI;
const YERUSHALMI_YOMI = flags.YERUSHALMI_YOMI;
const OMER_COUNT = flags.OMER_COUNT;
const SHABBAT_MEVARCHIM = flags.SHABBAT_MEVARCHIM;
const MINOR_HOLIDAY = flags.MINOR_HOLIDAY;
const EREV = flags.EREV;
const CHOL_HAMOED = flags.CHOL_HAMOED;
const YOM_KIPPUR_KATAN = flags.YOM_KIPPUR_KATAN;
const YIZKOR = flags.YIZKOR;
const unrecognizedAlreadyWarned = new Set();
const RECOGNIZED_OPTIONS = {
    location: 1,
    year: 1,
    isHebrewYear: 1,
    month: 1,
    numYears: 1,
    start: 1,
    end: 1,
    candlelighting: 1,
    candleLightingMins: 1,
    havdalahMins: 1,
    havdalahDeg: 1,
    fastEndDeg: 1,
    sedrot: 1,
    il: 1,
    noMinorFast: 1,
    noModern: 1,
    shabbatMevarchim: 1,
    noRoshChodesh: 1,
    noSpecialShabbat: 1,
    noHolidays: 1,
    omer: 1,
    molad: 1,
    ashkenazi: 1,
    locale: 1,
    addHebrewDates: 1,
    addHebrewDatesForEvents: 1,
    mask: 1,
    yomKippurKatan: 1,
    hour12: 1,
    dailyLearning: 1,
    useElevation: 1,
    yizkor: 1,
};
/**
 * @private
 */
function warnUnrecognizedOptions(options) {
    for (const k of Object.keys(options)) {
        if (typeof RECOGNIZED_OPTIONS[k] === 'undefined' &&
            !unrecognizedAlreadyWarned.has(k)) {
            console.warn(`Ignoring unrecognized HebrewCalendar option: ${k}`);
            unrecognizedAlreadyWarned.add(k);
        }
    }
    if (options.dailyLearning) {
        for (const k of Object.keys(options.dailyLearning)) {
            if (!unrecognizedAlreadyWarned.has(k) && !DailyLearning.has(k)) {
                console.warn(`Ignoring unrecognized DailyLearning calendar: ${k}`);
                unrecognizedAlreadyWarned.add(k);
            }
        }
    }
}
const israelCityOffset = {
    Jerusalem: 40,
    Haifa: 30,
    "Zikhron Ya'aqov": 30,
    "Zikhron Ya'akov": 30,
    'Zikhron Yaakov': 30,
    "Zichron Ya'akov": 30,
    'Zichron Yaakov': 30,
};
const geoIdCandleOffset = {
    '281184': 40, // Jerusalem
    '294801': 30, // Haifa
    '293067': 30, // Zikhron Yaakov
};
/**
 * @private
 * @constant
 * This calculation is based on the position of the sun 36 minutes after sunset in Jerusalem
 * around the equinox / equilux, which is 8.5° below geometric zenith.
 * The Ohr Meir considers this the time that 3 small stars are visible,
 * which is later than the required 3 medium stars.
 * @see {https://kosherjava.com/zmanim/docs/api/com/kosherjava/zmanim/ZmanimCalendar.html#ZENITH_8_POINT_5}
 */
const TZEIT_3SMALL_STARS = 8.5;
/**
 * @private
 * @constant
 * This calculation is based on observation of 3 medium sized stars by Dr. Baruch Cohen
 * in his calendar published in in 1899 in Strasbourg, France.
 * This calculates to 7.0833333° below geometric zenith.
 * @see {https://kosherjava.com/zmanim/docs/api/com/kosherjava/zmanim/ComplexZmanimCalendar.html#ZENITH_7_POINT_083}
 */
const TZEIT_3MEDIUM_STARS = 7.0833333;
/**
 * Modifies options in-place
 * @private
 */
function checkCandleOptions(options) {
    if (!options.candlelighting) {
        return;
    }
    const location = options.location;
    if (typeof location === 'undefined' || !(location instanceof Location)) {
        throw new TypeError('options.candlelighting requires valid options.location');
    }
    if (typeof options.havdalahMins === 'number' &&
        typeof options.havdalahDeg === 'number') {
        throw new TypeError('options.havdalahMins and options.havdalahDeg are mutually exclusive');
    }
    const min0 = options.candleLightingMins;
    let min = typeof min0 === 'number' && !isNaN(min0) ? Math.trunc(min0) : 18;
    if (location.getIsrael() && Math.abs(min) === 18) {
        min = overrideIsraelCandleMins(location, min);
    }
    options.candleLightingMins = -1 * Math.abs(min);
    if (typeof options.havdalahMins === 'number') {
        options.havdalahMins = Math.trunc(Math.abs(options.havdalahMins));
    }
    else if (typeof options.havdalahDeg === 'number') {
        options.havdalahDeg = Math.abs(options.havdalahDeg);
    }
    else {
        options.havdalahDeg = TZEIT_3SMALL_STARS;
    }
    if (typeof options.fastEndDeg !== 'number') {
        options.fastEndDeg = TZEIT_3MEDIUM_STARS;
    }
}
function overrideIsraelCandleMins(location, min) {
    const geoid = location.getGeoId();
    if (geoid) {
        const offset = geoIdCandleOffset[geoid];
        if (typeof offset === 'number') {
            return offset;
        }
    }
    const shortName = location.getShortName();
    if (shortName) {
        const offset = israelCityOffset[shortName];
        if (typeof offset === 'number') {
            return offset;
        }
    }
    return min;
}
/**
 * Mask to filter Holiday array
 * @private
 */
function getMaskFromOptions(options) {
    var _a;
    if (typeof options.mask === 'number') {
        return setOptionsFromMask(options);
    }
    const il = options.il || ((_a = options.location) === null || _a === void 0 ? void 0 : _a.getIsrael()) || false;
    let mask = 0;
    // default options
    if (!options.noHolidays) {
        mask |=
            ROSH_CHODESH |
                YOM_TOV_ENDS |
                MINOR_FAST |
                SPECIAL_SHABBAT |
                MODERN_HOLIDAY |
                MAJOR_FAST |
                MINOR_HOLIDAY |
                EREV |
                CHOL_HAMOED |
                LIGHT_CANDLES |
                LIGHT_CANDLES_TZEIS |
                CHANUKAH_CANDLES;
    }
    if (options.candlelighting) {
        mask |= LIGHT_CANDLES | LIGHT_CANDLES_TZEIS | YOM_TOV_ENDS;
    }
    // suppression of defaults
    if (options.noRoshChodesh) {
        mask &= ~ROSH_CHODESH;
    }
    if (options.noModern) {
        mask &= ~MODERN_HOLIDAY;
    }
    if (options.noMinorFast) {
        mask &= ~MINOR_FAST;
    }
    if (options.noSpecialShabbat) {
        mask &= ~SPECIAL_SHABBAT;
        mask &= ~SHABBAT_MEVARCHIM;
    }
    if (il) {
        mask |= IL_ONLY;
    }
    else {
        mask |= CHUL_ONLY;
    }
    // non-default options
    if (options.sedrot) {
        mask |= PARSHA_HASHAVUA;
    }
    if (options.omer) {
        mask |= OMER_COUNT;
    }
    if (options.shabbatMevarchim) {
        mask |= SHABBAT_MEVARCHIM;
    }
    if (options.yomKippurKatan) {
        mask |= YOM_KIPPUR_KATAN;
    }
    if (options.yizkor) {
        mask |= YIZKOR;
    }
    if (options.dailyLearning) {
        const dailyLearning = options.dailyLearning;
        if (dailyLearning.dafYomi) {
            mask |= DAF_YOMI;
        }
        if (dailyLearning.mishnaYomi) {
            mask |= MISHNA_YOMI;
        }
        if (dailyLearning.nachYomi) {
            mask |= NACH_YOMI;
        }
        if (dailyLearning.yerushalmi) {
            mask |= YERUSHALMI_YOMI;
        }
    }
    return mask;
}
const MASK_LIGHT_CANDLES = LIGHT_CANDLES | LIGHT_CANDLES_TZEIS | CHANUKAH_CANDLES | YOM_TOV_ENDS;
const defaultLocation = new Location(0, 0, false, 'UTC');
/**
 * @private
 */
function setOptionsFromMask(options) {
    const m = options.mask || 0;
    if (m & ROSH_CHODESH)
        delete options.noRoshChodesh;
    if (m & MODERN_HOLIDAY)
        delete options.noModern;
    if (m & MINOR_FAST)
        delete options.noMinorFast;
    if (m & SPECIAL_SHABBAT)
        delete options.noSpecialShabbat;
    if (m & PARSHA_HASHAVUA)
        options.sedrot = true;
    if (m & (DAF_YOMI | MISHNA_YOMI | NACH_YOMI | YERUSHALMI_YOMI)) {
        options.dailyLearning = options.dailyLearning || {};
        if (m & DAF_YOMI) {
            options.dailyLearning.dafYomi = true;
        }
        if (m & MISHNA_YOMI) {
            options.dailyLearning.mishnaYomi = true;
        }
        if (m & NACH_YOMI) {
            options.dailyLearning.nachYomi = true;
        }
        if (m & YERUSHALMI_YOMI) {
            options.dailyLearning.yerushalmi = 1;
        }
    }
    if (m & OMER_COUNT)
        options.omer = true;
    if (m & SHABBAT_MEVARCHIM)
        options.shabbatMevarchim = true;
    if (m & YOM_KIPPUR_KATAN)
        options.yomKippurKatan = true;
    if (m & YIZKOR)
        options.yizkor = true;
    return m;
}
/**
 * Appends the Event `ev` to the `events` array. Also may add related
 * timed events like candle-lighting or fast start/end
 * @private
 */
function appendHolidayAndRelated(candlesEv, events, ev, options, isFriday, isSaturday, hasUserMask) {
    const il = options.il || false;
    if (!ev.observedIn(il)) {
        return candlesEv; // holiday isn't observed here; bail out early
    }
    const eFlags = ev.getFlags();
    if ((!options.yomKippurKatan && eFlags & YOM_KIPPUR_KATAN) ||
        (options.noModern && eFlags & MODERN_HOLIDAY)) {
        return candlesEv; // bail out early
    }
    const isMajorFast = Boolean(eFlags & MAJOR_FAST);
    const isMinorFast = Boolean(eFlags & MINOR_FAST);
    let fastEv;
    if (options.candlelighting &&
        (isMajorFast || isMinorFast) &&
        ev.getDesc() !== 'Yom Kippur') {
        ev = fastEv = makeFastStartEnd(ev, options);
        if (fastEv.startEvent &&
            (isMajorFast || (isMinorFast && !options.noMinorFast))) {
            events.push(fastEv.startEvent);
        }
    }
    if (eFlags & Number(options.mask) || (!eFlags && !hasUserMask)) {
        if (options.candlelighting && eFlags & MASK_LIGHT_CANDLES) {
            const hd = ev.getDate();
            candlesEv = makeCandleEvent(ev, hd, options, isFriday, isSaturday);
            if (eFlags & CHANUKAH_CANDLES && candlesEv && !options.noHolidays) {
                // Replace Chanukah event with a clone that includes candle lighting time.
                // For clarity, allow a "duplicate" candle lighting event to remain for Shabbat
                const chanukahEv = makeWeekdayChanukahCandleLighting(ev, hd, options);
                if (chanukahEv) {
                    if (isFriday || isSaturday) {
                        chanukahEv.eventTime = candlesEv.eventTime;
                        chanukahEv.eventTimeStr = candlesEv.eventTimeStr;
                    }
                    ev = chanukahEv;
                }
                candlesEv = undefined;
            }
        }
        if (!options.noHolidays ||
            (options.yomKippurKatan && eFlags & YOM_KIPPUR_KATAN)) {
            events.push(ev); // the original event itself
        }
    }
    if ((isMajorFast || (isMinorFast && !options.noMinorFast)) &&
        fastEv &&
        fastEv.endEvent) {
        events.push(fastEv.endEvent);
    }
    return candlesEv;
}
function makeMoladAndMevarchimChodesh(hd, options) {
    const evts = [];
    const hmonth = hd.getMonth();
    const hdate = hd.getDate();
    if (hmonth !== ELUL && hdate >= 23 && hdate <= 29) {
        const hyear = hd.getFullYear();
        const monNext = hmonth === HDate.monthsInYear(hyear) ? NISAN : hmonth + 1;
        if (options.molad) {
            evts.push(new MoladEvent(hd, hyear, monNext, options));
        }
        if (options.shabbatMevarchim) {
            const nextMonthName = HDate.getMonthName(monNext, hyear);
            const molad = new Molad(hyear, monNext);
            const memo = molad.render(options.locale || 'en', options);
            evts.push(new MevarchimChodeshEvent(hd, nextMonthName, memo, options.locale));
        }
    }
    return evts;
}
function dailyLearningName(key, val) {
    if (key === 'yerushalmi') {
        return val === 2 ? 'yerushalmi-schottenstein' : 'yerushalmi-vilna';
    }
    return key;
}
function makeDailyLearning(hd, dailyLearning, il) {
    const evts = [];
    for (const [key, val] of Object.entries(dailyLearning)) {
        if (val) {
            const name = dailyLearningName(key, val);
            const learningEv = DailyLearning.lookup(name, hd, il);
            if (learningEv) {
                evts.push(learningEv);
            }
        }
    }
    return evts;
}
function makeOmerEvent(hd, omerDay, options) {
    const omerEv = new OmerEvent(hd, omerDay);
    if (options.candlelighting) {
        const location = options.location;
        const zmanim = new Zmanim(location, hd.prev(), false);
        const tzeit = zmanim.tzeit(7.0833);
        if (!isNaN(tzeit.getTime())) {
            omerEv.alarm = tzeit;
        }
    }
    return omerEv;
}

/*
    Hebcal - A Jewish Calendar Generator
    Copyright (c) 1994-2020 Danny Sadinoff
    Portions copyright Eyal Schachter and Michael J. Radwin

    https://github.com/hebcal/hebcal-es6

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * HebrewCalendar is the main interface to the `@hebcal/core` library.
 * This namespace is used to calculate holidays, rosh chodesh, candle lighting & havdalah times,
 * Parashat HaShavua, Daf Yomi, days of the omer, and the molad.
 * Event names can be rendered in several languges using the `locale` option.
 */
class HebrewCalendar {
    constructor() { }
    /**
     * Calculates holidays and other Hebrew calendar events based on {@link CalOptions}.
     *
     * Each holiday is represented by an {@link Event} object which includes a date,
     * a description, flags and optional attributes.
     * If given no options, returns holidays for the Diaspora for the current Gregorian year.
     *
     * The date range returned by this function can be controlled by:
     * * `options.year` - Gregorian (e.g. 1993) or Hebrew year (e.g. 5749)
     * * `options.isHebrewYear` - to interpret `year` as Hebrew year
     * * `options.numYears` - generate calendar for multiple years (default 1)
     * * `options.month` - Gregorian or Hebrew month (to filter results to a single month)
     *
     * Alternatively, specify start and end days with `Date` or {@link HDate} instances:
     * * `options.start` - use specific start date (requires `end` date)
     * * `options.end` - use specific end date (requires `start` date)
     *
     * Unless `options.noHolidays == true`, default holidays include:
     * * Major holidays - Rosh Hashana, Yom Kippur, Pesach, Sukkot, etc.
     * * Minor holidays - Purim, Chanukah, Tu BiShvat, Lag BaOmer, etc.
     * * Minor fasts - Ta'anit Esther, Tzom Gedaliah, etc. (unless `options.noMinorFast`)
     * * Special Shabbatot - Shabbat Shekalim, Zachor, etc. (unless `options.noSpecialShabbat`)
     * * Modern Holidays - Yom HaShoah, Yom HaAtzma'ut, etc. (unless `options.noModern`)
     * * Rosh Chodesh (unless `options.noRoshChodesh`)
     *
     * Holiday and Torah reading schedules differ between Israel and the Disapora.
     * Set `options.il=true` to use the Israeli schedule.
     *
     * Additional non-default event types can be specified:
     * * Parashat HaShavua - weekly Torah Reading on Saturdays (`options.sedrot`)
     * * Counting of the Omer (`options.omer`)
     * * Shabbat Mevarchim HaChodesh on Saturday before Rosh Chodesh (`options.shabbatMevarchim`)
     * * Molad announcement on Saturday before Rosh Chodesh (`options.molad`)
     * * Yom Kippur Katan (`options.yomKippurKatan`)
     * * Yizkor (`options.yizkor`)
     *
     * Daily Study of texts are supported by the
     * {@link https://github.com/hebcal/hebcal-learning @hebcal/learning} package,
     * for example:
     * * Babylonian Talmud Daf Yomi (`options.dailyLearning.dafYomi`)
     * * Jerusalem Talmud (Yerushalmi) Yomi (`options.dailyLearning.yerushalmi`)
     * * Mishna Yomi (`options.dailyLearning.mishnaYomi`)
     * * Nach Yomi (`options.dailyLearning.nachYomi`)
     *
     * Candle-lighting and Havdalah times are approximated using latitude and longitude
     * specified by the {@link Location} class. The `Location` class contains a small
     * database of cities with their associated geographic information and time-zone information.
     * If you ever have any doubts about Hebcal's times, consult your local halachic authority.
     * If you enter geographic coordinates above the arctic circle or antarctic circle,
     * the times are guaranteed to be wrong.
     *
     * To add candle-lighting options, set `options.candlelighting=true` and set
     * `options.location` to an instance of `Location`. By default, candle lighting
     * time is 18 minutes before sundown (40 minutes for Jerusalem,
     * 30 minutes for Haifa and Zikhron Ya'akov) and Havdalah is
     * calculated according to Tzeit Hakochavim - Nightfall (the point when 3 small stars
     * are observable in the night time sky with the naked eye). The default Havdalah
     * option (Tzeit Hakochavim) is calculated when the sun is 8.5° below the horizon.
     * These defaults can be changed using these options:
     * * `options.candleLightingMins` - minutes before sundown to light candles
     * * `options.havdalahMins` - minutes after sundown for Havdalah (typical values are 42, 50, or 72).
     *    Havdalah times are suppressed when `options.havdalahMins=0`.
     * * `options.havdalahDeg` - degrees for solar depression for Havdalah.
     *    Default is 8.5 degrees for 3 small stars. Use 7.083 degrees for 3 medium-sized stars.
     *    Havdalah times are suppressed when `options.havdalahDeg=0`.
     *
     * If both `options.candlelighting=true` and `options.location` is specified,
     * Chanukah candle-lighting times and minor fast start/end times will also be generated.
     * Chanukah candle-lighting is at Bein HaShmashos (13.5 minutes before
     * the sun is 7.083° below the horizon in the evening)
     * on weekdays, at regular candle-lighting time on Fridays, and at regular Havdalah time on
     * Saturday night (see above).
     *
     * Minor fasts begin at Alot HaShachar (sun is 16.1° below the horizon in the morning) and
     * end when 3 medium-sized stars are observable in the night sky (sun is 7.083° below the horizon
     * in the evening).
     *
     * Two options also exist for generating an Event with the Hebrew date:
     * * `options.addHebrewDates` - print the Hebrew date for the entire date range
     * * `options.addHebrewDatesForEvents` - print the Hebrew date for dates with some events
     *
     * Lastly, translation and transliteration of event titles is controlled by
     * `options.locale` and the {@link Locale} API.
     * `@hebcal/core` supports three locales by default:
     * * `en` - default, Sephardic transliterations (e.g. "Shabbat")
     * * `ashkenazi` - Ashkenazi transliterations (e.g. "Shabbos")
     * * `he` - Hebrew (e.g. "שַׁבָּת")
     *
     * Additional locales (such as `ru` or `fr`) are supported by the
     * {@link https://github.com/hebcal/hebcal-locales @hebcal/locales} package
     *
     * @example
     * import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';
     * const options: CalOptions = {
     *   year: 1981,
     *   isHebrewYear: false,
     *   candlelighting: true,
     *   location: Location.lookup('San Francisco'),
     *   sedrot: true,
     *   omer: true,
     * };
     * const events = HebrewCalendar.calendar(options);
     * for (const ev of events) {
     *   const hd = ev.getDate();
     *   const date = hd.greg();
     *   console.log(date.toLocaleDateString(), ev.render('en'), hd.toString());
     * }
     */
    static calendar(options = {}) {
        return calendar(options);
    }
    /**
     * Calculates a birthday or anniversary (non-yahrzeit).
     * `hyear` must be after original `gdate` of anniversary.
     * Returns `undefined` when requested year preceeds or is same as original year.
     *
     * Hebcal uses the algorithm defined in "Calendrical Calculations"
     * by Edward M. Reingold and Nachum Dershowitz.
     *
     * The birthday of someone born in Adar of an ordinary year or Adar II of
     * a leap year is also always in the last month of the year, be that Adar
     * or Adar II. The birthday in an ordinary year of someone born during the
     * first 29 days of Adar I in a leap year is on the corresponding day of Adar;
     * in a leap year, the birthday occurs in Adar I, as expected.
     *
     * Someone born on the thirtieth day of Marcheshvan, Kislev, or Adar I
     * has his birthday postponed until the first of the following month in
     * years where that day does not occur. [Calendrical Calculations p. 111]
     * @example
     * import {HebrewCalendar} from '@hebcal/core';
     * const dt = new Date(2014, 2, 2); // '2014-03-02' == '30 Adar I 5774'
     * const hd = HebrewCalendar.getBirthdayOrAnniversary(5780, dt); // '1 Nisan 5780'
     * console.log(hd.greg().toLocaleDateString('en-US')); // '3/26/2020'
     * @param hyear Hebrew year
     * @param gdate Gregorian or Hebrew date of event
     * @returns anniversary occurring in `hyear`
     */
    static getBirthdayOrAnniversary(hyear, gdate) {
        const dt = getBirthdayHD(hyear, gdate);
        if (typeof dt === 'undefined') {
            return dt;
        }
        return new HDate(dt);
    }
    /**
     * Calculates yahrzeit.
     * `hyear` must be after original `gdate` of death.
     * Returns `undefined` when requested year preceeds or is same as original year.
     *
     * Hebcal uses the algorithm defined in "Calendrical Calculations"
     * by Edward M. Reingold and Nachum Dershowitz.
     *
     * The customary anniversary date of a death is more complicated and depends
     * also on the character of the year in which the first anniversary occurs.
     * There are several cases:
     *
     * * If the date of death is Marcheshvan 30, the anniversary in general depends
     *   on the first anniversary; if that first anniversary was not Marcheshvan 30,
     *   use the day before Kislev 1.
     * * If the date of death is Kislev 30, the anniversary in general again depends
     *   on the first anniversary — if that was not Kislev 30, use the day before
     *   Tevet 1.
     * * If the date of death is Adar II, the anniversary is the same day in the
     *   last month of the Hebrew year (Adar or Adar II).
     * * If the date of death is Adar I 30, the anniversary in a Hebrew year that
     *   is not a leap year (in which Adar only has 29 days) is the last day in
     *   Shevat.
     * * In all other cases, use the normal (that is, same month number) anniversary
     *   of the date of death. [Calendrical Calculations p. 113]
     * @example
     * import {HebrewCalendar} from '@hebcal/core';
     * const dt = new Date(2014, 2, 2); // '2014-03-02' == '30 Adar I 5774'
     * const hd = HebrewCalendar.getYahrzeit(5780, dt); // '30 Sh\'vat 5780'
     * console.log(hd.greg().toLocaleDateString('en-US')); // '2/25/2020'
     * @param hyear Hebrew year
     * @param gdate Gregorian or Hebrew date of death
     * @returns anniversary occurring in hyear
     */
    static getYahrzeit(hyear, gdate) {
        const dt = getYahrzeitHD(hyear, gdate);
        if (typeof dt === 'undefined') {
            return dt;
        }
        return new HDate(dt);
    }
    /**
     * Lower-level holidays interface, which returns a `Map` of `Event`s indexed by
     * `HDate.toString()`. These events must filtered especially for `flags.IL_ONLY`
     * or `flags.CHUL_ONLY` depending on Israel vs. Diaspora holiday scheme.
     * @param year Hebrew year
     */
    static getHolidaysForYear(year) {
        return getHolidaysForYear_(year);
    }
    /**
     * Returns an array of holidays for the year
     * @param year Hebrew year
     * @param il use the Israeli schedule for holidays
     */
    static getHolidaysForYearArray(year, il) {
        return getHolidaysForYearArray(year, il);
    }
    /**
     * Returns an array of Events on this date (or `undefined` if no events)
     * @param date Hebrew Date, Gregorian date, or absolute R.D. day number
     * @param [il] use the Israeli schedule for holidays
     */
    static getHolidaysOnDate(date, il) {
        return getHolidaysOnDate(date, il);
    }
    /**
     * Eruv Tavshilin
     */
    static eruvTavshilin(date, il) {
        if (date.getDay() < 3 || date.getDay() > 4) {
            return false;
        }
        const today = new HDate(date);
        const friday = today.after(5);
        const tomorrow = today.next();
        if (!isChag(friday, il) || isChag(today, il) || !isChag(tomorrow, il)) {
            return false;
        }
        return true;
    }
    /**
     * Helper function to format a 23-hour (00:00-23:59) time in US format ("8:13pm") or
     * keep as "20:13" for any other locale/country. Uses {@link CalOptions} to determine
     * locale.
     * If `options.hour12` is `false`, locale is ignored and always returns 24-hour time.
     * If `options.hour12` is `true`, locale is ignored and always returns 12-hour time.
     * @param timeStr - original time like "20:30"
     * @param suffix - "p" or "pm" or " P.M.". Add leading space if you want it
     * @param options
     */
    static reformatTimeStr(timeStr, suffix, options) {
        return reformatTimeStr(timeStr, suffix, options);
    }
    static version() {
        return version;
    }
    /**
     * Convenience function to create an instance of `Sedra` or reuse a previously
     * created and cached instance.
     */
    static getSedra(hyear, il) {
        return getSedra(hyear, il);
    }
    /**
     * Return a number containing information on what Hallel is said on that day.
     *
     * Whole Hallel is said on Chanukah, the first Yom Tov of Pesach, Shavuot, Sukkot,
     * Yom Ha'atzmaut, and Yom Yerushalayim.
     *
     * Half Hallel is said on Rosh Chodesh (not Rosh Hashanah), and the last 6 days of Pesach.
     *
     * The number is one of the following values:
     *
     * 0 - No Hallel
     * 1 - Half Hallel
     * 2 - Whole Hallel
     */
    static hallel(hdate, il) {
        const events = getHolidaysForYearArray(hdate.getFullYear(), il);
        return hallel_(events, hdate);
    }
    /**
     * Return details on what Tachanun (or Tzidchatcha on Shabbat) is said on `hdate`.
     *
     * Tachanun is not said on Rosh Chodesh, the month of Nisan, Lag Baomer,
     * Rosh Chodesh Sivan until Isru Chag, Tisha B'av, 15 Av, Erev Rosh Hashanah,
     * Rosh Hashanah, Erev Yom Kippur until after Simchat Torah, Chanukah,
     * Tu B'shvat, Purim and Shushan Purim, and Purim and Shushan Purim Katan.
     *
     * In some congregations Tachanun is not said until from Rosh Chodesh Sivan
     * until 14th Sivan, Sukkot until after Rosh Chodesh Cheshvan, Pesach Sheini,
     * Yom Ha'atzmaut, and Yom Yerushalayim.
     *
     * Tachanun is not said at Mincha on days before it is not said at Shacharit.
     *
     * Tachanun is not said at Shacharit on Shabbat, but is at Mincha, usually.
     */
    static tachanun(hdate, il) {
        return tachanun(hdate, il);
    }
}
/**
 * @private
 */
function isChag(date, il) {
    const events = getHolidaysOnDate(date, il) || [];
    const chag = events.filter(ev => ev.getFlags() & flags.CHAG);
    return chag.length !== 0;
}

exports.AsaraBTevetEvent = AsaraBTevetEvent;
exports.CandleLightingEvent = CandleLightingEvent;
exports.ChanukahEvent = ChanukahEvent;
exports.DailyLearning = DailyLearning;
exports.Event = Event;
exports.FastDayEvent = FastDayEvent;
exports.GeoLocation = GeoLocation;
exports.HDate = HDate;
exports.HavdalahEvent = HavdalahEvent;
exports.HebrewCalendar = HebrewCalendar;
exports.HebrewDateEvent = HebrewDateEvent;
exports.HolidayEvent = HolidayEvent;
exports.Locale = Locale;
exports.Location = Location;
exports.MevarchimChodeshEvent = MevarchimChodeshEvent;
exports.Molad = Molad;
exports.MoladEvent = MoladEvent;
exports.NOAACalculator = NOAACalculator;
exports.OmerEvent = OmerEvent;
exports.ParshaEvent = ParshaEvent;
exports.RoshChodeshEvent = RoshChodeshEvent;
exports.RoshHashanaEvent = RoshHashanaEvent;
exports.Sedra = Sedra;
exports.TimedChanukahEvent = TimedChanukahEvent;
exports.TimedEvent = TimedEvent;
exports.YomKippurKatanEvent = YomKippurKatanEvent;
exports.Zmanim = Zmanim;
exports.flags = flags;
exports.gematriya = gematriya;
exports.gematriyaStrToNum = gematriyaStrToNum;
exports.getHolidaysOnDate = getHolidaysOnDate;
exports.getSedra = getSedra;
exports.holidayDesc = holidayDesc;
exports.isAssurBemlacha = isAssurBemlacha;
exports.months = months;
exports.parshaYear = parshaYear;
exports.parshiot = parshiot;
exports.version = version;


},{"temporal-polyfill/global":7}],7:[function(require,module,exports){
!function() {
  "use strict";
  function clampProp(props, propName, min, max, overflow) {
    return clampEntity(propName, ((props, propName) => {
      const propVal = props[propName];
      if (void 0 === propVal) {
        throw new TypeError(missingField(propName));
      }
      return propVal;
    })(props, propName), min, max, overflow);
  }
  function clampEntity(entityName, num, min, max, overflow, choices) {
    const clamped = clampNumber(num, min, max);
    if (overflow && num !== clamped) {
      throw new RangeError(numberOutOfRange(entityName, num, min, max, choices));
    }
    return clamped;
  }
  function isObjectLike(arg) {
    return null !== arg && /object|function/.test(typeof arg);
  }
  function memoize(generator, MapClass = Map) {
    const map = new MapClass;
    return (key, ...otherArgs) => {
      if (map.has(key)) {
        return map.get(key);
      }
      const val = generator(key, ...otherArgs);
      return map.set(key, val), val;
    };
  }
  function createNameDescriptors(name) {
    return createPropDescriptors({
      name: name
    }, 1);
  }
  function createPropDescriptors(propVals, readonly) {
    return mapProps((value => ({
      value: value,
      configurable: 1,
      writable: !readonly
    })), propVals);
  }
  function createGetterDescriptors(getters) {
    return mapProps((getter => ({
      get: getter,
      configurable: 1
    })), getters);
  }
  function createStringTagDescriptors(value) {
    return {
      [Symbol.toStringTag]: {
        value: value,
        configurable: 1
      }
    };
  }
  function zipProps(propNamesRev, args) {
    const res = {};
    let i = propNamesRev.length;
    for (const arg of args) {
      res[propNamesRev[--i]] = arg;
    }
    return res;
  }
  function mapProps(transformer, props, extraArg) {
    const res = {};
    for (const propName in props) {
      res[propName] = transformer(props[propName], propName, extraArg);
    }
    return res;
  }
  function mapPropNames(generator, propNames, extraArg) {
    const props = {};
    for (let i = 0; i < propNames.length; i++) {
      const propName = propNames[i];
      props[propName] = generator(propName, i, extraArg);
    }
    return props;
  }
  function remapProps(oldNames, newNames, oldProps) {
    const newProps = {};
    for (let i = 0; i < oldNames.length; i++) {
      newProps[newNames[i]] = oldProps[oldNames[i]];
    }
    return newProps;
  }
  function pluckProps(propNames, props) {
    const res = Object.create(null);
    for (const propName of propNames) {
      res[propName] = props[propName];
    }
    return res;
  }
  function hasAnyPropsByName(props, names) {
    for (const name of names) {
      if (name in props) {
        return 1;
      }
    }
    return 0;
  }
  function allPropsEqual(propNames, props0, props1) {
    for (const propName of propNames) {
      if (props0[propName] !== props1[propName]) {
        return 0;
      }
    }
    return 1;
  }
  function zeroOutProps(propNames, clearUntilI, props) {
    const copy = {
      ...props
    };
    for (let i = 0; i < clearUntilI; i++) {
      copy[propNames[i]] = 0;
    }
    return copy;
  }
  function bindArgs(f, ...boundArgs) {
    return (...dynamicArgs) => f(...boundArgs, ...dynamicArgs);
  }
  function capitalize(s) {
    return s[0].toUpperCase() + s.substring(1);
  }
  function sortStrings(strs) {
    return strs.slice().sort();
  }
  function padNumber(digits, num) {
    return String(num).padStart(digits, "0");
  }
  function compareNumbers(a, b) {
    return Math.sign(a - b);
  }
  function clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  function divModFloor(num, divisor) {
    return [ Math.floor(num / divisor), modFloor(num, divisor) ];
  }
  function modFloor(num, divisor) {
    return (num % divisor + divisor) % divisor;
  }
  function divModTrunc(num, divisor) {
    return [ divTrunc(num, divisor), modTrunc(num, divisor) ];
  }
  function divTrunc(num, divisor) {
    return Math.trunc(num / divisor) || 0;
  }
  function modTrunc(num, divisor) {
    return num % divisor || 0;
  }
  function hasHalf(num) {
    return .5 === Math.abs(num % 1);
  }
  function givenFieldsToBigNano(fields, largestUnit, fieldNames) {
    let timeNano = 0, days = 0;
    for (let unit = 0; unit <= largestUnit; unit++) {
      const fieldVal = fields[fieldNames[unit]], unitNano = unitNanoMap[unit], unitInDay = nanoInUtcDay / unitNano, [unitDays, leftoverUnits] = divModTrunc(fieldVal, unitInDay);
      timeNano += leftoverUnits * unitNano, days += unitDays;
    }
    const [timeDays, leftoverNano] = divModTrunc(timeNano, nanoInUtcDay);
    return [ days + timeDays, leftoverNano ];
  }
  function nanoToGivenFields(nano, largestUnit, fieldNames) {
    const fields = {};
    for (let unit = largestUnit; unit >= 0; unit--) {
      const divisor = unitNanoMap[unit];
      fields[fieldNames[unit]] = divTrunc(nano, divisor), nano = modTrunc(nano, divisor);
    }
    return fields;
  }
  function createBigNano(days, timeNano) {
    let [extraDays, newTimeNano] = divModTrunc(timeNano, nanoInUtcDay), newDays = days + extraDays;
    const newDaysSign = Math.sign(newDays);
    return newDaysSign && newDaysSign === -Math.sign(newTimeNano) && (newDays -= newDaysSign, 
    newTimeNano += newDaysSign * nanoInUtcDay), [ newDays, newTimeNano ];
  }
  function addBigNanos(a, b, sign = 1) {
    return createBigNano(a[0] + b[0] * sign, a[1] + b[1] * sign);
  }
  function moveBigNano(a, b) {
    return createBigNano(a[0], a[1] + b);
  }
  function diffBigNanos(a, b) {
    return addBigNanos(b, a, -1);
  }
  function compareBigNanos(a, b) {
    return compareNumbers(a[0], b[0]) || compareNumbers(a[1], b[1]);
  }
  function bigNanoOutside(subject, rangeStart, rangeEndExcl) {
    return -1 === compareBigNanos(subject, rangeStart) || 1 === compareBigNanos(subject, rangeEndExcl);
  }
  function bigIntToBigNano(num, multiplierNano = 1) {
    const wholeInDay = BigInt(nanoInUtcDay / multiplierNano);
    return [ Number(num / wholeInDay), Number(num % wholeInDay) * multiplierNano ];
  }
  function numberToBigNano(num, multiplierNano = 1) {
    const wholeInDay = nanoInUtcDay / multiplierNano, [days, remainder] = divModTrunc(num, wholeInDay);
    return [ days, remainder * multiplierNano ];
  }
  function bigNanoToNumber(bigNano, divisorNano = 1, exact) {
    const [days, timeNano] = bigNano, [whole, remainderNano] = divModTrunc(timeNano, divisorNano);
    return days * (nanoInUtcDay / divisorNano) + (whole + (exact ? remainderNano / divisorNano : 0));
  }
  function divModBigNano(bigNano, divisorNano, divModFunc = divModFloor) {
    const [days, timeNano] = bigNano, [whole, remainderNano] = divModFunc(timeNano, divisorNano);
    return [ days * (nanoInUtcDay / divisorNano) + whole, remainderNano ];
  }
  function requireIntegerOrUndefined(input) {
    if (void 0 !== input) {
      return requireInteger(input);
    }
  }
  function requirePositiveInteger(arg) {
    return requireNumberIsPositive(requireInteger(arg));
  }
  function requireInteger(arg) {
    return requireNumberIsInteger(requireNumber(arg));
  }
  function requirePropDefined(optionName, optionVal) {
    if (null == optionVal) {
      throw new RangeError(missingField(optionName));
    }
    return optionVal;
  }
  function requireObjectLike(arg) {
    if (!isObjectLike(arg)) {
      throw new TypeError(invalidObject);
    }
    return arg;
  }
  function requireType(typeName, arg, entityName = typeName) {
    if (typeof arg !== typeName) {
      throw new TypeError(invalidEntity(entityName, arg));
    }
    return arg;
  }
  function requireNumberIsInteger(num, entityName = "number") {
    if (!Number.isInteger(num)) {
      throw new RangeError(expectedInteger(entityName, num));
    }
    return num || 0;
  }
  function requireNumberIsPositive(num, entityName = "number") {
    if (num <= 0) {
      throw new RangeError(expectedPositive(entityName, num));
    }
    return num;
  }
  function toString(arg) {
    if ("symbol" == typeof arg) {
      throw new TypeError(forbiddenSymbolToString);
    }
    return String(arg);
  }
  function toStringViaPrimitive(arg, entityName) {
    return isObjectLike(arg) ? String(arg) : requireString(arg, entityName);
  }
  function toBigInt(bi) {
    if ("string" == typeof bi) {
      return BigInt(bi);
    }
    if ("bigint" != typeof bi) {
      throw new TypeError(invalidBigInt(bi));
    }
    return bi;
  }
  function toNumber(arg, entityName = "number") {
    if ("bigint" == typeof arg) {
      throw new TypeError(forbiddenBigIntToNumber(entityName));
    }
    if (arg = Number(arg), !Number.isFinite(arg)) {
      throw new RangeError(expectedFinite(entityName, arg));
    }
    return arg;
  }
  function toInteger(arg, entityName) {
    return Math.trunc(toNumber(arg, entityName)) || 0;
  }
  function toStrictInteger(arg, entityName) {
    return requireNumberIsInteger(toNumber(arg, entityName), entityName);
  }
  function toPositiveInteger(arg, entityName) {
    return requireNumberIsPositive(toInteger(arg, entityName), entityName);
  }
  function checkIsoYearMonthInBounds(isoFields) {
    return clampProp(isoFields, "isoYear", isoYearMin, isoYearMax, 1), isoFields.isoYear === isoYearMin ? clampProp(isoFields, "isoMonth", 4, 12, 1) : isoFields.isoYear === isoYearMax && clampProp(isoFields, "isoMonth", 1, 9, 1), 
    isoFields;
  }
  function checkIsoDateInBounds(isoFields) {
    return checkIsoDateTimeInBounds({
      ...isoFields,
      ...isoTimeFieldDefaults,
      isoHour: 12
    }), isoFields;
  }
  function checkIsoDateTimeInBounds(isoFields) {
    const isoYear = clampProp(isoFields, "isoYear", isoYearMin, isoYearMax, 1), nudge = isoYear === isoYearMin ? 1 : isoYear === isoYearMax ? -1 : 0;
    return nudge && checkEpochNanoInBounds(isoToEpochNano({
      ...isoFields,
      isoDay: isoFields.isoDay + nudge,
      isoNanosecond: isoFields.isoNanosecond - nudge
    })), isoFields;
  }
  function checkEpochNanoInBounds(epochNano) {
    if (!epochNano || bigNanoOutside(epochNano, epochNanoMin, epochNanoMax)) {
      throw new RangeError(outOfBoundsDate);
    }
    return epochNano;
  }
  function isoTimeFieldsToNano(isoTimeFields) {
    return givenFieldsToBigNano(isoTimeFields, 5, isoTimeFieldNamesAsc)[1];
  }
  function nanoToIsoTimeAndDay(nano) {
    const [dayDelta, timeNano] = divModFloor(nano, nanoInUtcDay);
    return [ nanoToGivenFields(timeNano, 5, isoTimeFieldNamesAsc), dayDelta ];
  }
  function epochNanoToSecMod(epochNano) {
    return divModBigNano(epochNano, nanoInSec);
  }
  function isoToEpochMilli(isoDateTimeFields) {
    return isoArgsToEpochMilli(isoDateTimeFields.isoYear, isoDateTimeFields.isoMonth, isoDateTimeFields.isoDay, isoDateTimeFields.isoHour, isoDateTimeFields.isoMinute, isoDateTimeFields.isoSecond, isoDateTimeFields.isoMillisecond);
  }
  function isoToEpochNano(isoFields) {
    const epochMilli = isoToEpochMilli(isoFields);
    if (void 0 !== epochMilli) {
      const [days, milliRemainder] = divModTrunc(epochMilli, milliInDay);
      return [ days, milliRemainder * nanoInMilli + (isoFields.isoMicrosecond || 0) * nanoInMicro + (isoFields.isoNanosecond || 0) ];
    }
  }
  function isoToEpochNanoWithOffset(isoFields, offsetNano) {
    const [newIsoTimeFields, dayDelta] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(isoFields) - offsetNano);
    return checkEpochNanoInBounds(isoToEpochNano({
      ...isoFields,
      isoDay: isoFields.isoDay + dayDelta,
      ...newIsoTimeFields
    }));
  }
  function isoArgsToEpochSec(...args) {
    return isoArgsToEpochMilli(...args) / milliInSec;
  }
  function isoArgsToEpochMilli(...args) {
    const [legacyDate, daysNudged] = isoToLegacyDate(...args), epochMilli = legacyDate.valueOf();
    if (!isNaN(epochMilli)) {
      return epochMilli - daysNudged * milliInDay;
    }
  }
  function isoToLegacyDate(isoYear, isoMonth = 1, isoDay = 1, isoHour = 0, isoMinute = 0, isoSec = 0, isoMilli = 0) {
    const daysNudged = isoYear === isoYearMin ? 1 : isoYear === isoYearMax ? -1 : 0, legacyDate = new Date;
    return legacyDate.setUTCHours(isoHour, isoMinute, isoSec, isoMilli), legacyDate.setUTCFullYear(isoYear, isoMonth - 1, isoDay + daysNudged), 
    [ legacyDate, daysNudged ];
  }
  function epochNanoToIso(epochNano, offsetNano) {
    let [days, timeNano] = moveBigNano(epochNano, offsetNano);
    timeNano < 0 && (timeNano += nanoInUtcDay, days -= 1);
    const [timeMilli, nanoRemainder] = divModFloor(timeNano, nanoInMilli), [isoMicrosecond, isoNanosecond] = divModFloor(nanoRemainder, nanoInMicro);
    return epochMilliToIso(days * milliInDay + timeMilli, isoMicrosecond, isoNanosecond);
  }
  function epochMilliToIso(epochMilli, isoMicrosecond = 0, isoNanosecond = 0) {
    const daysOver = Math.ceil(Math.max(0, Math.abs(epochMilli) - maxMilli) / milliInDay) * Math.sign(epochMilli), legacyDate = new Date(epochMilli - daysOver * milliInDay);
    return zipProps(isoDateTimeFieldNamesAsc, [ legacyDate.getUTCFullYear(), legacyDate.getUTCMonth() + 1, legacyDate.getUTCDate() + daysOver, legacyDate.getUTCHours(), legacyDate.getUTCMinutes(), legacyDate.getUTCSeconds(), legacyDate.getUTCMilliseconds(), isoMicrosecond, isoNanosecond ]);
  }
  function hashIntlFormatParts(intlFormat, epochMilli) {
    if (epochMilli < -maxMilli) {
      throw new RangeError(outOfBoundsDate);
    }
    const parts = intlFormat.formatToParts(epochMilli), hash = {};
    for (const part of parts) {
      hash[part.type] = part.value;
    }
    return hash;
  }
  function computeIsoDateParts(isoFields) {
    return [ isoFields.isoYear, isoFields.isoMonth, isoFields.isoDay ];
  }
  function computeIsoMonthCodeParts(_isoYear, isoMonth) {
    return [ isoMonth, 0 ];
  }
  function computeIsoMonthsInYear() {
    return isoMonthsInYear;
  }
  function computeIsoDaysInMonth(isoYear, isoMonth) {
    switch (isoMonth) {
     case 2:
      return computeIsoInLeapYear(isoYear) ? 29 : 28;

     case 4:
     case 6:
     case 9:
     case 11:
      return 30;
    }
    return 31;
  }
  function computeIsoDaysInYear(isoYear) {
    return computeIsoInLeapYear(isoYear) ? 366 : 365;
  }
  function computeIsoInLeapYear(isoYear) {
    return isoYear % 4 == 0 && (isoYear % 100 != 0 || isoYear % 400 == 0);
  }
  function computeIsoDayOfWeek(isoDateFields) {
    const [legacyDate, daysNudged] = isoToLegacyDate(isoDateFields.isoYear, isoDateFields.isoMonth, isoDateFields.isoDay);
    return modFloor(legacyDate.getUTCDay() - daysNudged, 7) || 7;
  }
  function computeIsoEraParts(isoFields) {
    return this.id === gregoryCalendarId ? (({isoYear: isoYear}) => isoYear < 1 ? [ "gregory-inverse", 1 - isoYear ] : [ "gregory", isoYear ])(isoFields) : "japanese" === this.id ? queryJapaneseEraParts(isoFields) : [];
  }
  function checkIsoDateTimeFields(isoDateTimeFields) {
    return checkIsoDateFields(isoDateTimeFields), constrainIsoTimeFields(isoDateTimeFields, 1), 
    isoDateTimeFields;
  }
  function checkIsoDateFields(isoInternals) {
    return constrainIsoDateFields(isoInternals, 1), isoInternals;
  }
  function isIsoDateFieldsValid(isoFields) {
    return allPropsEqual(isoDateFieldNamesAsc, isoFields, constrainIsoDateFields(isoFields));
  }
  function constrainIsoDateFields(isoFields, overflow) {
    const {isoYear: isoYear} = isoFields, isoMonth = clampProp(isoFields, "isoMonth", 1, computeIsoMonthsInYear(), overflow);
    return {
      isoYear: isoYear,
      isoMonth: isoMonth,
      isoDay: clampProp(isoFields, "isoDay", 1, computeIsoDaysInMonth(isoYear, isoMonth), overflow)
    };
  }
  function constrainIsoTimeFields(isoTimeFields, overflow) {
    return zipProps(isoTimeFieldNamesAsc, [ clampProp(isoTimeFields, "isoHour", 0, 23, overflow), clampProp(isoTimeFields, "isoMinute", 0, 59, overflow), clampProp(isoTimeFields, "isoSecond", 0, 59, overflow), clampProp(isoTimeFields, "isoMillisecond", 0, 999, overflow), clampProp(isoTimeFields, "isoMicrosecond", 0, 999, overflow), clampProp(isoTimeFields, "isoNanosecond", 0, 999, overflow) ]);
  }
  function createIntlFieldCache(epochMilliToIntlFields) {
    return memoize((isoDateFields => {
      const epochMilli = isoToEpochMilli(isoDateFields);
      return epochMilliToIntlFields(epochMilli);
    }), WeakMap);
  }
  function createIntlYearDataCache(epochMilliToIntlFields) {
    const yearCorrection = epochMilliToIntlFields(0).year - isoEpochOriginYear;
    return memoize((year => {
      let intlFields, epochMilli = isoArgsToEpochMilli(year - yearCorrection), iterations = 0;
      const millisReversed = [], monthStringsReversed = [];
      do {
        epochMilli += 400 * milliInDay;
      } while ((intlFields = epochMilliToIntlFields(epochMilli)).year <= year);
      do {
        if (epochMilli += (1 - intlFields.day) * milliInDay, intlFields.year === year && (millisReversed.push(epochMilli), 
        monthStringsReversed.push(intlFields.monthString)), epochMilli -= milliInDay, ++iterations > 100 || epochMilli < -maxMilli) {
          throw new RangeError(invalidProtocolResults);
        }
      } while ((intlFields = epochMilliToIntlFields(epochMilli)).year >= year);
      return {
        monthEpochMillis: millisReversed.reverse(),
        monthStringToIndex: mapPropNamesToIndex(monthStringsReversed.reverse())
      };
    }));
  }
  function parseIntlYear(intlParts, calendarIdBase) {
    let era, eraYear, year = parseIntlPartsYear(intlParts);
    if (intlParts.era) {
      const eraOrigins = eraOriginsByCalendarId[calendarIdBase], eraRemaps = eraRemapsByCalendarId[calendarIdBase] || {};
      void 0 !== eraOrigins && (era = "islamic" === calendarIdBase ? "ah" : intlParts.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), 
      "bc" === era || "b" === era ? era = "bce" : "ad" === era || "a" === era ? era = "ce" : "beforeroc" === era && (era = "broc"), 
      era = eraRemaps[era] || era, eraYear = year, year = eraYearToYear(eraYear, eraOrigins[era] || 0));
    }
    return {
      era: era,
      eraYear: eraYear,
      year: year
    };
  }
  function parseIntlPartsYear(intlParts) {
    return parseInt(intlParts.relatedYear || intlParts.year);
  }
  function computeIntlDateParts(isoFields) {
    const {year: year, monthString: monthString, day: day} = this.queryFields(isoFields), {monthStringToIndex: monthStringToIndex} = this.queryYearData(year);
    return [ year, monthStringToIndex[monthString] + 1, day ];
  }
  function computeIntlEpochMilli(year, month = 1, day = 1) {
    return this.queryYearData(year).monthEpochMillis[month - 1] + (day - 1) * milliInDay;
  }
  function computeIntlMonthCodeParts(year, month) {
    const leapMonth = computeIntlLeapMonth.call(this, year);
    return [ monthToMonthCodeNumber(month, leapMonth), leapMonth === month ];
  }
  function computeIntlLeapMonth(year) {
    const currentMonthStrings = queryMonthStrings(this, year), prevMonthStrings = queryMonthStrings(this, year - 1), currentLength = currentMonthStrings.length;
    if (currentLength > prevMonthStrings.length) {
      const leapMonthMeta = getCalendarLeapMonthMeta(this);
      if (leapMonthMeta < 0) {
        return -leapMonthMeta;
      }
      for (let i = 0; i < currentLength; i++) {
        if (currentMonthStrings[i] !== prevMonthStrings[i]) {
          return i + 1;
        }
      }
    }
  }
  function computeIntlDaysInYear(year) {
    return diffEpochMilliByDay(computeIntlEpochMilli.call(this, year), computeIntlEpochMilli.call(this, year + 1));
  }
  function computeIntlDaysInMonth(year, month) {
    const {monthEpochMillis: monthEpochMillis} = this.queryYearData(year);
    let nextMonth = month + 1, nextMonthEpochMilli = monthEpochMillis;
    return nextMonth > monthEpochMillis.length && (nextMonth = 1, nextMonthEpochMilli = this.queryYearData(year + 1).monthEpochMillis), 
    diffEpochMilliByDay(monthEpochMillis[month - 1], nextMonthEpochMilli[nextMonth - 1]);
  }
  function computeIntlMonthsInYear(year) {
    return this.queryYearData(year).monthEpochMillis.length;
  }
  function computeIntlEraParts(isoFields) {
    const intlFields = this.queryFields(isoFields);
    return [ intlFields.era, intlFields.eraYear ];
  }
  function queryMonthStrings(intlCalendar, year) {
    return Object.keys(intlCalendar.queryYearData(year).monthStringToIndex);
  }
  function refineCalendarId(id) {
    return resolveCalendarId(requireString(id));
  }
  function resolveCalendarId(id) {
    if ((id = id.toLowerCase()) !== isoCalendarId && id !== gregoryCalendarId) {
      const canonId = queryCalendarIntlFormat(id).resolvedOptions().calendar;
      if (computeCalendarIdBase(id) !== computeCalendarIdBase(canonId)) {
        throw new RangeError(invalidCalendar(id));
      }
      return canonId;
    }
    return id;
  }
  function computeCalendarIdBase(id) {
    return "islamicc" === id && (id = "islamic"), id.split("-")[0];
  }
  function computeNativeWeekOfYear(isoFields) {
    return this.weekParts(isoFields)[0];
  }
  function computeNativeYearOfWeek(isoFields) {
    return this.weekParts(isoFields)[1];
  }
  function computeNativeDayOfYear(isoFields) {
    const [year] = this.dateParts(isoFields);
    return diffEpochMilliByDay(this.epochMilli(year), isoToEpochMilli(isoFields)) + 1;
  }
  function parseMonthCode(monthCode) {
    const m = monthCodeRegExp.exec(monthCode);
    if (!m) {
      throw new RangeError(invalidMonthCode(monthCode));
    }
    return [ parseInt(m[1]), Boolean(m[2]) ];
  }
  function formatMonthCode(monthCodeNumber, isLeapMonth) {
    return "M" + padNumber2(monthCodeNumber) + (isLeapMonth ? "L" : "");
  }
  function monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, leapMonth) {
    return monthCodeNumber + (isLeapMonth || leapMonth && monthCodeNumber >= leapMonth ? 1 : 0);
  }
  function monthToMonthCodeNumber(month, leapMonth) {
    return month - (leapMonth && month >= leapMonth ? 1 : 0);
  }
  function eraYearToYear(eraYear, eraOrigin) {
    return (eraOrigin + eraYear) * (Math.sign(eraOrigin) || 1) || 0;
  }
  function getCalendarEraOrigins(native) {
    return eraOriginsByCalendarId[getCalendarIdBase(native)];
  }
  function getCalendarLeapMonthMeta(native) {
    return leapMonthMetas[getCalendarIdBase(native)];
  }
  function getCalendarIdBase(native) {
    return computeCalendarIdBase(native.id || isoCalendarId);
  }
  function refineOverflowOptions(options) {
    return void 0 === options ? 0 : refineOverflow(requireObjectLike(options));
  }
  function refineZonedFieldOptions(options, defaultOffsetDisambig = 0) {
    options = normalizeOptions(options);
    const epochDisambig = refineEpochDisambig(options), offsetDisambig = refineOffsetDisambig(options, defaultOffsetDisambig);
    return [ refineOverflow(options), offsetDisambig, epochDisambig ];
  }
  function refineDiffOptions(roundingModeInvert, options, defaultLargestUnit, maxUnit = 9, minUnit = 0, defaultRoundingMode = 4) {
    options = normalizeOptions(options);
    let largestUnit = refineLargestUnit(options, maxUnit, minUnit), roundingInc = parseRoundingIncInteger(options), roundingMode = refineRoundingMode(options, defaultRoundingMode);
    const smallestUnit = refineSmallestUnit(options, maxUnit, minUnit, 1);
    return null == largestUnit ? largestUnit = Math.max(defaultLargestUnit, smallestUnit) : checkLargestSmallestUnit(largestUnit, smallestUnit), 
    roundingInc = refineRoundingInc(roundingInc, smallestUnit, 1), roundingModeInvert && (roundingMode = (roundingMode => roundingMode < 4 ? (roundingMode + 2) % 4 : roundingMode)(roundingMode)), 
    [ largestUnit, smallestUnit, roundingInc, roundingMode ];
  }
  function refineRoundingOptions(options, maxUnit = 6, solarMode) {
    let roundingInc = parseRoundingIncInteger(options = normalizeOptionsOrString(options, smallestUnitStr));
    const roundingMode = refineRoundingMode(options, 7);
    let smallestUnit = refineSmallestUnit(options, maxUnit);
    return smallestUnit = requirePropDefined(smallestUnitStr, smallestUnit), roundingInc = refineRoundingInc(roundingInc, smallestUnit, void 0, solarMode), 
    [ smallestUnit, roundingInc, roundingMode ];
  }
  function refineDateDisplayOptions(options) {
    return refineCalendarDisplay(normalizeOptions(options));
  }
  function refineTimeDisplayOptions(options, maxSmallestUnit) {
    return refineTimeDisplayTuple(normalizeOptions(options), maxSmallestUnit);
  }
  function refineTimeDisplayTuple(options, maxSmallestUnit = 4) {
    const subsecDigits = refineSubsecDigits(options);
    return [ refineRoundingMode(options, 4), ...refineSmallestUnitAndSubsecDigits(refineSmallestUnit(options, maxSmallestUnit), subsecDigits) ];
  }
  function refineSmallestUnitAndSubsecDigits(smallestUnit, subsecDigits) {
    return null != smallestUnit ? [ unitNanoMap[smallestUnit], smallestUnit < 4 ? 9 - 3 * smallestUnit : -1 ] : [ void 0 === subsecDigits ? 1 : 10 ** (9 - subsecDigits), subsecDigits ];
  }
  function parseRoundingIncInteger(options) {
    const roundingInc = options[roundingIncName];
    return void 0 === roundingInc ? 1 : toInteger(roundingInc, roundingIncName);
  }
  function refineRoundingInc(roundingInc, smallestUnit, allowManyLargeUnits, solarMode) {
    const upUnitNano = solarMode ? nanoInUtcDay : unitNanoMap[smallestUnit + 1];
    if (upUnitNano) {
      const unitNano = unitNanoMap[smallestUnit];
      if (upUnitNano % ((roundingInc = clampEntity(roundingIncName, roundingInc, 1, upUnitNano / unitNano - (solarMode ? 0 : 1), 1)) * unitNano)) {
        throw new RangeError(invalidEntity(roundingIncName, roundingInc));
      }
    } else {
      roundingInc = clampEntity(roundingIncName, roundingInc, 1, allowManyLargeUnits ? 10 ** 9 : 1, 1);
    }
    return roundingInc;
  }
  function refineSubsecDigits(options) {
    let subsecDigits = options[subsecDigitsName];
    if (void 0 !== subsecDigits) {
      if ("number" != typeof subsecDigits) {
        if ("auto" === toString(subsecDigits)) {
          return;
        }
        throw new RangeError(invalidEntity(subsecDigitsName, subsecDigits));
      }
      subsecDigits = clampEntity(subsecDigitsName, Math.floor(subsecDigits), 0, 9, 1);
    }
    return subsecDigits;
  }
  function normalizeOptions(options) {
    return void 0 === options ? {} : requireObjectLike(options);
  }
  function normalizeOptionsOrString(options, optionName) {
    return "string" == typeof options ? {
      [optionName]: options
    } : requireObjectLike(options);
  }
  function fabricateOverflowOptions(overflow) {
    return {
      overflow: overflowMapNames[overflow]
    };
  }
  function refineUnitOption(optionName, options, maxUnit = 9, minUnit = 0, ensureDefined) {
    let unitStr = options[optionName];
    if (void 0 === unitStr) {
      return ensureDefined ? minUnit : void 0;
    }
    if (unitStr = toString(unitStr), "auto" === unitStr) {
      return ensureDefined ? minUnit : null;
    }
    let unit = unitNameMap[unitStr];
    if (void 0 === unit && (unit = durationFieldIndexes[unitStr]), void 0 === unit) {
      throw new RangeError(invalidChoice(optionName, unitStr, unitNameMap));
    }
    return clampEntity(optionName, unit, minUnit, maxUnit, 1, unitNamesAsc), unit;
  }
  function refineChoiceOption(optionName, enumNameMap, options, defaultChoice = 0) {
    const enumArg = options[optionName];
    if (void 0 === enumArg) {
      return defaultChoice;
    }
    const enumStr = toString(enumArg), enumNum = enumNameMap[enumStr];
    if (void 0 === enumNum) {
      throw new RangeError(invalidChoice(optionName, enumStr, enumNameMap));
    }
    return enumNum;
  }
  function checkLargestSmallestUnit(largestUnit, smallestUnit) {
    if (smallestUnit > largestUnit) {
      throw new RangeError(flippedSmallestLargestUnit);
    }
  }
  function createInstantSlots(epochNano) {
    return {
      branding: InstantBranding,
      epochNanoseconds: epochNano
    };
  }
  function createZonedDateTimeSlots(epochNano, timeZoneId, calendarId) {
    return {
      branding: ZonedDateTimeBranding,
      calendar: calendarId,
      timeZone: timeZoneId,
      epochNanoseconds: epochNano
    };
  }
  function createPlainDateTimeSlots(isoFields, calendar = isoFields.calendar) {
    return {
      branding: PlainDateTimeBranding,
      calendar: calendar,
      ...pluckProps(isoDateTimeFieldNamesAlpha, isoFields)
    };
  }
  function createPlainDateSlots(isoFields, calendar = isoFields.calendar) {
    return {
      branding: PlainDateBranding,
      calendar: calendar,
      ...pluckProps(isoDateFieldNamesAlpha, isoFields)
    };
  }
  function createPlainYearMonthSlots(isoFields, calendar = isoFields.calendar) {
    return {
      branding: PlainYearMonthBranding,
      calendar: calendar,
      ...pluckProps(isoDateFieldNamesAlpha, isoFields)
    };
  }
  function createPlainMonthDaySlots(isoFields, calendar = isoFields.calendar) {
    return {
      branding: PlainMonthDayBranding,
      calendar: calendar,
      ...pluckProps(isoDateFieldNamesAlpha, isoFields)
    };
  }
  function createPlainTimeSlots(isoFields) {
    return {
      branding: PlainTimeBranding,
      ...pluckProps(isoTimeFieldNamesAlpha, isoFields)
    };
  }
  function createDurationSlots(durationFields) {
    return {
      branding: DurationBranding,
      sign: computeDurationSign(durationFields),
      ...pluckProps(durationFieldNamesAlpha, durationFields)
    };
  }
  function getEpochMilli(slots) {
    return divModBigNano(slots.epochNanoseconds, nanoInMilli)[0];
  }
  function extractEpochNano(slots) {
    return slots.epochNanoseconds;
  }
  function totalDayTimeDuration(durationFields, totalUnit) {
    return bigNanoToNumber(durationFieldsToBigNano(durationFields), unitNanoMap[totalUnit], 1);
  }
  function clampRelativeDuration(calendarOps, durationFields, clampUnit, clampDistance, marker, markerToEpochNano, moveMarker) {
    const unitName = durationFieldNamesAsc[clampUnit], durationPlusDistance = {
      ...durationFields,
      [unitName]: durationFields[unitName] + clampDistance
    }, marker0 = moveMarker(calendarOps, marker, durationFields), marker1 = moveMarker(calendarOps, marker, durationPlusDistance);
    return [ markerToEpochNano(marker0), markerToEpochNano(marker1) ];
  }
  function computeEpochNanoFrac(epochNanoProgress, epochNano0, epochNano1) {
    const denom = bigNanoToNumber(diffBigNanos(epochNano0, epochNano1));
    if (!denom) {
      throw new RangeError(invalidProtocolResults);
    }
    return bigNanoToNumber(diffBigNanos(epochNano0, epochNanoProgress)) / denom;
  }
  function roundDateTime(isoFields, smallestUnit, roundingInc, roundingMode) {
    return roundDateTimeToNano(isoFields, computeNanoInc(smallestUnit, roundingInc), roundingMode);
  }
  function roundDateTimeToNano(isoFields, nanoInc, roundingMode) {
    const [roundedIsoFields, dayDelta] = roundTimeToNano(isoFields, nanoInc, roundingMode);
    return checkIsoDateTimeInBounds({
      ...moveByDays(isoFields, dayDelta),
      ...roundedIsoFields
    });
  }
  function roundTimeToNano(isoFields, nanoInc, roundingMode) {
    return nanoToIsoTimeAndDay(roundByInc(isoTimeFieldsToNano(isoFields), nanoInc, roundingMode));
  }
  function roundToMinute(offsetNano) {
    return roundByInc(offsetNano, nanoInMinute, 7);
  }
  function computeNanoInc(smallestUnit, roundingInc) {
    return unitNanoMap[smallestUnit] * roundingInc;
  }
  function computeDayInterval(isoFields) {
    const isoFields0 = computeDayFloor(isoFields);
    return [ isoFields0, moveByDays(isoFields0, 1) ];
  }
  function computeDayFloor(isoFields) {
    return clearIsoFields(6, isoFields);
  }
  function roundDayTimeDurationByInc(durationFields, nanoInc, roundingMode) {
    const maxUnit = Math.min(getMaxDurationUnit(durationFields), 6);
    return nanoToDurationDayTimeFields(roundBigNanoByInc(durationFieldsToBigNano(durationFields, maxUnit), nanoInc, roundingMode), maxUnit);
  }
  function roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, marker, markerToEpochNano, moveMarker) {
    if (0 === smallestUnit && 1 === roundingInc) {
      return durationFields;
    }
    const nudgeFunc = isUniformUnit(smallestUnit, marker) ? isZonedEpochSlots(marker) && smallestUnit < 6 && largestUnit >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration;
    let [roundedDurationFields, roundedEpochNano, grewBigUnit] = nudgeFunc(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, marker, markerToEpochNano, moveMarker);
    return grewBigUnit && 7 !== smallestUnit && (roundedDurationFields = ((durationFields, endEpochNano, largestUnit, smallestUnit, calendarOps, marker, markerToEpochNano, moveMarker) => {
      const sign = computeDurationSign(durationFields);
      for (let currentUnit = smallestUnit + 1; currentUnit <= largestUnit; currentUnit++) {
        if (7 === currentUnit && 7 !== largestUnit) {
          continue;
        }
        const baseDurationFields = clearDurationFields(currentUnit, durationFields);
        baseDurationFields[durationFieldNamesAsc[currentUnit]] += sign;
        const beyondThresholdNano = bigNanoToNumber(diffBigNanos(markerToEpochNano(moveMarker(calendarOps, marker, baseDurationFields)), endEpochNano));
        if (beyondThresholdNano && Math.sign(beyondThresholdNano) !== sign) {
          break;
        }
        durationFields = baseDurationFields;
      }
      return durationFields;
    })(roundedDurationFields, roundedEpochNano, largestUnit, Math.max(6, smallestUnit), calendarOps, marker, markerToEpochNano, moveMarker)), 
    roundedDurationFields;
  }
  function roundBigNano(bigNano, smallestUnit, roundingInc, roundingMode, useDayOrigin) {
    if (6 === smallestUnit) {
      const daysExact = (bigNano => bigNano[0] + bigNano[1] / nanoInUtcDay)(bigNano);
      return [ roundByInc(daysExact, roundingInc, roundingMode), 0 ];
    }
    return roundBigNanoByInc(bigNano, computeNanoInc(smallestUnit, roundingInc), roundingMode, useDayOrigin);
  }
  function roundBigNanoByInc(bigNano, nanoInc, roundingMode, useDayOrigin) {
    let [days, timeNano] = bigNano;
    useDayOrigin && timeNano < 0 && (timeNano += nanoInUtcDay, days -= 1);
    const [dayDelta, roundedTimeNano] = divModFloor(roundByInc(timeNano, nanoInc, roundingMode), nanoInUtcDay);
    return createBigNano(days + dayDelta, roundedTimeNano);
  }
  function roundByInc(num, inc, roundingMode) {
    return roundWithMode(num / inc, roundingMode) * inc;
  }
  function roundWithMode(num, roundingMode) {
    return roundingModeFuncs[roundingMode](num);
  }
  function nudgeDayTimeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
    const sign = computeDurationSign(durationFields), bigNano = durationFieldsToBigNano(durationFields), roundedBigNano = roundBigNano(bigNano, smallestUnit, roundingInc, roundingMode), nanoDiff = diffBigNanos(bigNano, roundedBigNano), expandedBigUnit = Math.sign(roundedBigNano[0] - bigNano[0]) === sign, roundedDayTimeFields = nanoToDurationDayTimeFields(roundedBigNano, Math.min(largestUnit, 6));
    return [ {
      ...durationFields,
      ...roundedDayTimeFields
    }, addBigNanos(endEpochNano, nanoDiff), expandedBigUnit ];
  }
  function nudgeZonedTimeDuration(durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, marker, markerToEpochNano, moveMarker) {
    const sign = computeDurationSign(durationFields) || 1, timeNano = bigNanoToNumber(durationFieldsToBigNano(durationFields, 5)), nanoInc = computeNanoInc(smallestUnit, roundingInc);
    let roundedTimeNano = roundByInc(timeNano, nanoInc, roundingMode);
    const [dayEpochNano0, dayEpochNano1] = clampRelativeDuration(calendarOps, {
      ...durationFields,
      ...durationTimeFieldDefaults
    }, 6, sign, marker, markerToEpochNano, moveMarker), beyondDayNano = roundedTimeNano - bigNanoToNumber(diffBigNanos(dayEpochNano0, dayEpochNano1));
    let dayDelta = 0;
    beyondDayNano && Math.sign(beyondDayNano) !== sign ? endEpochNano = moveBigNano(dayEpochNano0, roundedTimeNano) : (dayDelta += sign, 
    roundedTimeNano = roundByInc(beyondDayNano, nanoInc, roundingMode), endEpochNano = moveBigNano(dayEpochNano1, roundedTimeNano));
    const durationTimeFields = nanoToDurationTimeFields(roundedTimeNano);
    return [ {
      ...durationFields,
      ...durationTimeFields,
      days: durationFields.days + dayDelta
    }, endEpochNano, Boolean(dayDelta) ];
  }
  function nudgeRelativeDuration(durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, marker, markerToEpochNano, moveMarker) {
    const sign = computeDurationSign(durationFields), smallestUnitFieldName = durationFieldNamesAsc[smallestUnit], baseDurationFields = clearDurationFields(smallestUnit, durationFields);
    7 === smallestUnit && (durationFields = {
      ...durationFields,
      weeks: durationFields.weeks + Math.trunc(durationFields.days / 7)
    });
    const truncedVal = divTrunc(durationFields[smallestUnitFieldName], roundingInc) * roundingInc;
    baseDurationFields[smallestUnitFieldName] = truncedVal;
    const [epochNano0, epochNano1] = clampRelativeDuration(calendarOps, baseDurationFields, smallestUnit, roundingInc * sign, marker, markerToEpochNano, moveMarker), exactVal = truncedVal + computeEpochNanoFrac(endEpochNano, epochNano0, epochNano1) * sign * roundingInc, roundedVal = roundByInc(exactVal, roundingInc, roundingMode), expanded = Math.sign(roundedVal - exactVal) === sign;
    return baseDurationFields[smallestUnitFieldName] = roundedVal, [ baseDurationFields, expanded ? epochNano1 : epochNano0, expanded ];
  }
  function formatInstantIso(refineTimeZoneString, getTimeZoneOps, instantSlots, options) {
    const [timeZoneArg, roundingMode, nanoInc, subsecDigits] = (options => {
      const timeDisplayTuple = refineTimeDisplayTuple(options = normalizeOptions(options));
      return [ options.timeZone, ...timeDisplayTuple ];
    })(options), providedTimeZone = void 0 !== timeZoneArg;
    return ((providedTimeZone, timeZoneOps, epochNano, roundingMode, nanoInc, subsecDigits) => {
      epochNano = roundBigNanoByInc(epochNano, nanoInc, roundingMode, 1);
      const offsetNano = timeZoneOps.getOffsetNanosecondsFor(epochNano);
      return formatIsoDateTimeFields(epochNanoToIso(epochNano, offsetNano), subsecDigits) + (providedTimeZone ? formatOffsetNano(roundToMinute(offsetNano)) : "Z");
    })(providedTimeZone, getTimeZoneOps(providedTimeZone ? refineTimeZoneString(timeZoneArg) : utcTimeZoneId), instantSlots.epochNanoseconds, roundingMode, nanoInc, subsecDigits);
  }
  function formatZonedDateTimeIso(getTimeZoneOps, zonedDateTimeSlots0, options) {
    const [a, b, c, d, e, f] = (options => {
      options = normalizeOptions(options);
      const calendarDisplay = refineCalendarDisplay(options), subsecDigits = refineSubsecDigits(options), offsetDisplay = refineOffsetDisplay(options), roundingMode = refineRoundingMode(options, 4), smallestUnit = refineSmallestUnit(options, 4);
      return [ calendarDisplay, refineTimeZoneDisplay(options), offsetDisplay, roundingMode, ...refineSmallestUnitAndSubsecDigits(smallestUnit, subsecDigits) ];
    })(options);
    return ((getTimeZoneOps, calendarId, timeZoneId, epochNano, calendarDisplay, timeZoneDisplay, offsetDisplay, roundingMode, nanoInc, subsecDigits) => {
      epochNano = roundBigNanoByInc(epochNano, nanoInc, roundingMode, 1);
      const offsetNano = getTimeZoneOps(timeZoneId).getOffsetNanosecondsFor(epochNano);
      return formatIsoDateTimeFields(epochNanoToIso(epochNano, offsetNano), subsecDigits) + formatOffsetNano(roundToMinute(offsetNano), offsetDisplay) + ((timeZoneId, timeZoneDisplay) => 1 !== timeZoneDisplay ? "[" + (2 === timeZoneDisplay ? "!" : "") + timeZoneId + "]" : "")(timeZoneId, timeZoneDisplay) + formatCalendar(calendarId, calendarDisplay);
    })(getTimeZoneOps, zonedDateTimeSlots0.calendar, zonedDateTimeSlots0.timeZone, zonedDateTimeSlots0.epochNanoseconds, a, b, c, d, e, f);
  }
  function formatPlainDateTimeIso(plainDateTimeSlots0, options) {
    const [a, b, c, d] = (options => (options = normalizeOptions(options), [ refineCalendarDisplay(options), ...refineTimeDisplayTuple(options) ]))(options);
    return calendarId = plainDateTimeSlots0.calendar, calendarDisplay = a, subsecDigits = d, 
    formatIsoDateTimeFields(roundDateTimeToNano(plainDateTimeSlots0, c, b), subsecDigits) + formatCalendar(calendarId, calendarDisplay);
    var calendarId, calendarDisplay, subsecDigits;
  }
  function formatPlainDateIso(plainDateSlots, options) {
    return calendarId = plainDateSlots.calendar, isoFields = plainDateSlots, calendarDisplay = refineDateDisplayOptions(options), 
    formatIsoDateFields(isoFields) + formatCalendar(calendarId, calendarDisplay);
    var calendarId, isoFields, calendarDisplay;
  }
  function formatPlainYearMonthIso(plainYearMonthSlots, options) {
    return formatDateLikeIso(plainYearMonthSlots.calendar, formatIsoYearMonthFields, plainYearMonthSlots, refineDateDisplayOptions(options));
  }
  function formatPlainMonthDayIso(plainMonthDaySlots, options) {
    return formatDateLikeIso(plainMonthDaySlots.calendar, formatIsoMonthDayFields, plainMonthDaySlots, refineDateDisplayOptions(options));
  }
  function formatPlainTimeIso(slots, options) {
    const [a, b, c] = refineTimeDisplayOptions(options);
    return subsecDigits = c, formatIsoTimeFields(roundTimeToNano(slots, b, a)[0], subsecDigits);
    var subsecDigits;
  }
  function formatDurationIso(slots, options) {
    const [roundingMode, nanoInc, subsecDigits] = refineTimeDisplayOptions(options, 3);
    return nanoInc > 1 && checkDurationUnits(slots = {
      ...slots,
      ...roundDayTimeDurationByInc(slots, nanoInc, roundingMode)
    }), ((durationSlots, subsecDigits) => {
      const {sign: sign} = durationSlots, abs = -1 === sign ? negateDurationFields(durationSlots) : durationSlots, {hours: hours, minutes: minutes} = abs, [wholeSec, subsecNano] = divModBigNano(durationFieldsToBigNano(abs, 3), nanoInSec, divModTrunc);
      checkDurationTimeUnit(wholeSec);
      const subsecNanoString = formatSubsecNano(subsecNano, subsecDigits), forceSec = subsecDigits >= 0 || !sign || subsecNanoString;
      return (sign < 0 ? "-" : "") + "P" + formatDurationFragments({
        Y: formatDurationNumber(abs.years),
        M: formatDurationNumber(abs.months),
        W: formatDurationNumber(abs.weeks),
        D: formatDurationNumber(abs.days)
      }) + (hours || minutes || wholeSec || forceSec ? "T" + formatDurationFragments({
        H: formatDurationNumber(hours),
        M: formatDurationNumber(minutes),
        S: formatDurationNumber(wholeSec, forceSec) + subsecNanoString
      }) : "");
    })(slots, subsecDigits);
  }
  function formatDateLikeIso(calendarId, formatSimple, isoFields, calendarDisplay) {
    const showCalendar = calendarDisplay > 1 || 0 === calendarDisplay && calendarId !== isoCalendarId;
    return 1 === calendarDisplay ? calendarId === isoCalendarId ? formatSimple(isoFields) : formatIsoDateFields(isoFields) : showCalendar ? formatIsoDateFields(isoFields) + formatCalendarId(calendarId, 2 === calendarDisplay) : formatSimple(isoFields);
  }
  function formatDurationFragments(fragObj) {
    const parts = [];
    for (const fragName in fragObj) {
      const fragVal = fragObj[fragName];
      fragVal && parts.push(fragVal, fragName);
    }
    return parts.join("");
  }
  function formatIsoDateTimeFields(isoDateTimeFields, subsecDigits) {
    return formatIsoDateFields(isoDateTimeFields) + "T" + formatIsoTimeFields(isoDateTimeFields, subsecDigits);
  }
  function formatIsoDateFields(isoDateFields) {
    return formatIsoYearMonthFields(isoDateFields) + "-" + padNumber2(isoDateFields.isoDay);
  }
  function formatIsoYearMonthFields(isoDateFields) {
    const {isoYear: isoYear} = isoDateFields;
    return (isoYear < 0 || isoYear > 9999 ? getSignStr(isoYear) + padNumber(6, Math.abs(isoYear)) : padNumber(4, isoYear)) + "-" + padNumber2(isoDateFields.isoMonth);
  }
  function formatIsoMonthDayFields(isoDateFields) {
    return padNumber2(isoDateFields.isoMonth) + "-" + padNumber2(isoDateFields.isoDay);
  }
  function formatIsoTimeFields(isoTimeFields, subsecDigits) {
    const parts = [ padNumber2(isoTimeFields.isoHour), padNumber2(isoTimeFields.isoMinute) ];
    return -1 !== subsecDigits && parts.push(padNumber2(isoTimeFields.isoSecond) + ((isoMillisecond, isoMicrosecond, isoNanosecond, subsecDigits) => formatSubsecNano(isoMillisecond * nanoInMilli + isoMicrosecond * nanoInMicro + isoNanosecond, subsecDigits))(isoTimeFields.isoMillisecond, isoTimeFields.isoMicrosecond, isoTimeFields.isoNanosecond, subsecDigits)), 
    parts.join(":");
  }
  function formatOffsetNano(offsetNano, offsetDisplay = 0) {
    if (1 === offsetDisplay) {
      return "";
    }
    const [hour, nanoRemainder0] = divModFloor(Math.abs(offsetNano), nanoInHour), [minute, nanoRemainder1] = divModFloor(nanoRemainder0, nanoInMinute), [second, nanoRemainder2] = divModFloor(nanoRemainder1, nanoInSec);
    return getSignStr(offsetNano) + padNumber2(hour) + ":" + padNumber2(minute) + (second || nanoRemainder2 ? ":" + padNumber2(second) + formatSubsecNano(nanoRemainder2) : "");
  }
  function formatCalendar(calendarId, calendarDisplay) {
    return 1 !== calendarDisplay && (calendarDisplay > 1 || 0 === calendarDisplay && calendarId !== isoCalendarId) ? formatCalendarId(calendarId, 2 === calendarDisplay) : "";
  }
  function formatCalendarId(calendarId, isCritical) {
    return "[" + (isCritical ? "!" : "") + "u-ca=" + calendarId + "]";
  }
  function formatSubsecNano(totalNano, subsecDigits) {
    let s = padNumber(9, totalNano);
    return s = void 0 === subsecDigits ? s.replace(trailingZerosRE, "") : s.slice(0, subsecDigits), 
    s ? "." + s : "";
  }
  function getSignStr(num) {
    return num < 0 ? "-" : "+";
  }
  function formatDurationNumber(n, force) {
    return n || force ? n.toLocaleString("fullwide", {
      useGrouping: 0
    }) : "";
  }
  function getMatchingInstantFor(timeZoneOps, isoFields, offsetNano, offsetDisambig = 0, epochDisambig = 0, epochFuzzy, hasZ) {
    if (void 0 !== offsetNano && 1 === offsetDisambig && (1 === offsetDisambig || hasZ)) {
      return isoToEpochNanoWithOffset(isoFields, offsetNano);
    }
    const possibleEpochNanos = timeZoneOps.getPossibleInstantsFor(isoFields);
    if (void 0 !== offsetNano && 3 !== offsetDisambig) {
      const matchingEpochNano = ((possibleEpochNanos, isoDateTimeFields, offsetNano, fuzzy) => {
        const zonedEpochNano = isoToEpochNano(isoDateTimeFields);
        fuzzy && (offsetNano = roundToMinute(offsetNano));
        for (const possibleEpochNano of possibleEpochNanos) {
          let possibleOffsetNano = bigNanoToNumber(diffBigNanos(possibleEpochNano, zonedEpochNano));
          if (fuzzy && (possibleOffsetNano = roundToMinute(possibleOffsetNano)), possibleOffsetNano === offsetNano) {
            return possibleEpochNano;
          }
        }
      })(possibleEpochNanos, isoFields, offsetNano, epochFuzzy);
      if (void 0 !== matchingEpochNano) {
        return matchingEpochNano;
      }
      if (0 === offsetDisambig) {
        throw new RangeError(invalidOffsetForTimeZone);
      }
    }
    return hasZ ? isoToEpochNano(isoFields) : getSingleInstantFor(timeZoneOps, isoFields, epochDisambig, possibleEpochNanos);
  }
  function getSingleInstantFor(timeZoneOps, isoFields, disambig = 0, possibleEpochNanos = timeZoneOps.getPossibleInstantsFor(isoFields)) {
    if (1 === possibleEpochNanos.length) {
      return possibleEpochNanos[0];
    }
    if (1 === disambig) {
      throw new RangeError(ambigOffset);
    }
    if (possibleEpochNanos.length) {
      return possibleEpochNanos[3 === disambig ? 1 : 0];
    }
    const zonedEpochNano = isoToEpochNano(isoFields), gapNano = ((timeZoneOps, zonedEpochNano) => {
      const startOffsetNano = timeZoneOps.getOffsetNanosecondsFor(moveBigNano(zonedEpochNano, -nanoInUtcDay));
      return (gapNano => {
        if (gapNano > nanoInUtcDay) {
          throw new RangeError(outOfBoundsDstGap);
        }
        return gapNano;
      })(timeZoneOps.getOffsetNanosecondsFor(moveBigNano(zonedEpochNano, nanoInUtcDay)) - startOffsetNano);
    })(timeZoneOps, zonedEpochNano), shiftNano = gapNano * (2 === disambig ? -1 : 1);
    return (possibleEpochNanos = timeZoneOps.getPossibleInstantsFor(epochNanoToIso(zonedEpochNano, shiftNano)))[2 === disambig ? 0 : possibleEpochNanos.length - 1];
  }
  function getStartOfDayInstantFor(timeZoneOps, isoFields) {
    const possibleEpochNanos = timeZoneOps.getPossibleInstantsFor(isoFields);
    if (possibleEpochNanos.length) {
      return possibleEpochNanos[0];
    }
    const zonedEpochNanoDayBefore = moveBigNano(isoToEpochNano(isoFields), -nanoInUtcDay);
    return timeZoneOps.getTransition(zonedEpochNanoDayBefore, 1);
  }
  function moveInstant(doSubtract, instantSlots, durationSlots) {
    return createInstantSlots(checkEpochNanoInBounds(addBigNanos(instantSlots.epochNanoseconds, (fields => {
      if (durationHasDateParts(fields)) {
        throw new RangeError(invalidLargeUnits);
      }
      return durationFieldsToBigNano(fields, 5);
    })(doSubtract ? negateDurationFields(durationSlots) : durationSlots))));
  }
  function moveZonedDateTime(getCalendarOps, getTimeZoneOps, doSubtract, zonedDateTimeSlots, durationSlots, options = Object.create(null)) {
    const timeZoneOps = getTimeZoneOps(zonedDateTimeSlots.timeZone), calendarOps = getCalendarOps(zonedDateTimeSlots.calendar);
    return {
      ...zonedDateTimeSlots,
      ...moveZonedEpochs(timeZoneOps, calendarOps, zonedDateTimeSlots, doSubtract ? negateDurationFields(durationSlots) : durationSlots, options)
    };
  }
  function movePlainDateTime(getCalendarOps, doSubtract, plainDateTimeSlots, durationSlots, options = Object.create(null)) {
    const {calendar: calendar} = plainDateTimeSlots;
    return createPlainDateTimeSlots(moveDateTime(getCalendarOps(calendar), plainDateTimeSlots, doSubtract ? negateDurationFields(durationSlots) : durationSlots, options), calendar);
  }
  function movePlainDate(getCalendarOps, doSubtract, plainDateSlots, durationSlots, options) {
    const {calendar: calendar} = plainDateSlots;
    return createPlainDateSlots(moveDate(getCalendarOps(calendar), plainDateSlots, doSubtract ? negateDurationFields(durationSlots) : durationSlots, options), calendar);
  }
  function movePlainYearMonth(getCalendarOps, doSubtract, plainYearMonthSlots, durationSlots, options) {
    const calendarId = plainYearMonthSlots.calendar, calendarOps = getCalendarOps(calendarId);
    let isoDateFields = checkIsoDateInBounds(moveToDayOfMonthUnsafe(calendarOps, plainYearMonthSlots));
    doSubtract && (durationSlots = negateDuration(durationSlots)), durationSlots.sign < 0 && (isoDateFields = calendarOps.dateAdd(isoDateFields, {
      ...durationFieldDefaults,
      months: 1
    }), isoDateFields = moveByDays(isoDateFields, -1));
    const movedIsoDateFields = calendarOps.dateAdd(isoDateFields, durationSlots, options);
    return createPlainYearMonthSlots(moveToDayOfMonthUnsafe(calendarOps, movedIsoDateFields), calendarId);
  }
  function movePlainTime(doSubtract, slots, durationSlots) {
    return createPlainTimeSlots(moveTime(slots, doSubtract ? negateDurationFields(durationSlots) : durationSlots)[0]);
  }
  function moveZonedEpochs(timeZoneOps, calendarOps, slots, durationFields, options) {
    const timeOnlyNano = durationFieldsToBigNano(durationFields, 5);
    let epochNano = slots.epochNanoseconds;
    if (durationHasDateParts(durationFields)) {
      const isoDateTimeFields = zonedEpochSlotsToIso(slots, timeZoneOps);
      epochNano = addBigNanos(getSingleInstantFor(timeZoneOps, {
        ...moveDate(calendarOps, isoDateTimeFields, {
          ...durationFields,
          ...durationTimeFieldDefaults
        }, options),
        ...pluckProps(isoTimeFieldNamesAsc, isoDateTimeFields)
      }), timeOnlyNano);
    } else {
      epochNano = addBigNanos(epochNano, timeOnlyNano), refineOverflowOptions(options);
    }
    return {
      epochNanoseconds: checkEpochNanoInBounds(epochNano)
    };
  }
  function moveDateTime(calendarOps, isoDateTimeFields, durationFields, options) {
    const [movedIsoTimeFields, dayDelta] = moveTime(isoDateTimeFields, durationFields);
    return checkIsoDateTimeInBounds({
      ...moveDate(calendarOps, isoDateTimeFields, {
        ...durationFields,
        ...durationTimeFieldDefaults,
        days: durationFields.days + dayDelta
      }, options),
      ...movedIsoTimeFields
    });
  }
  function moveDate(calendarOps, isoDateFields, durationFields, options) {
    if (durationFields.years || durationFields.months || durationFields.weeks) {
      return calendarOps.dateAdd(isoDateFields, durationFields, options);
    }
    refineOverflowOptions(options);
    const days = durationFields.days + durationFieldsToBigNano(durationFields, 5)[0];
    return days ? checkIsoDateInBounds(moveByDays(isoDateFields, days)) : isoDateFields;
  }
  function moveToDayOfMonthUnsafe(calendarOps, isoFields, dayOfMonth = 1) {
    return moveByDays(isoFields, dayOfMonth - calendarOps.day(isoFields));
  }
  function moveTime(isoFields, durationFields) {
    const [durDays, durTimeNano] = durationFieldsToBigNano(durationFields, 5), [newIsoFields, overflowDays] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(isoFields) + durTimeNano);
    return [ newIsoFields, durDays + overflowDays ];
  }
  function moveByDays(isoFields, days) {
    return days ? {
      ...isoFields,
      ...epochMilliToIso(isoToEpochMilli(isoFields) + days * milliInDay)
    } : isoFields;
  }
  function diffInstants(invert, instantSlots0, instantSlots1, options) {
    const optionsTuple = refineDiffOptions(invert, options, 3, 5), durationFields = diffEpochNanos(instantSlots0.epochNanoseconds, instantSlots1.epochNanoseconds, ...optionsTuple);
    return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
  }
  function diffZonedDateTimes(getCalendarOps, getTimeZoneOps, invert, slots0, slots1, options) {
    const calendarId = getCommonCalendarId(slots0.calendar, slots1.calendar), [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5), epochNano0 = slots0.epochNanoseconds, epochNano1 = slots1.epochNanoseconds, sign = compareBigNanos(epochNano1, epochNano0);
    let durationFields;
    if (sign) {
      if (largestUnit < 6) {
        durationFields = diffEpochNanos(epochNano0, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode);
      } else {
        const timeZoneOps = getTimeZoneOps(((a, b) => {
          if (!isTimeZoneIdsEqual(a, b)) {
            throw new RangeError(mismatchingTimeZones);
          }
          return a;
        })(slots0.timeZone, slots1.timeZone)), calendarOps = getCalendarOps(calendarId);
        durationFields = diffZonedEpochsBig(calendarOps, timeZoneOps, slots0, slots1, sign, largestUnit, options), 
        durationFields = roundRelativeDuration(durationFields, epochNano1, largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, slots0, extractEpochNano, bindArgs(moveZonedEpochs, timeZoneOps));
      }
    } else {
      durationFields = durationFieldDefaults;
    }
    return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
  }
  function diffPlainDateTimes(getCalendarOps, invert, plainDateTimeSlots0, plainDateTimeSlots1, options) {
    const calendarId = getCommonCalendarId(plainDateTimeSlots0.calendar, plainDateTimeSlots1.calendar), [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 6), startEpochNano = isoToEpochNano(plainDateTimeSlots0), endEpochNano = isoToEpochNano(plainDateTimeSlots1), sign = compareBigNanos(endEpochNano, startEpochNano);
    let durationFields;
    if (sign) {
      if (largestUnit <= 6) {
        durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode);
      } else {
        const calendarOps = getCalendarOps(calendarId);
        durationFields = diffDateTimesBig(calendarOps, plainDateTimeSlots0, plainDateTimeSlots1, sign, largestUnit, options), 
        durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, plainDateTimeSlots0, isoToEpochNano, moveDateTime);
      }
    } else {
      durationFields = durationFieldDefaults;
    }
    return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
  }
  function diffPlainDates(getCalendarOps, invert, plainDateSlots0, plainDateSlots1, options) {
    const calendarId = getCommonCalendarId(plainDateSlots0.calendar, plainDateSlots1.calendar);
    return diffDateLike(invert, (() => getCalendarOps(calendarId)), plainDateSlots0, plainDateSlots1, ...refineDiffOptions(invert, options, 6, 9, 6));
  }
  function diffPlainYearMonth(getCalendarOps, invert, plainYearMonthSlots0, plainYearMonthSlots1, options) {
    const calendarId = getCommonCalendarId(plainYearMonthSlots0.calendar, plainYearMonthSlots1.calendar), optionsTuple = refineDiffOptions(invert, options, 9, 9, 8), calendarOps = getCalendarOps(calendarId), firstOfMonth0 = moveToDayOfMonthUnsafe(calendarOps, plainYearMonthSlots0), firstOfMonth1 = moveToDayOfMonthUnsafe(calendarOps, plainYearMonthSlots1);
    return firstOfMonth0.isoYear === firstOfMonth1.isoYear && firstOfMonth0.isoMonth === firstOfMonth1.isoMonth && firstOfMonth0.isoDay === firstOfMonth1.isoDay ? createDurationSlots(durationFieldDefaults) : diffDateLike(invert, (() => calendarOps), checkIsoDateInBounds(firstOfMonth0), checkIsoDateInBounds(firstOfMonth1), ...optionsTuple, 8);
  }
  function diffDateLike(invert, getCalendarOps, startIsoFields, endIsoFields, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision = 6) {
    const startEpochNano = isoToEpochNano(startIsoFields), endEpochNano = isoToEpochNano(endIsoFields);
    if (void 0 === startEpochNano || void 0 === endEpochNano) {
      throw new RangeError(outOfBoundsDate);
    }
    let durationFields;
    if (compareBigNanos(endEpochNano, startEpochNano)) {
      if (6 === largestUnit) {
        durationFields = diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode);
      } else {
        const calendarOps = getCalendarOps();
        durationFields = calendarOps.dateUntil(startIsoFields, endIsoFields, largestUnit), 
        smallestUnit === smallestPrecision && 1 === roundingInc || (durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, startIsoFields, isoToEpochNano, moveDate));
      }
    } else {
      durationFields = durationFieldDefaults;
    }
    return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
  }
  function diffPlainTimes(invert, plainTimeSlots0, plainTimeSlots1, options) {
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = refineDiffOptions(invert, options, 5, 5), timeDiffNano = roundByInc(diffTimes(plainTimeSlots0, plainTimeSlots1), computeNanoInc(smallestUnit, roundingInc), roundingMode), durationFields = {
      ...durationFieldDefaults,
      ...nanoToDurationTimeFields(timeDiffNano, largestUnit)
    };
    return createDurationSlots(invert ? negateDurationFields(durationFields) : durationFields);
  }
  function diffZonedEpochsExact(timeZoneOps, calendarOps, slots0, slots1, largestUnit, origOptions) {
    const sign = compareBigNanos(slots1.epochNanoseconds, slots0.epochNanoseconds);
    return sign ? largestUnit < 6 ? diffEpochNanosExact(slots0.epochNanoseconds, slots1.epochNanoseconds, largestUnit) : diffZonedEpochsBig(calendarOps, timeZoneOps, slots0, slots1, sign, largestUnit, origOptions) : durationFieldDefaults;
  }
  function diffDateTimesExact(calendarOps, startIsoFields, endIsoFields, largestUnit, origOptions) {
    const startEpochNano = isoToEpochNano(startIsoFields), endEpochNano = isoToEpochNano(endIsoFields), sign = compareBigNanos(endEpochNano, startEpochNano);
    return sign ? largestUnit <= 6 ? diffEpochNanosExact(startEpochNano, endEpochNano, largestUnit) : diffDateTimesBig(calendarOps, startIsoFields, endIsoFields, sign, largestUnit, origOptions) : durationFieldDefaults;
  }
  function diffZonedEpochsBig(calendarOps, timeZoneOps, slots0, slots1, sign, largestUnit, origOptions) {
    const [isoFields0, isoFields1, remainderNano] = ((timeZoneOps, slots0, slots1, sign) => {
      function updateMid() {
        return midIsoFields = {
          ...moveByDays(endIsoFields, dayCorrection++ * -sign),
          ...startIsoTimeFields
        }, midEpochNano = getSingleInstantFor(timeZoneOps, midIsoFields), compareBigNanos(endEpochNano, midEpochNano) === -sign;
      }
      const startIsoFields = zonedEpochSlotsToIso(slots0, timeZoneOps), startIsoTimeFields = pluckProps(isoTimeFieldNamesAsc, startIsoFields), endIsoFields = zonedEpochSlotsToIso(slots1, timeZoneOps), endEpochNano = slots1.epochNanoseconds;
      let dayCorrection = 0;
      const timeDiffNano = diffTimes(startIsoFields, endIsoFields);
      let midIsoFields, midEpochNano;
      if (Math.sign(timeDiffNano) === -sign && dayCorrection++, updateMid() && (-1 === sign || updateMid())) {
        throw new RangeError(invalidProtocolResults);
      }
      const remainderNano = bigNanoToNumber(diffBigNanos(midEpochNano, endEpochNano));
      return [ startIsoFields, midIsoFields, remainderNano ];
    })(timeZoneOps, slots0, slots1, sign);
    var startIsoFields, endIsoFields;
    return {
      ...6 === largestUnit ? (startIsoFields = isoFields0, endIsoFields = isoFields1, 
      {
        ...durationFieldDefaults,
        days: diffDays(startIsoFields, endIsoFields)
      }) : calendarOps.dateUntil(isoFields0, isoFields1, largestUnit, origOptions),
      ...nanoToDurationTimeFields(remainderNano)
    };
  }
  function diffDateTimesBig(calendarOps, startIsoFields, endIsoFields, sign, largestUnit, origOptions) {
    const [startIsoDate, endIsoDate, timeNano] = ((startIsoDateTime, endIsoDateTime, sign) => {
      let endIsoDate = endIsoDateTime, timeDiffNano = diffTimes(startIsoDateTime, endIsoDateTime);
      return Math.sign(timeDiffNano) === -sign && (endIsoDate = moveByDays(endIsoDateTime, -sign), 
      timeDiffNano += nanoInUtcDay * sign), [ startIsoDateTime, endIsoDate, timeDiffNano ];
    })(startIsoFields, endIsoFields, sign);
    return {
      ...calendarOps.dateUntil(startIsoDate, endIsoDate, largestUnit, origOptions),
      ...nanoToDurationTimeFields(timeNano)
    };
  }
  function diffEpochNanos(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
    return {
      ...durationFieldDefaults,
      ...nanoToDurationDayTimeFields(roundBigNano(diffBigNanos(startEpochNano, endEpochNano), smallestUnit, roundingInc, roundingMode), largestUnit)
    };
  }
  function diffEpochNanosExact(startEpochNano, endEpochNano, largestUnit) {
    return {
      ...durationFieldDefaults,
      ...nanoToDurationDayTimeFields(diffBigNanos(startEpochNano, endEpochNano), largestUnit)
    };
  }
  function diffDays(startIsoFields, endIsoFields) {
    return diffEpochMilliByDay(isoToEpochMilli(startIsoFields), isoToEpochMilli(endIsoFields));
  }
  function diffEpochMilliByDay(epochMilli0, epochMilli1) {
    return Math.trunc((epochMilli1 - epochMilli0) / milliInDay);
  }
  function diffTimes(isoTime0, isoTime1) {
    return isoTimeFieldsToNano(isoTime1) - isoTimeFieldsToNano(isoTime0);
  }
  function getCommonCalendarId(a, b) {
    if (a !== b) {
      throw new RangeError(mismatchingCalendars);
    }
    return a;
  }
  function createMarkerSystem(getCalendarOps, getTimeZoneOps, relativeToSlots) {
    const calendarOps = getCalendarOps(relativeToSlots.calendar);
    return isZonedEpochSlots(relativeToSlots) ? [ relativeToSlots, calendarOps, getTimeZoneOps(relativeToSlots.timeZone) ] : [ {
      ...relativeToSlots,
      ...isoTimeFieldDefaults
    }, calendarOps ];
  }
  function createMarkerToEpochNano(timeZoneOps) {
    return timeZoneOps ? extractEpochNano : isoToEpochNano;
  }
  function createMoveMarker(timeZoneOps) {
    return timeZoneOps ? bindArgs(moveZonedEpochs, timeZoneOps) : moveDateTime;
  }
  function createDiffMarkers(timeZoneOps) {
    return timeZoneOps ? bindArgs(diffZonedEpochsExact, timeZoneOps) : diffDateTimesExact;
  }
  function isZonedEpochSlots(marker) {
    return marker && marker.epochNanoseconds;
  }
  function isUniformUnit(unit, marker) {
    return unit <= 6 - (isZonedEpochSlots(marker) ? 1 : 0);
  }
  function addDurations(refineRelativeTo, getCalendarOps, getTimeZoneOps, doSubtract, slots, otherSlots, options) {
    const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo), maxUnit = Math.max(getMaxDurationUnit(slots), getMaxDurationUnit(otherSlots));
    if (isUniformUnit(maxUnit, relativeToSlots)) {
      return createDurationSlots(checkDurationUnits(((a, b, largestUnit, doSubtract) => {
        const combined = addBigNanos(durationFieldsToBigNano(a), durationFieldsToBigNano(b), doSubtract ? -1 : 1);
        if (!Number.isFinite(combined[0])) {
          throw new RangeError(outOfBoundsDate);
        }
        return {
          ...durationFieldDefaults,
          ...nanoToDurationDayTimeFields(combined, largestUnit)
        };
      })(slots, otherSlots, maxUnit, doSubtract)));
    }
    if (!relativeToSlots) {
      throw new RangeError("Missing relativeTo");
    }
    doSubtract && (otherSlots = negateDurationFields(otherSlots));
    const [marker, calendarOps, timeZoneOps] = createMarkerSystem(getCalendarOps, getTimeZoneOps, relativeToSlots), moveMarker = createMoveMarker(timeZoneOps), diffMarkers = createDiffMarkers(timeZoneOps), midMarker = moveMarker(calendarOps, marker, slots);
    return createDurationSlots(diffMarkers(calendarOps, marker, moveMarker(calendarOps, midMarker, otherSlots), maxUnit));
  }
  function negateDuration(slots) {
    return createDurationSlots(negateDurationFields(slots));
  }
  function negateDurationFields(fields) {
    const res = {};
    for (const fieldName of durationFieldNamesAsc) {
      res[fieldName] = -1 * fields[fieldName] || 0;
    }
    return res;
  }
  function computeDurationSign(fields, fieldNames = durationFieldNamesAsc) {
    let sign = 0;
    for (const fieldName of fieldNames) {
      const fieldSign = Math.sign(fields[fieldName]);
      if (fieldSign) {
        if (sign && sign !== fieldSign) {
          throw new RangeError(forbiddenDurationSigns);
        }
        sign = fieldSign;
      }
    }
    return sign;
  }
  function checkDurationUnits(fields) {
    for (const calendarUnit of durationCalendarFieldNamesAsc) {
      clampEntity(calendarUnit, fields[calendarUnit], -maxCalendarUnit, maxCalendarUnit, 1);
    }
    return checkDurationTimeUnit(bigNanoToNumber(durationFieldsToBigNano(fields), nanoInSec)), 
    fields;
  }
  function checkDurationTimeUnit(n) {
    if (!Number.isSafeInteger(n)) {
      throw new RangeError(outOfBoundsDuration);
    }
  }
  function durationFieldsToBigNano(fields, largestUnit = 6) {
    return givenFieldsToBigNano(fields, largestUnit, durationFieldNamesAsc);
  }
  function nanoToDurationDayTimeFields(bigNano, largestUnit = 6) {
    const [days, timeNano] = bigNano, dayTimeFields = nanoToGivenFields(timeNano, largestUnit, durationFieldNamesAsc);
    if (dayTimeFields[durationFieldNamesAsc[largestUnit]] += days * (nanoInUtcDay / unitNanoMap[largestUnit]), 
    !Number.isFinite(dayTimeFields[durationFieldNamesAsc[largestUnit]])) {
      throw new RangeError(outOfBoundsDate);
    }
    return dayTimeFields;
  }
  function nanoToDurationTimeFields(nano, largestUnit = 5) {
    return nanoToGivenFields(nano, largestUnit, durationFieldNamesAsc);
  }
  function durationHasDateParts(fields) {
    return Boolean(computeDurationSign(fields, durationDateFieldNamesAsc));
  }
  function getMaxDurationUnit(fields) {
    let unit = 9;
    for (;unit > 0 && !fields[durationFieldNamesAsc[unit]]; unit--) {}
    return unit;
  }
  function createSplitTuple(startEpochSec, endEpochSec) {
    return [ startEpochSec, endEpochSec ];
  }
  function computePeriod(epochSec) {
    const startEpochSec = Math.floor(epochSec / periodDur) * periodDur;
    return [ startEpochSec, startEpochSec + periodDur ];
  }
  function parseOffsetNano(s) {
    const offsetNano = parseOffsetNanoMaybe(s);
    if (void 0 === offsetNano) {
      throw new RangeError(failedParse(s));
    }
    return offsetNano;
  }
  function parsePlainDate(s, isPlainYearMonth, isPlainMonthDay) {
    let organized = parseDateTimeLike(requireString(s));
    if (!organized || organized.hasZ) {
      throw new RangeError(failedParse(s));
    }
    return isPlainYearMonth ? organized.calendar === isoCalendarId && (organized = -271821 === organized.isoYear && 4 === organized.isoMonth ? {
      ...organized,
      isoDay: 20,
      ...isoTimeFieldDefaults
    } : {
      ...organized,
      isoDay: 1,
      ...isoTimeFieldDefaults
    }) : isPlainMonthDay && organized.calendar === isoCalendarId && (organized = {
      ...organized,
      isoYear: isoEpochFirstLeapYear
    }), createPlainDateSlots(organized.hasTime ? finalizeDateTime(organized) : finalizeDate(organized));
  }
  function requireIsoCalendar(organized) {
    if (organized.calendar !== isoCalendarId) {
      throw new RangeError(invalidSubstring(organized.calendar));
    }
  }
  function finalizeZonedDateTime(organized, offsetNano, offsetDisambig = 0, epochDisambig = 0) {
    const timeZoneId = resolveTimeZoneId(organized.timeZone), timeZoneImpl = queryNativeTimeZone(timeZoneId);
    let epochNano;
    return checkIsoDateTimeFields(organized), epochNano = organized.hasTime ? getMatchingInstantFor(timeZoneImpl, organized, offsetNano, offsetDisambig, epochDisambig, !timeZoneImpl.offsetNano, organized.hasZ) : getStartOfDayInstantFor(timeZoneImpl, organized), 
    createZonedDateTimeSlots(epochNano, timeZoneId, resolveCalendarId(organized.calendar));
  }
  function finalizeDateTime(organized) {
    return resolveSlotsCalendar(checkIsoDateTimeInBounds(checkIsoDateTimeFields(organized)));
  }
  function finalizeDate(organized) {
    return resolveSlotsCalendar(checkIsoDateInBounds(checkIsoDateFields(organized)));
  }
  function resolveSlotsCalendar(organized) {
    return {
      ...organized,
      calendar: resolveCalendarId(organized.calendar)
    };
  }
  function parseDateTimeLike(s) {
    const parts = dateTimeRegExp.exec(s);
    return parts ? (parts => {
      const zOrOffset = parts[10], hasZ = "Z" === (zOrOffset || "").toUpperCase();
      return {
        isoYear: organizeIsoYearParts(parts),
        isoMonth: parseInt(parts[4]),
        isoDay: parseInt(parts[5]),
        ...organizeTimeParts(parts.slice(5)),
        ...organizeAnnotationParts(parts[16]),
        hasTime: Boolean(parts[6]),
        hasZ: hasZ,
        offset: hasZ ? void 0 : zOrOffset
      };
    })(parts) : void 0;
  }
  function parseYearMonthOnly(s) {
    const parts = yearMonthRegExp.exec(s);
    return parts ? (parts => ({
      isoYear: organizeIsoYearParts(parts),
      isoMonth: parseInt(parts[4]),
      isoDay: 1,
      ...organizeAnnotationParts(parts[5])
    }))(parts) : void 0;
  }
  function parseMonthDayOnly(s) {
    const parts = monthDayRegExp.exec(s);
    return parts ? (parts => ({
      isoYear: isoEpochFirstLeapYear,
      isoMonth: parseInt(parts[1]),
      isoDay: parseInt(parts[2]),
      ...organizeAnnotationParts(parts[3])
    }))(parts) : void 0;
  }
  function parseOffsetNanoMaybe(s, onlyHourMinute) {
    const parts = offsetRegExp.exec(s);
    return parts ? ((parts, onlyHourMinute) => {
      const firstSubMinutePart = parts[4] || parts[5];
      if (onlyHourMinute && firstSubMinutePart) {
        throw new RangeError(invalidSubstring(firstSubMinutePart));
      }
      return (offsetNano => {
        if (Math.abs(offsetNano) >= nanoInUtcDay) {
          throw new RangeError(outOfBoundsOffset);
        }
        return offsetNano;
      })((parseInt0(parts[2]) * nanoInHour + parseInt0(parts[3]) * nanoInMinute + parseInt0(parts[4]) * nanoInSec + parseSubsecNano(parts[5] || "")) * parseSign(parts[1]));
    })(parts, onlyHourMinute) : void 0;
  }
  function organizeIsoYearParts(parts) {
    const yearSign = parseSign(parts[1]), year = parseInt(parts[2] || parts[3]);
    if (yearSign < 0 && !year) {
      throw new RangeError(invalidSubstring(-0));
    }
    return yearSign * year;
  }
  function organizeTimeParts(parts) {
    const isoSecond = parseInt0(parts[3]);
    return {
      ...nanoToIsoTimeAndDay(parseSubsecNano(parts[4] || ""))[0],
      isoHour: parseInt0(parts[1]),
      isoMinute: parseInt0(parts[2]),
      isoSecond: 60 === isoSecond ? 59 : isoSecond
    };
  }
  function organizeAnnotationParts(s) {
    let calendarIsCritical, timeZoneId;
    const calendarIds = [];
    if (s.replace(annotationRegExp, ((whole, criticalStr, mainStr) => {
      const isCritical = Boolean(criticalStr), [val, name] = mainStr.split("=").reverse();
      if (name) {
        if ("u-ca" === name) {
          calendarIds.push(val), calendarIsCritical || (calendarIsCritical = isCritical);
        } else if (isCritical || /[A-Z]/.test(name)) {
          throw new RangeError(invalidSubstring(whole));
        }
      } else {
        if (timeZoneId) {
          throw new RangeError(invalidSubstring(whole));
        }
        timeZoneId = val;
      }
      return "";
    })), calendarIds.length > 1 && calendarIsCritical) {
      throw new RangeError(invalidSubstring(s));
    }
    return {
      timeZone: timeZoneId,
      calendar: calendarIds[0] || isoCalendarId
    };
  }
  function parseSubsecNano(fracStr) {
    return parseInt(fracStr.padEnd(9, "0"));
  }
  function createRegExp(meat) {
    return new RegExp(`^${meat}$`, "i");
  }
  function parseSign(s) {
    return s && "+" !== s ? -1 : 1;
  }
  function parseInt0(s) {
    return void 0 === s ? 0 : parseInt(s);
  }
  function resolveTimeZoneId(id) {
    const essence = getTimeZoneEssence(id);
    return "number" == typeof essence ? formatOffsetNano(essence) : essence ? (id => {
      if (badCharactersRegExp.test(id)) {
        throw new RangeError(invalidTimeZone(id));
      }
      if (icuRegExp.test(id)) {
        throw new RangeError(forbiddenIcuTimeZone);
      }
      return id.toLowerCase().split("/").map(((part, partI) => (part.length <= 3 || /\d/.test(part)) && !/etc|yap/.test(part) ? part.toUpperCase() : part.replace(/baja|dumont|[a-z]+/g, ((a, i) => a.length <= 2 && !partI || "in" === a || "chat" === a ? a.toUpperCase() : a.length > 2 || !i ? capitalize(a).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : a)))).join("/");
    })(id) : utcTimeZoneId;
  }
  function getTimeZoneAtomic(id) {
    const essence = getTimeZoneEssence(id);
    return "number" == typeof essence ? essence : essence ? essence.resolvedOptions().timeZone : utcTimeZoneId;
  }
  function getTimeZoneEssence(id) {
    const offsetNano = parseOffsetNanoMaybe(id = id.toUpperCase(), 1);
    return void 0 !== offsetNano ? offsetNano : id !== utcTimeZoneId ? queryTimeZoneIntlFormat(id) : void 0;
  }
  function compareInstants(instantSlots0, instantSlots1) {
    return compareBigNanos(instantSlots0.epochNanoseconds, instantSlots1.epochNanoseconds);
  }
  function compareZonedDateTimes(zonedDateTimeSlots0, zonedDateTimeSlots1) {
    return compareBigNanos(zonedDateTimeSlots0.epochNanoseconds, zonedDateTimeSlots1.epochNanoseconds);
  }
  function compareIsoDateTimeFields(isoFields0, isoFields1) {
    return compareIsoDateFields(isoFields0, isoFields1) || compareIsoTimeFields(isoFields0, isoFields1);
  }
  function compareIsoDateFields(isoFields0, isoFields1) {
    return compareNumbers(isoToEpochMilli(isoFields0), isoToEpochMilli(isoFields1));
  }
  function compareIsoTimeFields(isoFields0, isoFields1) {
    return compareNumbers(isoTimeFieldsToNano(isoFields0), isoTimeFieldsToNano(isoFields1));
  }
  function isTimeZoneIdsEqual(a, b) {
    if (a === b) {
      return 1;
    }
    try {
      return getTimeZoneAtomic(a) === getTimeZoneAtomic(b);
    } catch (_a) {}
  }
  function createNativeOpsCreator(isoOps, intlOps) {
    return calendarId => calendarId === isoCalendarId ? isoOps : calendarId === gregoryCalendarId || "japanese" === calendarId ? Object.assign(Object.create(isoOps), {
      id: calendarId
    }) : Object.assign(Object.create(intlOps), queryIntlCalendar(calendarId));
  }
  function refineCalendarFields(calendarOps, bag, validFieldNames, requiredFieldNames = [], forcedValidFieldNames = []) {
    return refineFields(bag, [ ...calendarOps.fields(validFieldNames), ...forcedValidFieldNames ].sort(), requiredFieldNames);
  }
  function refineFields(bag, validFieldNames, requiredFieldNames, disallowEmpty = !requiredFieldNames) {
    const res = {};
    let prevFieldName, anyMatching = 0;
    for (const fieldName of validFieldNames) {
      if (fieldName === prevFieldName) {
        throw new RangeError(duplicateFields(fieldName));
      }
      if ("constructor" === fieldName || "__proto__" === fieldName) {
        throw new RangeError(forbiddenField(fieldName));
      }
      let fieldVal = bag[fieldName];
      if (void 0 !== fieldVal) {
        anyMatching = 1, builtinRefiners[fieldName] && (fieldVal = builtinRefiners[fieldName](fieldVal, fieldName)), 
        res[fieldName] = fieldVal;
      } else if (requiredFieldNames) {
        if (requiredFieldNames.includes(fieldName)) {
          throw new TypeError(missingField(fieldName));
        }
        res[fieldName] = timeFieldDefaults[fieldName];
      }
      prevFieldName = fieldName;
    }
    if (disallowEmpty && !anyMatching) {
      throw new TypeError(noValidFields(validFieldNames));
    }
    return res;
  }
  function refineTimeBag(fields, overflow) {
    return constrainIsoTimeFields(timeFieldsToIso({
      ...timeFieldDefaults,
      ...fields
    }), overflow);
  }
  function convertToIso(calendarOps, input, inputFieldNames, extra, extraFieldNames) {
    input = pluckProps(inputFieldNames = calendarOps.fields(inputFieldNames), input), 
    extra = refineFields(extra, extraFieldNames = calendarOps.fields(extraFieldNames), []);
    let mergedFields = calendarOps.mergeFields(input, extra);
    return mergedFields = refineFields(mergedFields, [ ...inputFieldNames, ...extraFieldNames ].sort(), []), 
    calendarOps.dateFromFields(mergedFields);
  }
  function refineYear(calendarNative, fields) {
    const eraOrigins = getCalendarEraOrigins(calendarNative), eraRemaps = eraRemapsByCalendarId[calendarNative.id || ""] || {};
    let {era: era, eraYear: eraYear, year: year} = fields;
    if (void 0 !== era || void 0 !== eraYear) {
      if (void 0 === era || void 0 === eraYear) {
        throw new TypeError(mismatchingEraParts);
      }
      if (!eraOrigins) {
        throw new RangeError(forbiddenEraParts);
      }
      const eraOrigin = eraOrigins[eraRemaps[era] || era];
      if (void 0 === eraOrigin) {
        throw new RangeError(invalidEra(era));
      }
      const yearByEra = eraYearToYear(eraYear, eraOrigin);
      if (void 0 !== year && year !== yearByEra) {
        throw new RangeError(mismatchingYearAndEra);
      }
      year = yearByEra;
    } else if (void 0 === year) {
      throw new TypeError(missingYear(eraOrigins));
    }
    return year;
  }
  function refineMonth(calendarNative, fields, year, overflow) {
    let {month: month, monthCode: monthCode} = fields;
    if (void 0 !== monthCode) {
      const monthByCode = ((calendarNative, monthCode, year, overflow) => {
        const leapMonth = calendarNative.leapMonth(year), [monthCodeNumber, wantsLeapMonth] = parseMonthCode(monthCode);
        let month = monthCodeNumberToMonth(monthCodeNumber, wantsLeapMonth, leapMonth);
        if (wantsLeapMonth) {
          const leapMonthMeta = getCalendarLeapMonthMeta(calendarNative);
          if (void 0 === leapMonthMeta) {
            throw new RangeError(invalidLeapMonth);
          }
          if (leapMonthMeta > 0) {
            if (month > leapMonthMeta) {
              throw new RangeError(invalidLeapMonth);
            }
            if (void 0 === leapMonth) {
              if (1 === overflow) {
                throw new RangeError(invalidLeapMonth);
              }
              month--;
            }
          } else {
            if (month !== -leapMonthMeta) {
              throw new RangeError(invalidLeapMonth);
            }
            if (void 0 === leapMonth && 1 === overflow) {
              throw new RangeError(invalidLeapMonth);
            }
          }
        }
        return month;
      })(calendarNative, monthCode, year, overflow);
      if (void 0 !== month && month !== monthByCode) {
        throw new RangeError(mismatchingMonthAndCode);
      }
      month = monthByCode, overflow = 1;
    } else if (void 0 === month) {
      throw new TypeError(missingMonth);
    }
    return clampEntity("month", month, 1, calendarNative.monthsInYearPart(year), overflow);
  }
  function refineDay(calendarNative, fields, month, year, overflow) {
    return clampProp(fields, "day", 1, calendarNative.daysInMonthParts(year, month), overflow);
  }
  function spliceFields(dest, additional, allPropNames, deletablePropNames) {
    let anyMatching = 0;
    const nonMatchingPropNames = [];
    for (const propName of allPropNames) {
      void 0 !== additional[propName] ? anyMatching = 1 : nonMatchingPropNames.push(propName);
    }
    if (Object.assign(dest, additional), anyMatching) {
      for (const deletablePropName of deletablePropNames || nonMatchingPropNames) {
        delete dest[deletablePropName];
      }
    }
  }
  function computeDateEssentials(slots) {
    const calendarOps = createNativePartOps(slots.calendar), [year, month, day] = calendarOps.dateParts(slots), [monthCodeNumber, isLeapMonth] = calendarOps.monthCodeParts(year, month);
    return {
      year: year,
      monthCode: formatMonthCode(monthCodeNumber, isLeapMonth),
      day: day
    };
  }
  function zonedDateTimeToPlainDateTime(getTimeZoneOps, zonedDateTimeSlots0) {
    return createPlainDateTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0, getTimeZoneOps));
  }
  function zonedDateTimeToPlainDate(getTimeZoneOps, zonedDateTimeSlots0) {
    return createPlainDateSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0, getTimeZoneOps));
  }
  function zonedDateTimeToPlainTime(getTimeZoneOps, zonedDateTimeSlots0) {
    return createPlainTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0, getTimeZoneOps));
  }
  function createSlotClass(branding, construct, getters, methods, staticMethods) {
    function Class(...args) {
      if (!(this instanceof Class)) {
        throw new TypeError("Invalid calling context");
      }
      setSlots(this, construct(...args));
    }
    function bindMethod(method, methodName) {
      return Object.defineProperties((function(...args) {
        return method.call(this, getSpecificSlots(this), ...args);
      }), createNameDescriptors(methodName));
    }
    function getSpecificSlots(obj) {
      const slots = getSlots(obj);
      if (!slots || slots.branding !== branding) {
        throw new TypeError("Invalid calling context");
      }
      return slots;
    }
    return Object.defineProperties(Class.prototype, {
      ...createGetterDescriptors(mapProps(bindMethod, getters)),
      ...createPropDescriptors(mapProps(bindMethod, methods)),
      ...createStringTagDescriptors("Temporal." + branding)
    }), Object.defineProperties(Class, {
      ...createPropDescriptors(staticMethods),
      ...createNameDescriptors(branding)
    }), [ Class, slots => {
      const instance = Object.create(Class.prototype);
      return setSlots(instance, slots), instance;
    }, getSpecificSlots ];
  }
  function rejectInvalidBag(bag) {
    if (getSlots(bag) || void 0 !== bag.calendar || void 0 !== bag.timeZone) {
      throw new TypeError("Invalid bag");
    }
    return bag;
  }
  function getCalendarIdFromBag(bag) {
    return extractCalendarIdFromBag(bag) || isoCalendarId;
  }
  function extractCalendarIdFromBag(bag) {
    const {calendar: calendarArg} = bag;
    if (void 0 !== calendarArg) {
      return refineCalendarArg(calendarArg);
    }
  }
  function refineCalendarArg(arg) {
    if (isObjectLike(arg)) {
      const {calendar: calendar} = getSlots(arg) || {};
      if (!calendar) {
        throw new TypeError(invalidCalendar(arg));
      }
      return calendar;
    }
    return (arg => resolveCalendarId((s => {
      const res = parseDateTimeLike(s) || parseYearMonthOnly(s) || parseMonthDayOnly(s);
      return res ? res.calendar : s;
    })(requireString(arg))))(arg);
  }
  function createCalendarGetters(methodNameMap) {
    const methods = {};
    for (const methodName in methodNameMap) {
      methods[methodName] = slots => {
        const {calendar: calendar} = slots;
        return createNativeStandardOps(calendar)[methodName](slots);
      };
    }
    return methods;
  }
  function neverValueOf() {
    throw new TypeError("Cannot use valueOf");
  }
  function refineTimeZoneArg(arg) {
    if (isObjectLike(arg)) {
      const {timeZone: timeZone} = getSlots(arg) || {};
      if (!timeZone) {
        throw new TypeError(invalidTimeZone(arg));
      }
      return timeZone;
    }
    return (arg => resolveTimeZoneId((s => {
      const parsed = parseDateTimeLike(s);
      return parsed && (parsed.timeZone || parsed.hasZ && utcTimeZoneId || parsed.offset) || s;
    })(requireString(arg))))(arg);
  }
  function toDurationSlots(arg) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg);
      return slots && slots.branding === DurationBranding ? slots : (bag => {
        const durationFields = refineFields(bag, durationFieldNamesAlpha);
        return createDurationSlots(checkDurationUnits({
          ...durationFieldDefaults,
          ...durationFields
        }));
      })(arg);
    }
    return (s => {
      const parsed = (s => {
        const parts = durationRegExp.exec(s);
        return parts ? (parts => {
          function parseUnit(wholeStr, fracStr, timeUnit) {
            let leftoverUnits = 0, wholeUnits = 0;
            if (timeUnit && ([leftoverUnits, leftoverNano] = divModFloor(leftoverNano, unitNanoMap[timeUnit])), 
            void 0 !== wholeStr) {
              if (hasAnyFrac) {
                throw new RangeError(invalidSubstring(wholeStr));
              }
              wholeUnits = (s => {
                const n = parseInt(s);
                if (!Number.isFinite(n)) {
                  throw new RangeError(invalidSubstring(s));
                }
                return n;
              })(wholeStr), hasAny = 1, fracStr && (leftoverNano = parseSubsecNano(fracStr) * (unitNanoMap[timeUnit] / nanoInSec), 
              hasAnyFrac = 1);
            }
            return leftoverUnits + wholeUnits;
          }
          let hasAny = 0, hasAnyFrac = 0, leftoverNano = 0, durationFields = {
            ...zipProps(durationFieldNamesAsc, [ parseUnit(parts[2]), parseUnit(parts[3]), parseUnit(parts[4]), parseUnit(parts[5]), parseUnit(parts[6], parts[7], 5), parseUnit(parts[8], parts[9], 4), parseUnit(parts[10], parts[11], 3) ]),
            ...nanoToGivenFields(leftoverNano, 2, durationFieldNamesAsc)
          };
          if (!hasAny) {
            throw new RangeError(noValidFields(durationFieldNamesAsc));
          }
          return parseSign(parts[1]) < 0 && (durationFields = negateDurationFields(durationFields)), 
          durationFields;
        })(parts) : void 0;
      })(requireString(s));
      if (!parsed) {
        throw new RangeError(failedParse(s));
      }
      return createDurationSlots(checkDurationUnits(parsed));
    })(arg);
  }
  function refinePublicRelativeTo(relativeTo) {
    if (void 0 !== relativeTo) {
      if (isObjectLike(relativeTo)) {
        const slots = getSlots(relativeTo) || {};
        switch (slots.branding) {
         case ZonedDateTimeBranding:
         case PlainDateBranding:
          return slots;

         case PlainDateTimeBranding:
          return createPlainDateSlots(slots);
        }
        const calendarId = getCalendarIdFromBag(relativeTo);
        return {
          ...((refineTimeZoneString, getTimeZoneOps, calendarOps, bag) => {
            const fields = refineCalendarFields(calendarOps, bag, dateFieldNamesAlpha, [], timeAndZoneFieldNames);
            if (void 0 !== fields.timeZone) {
              const isoDateFields = calendarOps.dateFromFields(fields), isoTimeFields = refineTimeBag(fields), timeZoneId = refineTimeZoneString(fields.timeZone);
              return {
                epochNanoseconds: getMatchingInstantFor(getTimeZoneOps(timeZoneId), {
                  ...isoDateFields,
                  ...isoTimeFields
                }, void 0 !== fields.offset ? parseOffsetNano(fields.offset) : void 0),
                timeZone: timeZoneId
              };
            }
            return {
              ...calendarOps.dateFromFields(fields),
              ...isoTimeFieldDefaults
            };
          })(refineTimeZoneArg, queryNativeTimeZone, createNativeStandardOps(calendarId), relativeTo),
          calendar: calendarId
        };
      }
      return (s => {
        const organized = parseDateTimeLike(requireString(s));
        if (!organized) {
          throw new RangeError(failedParse(s));
        }
        if (organized.timeZone) {
          return finalizeZonedDateTime(organized, organized.offset ? parseOffsetNano(organized.offset) : void 0);
        }
        if (organized.hasZ) {
          throw new RangeError(failedParse(s));
        }
        return finalizeDate(organized);
      })(relativeTo);
    }
  }
  function createOptionsTransformer(standardNames, fallbacks, exclusions) {
    const excludedNameSet = new Set(exclusions);
    return (options, strictOptions) => {
      const hasAnyExclusions = exclusions && hasAnyPropsByName(options, exclusions);
      if (!hasAnyPropsByName(options = ((propNames, props) => {
        const filteredProps = {};
        for (const propName in props) {
          propNames.has(propName) || (filteredProps[propName] = props[propName]);
        }
        return filteredProps;
      })(excludedNameSet, options), standardNames)) {
        if (strictOptions && hasAnyExclusions) {
          throw new TypeError("Invalid formatting options");
        }
        options = {
          ...fallbacks,
          ...options
        };
      }
      return exclusions && (options.timeZone = utcTimeZoneId, [ "full", "long" ].includes(options.timeStyle) && (options.timeStyle = "medium")), 
      options;
    };
  }
  function createFormatPrepper(config, queryFormat = createFormatForPrep, strictOptions = 0) {
    const [transformOptions, , , getForcedTimeZoneId] = config;
    return (locales, options = emptyOptions, ...slotsList) => {
      const subformat = queryFormat(getForcedTimeZoneId && getForcedTimeZoneId(...slotsList), locales, options, transformOptions, strictOptions), resolvedOptions = subformat.resolvedOptions();
      return [ subformat, ...toEpochMillis(config, resolvedOptions, slotsList) ];
    };
  }
  function createFormatForPrep(forcedTimeZoneId, locales, options, transformOptions, strictOptions) {
    if (options = transformOptions(options, strictOptions), forcedTimeZoneId) {
      if (void 0 !== options.timeZone) {
        throw new TypeError(forbiddenFormatTimeZone);
      }
      options.timeZone = forcedTimeZoneId;
    }
    return new RawDateTimeFormat(locales, options);
  }
  function toEpochMillis(config, resolvedOptions, slotsList) {
    const [, slotsToEpochMilli, strictCalendarCheck] = config;
    return slotsList.map((slots => (slots.calendar && ((internalCalendarId, resolvedCalendarId, strictCalendarCheck) => {
      if ((strictCalendarCheck || internalCalendarId !== isoCalendarId) && internalCalendarId !== resolvedCalendarId) {
        throw new RangeError(mismatchingCalendars);
      }
    })(slots.calendar, resolvedOptions.calendar, strictCalendarCheck), slotsToEpochMilli(slots, resolvedOptions))));
  }
  function slotsWithCalendarId(slots, calendarId) {
    return {
      ...slots,
      calendar: calendarId
    };
  }
  function toPlainTimeSlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg) || {};
      switch (slots.branding) {
       case PlainTimeBranding:
        return refineOverflowOptions(options), slots;

       case PlainDateTimeBranding:
        return refineOverflowOptions(options), createPlainTimeSlots(slots);

       case ZonedDateTimeBranding:
        return refineOverflowOptions(options), zonedDateTimeToPlainTime(queryNativeTimeZone, slots);
      }
      return ((bag, options) => createPlainTimeSlots(refineTimeBag(refineFields(bag, timeFieldNamesAlpha, [], 1), refineOverflowOptions(options))))(arg, options);
    }
    const timeSlots = (s => {
      let altParsed, organized = (s => {
        const parts = timeRegExp.exec(s);
        return parts ? (organizeAnnotationParts(parts[10]), organizeTimeParts(parts)) : void 0;
      })(requireString(s));
      if (!organized) {
        if (organized = parseDateTimeLike(s), !organized) {
          throw new RangeError(failedParse(s));
        }
        if (!organized.hasTime) {
          throw new RangeError(failedParse(s));
        }
        if (organized.hasZ) {
          throw new RangeError(invalidSubstring("Z"));
        }
        requireIsoCalendar(organized);
      }
      if ((altParsed = parseYearMonthOnly(s)) && isIsoDateFieldsValid(altParsed)) {
        throw new RangeError(failedParse(s));
      }
      if ((altParsed = parseMonthDayOnly(s)) && isIsoDateFieldsValid(altParsed)) {
        throw new RangeError(failedParse(s));
      }
      return createPlainTimeSlots(constrainIsoTimeFields(organized, 1));
    })(arg);
    return refineOverflowOptions(options), timeSlots;
  }
  function optionalToPlainTimeFields(timeArg) {
    return void 0 === timeArg ? void 0 : toPlainTimeSlots(timeArg);
  }
  function toPlainDateTimeSlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg) || {};
      switch (slots.branding) {
       case PlainDateTimeBranding:
        return refineOverflowOptions(options), slots;

       case PlainDateBranding:
        return refineOverflowOptions(options), createPlainDateTimeSlots({
          ...slots,
          ...isoTimeFieldDefaults
        });

       case ZonedDateTimeBranding:
        return refineOverflowOptions(options), zonedDateTimeToPlainDateTime(queryNativeTimeZone, slots);
      }
      return ((calendarOps, bag, options) => {
        const fields = refineCalendarFields(calendarOps, bag, dateFieldNamesAlpha, [], timeFieldNamesAsc), overflow = refineOverflowOptions(options);
        return createPlainDateTimeSlots(checkIsoDateTimeInBounds({
          ...calendarOps.dateFromFields(fields, fabricateOverflowOptions(overflow)),
          ...refineTimeBag(fields, overflow)
        }));
      })(createNativeStandardOps(getCalendarIdFromBag(arg)), arg, options);
    }
    const res = (s => {
      const organized = parseDateTimeLike(requireString(s));
      if (!organized || organized.hasZ) {
        throw new RangeError(failedParse(s));
      }
      return createPlainDateTimeSlots(finalizeDateTime(organized));
    })(arg);
    return refineOverflowOptions(options), res;
  }
  function toPlainMonthDaySlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg);
      if (slots && slots.branding === PlainMonthDayBranding) {
        return refineOverflowOptions(options), slots;
      }
      const calendarIdMaybe = extractCalendarIdFromBag(arg);
      return ((calendarOps, calendarAbsent, bag, options) => {
        const fields = refineCalendarFields(calendarOps, bag, dateFieldNamesAlpha, dayFieldNames);
        return calendarAbsent && void 0 !== fields.month && void 0 === fields.monthCode && void 0 === fields.year && (fields.year = isoEpochFirstLeapYear), 
        calendarOps.monthDayFromFields(fields, options);
      })(createNativeStandardOps(calendarIdMaybe || isoCalendarId), !calendarIdMaybe, arg, options);
    }
    const res = ((getCalendarOps, s) => {
      const organized = parseMonthDayOnly(requireString(s));
      if (organized) {
        return requireIsoCalendar(organized), createPlainMonthDaySlots(checkIsoDateFields(organized));
      }
      const dateSlots = parsePlainDate(s, 0, 1), {calendar: calendar} = dateSlots, calendarOps = getCalendarOps(calendar), [origYear, origMonth, day] = calendarOps.dateParts(dateSlots), [monthCodeNumber, isLeapMonth] = calendarOps.monthCodeParts(origYear, origMonth), [year, month] = calendarOps.yearMonthForMonthDay(monthCodeNumber, isLeapMonth, day);
      return createPlainMonthDaySlots(checkIsoDateInBounds(calendarOps.isoFields(year, month, day)), calendar);
    })(createNativeStandardOps, arg);
    return refineOverflowOptions(options), res;
  }
  function toPlainYearMonthSlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg);
      return slots && slots.branding === PlainYearMonthBranding ? (refineOverflowOptions(options), 
      slots) : ((calendarOps, bag, options) => {
        const fields = refineCalendarFields(calendarOps, bag, yearMonthFieldNames, void 0);
        return calendarOps.yearMonthFromFields(fields, options);
      })(createNativeStandardOps(getCalendarIdFromBag(arg)), arg, options);
    }
    const res = ((getCalendarOps, s) => {
      const organized = parseYearMonthOnly(requireString(s));
      if (organized) {
        return requireIsoCalendar(organized), createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields(organized)));
      }
      const isoSlots = parsePlainDate(s, 1);
      return createPlainYearMonthSlots(moveToDayOfMonthUnsafe(getCalendarOps(isoSlots.calendar), isoSlots));
    })(createNativeStandardOps, arg);
    return refineOverflowOptions(options), res;
  }
  function toPlainDateSlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg) || {};
      switch (slots.branding) {
       case PlainDateBranding:
        return refineOverflowOptions(options), slots;

       case PlainDateTimeBranding:
        return refineOverflowOptions(options), createPlainDateSlots(slots);

       case ZonedDateTimeBranding:
        return refineOverflowOptions(options), zonedDateTimeToPlainDate(queryNativeTimeZone, slots);
      }
      return ((calendarOps, bag, options, requireFields = []) => {
        const fields = refineCalendarFields(calendarOps, bag, dateFieldNamesAlpha, requireFields);
        return calendarOps.dateFromFields(fields, options);
      })(createNativeStandardOps(getCalendarIdFromBag(arg)), arg, options);
    }
    const res = parsePlainDate(arg);
    return refineOverflowOptions(options), res;
  }
  function toZonedDateTimeSlots(arg, options) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg);
      if (slots && slots.branding === ZonedDateTimeBranding) {
        return refineZonedFieldOptions(options), slots;
      }
      const calendarId = getCalendarIdFromBag(arg);
      return ((refineTimeZoneString, getTimeZoneOps, calendarOps, calendarId, bag, options) => {
        const fields = refineCalendarFields(calendarOps, bag, dateFieldNamesAlpha, timeZoneFieldNames, timeAndZoneFieldNames), timeZoneId = refineTimeZoneString(fields.timeZone), [overflow, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options), isoDateFields = calendarOps.dateFromFields(fields, fabricateOverflowOptions(overflow)), isoTimeFields = refineTimeBag(fields, overflow);
        return createZonedDateTimeSlots(getMatchingInstantFor(getTimeZoneOps(timeZoneId), {
          ...isoDateFields,
          ...isoTimeFields
        }, void 0 !== fields.offset ? parseOffsetNano(fields.offset) : void 0, offsetDisambig, epochDisambig), timeZoneId, calendarId);
      })(refineTimeZoneArg, queryNativeTimeZone, createNativeStandardOps(calendarId), calendarId, arg, options);
    }
    return ((s, options) => {
      const organized = parseDateTimeLike(requireString(s));
      if (!organized || !organized.timeZone) {
        throw new RangeError(failedParse(s));
      }
      const {offset: offset} = organized, offsetNano = offset ? parseOffsetNano(offset) : void 0, [, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options);
      return finalizeZonedDateTime(organized, offsetNano, offsetDisambig, epochDisambig);
    })(arg, options);
  }
  function adaptDateMethods(methods) {
    return mapProps((method => slots => method(slotsToIso(slots))), methods);
  }
  function slotsToIso(slots) {
    return zonedEpochSlotsToIso(slots, queryNativeTimeZone);
  }
  function toInstantSlots(arg) {
    if (isObjectLike(arg)) {
      const slots = getSlots(arg);
      if (slots) {
        switch (slots.branding) {
         case InstantBranding:
          return slots;

         case ZonedDateTimeBranding:
          return createInstantSlots(slots.epochNanoseconds);
        }
      }
    }
    return (s => {
      const organized = parseDateTimeLike(s = toStringViaPrimitive(s));
      if (!organized) {
        throw new RangeError(failedParse(s));
      }
      let offsetNano;
      if (organized.hasZ) {
        offsetNano = 0;
      } else {
        if (!organized.offset) {
          throw new RangeError(failedParse(s));
        }
        offsetNano = parseOffsetNano(organized.offset);
      }
      return organized.timeZone && parseOffsetNanoMaybe(organized.timeZone, 1), createInstantSlots(isoToEpochNanoWithOffset(checkIsoDateTimeFields(organized), offsetNano));
    })(arg);
  }
  function createFormatMethod(methodName) {
    return Object.defineProperties((function(...formattables) {
      const prepFormat = internalsMap.get(this), [format, ...rawFormattables] = prepFormat(methodName.includes("Range"), ...formattables);
      return format[methodName](...rawFormattables);
    }), createNameDescriptors(methodName));
  }
  function createProxiedMethod(methodName) {
    return Object.defineProperties((function(...args) {
      return internalsMap.get(this).rawFormat[methodName](...args);
    }), createNameDescriptors(methodName));
  }
  function createFormatPrepperForBranding(branding) {
    const config = classFormatConfigs[branding];
    if (!config) {
      throw new TypeError(invalidFormatType(branding));
    }
    return createFormatPrepper(config, memoize(createFormatForPrep), 1);
  }
  function getCurrentIsoDateTime(timeZoneOps) {
    const epochNano = getCurrentEpochNano();
    return epochNanoToIso(epochNano, timeZoneOps.getOffsetNanosecondsFor(epochNano));
  }
  function getCurrentEpochNano() {
    return numberToBigNano(Date.now(), nanoInMilli);
  }
  function getCurrentTimeZoneId() {
    return currentTimeZoneId || (currentTimeZoneId = (new RawDateTimeFormat).resolvedOptions().timeZone);
  }
  const expectedInteger = (entityName, num) => `Non-integer ${entityName}: ${num}`, expectedPositive = (entityName, num) => `Non-positive ${entityName}: ${num}`, expectedFinite = (entityName, num) => `Non-finite ${entityName}: ${num}`, forbiddenBigIntToNumber = entityName => `Cannot convert bigint to ${entityName}`, invalidBigInt = arg => `Invalid bigint: ${arg}`, forbiddenSymbolToString = "Cannot convert Symbol to string", invalidObject = "Invalid object", numberOutOfRange = (entityName, val, min, max, choices) => choices ? numberOutOfRange(entityName, choices[val], choices[min], choices[max]) : invalidEntity(entityName, val) + `; must be between ${min}-${max}`, invalidEntity = (fieldName, val) => `Invalid ${fieldName}: ${val}`, missingField = fieldName => `Missing ${fieldName}`, forbiddenField = fieldName => `Invalid field ${fieldName}`, duplicateFields = fieldName => `Duplicate field ${fieldName}`, noValidFields = validFields => "No valid fields: " + validFields.join(), invalidChoice = (fieldName, val, choiceMap) => invalidEntity(fieldName, val) + "; must be " + Object.keys(choiceMap).join(), forbiddenEraParts = "Forbidden era/eraYear", mismatchingEraParts = "Mismatching era/eraYear", mismatchingYearAndEra = "Mismatching year/eraYear", invalidEra = era => `Invalid era: ${era}`, missingYear = allowEra => "Missing year" + (allowEra ? "/era/eraYear" : ""), invalidMonthCode = monthCode => `Invalid monthCode: ${monthCode}`, mismatchingMonthAndCode = "Mismatching month/monthCode", missingMonth = "Missing month/monthCode", invalidLeapMonth = "Invalid leap month", invalidProtocolResults = "Invalid protocol results", invalidCalendar = calendarId => invalidEntity("Calendar", calendarId), mismatchingCalendars = "Mismatching Calendars", invalidTimeZone = calendarId => invalidEntity("TimeZone", calendarId), mismatchingTimeZones = "Mismatching TimeZones", forbiddenIcuTimeZone = "Forbidden ICU TimeZone", outOfBoundsOffset = "Out-of-bounds offset", outOfBoundsDstGap = "Out-of-bounds TimeZone gap", invalidOffsetForTimeZone = "Invalid TimeZone offset", ambigOffset = "Ambiguous offset", outOfBoundsDate = "Out-of-bounds date", outOfBoundsDuration = "Out-of-bounds duration", forbiddenDurationSigns = "Cannot mix duration signs", invalidLargeUnits = "Cannot use large units", flippedSmallestLargestUnit = "smallestUnit > largestUnit", failedParse = s => `Cannot parse: ${s}`, invalidSubstring = substring => `Invalid substring: ${substring}`, invalidFormatType = branding => `Cannot format ${branding}`, forbiddenFormatTimeZone = "Cannot specify TimeZone", mapPropNamesToIndex = bindArgs(mapPropNames, ((_propVal, i) => i)), mapPropNamesToConstant = bindArgs(mapPropNames, ((_propVal, _i, constant) => constant)), padNumber2 = bindArgs(padNumber, 2), unitNameMap = {
    nanosecond: 0,
    microsecond: 1,
    millisecond: 2,
    second: 3,
    minute: 4,
    hour: 5,
    day: 6,
    week: 7,
    month: 8,
    year: 9
  }, unitNamesAsc = Object.keys(unitNameMap), milliInDay = 864e5, milliInSec = 1e3, nanoInMicro = 1e3, nanoInMilli = 1e6, nanoInSec = 1e9, nanoInMinute = 6e10, nanoInHour = 36e11, nanoInUtcDay = 864e11, unitNanoMap = [ 1, nanoInMicro, nanoInMilli, nanoInSec, nanoInMinute, nanoInHour, nanoInUtcDay ], requireString = bindArgs(requireType, "string"), requireBoolean = bindArgs(requireType, "boolean"), requireNumber = bindArgs(requireType, "number"), durationFieldNamesAsc = unitNamesAsc.map((unitName => unitName + "s")), durationFieldNamesAlpha = sortStrings(durationFieldNamesAsc), durationTimeFieldNamesAsc = durationFieldNamesAsc.slice(0, 6), durationDateFieldNamesAsc = durationFieldNamesAsc.slice(6), durationCalendarFieldNamesAsc = durationDateFieldNamesAsc.slice(1), durationFieldIndexes = mapPropNamesToIndex(durationFieldNamesAsc), durationFieldDefaults = mapPropNamesToConstant(durationFieldNamesAsc, 0), durationTimeFieldDefaults = mapPropNamesToConstant(durationTimeFieldNamesAsc, 0), clearDurationFields = bindArgs(zeroOutProps, durationFieldNamesAsc), timeFieldNamesAsc = unitNamesAsc.slice(0, 6), timeFieldNamesAlpha = sortStrings(timeFieldNamesAsc), timeZoneFieldNames = [ "timeZone" ], timeAndOffsetFieldNames = [ ...timeFieldNamesAsc, "offset" ], timeAndZoneFieldNames = [ ...timeAndOffsetFieldNames, ...timeZoneFieldNames ], eraYearFieldNames = [ "era", "eraYear" ], allYearFieldNames = [ ...eraYearFieldNames, "year" ], yearFieldNames = [ "year" ], monthCodeFieldNames = [ "monthCode" ], monthFieldNames = [ "month", ...monthCodeFieldNames ], dayFieldNames = [ "day" ], yearMonthFieldNames = [ ...monthFieldNames, ...yearFieldNames ], yearMonthCodeFieldNames = [ ...monthCodeFieldNames, ...yearFieldNames ], dateFieldNamesAlpha = [ ...dayFieldNames, ...yearMonthFieldNames ], monthDayFieldNames = [ ...dayFieldNames, ...monthFieldNames ], monthCodeDayFieldNames = [ ...dayFieldNames, ...monthCodeFieldNames ], timeFieldDefaults = mapPropNamesToConstant(timeFieldNamesAsc, 0), isoCalendarId = "iso8601", gregoryCalendarId = "gregory", eraOriginsByCalendarId = {
    [gregoryCalendarId]: {
      "gregory-inverse": -1,
      gregory: 0
    },
    japanese: {
      "japanese-inverse": -1,
      japanese: 0,
      meiji: 1867,
      taisho: 1911,
      showa: 1925,
      heisei: 1988,
      reiwa: 2018
    },
    ethiopic: {
      ethioaa: 0,
      ethiopic: 5500
    },
    coptic: {
      "coptic-inverse": -1,
      coptic: 0
    },
    roc: {
      "roc-inverse": -1,
      roc: 0
    },
    buddhist: {
      be: 0
    },
    islamic: {
      ah: 0
    },
    indian: {
      saka: 0
    },
    persian: {
      ap: 0
    }
  }, eraRemapsByCalendarId = {
    [gregoryCalendarId]: {
      bce: "gregory-inverse",
      ce: "gregory"
    },
    japanese: {
      bce: "japanese-inverse",
      ce: "japanese"
    },
    ethiopic: {
      era0: "ethioaa",
      era1: "ethiopic"
    },
    coptic: {
      era0: "coptic-inverse",
      era1: "coptic"
    },
    roc: {
      broc: "roc-inverse",
      minguo: "roc"
    }
  }, leapMonthMetas = {
    chinese: 13,
    dangi: 13,
    hebrew: -6
  }, isoTimeFieldNamesAsc = [ "isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour" ], isoDateFieldNamesAsc = [ "isoDay", "isoMonth", "isoYear" ], isoDateTimeFieldNamesAsc = [ ...isoTimeFieldNamesAsc, ...isoDateFieldNamesAsc ], isoDateFieldNamesAlpha = sortStrings(isoDateFieldNamesAsc), isoTimeFieldNamesAlpha = sortStrings(isoTimeFieldNamesAsc), isoDateTimeFieldNamesAlpha = sortStrings(isoDateTimeFieldNamesAsc), isoTimeFieldDefaults = mapPropNamesToConstant(isoTimeFieldNamesAlpha, 0), clearIsoFields = bindArgs(zeroOutProps, isoDateTimeFieldNamesAsc), maxMilli = 1e8 * milliInDay, epochNanoMax = [ 1e8, 0 ], epochNanoMin = [ -1e8, 0 ], isoYearMax = 275760, isoYearMin = -271821, RawDateTimeFormat = Intl.DateTimeFormat, isoEpochOriginYear = 1970, isoEpochFirstLeapYear = 1972, isoMonthsInYear = 12, primaryJapaneseEraMilli = isoArgsToEpochMilli(1868, 9, 8), queryJapaneseEraParts = memoize((isoFields => {
    const epochMilli = isoToEpochMilli(isoFields);
    if (epochMilli < primaryJapaneseEraMilli) {
      const {isoYear: isoYear} = isoFields;
      return isoYear < 1 ? [ "japanese-inverse", 1 - isoYear ] : [ "japanese", isoYear ];
    }
    const intlParts = hashIntlFormatParts(queryCalendarIntlFormat("japanese"), epochMilli), {era: era, eraYear: eraYear} = parseIntlYear(intlParts, "japanese");
    return [ era, eraYear ];
  }), WeakMap), utcTimeZoneId = "UTC", periodDur = 5184e3, minPossibleTransition = isoArgsToEpochSec(1847), maxPossibleTransition = isoArgsToEpochSec((new Date).getUTCFullYear() + 10), queryIntlCalendar = memoize((calendarId => {
    function epochMilliToIntlFields(epochMilli) {
      return ((intlParts, calendarIdBase) => ({
        ...parseIntlYear(intlParts, calendarIdBase),
        monthString: intlParts.month,
        day: parseInt(intlParts.day)
      }))(hashIntlFormatParts(intlFormat, epochMilli), calendarIdBase);
    }
    const intlFormat = queryCalendarIntlFormat(calendarId), calendarIdBase = computeCalendarIdBase(calendarId);
    return {
      id: calendarId,
      queryFields: createIntlFieldCache(epochMilliToIntlFields),
      queryYearData: createIntlYearDataCache(epochMilliToIntlFields)
    };
  })), queryCalendarIntlFormat = memoize((id => new RawDateTimeFormat("en-GB", {
    calendar: id,
    timeZone: utcTimeZoneId,
    era: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  }))), monthCodeRegExp = /^M(\d{2})(L?)$/, smallestUnitStr = "smallestUnit", roundingIncName = "roundingIncrement", subsecDigitsName = "fractionalSecondDigits", overflowMap = {
    constrain: 0,
    reject: 1
  }, overflowMapNames = Object.keys(overflowMap), directionMap = {
    previous: -1,
    next: 1
  }, refineSmallestUnit = bindArgs(refineUnitOption, smallestUnitStr), refineLargestUnit = bindArgs(refineUnitOption, "largestUnit"), refineTotalUnit = bindArgs(refineUnitOption, "unit"), refineOverflow = bindArgs(refineChoiceOption, "overflow", overflowMap), refineEpochDisambig = bindArgs(refineChoiceOption, "disambiguation", {
    compatible: 0,
    reject: 1,
    earlier: 2,
    later: 3
  }), refineOffsetDisambig = bindArgs(refineChoiceOption, "offset", {
    reject: 0,
    use: 1,
    prefer: 2,
    ignore: 3
  }), refineCalendarDisplay = bindArgs(refineChoiceOption, "calendarName", {
    auto: 0,
    never: 1,
    critical: 2,
    always: 3
  }), refineTimeZoneDisplay = bindArgs(refineChoiceOption, "timeZoneName", {
    auto: 0,
    never: 1,
    critical: 2
  }), refineOffsetDisplay = bindArgs(refineChoiceOption, "offset", {
    auto: 0,
    never: 1
  }), refineRoundingMode = bindArgs(refineChoiceOption, "roundingMode", {
    floor: 0,
    halfFloor: 1,
    ceil: 2,
    halfCeil: 3,
    trunc: 4,
    halfTrunc: 5,
    expand: 6,
    halfExpand: 7,
    halfEven: 8
  }), PlainYearMonthBranding = "PlainYearMonth", PlainMonthDayBranding = "PlainMonthDay", PlainDateBranding = "PlainDate", PlainDateTimeBranding = "PlainDateTime", PlainTimeBranding = "PlainTime", ZonedDateTimeBranding = "ZonedDateTime", InstantBranding = "Instant", DurationBranding = "Duration", roundingModeFuncs = [ Math.floor, num => hasHalf(num) ? Math.floor(num) : Math.round(num), Math.ceil, num => hasHalf(num) ? Math.ceil(num) : Math.round(num), Math.trunc, num => hasHalf(num) ? Math.trunc(num) || 0 : Math.round(num), num => num < 0 ? Math.floor(num) : Math.ceil(num), num => Math.sign(num) * Math.round(Math.abs(num)) || 0, num => hasHalf(num) ? (num = Math.trunc(num) || 0) + num % 2 : Math.round(num) ], trailingZerosRE = /0+$/, zonedEpochSlotsToIso = memoize(((slots, getTimeZoneOps) => {
    const {epochNanoseconds: epochNanoseconds} = slots, offsetNanoseconds = (getTimeZoneOps.getOffsetNanosecondsFor ? getTimeZoneOps : getTimeZoneOps(slots.timeZone)).getOffsetNanosecondsFor(epochNanoseconds), isoDateTimeFields = epochNanoToIso(epochNanoseconds, offsetNanoseconds);
    return {
      calendar: slots.calendar,
      ...isoDateTimeFields,
      offsetNanoseconds: offsetNanoseconds
    };
  }), WeakMap), maxCalendarUnit = 2 ** 32 - 1, queryNativeTimeZone = memoize((timeZoneId => {
    const essence = getTimeZoneEssence(timeZoneId);
    return "object" == typeof essence ? new IntlTimeZone(essence) : new FixedTimeZone(essence || 0);
  }));
  class FixedTimeZone {
    constructor(offsetNano) {
      this.offsetNano = offsetNano;
    }
    getOffsetNanosecondsFor() {
      return this.offsetNano;
    }
    getPossibleInstantsFor(isoDateTimeFields) {
      return (isoFields => {
        const bigNano = isoToEpochNano({
          ...isoFields,
          ...isoTimeFieldDefaults
        });
        if (!bigNano || Math.abs(bigNano[0]) > 1e8) {
          throw new RangeError(outOfBoundsDate);
        }
      })(isoDateTimeFields), [ isoToEpochNanoWithOffset(isoDateTimeFields, this.offsetNano) ];
    }
    getTransition() {}
  }
  class IntlTimeZone {
    constructor(format) {
      this.tzStore = (computeOffsetSec => {
        function getOffsetSec(epochSec) {
          const clampedEpochSec = clampNumber(epochSec, minTransition, maxTransition), [startEpochSec, endEpochSec] = computePeriod(clampedEpochSec), startOffsetSec = getSample(startEpochSec), endOffsetSec = getSample(endEpochSec);
          return startOffsetSec === endOffsetSec ? startOffsetSec : pinch(getSplit(startEpochSec, endEpochSec), startOffsetSec, endOffsetSec, epochSec);
        }
        function pinch(split, startOffsetSec, endOffsetSec, forEpochSec) {
          let offsetSec, splitDurSec;
          for (;(void 0 === forEpochSec || void 0 === (offsetSec = forEpochSec < split[0] ? startOffsetSec : forEpochSec >= split[1] ? endOffsetSec : void 0)) && (splitDurSec = split[1] - split[0]); ) {
            const middleEpochSec = split[0] + Math.floor(splitDurSec / 2);
            computeOffsetSec(middleEpochSec) === endOffsetSec ? split[1] = middleEpochSec : split[0] = middleEpochSec + 1;
          }
          return offsetSec;
        }
        const getSample = memoize(computeOffsetSec), getSplit = memoize(createSplitTuple);
        let minTransition = minPossibleTransition, maxTransition = maxPossibleTransition;
        return {
          getPossibleEpochSec(zonedEpochSec) {
            const wideOffsetSec0 = getOffsetSec(zonedEpochSec - 86400), wideOffsetSec1 = getOffsetSec(zonedEpochSec + 86400), wideUtcEpochSec0 = zonedEpochSec - wideOffsetSec0, wideUtcEpochSec1 = zonedEpochSec - wideOffsetSec1;
            if (wideOffsetSec0 === wideOffsetSec1) {
              return [ wideUtcEpochSec0 ];
            }
            const narrowOffsetSec0 = getOffsetSec(wideUtcEpochSec0);
            return narrowOffsetSec0 === getOffsetSec(wideUtcEpochSec1) ? [ zonedEpochSec - narrowOffsetSec0 ] : wideOffsetSec0 > wideOffsetSec1 ? [ wideUtcEpochSec0, wideUtcEpochSec1 ] : [];
          },
          getOffsetSec: getOffsetSec,
          getTransition(epochSec, direction) {
            const clampedEpochSec = clampNumber(epochSec, minTransition, maxTransition);
            let [startEpochSec, endEpochSec] = computePeriod(clampedEpochSec);
            const inc = periodDur * direction, inBounds = direction < 0 ? () => endEpochSec > minTransition || (minTransition = clampedEpochSec, 
            0) : () => startEpochSec < maxTransition || (maxTransition = clampedEpochSec, 0);
            for (;inBounds(); ) {
              const startOffsetSec = getSample(startEpochSec), endOffsetSec = getSample(endEpochSec);
              if (startOffsetSec !== endOffsetSec) {
                const split = getSplit(startEpochSec, endEpochSec);
                pinch(split, startOffsetSec, endOffsetSec);
                const transitionEpochSec = split[0];
                if ((compareNumbers(transitionEpochSec, epochSec) || 1) === direction) {
                  return transitionEpochSec;
                }
              }
              startEpochSec += inc, endEpochSec += inc;
            }
          }
        };
      })((format => epochSec => {
        const intlParts = hashIntlFormatParts(format, epochSec * milliInSec);
        return isoArgsToEpochSec(parseIntlPartsYear(intlParts), parseInt(intlParts.month), parseInt(intlParts.day), parseInt(intlParts.hour), parseInt(intlParts.minute), parseInt(intlParts.second)) - epochSec;
      })(format));
    }
    getOffsetNanosecondsFor(epochNano) {
      return this.tzStore.getOffsetSec((epochNano => epochNanoToSecMod(epochNano)[0])(epochNano)) * nanoInSec;
    }
    getPossibleInstantsFor(isoFields) {
      const [zonedEpochSec, subsecNano] = [ isoArgsToEpochSec((isoDateTimeFields = isoFields).isoYear, isoDateTimeFields.isoMonth, isoDateTimeFields.isoDay, isoDateTimeFields.isoHour, isoDateTimeFields.isoMinute, isoDateTimeFields.isoSecond), isoDateTimeFields.isoMillisecond * nanoInMilli + isoDateTimeFields.isoMicrosecond * nanoInMicro + isoDateTimeFields.isoNanosecond ];
      var isoDateTimeFields;
      return this.tzStore.getPossibleEpochSec(zonedEpochSec).map((epochSec => checkEpochNanoInBounds(moveBigNano(numberToBigNano(epochSec, nanoInSec), subsecNano))));
    }
    getTransition(epochNano, direction) {
      const [epochSec, subsecNano] = epochNanoToSecMod(epochNano), resEpochSec = this.tzStore.getTransition(epochSec + (direction > 0 || subsecNano ? 1 : 0), direction);
      if (void 0 !== resEpochSec) {
        return numberToBigNano(resEpochSec, nanoInSec);
      }
    }
  }
  const timeRegExpStr = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?", offsetRegExpStr = "([+-])" + timeRegExpStr, dateTimeRegExpStr = "(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})-?(\\d{2})(?:[T ]" + timeRegExpStr + "(Z|" + offsetRegExpStr + ")?)?", yearMonthRegExp = createRegExp("(?:(?:([+-])(\\d{6}))|(\\d{4}))-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), monthDayRegExp = createRegExp("(?:--)?(\\d{2})-?(\\d{2})((?:\\[(!?)([^\\]]*)\\]){0,9})"), dateTimeRegExp = createRegExp(dateTimeRegExpStr + "((?:\\[(!?)([^\\]]*)\\]){0,9})"), timeRegExp = createRegExp("T?" + timeRegExpStr + "(?:" + offsetRegExpStr + ")?((?:\\[(!?)([^\\]]*)\\]){0,9})"), offsetRegExp = createRegExp(offsetRegExpStr), annotationRegExp = new RegExp("\\[(!?)([^\\]]*)\\]", "g"), durationRegExp = createRegExp("([+-])?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)(?:[.,](\\d{1,9}))?H)?(?:(\\d+)(?:[.,](\\d{1,9}))?M)?(?:(\\d+)(?:[.,](\\d{1,9}))?S)?)?"), queryTimeZoneIntlFormat = memoize((id => new RawDateTimeFormat("en-GB", {
    timeZone: id,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }))), icuRegExp = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, badCharactersRegExp = /[^\w\/:+-]+/, nativeStandardBase = {
    dateAdd(isoDateFields, durationFields, options) {
      const overflow = refineOverflowOptions(options);
      let epochMilli, {years: years, months: months, weeks: weeks, days: days} = durationFields;
      if (days += durationFieldsToBigNano(durationFields, 5)[0], years || months) {
        epochMilli = ((moveOps, isoDateFields, years, months, overflow) => {
          let [year, month, day] = moveOps.dateParts(isoDateFields);
          if (years) {
            const [monthCodeNumber, isLeapMonth] = moveOps.monthCodeParts(year, month);
            year += years, month = monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, moveOps.leapMonth(year)), 
            month = clampEntity("month", month, 1, moveOps.monthsInYearPart(year), overflow);
          }
          return months && ([year, month] = moveOps.monthAdd(year, month, months)), day = clampEntity("day", day, 1, moveOps.daysInMonthParts(year, month), overflow), 
          moveOps.epochMilli(year, month, day);
        })(this, isoDateFields, years, months, overflow);
      } else {
        if (!weeks && !days) {
          return isoDateFields;
        }
        epochMilli = isoToEpochMilli(isoDateFields);
      }
      if (void 0 === epochMilli) {
        throw new RangeError(outOfBoundsDate);
      }
      return epochMilli += (7 * weeks + days) * milliInDay, checkIsoDateInBounds(epochMilliToIso(epochMilli));
    },
    dateUntil(startIsoFields, endIsoFields, largestUnit) {
      if (largestUnit <= 7) {
        let weeks = 0, days = diffDays({
          ...startIsoFields,
          ...isoTimeFieldDefaults
        }, {
          ...endIsoFields,
          ...isoTimeFieldDefaults
        });
        return 7 === largestUnit && ([weeks, days] = divModTrunc(days, 7)), {
          ...durationFieldDefaults,
          weeks: weeks,
          days: days
        };
      }
      const yearMonthDayStart = this.dateParts(startIsoFields), yearMonthDayEnd = this.dateParts(endIsoFields);
      let [years, months, days] = ((calendarNative, year0, month0, day0, year1, month1, day1) => {
        let yearDiff = year1 - year0, monthDiff = month1 - month0, dayDiff = day1 - day0;
        if (yearDiff || monthDiff) {
          const sign = Math.sign(yearDiff || monthDiff);
          let daysInMonth1 = calendarNative.daysInMonthParts(year1, month1), dayCorrect = 0;
          if (Math.sign(dayDiff) === -sign) {
            const origDaysInMonth1 = daysInMonth1;
            [year1, month1] = calendarNative.monthAdd(year1, month1, -sign), yearDiff = year1 - year0, 
            monthDiff = month1 - month0, daysInMonth1 = calendarNative.daysInMonthParts(year1, month1), 
            dayCorrect = sign < 0 ? -origDaysInMonth1 : daysInMonth1;
          }
          if (dayDiff = day1 - Math.min(day0, daysInMonth1) + dayCorrect, yearDiff) {
            const [monthCodeNumber0, isLeapYear0] = calendarNative.monthCodeParts(year0, month0), [monthCodeNumber1, isLeapYear1] = calendarNative.monthCodeParts(year1, month1);
            if (monthDiff = monthCodeNumber1 - monthCodeNumber0 || Number(isLeapYear1) - Number(isLeapYear0), 
            Math.sign(monthDiff) === -sign) {
              const monthCorrect = sign < 0 && -calendarNative.monthsInYearPart(year1);
              yearDiff = (year1 -= sign) - year0, monthDiff = month1 - monthCodeNumberToMonth(monthCodeNumber0, isLeapYear0, calendarNative.leapMonth(year1)) + (monthCorrect || calendarNative.monthsInYearPart(year1));
            }
          }
        }
        return [ yearDiff, monthDiff, dayDiff ];
      })(this, ...yearMonthDayStart, ...yearMonthDayEnd);
      return 8 === largestUnit && (months += this.monthsInYearSpan(years, yearMonthDayStart[0]), 
      years = 0), {
        ...durationFieldDefaults,
        years: years,
        months: months,
        days: days
      };
    },
    dateFromFields(fields, options) {
      const overflow = refineOverflowOptions(options), year = refineYear(this, fields), month = refineMonth(this, fields, year, overflow), day = refineDay(this, fields, month, year, overflow);
      return createPlainDateSlots(checkIsoDateInBounds(this.isoFields(year, month, day)), this.id || isoCalendarId);
    },
    yearMonthFromFields(fields, options) {
      const overflow = refineOverflowOptions(options), year = refineYear(this, fields), month = refineMonth(this, fields, year, overflow);
      return createPlainYearMonthSlots(checkIsoYearMonthInBounds(this.isoFields(year, month, 1)), this.id || isoCalendarId);
    },
    monthDayFromFields(fields, options) {
      const overflow = refineOverflowOptions(options);
      let day, monthCodeNumber, isLeapMonth, yearMaybe = void 0 !== fields.eraYear || void 0 !== fields.year ? refineYear(this, fields) : void 0;
      const isIso = !this.id;
      if (void 0 === yearMaybe && isIso && (yearMaybe = isoEpochFirstLeapYear), void 0 !== yearMaybe) {
        const month = refineMonth(this, fields, yearMaybe, overflow);
        day = refineDay(this, fields, month, yearMaybe, overflow);
        const leapMonth = this.leapMonth(yearMaybe);
        monthCodeNumber = monthToMonthCodeNumber(month, leapMonth), isLeapMonth = month === leapMonth;
      } else {
        if (void 0 === fields.monthCode) {
          throw new TypeError(missingMonth);
        }
        if ([monthCodeNumber, isLeapMonth] = parseMonthCode(fields.monthCode), this.id && this.id !== gregoryCalendarId && "japanese" !== this.id) {
          if (this.id && "coptic" === computeCalendarIdBase(this.id) && 0 === overflow) {
            const maxLengthOfMonthCodeInAnyYear = isLeapMonth || 13 !== monthCodeNumber ? 30 : 6;
            day = fields.day, day = clampNumber(day, 1, maxLengthOfMonthCodeInAnyYear);
          } else if (this.id && "chinese" === computeCalendarIdBase(this.id) && 0 === overflow) {
            const maxLengthOfMonthCodeInAnyYear = !isLeapMonth || 1 !== monthCodeNumber && 9 !== monthCodeNumber && 10 !== monthCodeNumber && 11 !== monthCodeNumber && 12 !== monthCodeNumber ? 30 : 29;
            day = fields.day, day = clampNumber(day, 1, maxLengthOfMonthCodeInAnyYear);
          } else {
            day = fields.day;
          }
        } else {
          day = refineDay(this, fields, refineMonth(this, fields, isoEpochFirstLeapYear, overflow), isoEpochFirstLeapYear, overflow);
        }
      }
      const res = this.yearMonthForMonthDay(monthCodeNumber, isLeapMonth, day);
      if (!res) {
        throw new RangeError("Cannot guess year");
      }
      const [finalYear, finalMonth] = res;
      return createPlainMonthDaySlots(checkIsoDateInBounds(this.isoFields(finalYear, finalMonth, day)), this.id || isoCalendarId);
    },
    fields(fieldNames) {
      return getCalendarEraOrigins(this) && fieldNames.includes("year") ? [ ...fieldNames, ...eraYearFieldNames ] : fieldNames;
    },
    mergeFields(baseFields, additionalFields) {
      const merged = Object.assign(Object.create(null), baseFields);
      return spliceFields(merged, additionalFields, monthFieldNames), getCalendarEraOrigins(this) && (spliceFields(merged, additionalFields, allYearFieldNames), 
      "japanese" === this.id && spliceFields(merged, additionalFields, monthDayFieldNames, eraYearFieldNames)), 
      merged;
    },
    inLeapYear(isoFields) {
      const [year] = this.dateParts(isoFields);
      return this.inLeapYearPart(year);
    },
    monthsInYear(isoFields) {
      const [year] = this.dateParts(isoFields);
      return this.monthsInYearPart(year);
    },
    daysInMonth(isoFields) {
      const [year, month] = this.dateParts(isoFields);
      return this.daysInMonthParts(year, month);
    },
    daysInYear(isoFields) {
      const [year] = this.dateParts(isoFields);
      return this.daysInYearPart(year);
    },
    dayOfYear: computeNativeDayOfYear,
    era(isoFields) {
      return this.eraParts(isoFields)[0];
    },
    eraYear(isoFields) {
      return this.eraParts(isoFields)[1];
    },
    monthCode(isoFields) {
      const [year, month] = this.dateParts(isoFields), [monthCodeNumber, isLeapMonth] = this.monthCodeParts(year, month);
      return formatMonthCode(monthCodeNumber, isLeapMonth);
    },
    dayOfWeek: computeIsoDayOfWeek,
    daysInWeek() {
      return 7;
    }
  }, isoPartOps = {
    dateParts: computeIsoDateParts,
    eraParts: computeIsoEraParts,
    monthCodeParts: computeIsoMonthCodeParts
  }, isoWeekOps = {
    dayOfYear: computeNativeDayOfYear,
    dateParts: computeIsoDateParts,
    epochMilli: isoArgsToEpochMilli,
    weekOfYear: computeNativeWeekOfYear,
    yearOfWeek: computeNativeYearOfWeek,
    weekParts(isoDateFields) {
      function computeWeekShift(yDayOfWeek) {
        return (7 - yDayOfWeek < minDaysInWeek ? 7 : 0) - yDayOfWeek;
      }
      function computeWeeksInYear(delta) {
        const daysInYear = computeIsoDaysInYear(yearOfWeek + delta), sign = delta || 1, y1WeekShift = computeWeekShift(modFloor(y0DayOfWeek + daysInYear * sign, 7));
        return weeksInYear = (daysInYear + (y1WeekShift - y0WeekShift) * sign) / 7;
      }
      const minDaysInWeek = this.id ? 1 : 4, isoDayOfWeek = computeIsoDayOfWeek(isoDateFields), isoDayOfYear = this.dayOfYear(isoDateFields), dayOfWeek = modFloor(isoDayOfWeek - 1, 7), dayOfYear = isoDayOfYear - 1, y0DayOfWeek = modFloor(dayOfWeek - dayOfYear, 7), y0WeekShift = computeWeekShift(y0DayOfWeek);
      let weeksInYear, weekOfYear = Math.floor((dayOfYear - y0WeekShift) / 7) + 1, yearOfWeek = isoDateFields.isoYear;
      return weekOfYear ? weekOfYear > computeWeeksInYear(0) && (weekOfYear = 1, yearOfWeek++) : (weekOfYear = computeWeeksInYear(-1), 
      yearOfWeek--), [ weekOfYear, yearOfWeek, weeksInYear ];
    }
  }, isoStandardOps = {
    ...nativeStandardBase,
    ...isoWeekOps,
    dateParts: computeIsoDateParts,
    eraParts: computeIsoEraParts,
    monthCodeParts: computeIsoMonthCodeParts,
    yearMonthForMonthDay(monthCodeNumber, isLeapMonth) {
      if (!isLeapMonth) {
        return [ isoEpochFirstLeapYear, monthCodeNumber ];
      }
    },
    inLeapYearPart: computeIsoInLeapYear,
    leapMonth() {},
    monthsInYearPart: computeIsoMonthsInYear,
    monthsInYearSpan: yearDelta => yearDelta * isoMonthsInYear,
    daysInMonthParts: computeIsoDaysInMonth,
    daysInYearPart: computeIsoDaysInYear,
    isoFields(year, month, day) {
      return {
        isoYear: year,
        isoMonth: month,
        isoDay: day
      };
    },
    epochMilli: isoArgsToEpochMilli,
    monthAdd(year, month, monthDelta) {
      return year += divTrunc(monthDelta, isoMonthsInYear), (month += modTrunc(monthDelta, isoMonthsInYear)) < 1 ? (year--, 
      month += isoMonthsInYear) : month > isoMonthsInYear && (year++, month -= isoMonthsInYear), 
      [ year, month ];
    },
    year(isoFields) {
      return isoFields.isoYear;
    },
    month(isoFields) {
      return isoFields.isoMonth;
    },
    day: isoFields => isoFields.isoDay
  }, intlPartOps = {
    dateParts: computeIntlDateParts,
    eraParts: computeIntlEraParts,
    monthCodeParts: computeIntlMonthCodeParts
  }, intlWeekOps = {
    dayOfYear: computeNativeDayOfYear,
    dateParts: computeIntlDateParts,
    epochMilli: computeIntlEpochMilli,
    weekOfYear: computeNativeWeekOfYear,
    yearOfWeek: computeNativeYearOfWeek,
    weekParts() {
      return [];
    }
  }, intlStandardOps = {
    ...nativeStandardBase,
    ...intlWeekOps,
    dateParts: computeIntlDateParts,
    eraParts: computeIntlEraParts,
    monthCodeParts: computeIntlMonthCodeParts,
    yearMonthForMonthDay(monthCodeNumber, isLeapMonth, day) {
      const startIsoYear = this.id && "chinese" === computeCalendarIdBase(this.id) ? ((monthCodeNumber, isLeapMonth, day) => {
        if (isLeapMonth) {
          switch (monthCodeNumber) {
           case 1:
            return 1651;

           case 2:
            return day < 30 ? 1947 : 1765;

           case 3:
            return day < 30 ? 1966 : 1955;

           case 4:
            return day < 30 ? 1963 : 1944;

           case 5:
            return day < 30 ? 1971 : 1952;

           case 6:
            return day < 30 ? 1960 : 1941;

           case 7:
            return day < 30 ? 1968 : 1938;

           case 8:
            return day < 30 ? 1957 : 1718;

           case 9:
            return 1832;

           case 10:
            return 1870;

           case 11:
            return 1814;

           case 12:
            return 1890;
          }
        }
        return 1972;
      })(monthCodeNumber, isLeapMonth, day) : isoEpochFirstLeapYear;
      let [startYear, startMonth, startDay] = computeIntlDateParts.call(this, {
        isoYear: startIsoYear,
        isoMonth: isoMonthsInYear,
        isoDay: 31
      });
      const startYearLeapMonth = computeIntlLeapMonth.call(this, startYear), startMonthIsLeap = startMonth === startYearLeapMonth;
      1 === (compareNumbers(monthCodeNumber, monthToMonthCodeNumber(startMonth, startYearLeapMonth)) || compareNumbers(Number(isLeapMonth), Number(startMonthIsLeap)) || compareNumbers(day, startDay)) && startYear--;
      for (let yearMove = 0; yearMove < 100; yearMove++) {
        const tryYear = startYear - yearMove, tryLeapMonth = computeIntlLeapMonth.call(this, tryYear), tryMonth = monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, tryLeapMonth);
        if (isLeapMonth === (tryMonth === tryLeapMonth) && day <= computeIntlDaysInMonth.call(this, tryYear, tryMonth)) {
          return [ tryYear, tryMonth ];
        }
      }
    },
    inLeapYearPart(year) {
      const days = computeIntlDaysInYear.call(this, year);
      return days > computeIntlDaysInYear.call(this, year - 1) && days > computeIntlDaysInYear.call(this, year + 1);
    },
    leapMonth: computeIntlLeapMonth,
    monthsInYearPart: computeIntlMonthsInYear,
    monthsInYearSpan(yearDelta, yearStart) {
      const yearEnd = yearStart + yearDelta, yearSign = Math.sign(yearDelta), yearCorrection = yearSign < 0 ? -1 : 0;
      let months = 0;
      for (let year = yearStart; year !== yearEnd; year += yearSign) {
        months += computeIntlMonthsInYear.call(this, year + yearCorrection);
      }
      return months;
    },
    daysInMonthParts: computeIntlDaysInMonth,
    daysInYearPart: computeIntlDaysInYear,
    isoFields(year, month, day) {
      return epochMilliToIso(computeIntlEpochMilli.call(this, year, month, day));
    },
    epochMilli: computeIntlEpochMilli,
    monthAdd(year, month, monthDelta) {
      if (monthDelta) {
        if (month += monthDelta, !Number.isSafeInteger(month)) {
          throw new RangeError(outOfBoundsDate);
        }
        if (monthDelta < 0) {
          for (;month < 1; ) {
            month += computeIntlMonthsInYear.call(this, --year);
          }
        } else {
          let monthsInYear;
          for (;month > (monthsInYear = computeIntlMonthsInYear.call(this, year)); ) {
            month -= monthsInYear, year++;
          }
        }
      }
      return [ year, month ];
    },
    year(isoFields) {
      return this.queryFields(isoFields).year;
    },
    month(isoFields) {
      const {year: year, monthString: monthString} = this.queryFields(isoFields), {monthStringToIndex: monthStringToIndex} = this.queryYearData(year);
      return monthStringToIndex[monthString] + 1;
    },
    day(isoFields) {
      return this.queryFields(isoFields).day;
    }
  }, createNativePartOps = createNativeOpsCreator(isoPartOps, intlPartOps), createNativeStandardOps = createNativeOpsCreator(isoStandardOps, intlStandardOps), builtinRefiners = {
    ...{
      era: toStringViaPrimitive,
      eraYear: toInteger,
      year: toInteger,
      month: toPositiveInteger,
      monthCode(monthCode) {
        const s = toStringViaPrimitive(monthCode);
        return parseMonthCode(s), s;
      },
      day: toPositiveInteger
    },
    ...mapPropNamesToConstant(timeFieldNamesAsc, toInteger),
    ...mapPropNamesToConstant(durationFieldNamesAsc, toStrictInteger),
    offset(offsetString) {
      const s = toStringViaPrimitive(offsetString);
      return parseOffsetNano(s), s;
    }
  }, timeFieldsToIso = bindArgs(remapProps, timeFieldNamesAsc, isoTimeFieldNamesAsc), isoTimeFieldsToCal = bindArgs(remapProps, isoTimeFieldNamesAsc, timeFieldNamesAsc), slotsMap = new WeakMap, getSlots = slotsMap.get.bind(slotsMap), setSlots = slotsMap.set.bind(slotsMap), yearMonthOnlyRefiners = {
    era(input) {
      if (void 0 !== input) {
        return requireString(input);
      }
    },
    eraYear: requireIntegerOrUndefined,
    year: requireInteger,
    month: requirePositiveInteger,
    daysInMonth: requirePositiveInteger,
    daysInYear: requirePositiveInteger,
    inLeapYear: requireBoolean,
    monthsInYear: requirePositiveInteger
  }, monthOnlyRefiners = {
    monthCode: requireString
  }, dayOnlyRefiners = {
    day: requirePositiveInteger
  }, dateOnlyRefiners = {
    dayOfWeek: requirePositiveInteger,
    dayOfYear: requirePositiveInteger,
    weekOfYear(input) {
      if (void 0 !== input) {
        return requirePositiveInteger(input);
      }
    },
    yearOfWeek: requireIntegerOrUndefined,
    daysInWeek: requirePositiveInteger
  }, dateGetters = createCalendarGetters({
    ...yearMonthOnlyRefiners,
    ...monthOnlyRefiners,
    ...dayOnlyRefiners,
    ...dateOnlyRefiners
  }), yearMonthGetters = createCalendarGetters({
    ...yearMonthOnlyRefiners,
    ...monthOnlyRefiners
  }), monthDayGetters = createCalendarGetters({
    ...monthOnlyRefiners,
    ...dayOnlyRefiners
  }), calendarIdGetters = {
    calendarId: slots => slots.calendar
  }, durationGetters = mapPropNames((propName => slots => slots[propName]), durationFieldNamesAsc.concat("sign")), timeGetters = mapPropNames(((_name, i) => slots => slots[isoTimeFieldNamesAsc[i]]), timeFieldNamesAsc), epochGetters = {
    epochMilliseconds: getEpochMilli,
    epochNanoseconds(slots) {
      return ((bigNano, divisorNano = 1) => {
        const [days, timeNano] = bigNano, whole = Math.floor(timeNano / divisorNano), wholeInDay = nanoInUtcDay / divisorNano;
        return BigInt(days) * BigInt(wholeInDay) + BigInt(whole);
      })(slots.epochNanoseconds);
    }
  }, [Duration, createDuration, getDurationSlots] = createSlotClass(DurationBranding, ((years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) => createDurationSlots(checkDurationUnits(mapProps(toStrictInteger, zipProps(durationFieldNamesAsc, [ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds ]))))), {
    ...durationGetters,
    blank(slots) {
      return !slots.sign;
    }
  }, {
    with: (slots, mod) => createDuration(((slots, fields) => {
      return createDurationSlots((initialFields = slots, modFields = fields, checkDurationUnits({
        ...initialFields,
        ...refineFields(modFields, durationFieldNamesAlpha)
      })));
      var initialFields, modFields;
    })(slots, mod)),
    negated: slots => createDuration(negateDuration(slots)),
    abs: slots => createDuration((slots => -1 === slots.sign ? negateDuration(slots) : slots)(slots)),
    add: (slots, otherArg, options) => createDuration(addDurations(refinePublicRelativeTo, createNativeStandardOps, queryNativeTimeZone, 0, slots, toDurationSlots(otherArg), options)),
    subtract: (slots, otherArg, options) => createDuration(addDurations(refinePublicRelativeTo, createNativeStandardOps, queryNativeTimeZone, 1, slots, toDurationSlots(otherArg), options)),
    round: (slots, options) => createDuration(((refineRelativeTo, getCalendarOps, getTimeZoneOps, slots, options) => {
      const durationLargestUnit = getMaxDurationUnit(slots), [largestUnit, smallestUnit, roundingInc, roundingMode, relativeToSlots] = ((options, defaultLargestUnit, refineRelativeTo) => {
        options = normalizeOptionsOrString(options, smallestUnitStr);
        let largestUnit = refineLargestUnit(options);
        const relativeToInternals = refineRelativeTo(options.relativeTo);
        let roundingInc = parseRoundingIncInteger(options);
        const roundingMode = refineRoundingMode(options, 7);
        let smallestUnit = refineSmallestUnit(options);
        if (void 0 === largestUnit && void 0 === smallestUnit) {
          throw new RangeError("Required smallestUnit or largestUnit");
        }
        if (null == smallestUnit && (smallestUnit = 0), null == largestUnit && (largestUnit = Math.max(smallestUnit, defaultLargestUnit)), 
        checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = refineRoundingInc(roundingInc, smallestUnit, 1), 
        roundingInc > 1 && smallestUnit > 5 && largestUnit !== smallestUnit) {
          throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
        }
        return [ largestUnit, smallestUnit, roundingInc, roundingMode, relativeToInternals ];
      })(options, durationLargestUnit, refineRelativeTo), maxUnit = Math.max(durationLargestUnit, largestUnit);
      if (!relativeToSlots && maxUnit <= 6) {
        return createDurationSlots(checkDurationUnits(((durationFields, largestUnit, smallestUnit, roundingInc, roundingMode) => {
          const roundedBigNano = roundBigNano(durationFieldsToBigNano(durationFields), smallestUnit, roundingInc, roundingMode);
          return {
            ...durationFieldDefaults,
            ...nanoToDurationDayTimeFields(roundedBigNano, largestUnit)
          };
        })(slots, largestUnit, smallestUnit, roundingInc, roundingMode)));
      }
      if (!isZonedEpochSlots(relativeToSlots) && !slots.sign) {
        return slots;
      }
      if (!relativeToSlots) {
        throw new RangeError("Missing relativeTo");
      }
      const [marker, calendarOps, timeZoneOps] = createMarkerSystem(getCalendarOps, getTimeZoneOps, relativeToSlots), markerToEpochNano = createMarkerToEpochNano(timeZoneOps), moveMarker = createMoveMarker(timeZoneOps), diffMarkers = createDiffMarkers(timeZoneOps), endMarker = moveMarker(calendarOps, marker, slots);
      isZonedEpochSlots(relativeToSlots) || (checkIsoDateTimeInBounds(marker), checkIsoDateTimeInBounds(endMarker));
      let balancedDuration = diffMarkers(calendarOps, marker, endMarker, largestUnit);
      const origSign = slots.sign, balancedSign = computeDurationSign(balancedDuration);
      if (origSign && balancedSign && origSign !== balancedSign) {
        throw new RangeError(invalidProtocolResults);
      }
      return balancedDuration = roundRelativeDuration(balancedDuration, markerToEpochNano(endMarker), largestUnit, smallestUnit, roundingInc, roundingMode, calendarOps, marker, markerToEpochNano, moveMarker), 
      createDurationSlots(balancedDuration);
    })(refinePublicRelativeTo, createNativeStandardOps, queryNativeTimeZone, slots, options)),
    total: (slots, options) => ((refineRelativeTo, getCalendarOps, getTimeZoneOps, slots, options) => {
      const maxDurationUnit = getMaxDurationUnit(slots), [totalUnit, relativeToSlots] = ((options, refineRelativeTo) => {
        const relativeToInternals = refineRelativeTo((options = normalizeOptionsOrString(options, "unit")).relativeTo);
        let totalUnit = refineTotalUnit(options);
        return totalUnit = requirePropDefined("unit", totalUnit), [ totalUnit, relativeToInternals ];
      })(options, refineRelativeTo), maxUnit = Math.max(totalUnit, maxDurationUnit);
      if (!relativeToSlots && isUniformUnit(maxUnit, relativeToSlots)) {
        return totalDayTimeDuration(slots, totalUnit);
      }
      if (!relativeToSlots) {
        throw new RangeError("Missing relativeTo");
      }
      if (!slots.sign) {
        return 0;
      }
      const [marker, calendarOps, timeZoneOps] = createMarkerSystem(getCalendarOps, getTimeZoneOps, relativeToSlots), markerToEpochNano = createMarkerToEpochNano(timeZoneOps), moveMarker = createMoveMarker(timeZoneOps), diffMarkers = createDiffMarkers(timeZoneOps), endMarker = moveMarker(calendarOps, marker, slots);
      isZonedEpochSlots(relativeToSlots) || (checkIsoDateTimeInBounds(marker), checkIsoDateTimeInBounds(endMarker));
      const balancedDuration = diffMarkers(calendarOps, marker, endMarker, totalUnit);
      return isUniformUnit(totalUnit, relativeToSlots) ? totalDayTimeDuration(balancedDuration, totalUnit) : ((durationFields, endEpochNano, totalUnit, calendarOps, marker, markerToEpochNano, moveMarker) => {
        const sign = computeDurationSign(durationFields), [epochNano0, epochNano1] = clampRelativeDuration(calendarOps, clearDurationFields(totalUnit, durationFields), totalUnit, sign, marker, markerToEpochNano, moveMarker), frac = computeEpochNanoFrac(endEpochNano, epochNano0, epochNano1);
        return durationFields[durationFieldNamesAsc[totalUnit]] + frac * sign;
      })(balancedDuration, markerToEpochNano(endMarker), totalUnit, calendarOps, marker, markerToEpochNano, moveMarker);
    })(refinePublicRelativeTo, createNativeStandardOps, queryNativeTimeZone, slots, options),
    toLocaleString(slots, locales, options) {
      return Intl.DurationFormat ? new Intl.DurationFormat(locales, options).format(this) : formatDurationIso(slots);
    },
    toString: formatDurationIso,
    toJSON: slots => formatDurationIso(slots),
    valueOf: neverValueOf
  }, {
    from: arg => createDuration(toDurationSlots(arg)),
    compare: (durationArg0, durationArg1, options) => ((refineRelativeTo, getCalendarOps, getTimeZoneOps, durationSlots0, durationSlots1, options) => {
      const relativeToSlots = refineRelativeTo(normalizeOptions(options).relativeTo), maxUnit = Math.max(getMaxDurationUnit(durationSlots0), getMaxDurationUnit(durationSlots1));
      if (allPropsEqual(durationFieldNamesAsc, durationSlots0, durationSlots1)) {
        return 0;
      }
      if (isUniformUnit(maxUnit, relativeToSlots)) {
        return compareBigNanos(durationFieldsToBigNano(durationSlots0), durationFieldsToBigNano(durationSlots1));
      }
      if (!relativeToSlots) {
        throw new RangeError("Missing relativeTo");
      }
      const [marker, calendarOps, timeZoneOps] = createMarkerSystem(getCalendarOps, getTimeZoneOps, relativeToSlots), markerToEpochNano = createMarkerToEpochNano(timeZoneOps), moveMarker = createMoveMarker(timeZoneOps);
      return compareBigNanos(markerToEpochNano(moveMarker(calendarOps, marker, durationSlots0)), markerToEpochNano(moveMarker(calendarOps, marker, durationSlots1)));
    })(refinePublicRelativeTo, createNativeStandardOps, queryNativeTimeZone, toDurationSlots(durationArg0), toDurationSlots(durationArg1), options)
  }), timeZoneNameStrs = [ "timeZoneName" ], monthDayFallbacks = {
    month: "numeric",
    day: "numeric"
  }, yearMonthFallbacks = {
    year: "numeric",
    month: "numeric"
  }, dateFallbacks = {
    ...yearMonthFallbacks,
    day: "numeric"
  }, timeFallbacks = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }, dateTimeFallbacks = {
    ...dateFallbacks,
    ...timeFallbacks
  }, zonedFallbacks = {
    ...dateTimeFallbacks,
    timeZoneName: "short"
  }, yearMonthFallbackNames = Object.keys(yearMonthFallbacks), monthDayFallbackNames = Object.keys(monthDayFallbacks), dateFallbackNames = Object.keys(dateFallbacks), timeFallbackNames = Object.keys(timeFallbacks), dateStyleNames = [ "dateStyle" ], yearMonthStandardNames = [ ...yearMonthFallbackNames, ...dateStyleNames ], monthDayStandardNames = [ ...monthDayFallbackNames, ...dateStyleNames ], dateStandardNames = [ ...dateFallbackNames, ...dateStyleNames, "weekday" ], timeStandardNames = [ ...timeFallbackNames, "dayPeriod", "timeStyle", "fractionalSecondDigits" ], dateTimeStandardNames = [ ...dateStandardNames, ...timeStandardNames ], dateExclusions = [ ...timeZoneNameStrs, ...timeStandardNames ], timeExclusions = [ ...timeZoneNameStrs, ...dateStandardNames ], yearMonthExclusions = [ ...timeZoneNameStrs, "day", "weekday", ...timeStandardNames ], monthDayExclusions = [ ...timeZoneNameStrs, "year", "weekday", ...timeStandardNames ], transformInstantOptions = createOptionsTransformer(dateTimeStandardNames, dateTimeFallbacks), transformZonedOptions = createOptionsTransformer(dateTimeStandardNames, zonedFallbacks), transformDateTimeOptions = createOptionsTransformer(dateTimeStandardNames, dateTimeFallbacks, timeZoneNameStrs), transformDateOptions = createOptionsTransformer(dateStandardNames, dateFallbacks, dateExclusions), transformTimeOptions = createOptionsTransformer(timeStandardNames, timeFallbacks, timeExclusions), transformYearMonthOptions = createOptionsTransformer(yearMonthStandardNames, yearMonthFallbacks, yearMonthExclusions), transformMonthDayOptions = createOptionsTransformer(monthDayStandardNames, monthDayFallbacks, monthDayExclusions), emptyOptions = {}, nonBuggyIsoResolve = new RawDateTimeFormat(void 0, {
    calendar: isoCalendarId
  }).resolvedOptions().calendar === isoCalendarId, instantConfig = [ transformInstantOptions, getEpochMilli ], zonedConfig = [ transformZonedOptions, getEpochMilli, 0, (slots0, slots1) => {
    const timeZoneId = slots0.timeZone;
    if (slots1 && slots1.timeZone !== timeZoneId) {
      throw new RangeError(mismatchingTimeZones);
    }
    return timeZoneId;
  } ], dateTimeConfig = [ transformDateTimeOptions, isoToEpochMilli ], dateConfig = [ transformDateOptions, isoToEpochMilli ], timeConfig = [ transformTimeOptions, isoFields => isoTimeFieldsToNano(isoFields) / nanoInMilli ], yearMonthConfig = [ transformYearMonthOptions, isoToEpochMilli, nonBuggyIsoResolve ], monthDayConfig = [ transformMonthDayOptions, isoToEpochMilli, nonBuggyIsoResolve ], classFormatConfigs = {
    Instant: instantConfig,
    PlainDateTime: dateTimeConfig,
    PlainDate: dateConfig,
    PlainTime: timeConfig,
    PlainYearMonth: yearMonthConfig,
    PlainMonthDay: monthDayConfig
  }, prepInstantFormat = createFormatPrepper(instantConfig), prepZonedDateTimeFormat = createFormatPrepper(zonedConfig), prepPlainDateTimeFormat = createFormatPrepper(dateTimeConfig), prepPlainDateFormat = createFormatPrepper(dateConfig), prepPlainTimeFormat = createFormatPrepper(timeConfig), prepPlainYearMonthFormat = createFormatPrepper(yearMonthConfig), prepPlainMonthDayFormat = createFormatPrepper(monthDayConfig), [PlainTime, createPlainTime] = createSlotClass(PlainTimeBranding, ((isoHour = 0, isoMinute = 0, isoSecond = 0, isoMillisecond = 0, isoMicrosecond = 0, isoNanosecond = 0) => createPlainTimeSlots(constrainIsoTimeFields(mapProps(toInteger, zipProps(isoTimeFieldNamesAsc, [ isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond ])), 1))), timeGetters, {
    with(_slots, mod, options) {
      return createPlainTime(((initialFields, mod, options) => createPlainTimeSlots(((initialFields, modFields, options) => refineTimeBag({
        ...pluckProps(timeFieldNamesAlpha, initialFields),
        ...refineFields(modFields, timeFieldNamesAlpha)
      }, refineOverflowOptions(options)))(initialFields, mod, options)))(this, rejectInvalidBag(mod), options));
    },
    add: (slots, durationArg) => createPlainTime(movePlainTime(0, slots, toDurationSlots(durationArg))),
    subtract: (slots, durationArg) => createPlainTime(movePlainTime(1, slots, toDurationSlots(durationArg))),
    until: (slots, otherArg, options) => createDuration(diffPlainTimes(0, slots, toPlainTimeSlots(otherArg), options)),
    since: (slots, otherArg, options) => createDuration(diffPlainTimes(1, slots, toPlainTimeSlots(otherArg), options)),
    round: (slots, options) => createPlainTime(((slots, options) => {
      const [a, b, c] = refineRoundingOptions(options, 5);
      var roundingMode;
      return createPlainTimeSlots((roundingMode = c, roundTimeToNano(slots, computeNanoInc(a, b), roundingMode)[0]));
    })(slots, options)),
    equals(slots, other) {
      return !compareIsoTimeFields(slots, toPlainTimeSlots(other));
    },
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepPlainTimeFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: formatPlainTimeIso,
    toJSON: slots => formatPlainTimeIso(slots),
    valueOf: neverValueOf
  }, {
    from: (arg, options) => createPlainTime(toPlainTimeSlots(arg, options)),
    compare: (arg0, arg1) => compareIsoTimeFields(toPlainTimeSlots(arg0), toPlainTimeSlots(arg1))
  }), [PlainDateTime, createPlainDateTime] = createSlotClass(PlainDateTimeBranding, bindArgs(((refineCalendarArg, isoYear, isoMonth, isoDay, isoHour = 0, isoMinute = 0, isoSecond = 0, isoMillisecond = 0, isoMicrosecond = 0, isoNanosecond = 0, calendarArg = isoCalendarId) => createPlainDateTimeSlots(checkIsoDateTimeInBounds(checkIsoDateTimeFields(mapProps(toInteger, zipProps(isoDateTimeFieldNamesAsc, [ isoYear, isoMonth, isoDay, isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond ])))), refineCalendarArg(calendarArg))), refineCalendarId), {
    ...calendarIdGetters,
    ...dateGetters,
    ...timeGetters
  }, {
    with: (slots, mod, options) => createPlainDateTime(((getCalendarOps, plainDateTimeSlots, modFields, options) => {
      const calendarOps = getCalendarOps(plainDateTimeSlots.calendar), validFieldNames = [ ...calendarOps.fields(dateFieldNamesAlpha), ...timeFieldNamesAsc ].sort(), origFields = {
        ...computeDateEssentials(slots = plainDateTimeSlots),
        hour: slots.isoHour,
        minute: slots.isoMinute,
        second: slots.isoSecond,
        millisecond: slots.isoMillisecond,
        microsecond: slots.isoMicrosecond,
        nanosecond: slots.isoNanosecond
      };
      var slots;
      const partialFields = refineFields(modFields, validFieldNames), overflow = refineOverflowOptions(options), mergedCalendarFields = calendarOps.mergeFields(origFields, partialFields), mergedAllFields = {
        ...origFields,
        ...partialFields
      };
      return createPlainDateTimeSlots(checkIsoDateTimeInBounds({
        ...calendarOps.dateFromFields(mergedCalendarFields, fabricateOverflowOptions(overflow)),
        ...constrainIsoTimeFields(timeFieldsToIso(mergedAllFields), overflow)
      }));
    })(createNativeStandardOps, slots, rejectInvalidBag(mod), options)),
    withCalendar: (slots, calendarArg) => createPlainDateTime(slotsWithCalendarId(slots, refineCalendarArg(calendarArg))),
    withPlainTime: (slots, plainTimeArg) => createPlainDateTime(((plainDateTimeSlots, plainTimeSlots = isoTimeFieldDefaults) => createPlainDateTimeSlots(checkIsoDateTimeInBounds({
      ...plainDateTimeSlots,
      ...plainTimeSlots
    })))(slots, optionalToPlainTimeFields(plainTimeArg))),
    add: (slots, durationArg, options) => createPlainDateTime(movePlainDateTime(createNativeStandardOps, 0, slots, toDurationSlots(durationArg), options)),
    subtract: (slots, durationArg, options) => createPlainDateTime(movePlainDateTime(createNativeStandardOps, 1, slots, toDurationSlots(durationArg), options)),
    until: (slots, otherArg, options) => createDuration(diffPlainDateTimes(createNativeStandardOps, 0, slots, toPlainDateTimeSlots(otherArg), options)),
    since: (slots, otherArg, options) => createDuration(diffPlainDateTimes(createNativeStandardOps, 1, slots, toPlainDateTimeSlots(otherArg), options)),
    round: (slots, options) => createPlainDateTime(((slots, options) => createPlainDateTimeSlots(roundDateTime(slots, ...refineRoundingOptions(options)), slots.calendar))(slots, options)),
    equals(slots, otherArg) {
      return !compareIsoDateTimeFields(plainDateTimeSlots0 = slots, plainDateTimeSlots1 = toPlainDateTimeSlots(otherArg)) && plainDateTimeSlots0.calendar === plainDateTimeSlots1.calendar;
      var plainDateTimeSlots0, plainDateTimeSlots1;
    },
    toZonedDateTime: (slots, timeZoneArg, options) => createZonedDateTime(((getTimeZoneOps, plainDateTimeSlots, timeZoneId, options) => {
      const epochNano = ((getTimeZoneOps, timeZoneId, isoFields, options) => {
        const epochDisambig = (options => refineEpochDisambig(normalizeOptions(options)))(options);
        return getSingleInstantFor(getTimeZoneOps(timeZoneId), isoFields, epochDisambig);
      })(getTimeZoneOps, timeZoneId, plainDateTimeSlots, options);
      return createZonedDateTimeSlots(checkEpochNanoInBounds(epochNano), timeZoneId, plainDateTimeSlots.calendar);
    })(queryNativeTimeZone, slots, refineTimeZoneArg(timeZoneArg), options)),
    toPlainDate: slots => createPlainDate(createPlainDateSlots(slots)),
    toPlainTime: slots => createPlainTime(createPlainTimeSlots(slots)),
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepPlainDateTimeFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: formatPlainDateTimeIso,
    toJSON: slots => formatPlainDateTimeIso(slots),
    valueOf: neverValueOf
  }, {
    from: (arg, options) => createPlainDateTime(toPlainDateTimeSlots(arg, options)),
    compare: (arg0, arg1) => compareIsoDateTimeFields(toPlainDateTimeSlots(arg0), toPlainDateTimeSlots(arg1))
  }), [PlainMonthDay, createPlainMonthDay, getPlainMonthDaySlots] = createSlotClass(PlainMonthDayBranding, bindArgs(((refineCalendarArg, isoMonth, isoDay, calendarArg = isoCalendarId, referenceIsoYear = isoEpochFirstLeapYear) => {
    const isoMonthInt = toInteger(isoMonth), isoDayInt = toInteger(isoDay), calendarId = refineCalendarArg(calendarArg);
    return createPlainMonthDaySlots(checkIsoDateInBounds(checkIsoDateFields({
      isoYear: toInteger(referenceIsoYear),
      isoMonth: isoMonthInt,
      isoDay: isoDayInt
    })), calendarId);
  }), refineCalendarId), {
    ...calendarIdGetters,
    ...monthDayGetters
  }, {
    with: (slots, mod, options) => createPlainMonthDay(((getCalendarOps, plainMonthDaySlots, modFields, options) => {
      const calendarOps = getCalendarOps(plainMonthDaySlots.calendar), validFieldNames = calendarOps.fields(dateFieldNamesAlpha).sort(), origFields = (slots => {
        const calendarOps = createNativePartOps(slots.calendar), [year, month, day] = calendarOps.dateParts(slots), [monthCodeNumber, isLeapMonth] = calendarOps.monthCodeParts(year, month);
        return {
          monthCode: formatMonthCode(monthCodeNumber, isLeapMonth),
          day: day
        };
      })(plainMonthDaySlots), partialFields = refineFields(modFields, validFieldNames), mergedFields = calendarOps.mergeFields(origFields, partialFields);
      return calendarOps.monthDayFromFields(mergedFields, options);
    })(createNativeStandardOps, slots, rejectInvalidBag(mod), options)),
    equals(slots, otherArg) {
      return !compareIsoDateFields(plainMonthDaySlots0 = slots, plainMonthDaySlots1 = toPlainMonthDaySlots(otherArg)) && plainMonthDaySlots0.calendar === plainMonthDaySlots1.calendar;
      var plainMonthDaySlots0, plainMonthDaySlots1;
    },
    toPlainDate(slots, bag) {
      return createPlainDate(((getCalendarOps, plainMonthDaySlots, plainMonthDayFields, bag) => ((calendarOps, input, bag) => convertToIso(calendarOps, input, monthCodeDayFieldNames, requireObjectLike(bag), yearFieldNames))(getCalendarOps(plainMonthDaySlots.calendar), plainMonthDayFields, bag))(createNativeStandardOps, slots, this, bag));
    },
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepPlainMonthDayFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: formatPlainMonthDayIso,
    toJSON: slots => formatPlainMonthDayIso(slots),
    valueOf: neverValueOf
  }, {
    from: (arg, options) => createPlainMonthDay(toPlainMonthDaySlots(arg, options))
  }), [PlainYearMonth, createPlainYearMonth, getPlainYearMonthSlots] = createSlotClass(PlainYearMonthBranding, bindArgs(((refineCalendarArg, isoYear, isoMonth, calendarArg = isoCalendarId, referenceIsoDay = 1) => {
    const isoYearInt = toInteger(isoYear), isoMonthInt = toInteger(isoMonth), calendarId = refineCalendarArg(calendarArg);
    return createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields({
      isoYear: isoYearInt,
      isoMonth: isoMonthInt,
      isoDay: toInteger(referenceIsoDay)
    })), calendarId);
  }), refineCalendarId), {
    ...calendarIdGetters,
    ...yearMonthGetters
  }, {
    with: (slots, mod, options) => createPlainYearMonth(((getCalendarOps, plainYearMonthSlots, modFields, options) => {
      const calendarOps = getCalendarOps(plainYearMonthSlots.calendar), validFieldNames = calendarOps.fields(yearMonthFieldNames).sort(), origFields = (slots => {
        const calendarOps = createNativePartOps(slots.calendar), [year, month] = calendarOps.dateParts(slots), [monthCodeNumber, isLeapMonth] = calendarOps.monthCodeParts(year, month);
        return {
          year: year,
          monthCode: formatMonthCode(monthCodeNumber, isLeapMonth)
        };
      })(plainYearMonthSlots), partialFields = refineFields(modFields, validFieldNames), mergedFields = calendarOps.mergeFields(origFields, partialFields);
      return calendarOps.yearMonthFromFields(mergedFields, options);
    })(createNativeStandardOps, slots, rejectInvalidBag(mod), options)),
    add: (slots, durationArg, options) => createPlainYearMonth(movePlainYearMonth(createNativeStandardOps, 0, slots, toDurationSlots(durationArg), options)),
    subtract: (slots, durationArg, options) => createPlainYearMonth(movePlainYearMonth(createNativeStandardOps, 1, slots, toDurationSlots(durationArg), options)),
    until: (slots, otherArg, options) => createDuration(diffPlainYearMonth(createNativeStandardOps, 0, slots, toPlainYearMonthSlots(otherArg), options)),
    since: (slots, otherArg, options) => createDuration(diffPlainYearMonth(createNativeStandardOps, 1, slots, toPlainYearMonthSlots(otherArg), options)),
    equals(slots, otherArg) {
      return !compareIsoDateFields(plainYearMonthSlots0 = slots, plainYearMonthSlots1 = toPlainYearMonthSlots(otherArg)) && plainYearMonthSlots0.calendar === plainYearMonthSlots1.calendar;
      var plainYearMonthSlots0, plainYearMonthSlots1;
    },
    toPlainDate(slots, bag) {
      return createPlainDate(((getCalendarOps, plainYearMonthSlots, plainYearMonthFields, bag) => ((calendarOps, input, bag) => convertToIso(calendarOps, input, yearMonthCodeFieldNames, requireObjectLike(bag), dayFieldNames))(getCalendarOps(plainYearMonthSlots.calendar), plainYearMonthFields, bag))(createNativeStandardOps, slots, this, bag));
    },
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepPlainYearMonthFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: formatPlainYearMonthIso,
    toJSON: slots => formatPlainYearMonthIso(slots),
    valueOf: neverValueOf
  }, {
    from: (arg, options) => createPlainYearMonth(toPlainYearMonthSlots(arg, options)),
    compare: (arg0, arg1) => compareIsoDateFields(toPlainYearMonthSlots(arg0), toPlainYearMonthSlots(arg1))
  }), [PlainDate, createPlainDate, getPlainDateSlots] = createSlotClass(PlainDateBranding, bindArgs(((refineCalendarArg, isoYear, isoMonth, isoDay, calendarArg = isoCalendarId) => createPlainDateSlots(checkIsoDateInBounds(checkIsoDateFields(mapProps(toInteger, {
    isoYear: isoYear,
    isoMonth: isoMonth,
    isoDay: isoDay
  }))), refineCalendarArg(calendarArg))), refineCalendarId), {
    ...calendarIdGetters,
    ...dateGetters
  }, {
    with: (slots, mod, options) => createPlainDate(((getCalendarOps, plainDateSlots, modFields, options) => {
      const calendarOps = getCalendarOps(plainDateSlots.calendar), validFieldNames = calendarOps.fields(dateFieldNamesAlpha).sort(), origFields = computeDateEssentials(plainDateSlots), partialFields = refineFields(modFields, validFieldNames), mergedFields = calendarOps.mergeFields(origFields, partialFields);
      return calendarOps.dateFromFields(mergedFields, options);
    })(createNativeStandardOps, slots, rejectInvalidBag(mod), options)),
    withCalendar: (slots, calendarArg) => createPlainDate(slotsWithCalendarId(slots, refineCalendarArg(calendarArg))),
    add: (slots, durationArg, options) => createPlainDate(movePlainDate(createNativeStandardOps, 0, slots, toDurationSlots(durationArg), options)),
    subtract: (slots, durationArg, options) => createPlainDate(movePlainDate(createNativeStandardOps, 1, slots, toDurationSlots(durationArg), options)),
    until: (slots, otherArg, options) => createDuration(diffPlainDates(createNativeStandardOps, 0, slots, toPlainDateSlots(otherArg), options)),
    since: (slots, otherArg, options) => createDuration(diffPlainDates(createNativeStandardOps, 1, slots, toPlainDateSlots(otherArg), options)),
    equals(slots, otherArg) {
      return !compareIsoDateFields(plainDateSlots0 = slots, plainDateSlots1 = toPlainDateSlots(otherArg)) && plainDateSlots0.calendar === plainDateSlots1.calendar;
      var plainDateSlots0, plainDateSlots1;
    },
    toZonedDateTime(slots, options) {
      const optionsObj = isObjectLike(options) ? options : {
        timeZone: options
      };
      return createZonedDateTime(((refineTimeZoneString, refinePlainTimeArg, getTimeZoneOps, plainDateSlots, options) => {
        const timeZoneId = refineTimeZoneString(options.timeZone), plainTimeArg = options.plainTime, isoTimeFields = void 0 !== plainTimeArg ? refinePlainTimeArg(plainTimeArg) : void 0, timeZoneOps = getTimeZoneOps(timeZoneId);
        let epochNano;
        return epochNano = isoTimeFields ? getSingleInstantFor(timeZoneOps, {
          ...plainDateSlots,
          ...isoTimeFields
        }) : getStartOfDayInstantFor(timeZoneOps, {
          ...plainDateSlots,
          ...isoTimeFieldDefaults
        }), createZonedDateTimeSlots(epochNano, timeZoneId, plainDateSlots.calendar);
      })(refineTimeZoneArg, toPlainTimeSlots, queryNativeTimeZone, slots, optionsObj));
    },
    toPlainDateTime: (slots, plainTimeArg) => createPlainDateTime(((plainDateSlots, plainTimeFields = isoTimeFieldDefaults) => createPlainDateTimeSlots(checkIsoDateTimeInBounds({
      ...plainDateSlots,
      ...plainTimeFields
    })))(slots, optionalToPlainTimeFields(plainTimeArg))),
    toPlainYearMonth(slots) {
      return createPlainYearMonth((this, ((calendarOps, input) => {
        const fields = refineCalendarFields(calendarOps, input, yearMonthCodeFieldNames);
        return calendarOps.yearMonthFromFields(fields, void 0);
      })(createNativeStandardOps(slots.calendar), this)));
    },
    toPlainMonthDay(slots) {
      return createPlainMonthDay((this, ((calendarOps, input) => {
        const fields = refineCalendarFields(calendarOps, input, monthCodeDayFieldNames);
        return calendarOps.monthDayFromFields(fields);
      })(createNativeStandardOps(slots.calendar), this)));
    },
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepPlainDateFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: formatPlainDateIso,
    toJSON: slots => formatPlainDateIso(slots),
    valueOf: neverValueOf
  }, {
    from: (arg, options) => createPlainDate(toPlainDateSlots(arg, options)),
    compare: (arg0, arg1) => compareIsoDateFields(toPlainDateSlots(arg0), toPlainDateSlots(arg1))
  }), [ZonedDateTime, createZonedDateTime] = createSlotClass(ZonedDateTimeBranding, bindArgs(((refineCalendarArg, refineTimeZoneArg, epochNano, timeZoneArg, calendarArg = isoCalendarId) => createZonedDateTimeSlots(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(epochNano))), refineTimeZoneArg(timeZoneArg), refineCalendarArg(calendarArg))), refineCalendarId, (id => resolveTimeZoneId(requireString(id)))), {
    ...epochGetters,
    ...calendarIdGetters,
    ...adaptDateMethods(dateGetters),
    ...adaptDateMethods(timeGetters),
    offset: slots => formatOffsetNano(slotsToIso(slots).offsetNanoseconds),
    offsetNanoseconds: slots => slotsToIso(slots).offsetNanoseconds,
    timeZoneId: slots => slots.timeZone,
    hoursInDay: slots => ((getTimeZoneOps, slots) => {
      const timeZoneOps = getTimeZoneOps(slots.timeZone), isoFields = zonedEpochSlotsToIso(slots, timeZoneOps), [isoFields0, isoFields1] = computeDayInterval(isoFields), hoursExact = bigNanoToNumber(diffBigNanos(getStartOfDayInstantFor(timeZoneOps, isoFields0), getStartOfDayInstantFor(timeZoneOps, isoFields1)), nanoInHour, 1);
      if (hoursExact <= 0) {
        throw new RangeError(invalidProtocolResults);
      }
      return hoursExact;
    })(queryNativeTimeZone, slots)
  }, {
    with: (slots, mod, options) => createZonedDateTime(((getCalendarOps, getTimeZoneOps, zonedDateTimeSlots, modFields, options) => {
      const {calendar: calendar, timeZone: timeZone} = zonedDateTimeSlots, calendarOps = getCalendarOps(calendar), timeZoneOps = getTimeZoneOps(timeZone), validFieldNames = [ ...calendarOps.fields(dateFieldNamesAlpha), ...timeAndOffsetFieldNames ].sort(), origFields = (slots => {
        const isoFields = zonedEpochSlotsToIso(slots, queryNativeTimeZone), offsetString = formatOffsetNano(isoFields.offsetNanoseconds), calendarOps = createNativePartOps(slots.calendar), [year, month, day] = calendarOps.dateParts(isoFields), [monthCodeNumber, isLeapMonth] = calendarOps.monthCodeParts(year, month), monthCode = formatMonthCode(monthCodeNumber, isLeapMonth);
        return {
          ...isoTimeFieldsToCal(isoFields),
          year: year,
          monthCode: monthCode,
          day: day,
          offset: offsetString
        };
      })(zonedDateTimeSlots), partialFields = refineFields(modFields, validFieldNames), mergedCalendarFields = calendarOps.mergeFields(origFields, partialFields), mergedAllFields = {
        ...origFields,
        ...partialFields
      }, [overflow, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options, 2);
      return createZonedDateTimeSlots(getMatchingInstantFor(timeZoneOps, {
        ...calendarOps.dateFromFields(mergedCalendarFields, fabricateOverflowOptions(overflow)),
        ...constrainIsoTimeFields(timeFieldsToIso(mergedAllFields), overflow)
      }, parseOffsetNano(mergedAllFields.offset), offsetDisambig, epochDisambig), timeZone, calendar);
    })(createNativeStandardOps, queryNativeTimeZone, slots, rejectInvalidBag(mod), options)),
    withCalendar: (slots, calendarArg) => createZonedDateTime(slotsWithCalendarId(slots, refineCalendarArg(calendarArg))),
    withTimeZone: (slots, timeZoneArg) => createZonedDateTime(((slots, timeZoneId) => ({
      ...slots,
      timeZone: timeZoneId
    }))(slots, refineTimeZoneArg(timeZoneArg))),
    withPlainTime: (slots, plainTimeArg) => createZonedDateTime(((getTimeZoneOps, zonedDateTimeSlots, plainTimeSlots) => {
      const timeZoneId = zonedDateTimeSlots.timeZone, timeZoneOps = getTimeZoneOps(timeZoneId), isoFields = {
        ...zonedEpochSlotsToIso(zonedDateTimeSlots, timeZoneOps),
        ...plainTimeSlots || isoTimeFieldDefaults
      };
      let epochNano;
      return epochNano = plainTimeSlots ? getMatchingInstantFor(timeZoneOps, isoFields, isoFields.offsetNanoseconds, 2) : getStartOfDayInstantFor(timeZoneOps, isoFields), 
      createZonedDateTimeSlots(epochNano, timeZoneId, zonedDateTimeSlots.calendar);
    })(queryNativeTimeZone, slots, optionalToPlainTimeFields(plainTimeArg))),
    add: (slots, durationArg, options) => createZonedDateTime(moveZonedDateTime(createNativeStandardOps, queryNativeTimeZone, 0, slots, toDurationSlots(durationArg), options)),
    subtract: (slots, durationArg, options) => createZonedDateTime(moveZonedDateTime(createNativeStandardOps, queryNativeTimeZone, 1, slots, toDurationSlots(durationArg), options)),
    until: (slots, otherArg, options) => createDuration(createDurationSlots(diffZonedDateTimes(createNativeStandardOps, queryNativeTimeZone, 0, slots, toZonedDateTimeSlots(otherArg), options))),
    since: (slots, otherArg, options) => createDuration(createDurationSlots(diffZonedDateTimes(createNativeStandardOps, queryNativeTimeZone, 1, slots, toZonedDateTimeSlots(otherArg), options))),
    round: (slots, options) => createZonedDateTime(((getTimeZoneOps, slots, options) => {
      let {epochNanoseconds: epochNanoseconds, timeZone: timeZone, calendar: calendar} = slots;
      const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options);
      if (0 === smallestUnit && 1 === roundingInc) {
        return slots;
      }
      const timeZoneOps = getTimeZoneOps(timeZone);
      if (6 === smallestUnit) {
        epochNanoseconds = ((computeInterval, timeZoneOps, slots, roundingMode) => {
          const isoSlots = zonedEpochSlotsToIso(slots, timeZoneOps), [isoFields0, isoFields1] = computeInterval(isoSlots), epochNano = slots.epochNanoseconds, epochNano0 = getStartOfDayInstantFor(timeZoneOps, isoFields0), epochNano1 = getStartOfDayInstantFor(timeZoneOps, isoFields1);
          if (bigNanoOutside(epochNano, epochNano0, epochNano1)) {
            throw new RangeError(invalidProtocolResults);
          }
          return roundWithMode(computeEpochNanoFrac(epochNano, epochNano0, epochNano1), roundingMode) ? epochNano1 : epochNano0;
        })(computeDayInterval, timeZoneOps, slots, roundingMode);
      } else {
        const offsetNano = timeZoneOps.getOffsetNanosecondsFor(epochNanoseconds);
        epochNanoseconds = getMatchingInstantFor(timeZoneOps, roundDateTime(epochNanoToIso(epochNanoseconds, offsetNano), smallestUnit, roundingInc, roundingMode), offsetNano, 2, 0, 1);
      }
      return createZonedDateTimeSlots(epochNanoseconds, timeZone, calendar);
    })(queryNativeTimeZone, slots, options)),
    startOfDay: slots => createZonedDateTime(((getTimeZoneOps, slots) => {
      const {timeZone: timeZone, calendar: calendar} = slots, epochNano1 = ((computeAlignment, timeZoneOps, slots) => getStartOfDayInstantFor(timeZoneOps, computeAlignment(zonedEpochSlotsToIso(slots, timeZoneOps))))(computeDayFloor, getTimeZoneOps(timeZone), slots);
      return createZonedDateTimeSlots(epochNano1, timeZone, calendar);
    })(queryNativeTimeZone, slots)),
    equals(slots, otherArg) {
      return !compareZonedDateTimes(zonedDateTimeSlots0 = slots, zonedDateTimeSlots1 = toZonedDateTimeSlots(otherArg)) && !!isTimeZoneIdsEqual(zonedDateTimeSlots0.timeZone, zonedDateTimeSlots1.timeZone) && zonedDateTimeSlots0.calendar === zonedDateTimeSlots1.calendar;
      var zonedDateTimeSlots0, zonedDateTimeSlots1;
    },
    toInstant: slots => createInstant(createInstantSlots(slots.epochNanoseconds)),
    toPlainDateTime: slots => createPlainDateTime(zonedDateTimeToPlainDateTime(queryNativeTimeZone, slots)),
    toPlainDate: slots => createPlainDate(zonedDateTimeToPlainDate(queryNativeTimeZone, slots)),
    toPlainTime: slots => createPlainTime(zonedDateTimeToPlainTime(queryNativeTimeZone, slots)),
    toLocaleString(slots, locales, options = {}) {
      const [format, epochMilli] = prepZonedDateTimeFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: (slots, options) => formatZonedDateTimeIso(queryNativeTimeZone, slots, options),
    toJSON: slots => formatZonedDateTimeIso(queryNativeTimeZone, slots),
    valueOf: neverValueOf,
    getTimeZoneTransition(slots, options) {
      const {timeZone: timeZoneId, epochNanoseconds: epochNano} = slots, direction = (options => {
        const normalizedOptions = normalizeOptionsOrString(options, "direction"), res = refineChoiceOption("direction", directionMap, normalizedOptions, 0);
        if (!res) {
          throw new RangeError(invalidEntity("direction", res));
        }
        return res;
      })(options), newEpochNano = queryNativeTimeZone(timeZoneId).getTransition(epochNano, direction);
      return newEpochNano ? createZonedDateTime({
        ...slots,
        epochNanoseconds: newEpochNano
      }) : null;
    }
  }, {
    from: (arg, options) => createZonedDateTime(toZonedDateTimeSlots(arg, options)),
    compare: (arg0, arg1) => compareZonedDateTimes(toZonedDateTimeSlots(arg0), toZonedDateTimeSlots(arg1))
  }), [Instant, createInstant, getInstantSlots] = createSlotClass(InstantBranding, (epochNano => createInstantSlots(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(epochNano))))), epochGetters, {
    add: (slots, durationArg) => createInstant(moveInstant(0, slots, toDurationSlots(durationArg))),
    subtract: (slots, durationArg) => createInstant(moveInstant(1, slots, toDurationSlots(durationArg))),
    until: (slots, otherArg, options) => createDuration(diffInstants(0, slots, toInstantSlots(otherArg), options)),
    since: (slots, otherArg, options) => createDuration(diffInstants(1, slots, toInstantSlots(otherArg), options)),
    round: (slots, options) => createInstant(((instantSlots, options) => {
      const [smallestUnit, roundingInc, roundingMode] = refineRoundingOptions(options, 5, 1);
      return createInstantSlots(roundBigNano(instantSlots.epochNanoseconds, smallestUnit, roundingInc, roundingMode, 1));
    })(slots, options)),
    equals(slots, otherArg) {
      return !compareInstants(slots, toInstantSlots(otherArg));
    },
    toZonedDateTimeISO: (slots, timeZoneArg) => createZonedDateTime(((instantSlots, timeZoneId, calendarId = isoCalendarId) => createZonedDateTimeSlots(instantSlots.epochNanoseconds, timeZoneId, calendarId))(slots, refineTimeZoneArg(timeZoneArg))),
    toLocaleString(slots, locales, options) {
      const [format, epochMilli] = prepInstantFormat(locales, options, slots);
      return format.format(epochMilli);
    },
    toString: (slots, options) => formatInstantIso(refineTimeZoneArg, queryNativeTimeZone, slots, options),
    toJSON: slots => formatInstantIso(refineTimeZoneArg, queryNativeTimeZone, slots),
    valueOf: neverValueOf
  }, {
    from: arg => createInstant(toInstantSlots(arg)),
    fromEpochMilliseconds: epochMilli => createInstant((epochMilli => createInstantSlots(checkEpochNanoInBounds(numberToBigNano(toStrictInteger(epochMilli), nanoInMilli))))(epochMilli)),
    fromEpochNanoseconds: epochNano => createInstant((epochNano => createInstantSlots(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(epochNano)))))(epochNano)),
    compare: (a, b) => compareInstants(toInstantSlots(a), toInstantSlots(b))
  }), DateTimeFormat = function() {
    function DateTimeFormatFunc(locales, options) {
      return new DateTimeFormatNew(locales, options);
    }
    function DateTimeFormatNew(locales, options = Object.create(null)) {
      internalsMap.set(this, ((locales, options) => {
        const rawFormat = new RawDateTimeFormat(locales, options), resolveOptions = rawFormat.resolvedOptions(), resolvedLocale = resolveOptions.locale, copiedOptions = pluckProps(Object.keys(options), resolveOptions), queryFormatPrepperForBranding = memoize(createFormatPrepperForBranding), prepFormat = (isRange, ...formattables) => {
          if (isRange) {
            if (2 !== formattables.length) {
              throw new TypeError("Mismatching types for formatting");
            }
            for (const formattable of formattables) {
              if (void 0 === formattable) {
                throw new TypeError("Mismatching types for formatting");
              }
            }
          }
          isRange || void 0 !== formattables[0] || (formattables = []);
          const formattableEssences = formattables.map((formattable => getSlots(formattable) || Number(formattable)));
          let overallBranding, i = 0;
          for (const formattableEssence of formattableEssences) {
            const slotsBranding = "object" == typeof formattableEssence ? formattableEssence.branding : void 0;
            if (i++ && slotsBranding !== overallBranding) {
              throw new TypeError("Mismatching types for formatting");
            }
            overallBranding = slotsBranding;
          }
          return overallBranding ? queryFormatPrepperForBranding(overallBranding)(resolvedLocale, copiedOptions, ...formattableEssences) : [ rawFormat, ...formattableEssences ];
        };
        return prepFormat.rawFormat = rawFormat, prepFormat;
      })(locales, options));
    }
    const members = RawDateTimeFormat.prototype, memberDescriptors = Object.getOwnPropertyDescriptors(members), classDescriptors = Object.getOwnPropertyDescriptors(RawDateTimeFormat);
    for (const memberName in memberDescriptors) {
      const memberDescriptor = memberDescriptors[memberName], formatLikeMethod = memberName.startsWith("format") && createFormatMethod(memberName);
      "function" == typeof memberDescriptor.value ? memberDescriptor.value = "constructor" === memberName ? DateTimeFormatFunc : formatLikeMethod || createProxiedMethod(memberName) : formatLikeMethod && (memberDescriptor.get = function() {
        if (!internalsMap.has(this)) {
          throw new TypeError("Invalid calling context");
        }
        return (...args) => formatLikeMethod.apply(this, args);
      }, Object.defineProperties(memberDescriptor.get, createNameDescriptors(`get ${memberName}`)));
    }
    return classDescriptors.prototype.value = DateTimeFormatNew.prototype = Object.create({}, memberDescriptors), 
    Object.defineProperties(DateTimeFormatFunc, classDescriptors), DateTimeFormatFunc;
  }(), internalsMap = new WeakMap;
  let currentTimeZoneId;
  const Now = Object.defineProperties({}, {
    ...createStringTagDescriptors("Temporal.Now"),
    ...createPropDescriptors({
      timeZoneId: () => getCurrentTimeZoneId(),
      instant: () => createInstant(createInstantSlots(getCurrentEpochNano())),
      zonedDateTimeISO: (timeZoneArg = getCurrentTimeZoneId()) => createZonedDateTime(createZonedDateTimeSlots(getCurrentEpochNano(), refineTimeZoneArg(timeZoneArg), isoCalendarId)),
      plainDateTimeISO: (timeZoneArg = getCurrentTimeZoneId()) => createPlainDateTime(createPlainDateTimeSlots(getCurrentIsoDateTime(queryNativeTimeZone(refineTimeZoneArg(timeZoneArg))), isoCalendarId)),
      plainDateISO: (timeZoneArg = getCurrentTimeZoneId()) => createPlainDate(createPlainDateSlots(getCurrentIsoDateTime(queryNativeTimeZone(refineTimeZoneArg(timeZoneArg))), isoCalendarId)),
      plainTimeISO: (timeZoneArg = getCurrentTimeZoneId()) => createPlainTime(createPlainTimeSlots(getCurrentIsoDateTime(queryNativeTimeZone(refineTimeZoneArg(timeZoneArg)))))
    })
  }), Temporal = Object.defineProperties({}, {
    ...createStringTagDescriptors("Temporal"),
    ...createPropDescriptors({
      PlainYearMonth: PlainYearMonth,
      PlainMonthDay: PlainMonthDay,
      PlainDate: PlainDate,
      PlainTime: PlainTime,
      PlainDateTime: PlainDateTime,
      ZonedDateTime: ZonedDateTime,
      Instant: Instant,
      Duration: Duration,
      Now: Now
    })
  });
  Object.defineProperties(globalThis, createPropDescriptors({
    Temporal: Temporal
  })), Object.defineProperties(Intl, createPropDescriptors({
    DateTimeFormat: DateTimeFormat
  })), Object.defineProperties(Date.prototype, createPropDescriptors({
    toTemporalInstant() {
      const epochMilli = Date.prototype.valueOf.call(this);
      return createInstant(createInstantSlots(numberToBigNano(requireNumberIsInteger(epochMilli), nanoInMilli)));
    }
  }));
}();

},{}]},{},[2]);
