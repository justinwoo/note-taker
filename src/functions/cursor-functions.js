import * as assign from 'react/lib/Object.assign';

import {
  incrementX,
  incrementY
} from '../globals'

function cursorShift(Model, transform, predicate) {
  var state = Model.getState();
  if (predicate && predicate(state) || !predicate) {
    var newCursor = transform(state);
    var newState = assign({}, state, {
      cursor: newCursor
    });
    Model.setState(newState);
  }
}

var initializeCursorFunctions = function (Model) {
  Model.register('cursorMoveLeft', function () {
    cursorShift(
      Model,
      function transform(state) {
        return assign({}, state.cursor, {
          x: state.cursor.x - incrementX
        });
      },
      function predicate(state) {
        return state.cursor.x > 0;
      }
    );
  });

  Model.register('cursorMoveDown', function () {
    cursorShift(
      Model,
      function transform(state) {
        return assign({}, state.cursor, {
          y: state.cursor.y + incrementY
        });
      }
    );
  });

  Model.register('cursorMoveUp', function () {
     cursorShift(
      Model,
      function transform(state) {
        return assign({}, state.cursor, {
          y: state.cursor.y - incrementY
        });
      }
    );
  });

  Model.register('cursorMoveRight', function () {
     cursorShift(
      Model,
      function transform(state) {
        return assign({}, state.cursor, {
          x: state.cursor.x + incrementX
        });
      }
    );
  });
};

export default initializeCursorFunctions;
