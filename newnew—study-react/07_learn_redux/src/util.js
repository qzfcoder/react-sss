const store = require('./store');
const { changeNameAction, changeNumAction } = require('./store/actionCreators');

store.dispatch(changeNameAction('curry'));
