import * as React from 'react';

import {sheetWidth} from '../globals';
import Staff from './staff';
import Cursor from './cursor';

var Sheet = React.createClass({
  render: function () {
    var appState = this.props.appState;
    return (
      <section className='sheet-container' style={{width: sheetWidth}}>
        <svg className='sheet-svg' width={sheetWidth}>
          <Staff/>
          <Cursor cursor={appState.cursor}/>
        </svg>
      </section>
    )
  }
});

export default Sheet;
