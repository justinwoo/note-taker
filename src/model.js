import {getModel} from 'donburi-model';
import initializeCursorFunctions from './functions/cursor-functions';

var keyCodes = {
  104: 'h',
  106: 'j',
  107: 'k',
  108: 'l'
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
  }
};

var initialState = {
  cursor: {
    x: 0,
    y: 0
  }
};

var Model = getModel(initialState);

Model.register('onkeypress', function (event) {
  var keyCode = event.which;
  console.log('keyCode', keyCode);
  var key = keyCodes[keyCode];
  if (key) {
    actions[key](event);
  }
});

initializeCursorFunctions(Model);

export default Model;
