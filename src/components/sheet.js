import * as React from 'react';

import {sheetWidth} from '../globals';
import Staff from './staff';
import Cursor from './cursor';
import Note from './note';

var Sheet = React.createClass({
  render: function () {
    var appState = this.props.appState;
    var notes = appState.notes.map(function (note) {
      return (
        <Note
          {...note}
        />
      )
    });
    return (
      <section className='sheet-container' style={{width: sheetWidth}}>
        <svg className='sheet-svg' width={sheetWidth}>
          <Staff/>
          <Cursor cursor={appState.cursor}/>
          {notes}
        </svg>
      </section>
    )
  }
});

export default Sheet;
