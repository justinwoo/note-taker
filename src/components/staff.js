import * as React from 'react';
import {ReactComponentWithPureRenderMixin as PureRenderMixin} from 'react';

import {
  sheetWidth,
  lineHeight,
  offset
} from '../globals';
import GClef from './gclef';

function createLine(rowNo) {
  var height = lineHeight * rowNo + offset;
  return (
    <line key={rowNo} x1="0" y1={height} x2={sheetWidth} y2={height} strokeWidth="2" stroke="black" />
  );
}

var Staff = React.createClass({
  mixins: [
    PureRenderMixin
  ],
  render: function () {
    var lines = [];
    for (var i = 0; i < 5; i++) {
      lines.push(createLine(i));
    }
    return (
      <g className='staff-treble'>
        {lines}
        {GClef}
      </g>
    )
  }
});

export default Staff;
