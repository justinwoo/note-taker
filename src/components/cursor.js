import * as React from 'react';

var Cursor = React.createClass({
  render: function () {
    var svgProps = {
      x: this.props.cursor.x,
      y: this.props.cursor.y,
      width: 5,
      height: 5
    };
    // draw a rectangle for now, replace with actual notes later
    return (
      <g>
        <rect
          {...svgProps}
        />
      </g>
    )
  }
});

export default Cursor;
