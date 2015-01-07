import * as assign from 'react/lib/Object.assign';
import * as update from 'react/lib/update';

// check against collisions with existing notes
// fn (notes: array[note], cursor: object) -> boolean
function collidesWithExisting(notes, cursor) {
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    if (note.x === cursor.x && note.y === cursor.y) {
      return true;
    }
  }
  return false;
}

var initializeNotationFunctions = function (Model) {
  Model.register('placeNote', function () {
    var state = Model.getState();
    var newNote;
    var newNotes;
    var newState;
    if (collidesWithExisting(state.notes, state.cursor)) {
      console.warn('existing note for cursor coordinates', state.cursor);
    } else {
      newNote = assign({}, state.cursor);
      newNotes = [].concat(state.notes);
      newNotes.push(newNote);
      newState = update(state, {
        notes: {$set: newNotes}
      });
      Model.setState(newState);
    }
  });
};

export default initializeNotationFunctions;
