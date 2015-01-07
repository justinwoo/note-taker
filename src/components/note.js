import * as React from 'react';

import WholeNote from './notes/whole-note';
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
    var xPos = this.props.x + notesOffsetX;
    var yPos = this.props.y + notesOffsetY;
    var translate = getTranslate(xPos, yPos);
    return (
      <g transform={translate}>
        {WholeNote}
      </g>
    )
  }
});

export default Cursor;
