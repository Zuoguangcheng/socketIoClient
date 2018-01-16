const {
  Record
} = require('immutable');

let InitialState = Record({
  rooms: [],
  cxt: {},
  name: ''
});

export default InitialState;
