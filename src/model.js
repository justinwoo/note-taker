import {getModel} from 'donburi-model';
import initializeCursorFunctions from './functions/cursor-functions';
import initializeNotationFunctions from './functions/notation-functions';

var keyCodes = {
  72: 'h',
  37: 'h',
  74: 'j',
  40: 'j',
  75: 'k',
  38: 'k',
  76: 'l',
  39: 'l',
  68: 'd'
};

var actions = {
  'h': function () {
    Model.request('cursorMoveLeft');
  },
  'j': function () {
    Model.request('cursorMoveDown');
  },
  'k': function () {
    Model.request('cursorMoveUp');
  },
  'l': function () {
    Model.request('cursorMoveRight');
  },
  'd': function () {
    Model.request('placeNote');
  }
};

// cursor: object
//   x: number, X coordinate of the cursor
//   y: number, Y coordinate of the cursor
// notes: array, holds note objects
// note: object
//   x: number, X coordinate of the note
//   y: number, Y coordinate of the note
var initialState = {
  cursor: {
    x: 0,
    y: 0
  },
  notes: []
};

var Model = getModel(initialState);

Model.register('onkeydown', function (event) {
  var keyCode = event.which;
  console.log('keyCode', keyCode);
  var key = keyCodes[keyCode];
  if (key) {
    actions[key](event);
  }
});

initializeCursorFunctions(Model);
initializeNotationFunctions(Model);

export default Model;
