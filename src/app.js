import './styles/app.scss';

import * as React from 'react';
import {getReactMixin as getDonburiMixin} from 'donburi-model';

import Sheet from './components/sheet';
import Model from './model';

window.onkeypress = function (e) {
  Model.request('onkeypress', e);
}

var App = React.createClass({
  mixins: [
    getDonburiMixin(Model)
  ],
  render: function () {
    console.log('rendered state:', this.state);
    return (
      <article>
        <header>Header</header>
        <Sheet appState={this.state}/>
        <footer>Footer</footer>
      </article>
    );
  }
});

React.render(<App/>, document.body);
