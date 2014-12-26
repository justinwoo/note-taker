import * as React from 'react';

var App = React.createClass({
  render: () => {
    return (
      <div>
        Hello world
      </div>
    );
  }
});

React.render(<App/>, document.body);
