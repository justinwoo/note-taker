import * as React from 'react';

import WholeNote from './whole-note';
import {createStrikethrough} from './utils/draw-utils.js';

import {
  notesOffsetX,
  notesOffsetY
} from '../globals';

function getTranslate(x, y) {
  return 'translate(' + x + ',' + y + ')';
}

var Cursor = React.createClass({
  render: function () {
    var x = this.props.cursor.x + notesOffsetX;
    var y = this.props.cursor.y + notesOffsetY;
    var translate = getTranslate(x, y);
    return (
      <g transform={translate}>
        {WholeNote}
      </g>
    )
  }
});

export default Cursor;
