import * as React from 'react';
import {ReactComponentWithPureRenderMixin as PureRenderMixin} from 'react';

import GClef from './gclef';

import {createLine} from './utils/draw-utils.js';

function getGClef() {
  return (
    <g transform='translate(0,13)'>
      {GClef}
    </g>
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
    var gclef = getGClef();
    return (
      <g className='staff-treble'>
        {lines}
        {gclef}
      </g>
    )
  }
});

export default Staff;
