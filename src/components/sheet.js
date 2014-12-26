import * as React from 'react';

var sheetWidth = 940;

var Sheet = React.createClass({
  render: () => {
    return (
      <section className='sheet-container' style={{width: sheetWidth}}>
        <svg className='sheet-svg' width={sheetWidth}>
          <rect x='0' y='10' width='20' height='20'/>
        </svg>
      </section>
    )
  }
});

export default Sheet;
