import * as React from 'react';

import Note from './note';

var Cursor = React.createClass({
  render: function () {
    return (
      <Note
        x={this.props.cursor.x}
        y={this.props.cursor.y}
      />
    );
  }
});

export default Cursor;
