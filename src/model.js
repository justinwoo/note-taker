import {getModel} from 'donburi-model';

var initialState = {
  cursor: {
    x: 0,
    y: 0
  }
};

var Model = getModel(initialState);

Model.register('onkeypress', function (event) {
  var keyCode = event.which;
  console.log('keyCode', keyCode);
});

export default Model;
