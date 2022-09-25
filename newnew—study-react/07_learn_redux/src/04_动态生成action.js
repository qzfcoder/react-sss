const store = require('./store');
const { changeNameAction, changeNumAction } = require('./store/actionCreators');

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
	console.log('ending', store.getState());
});

// 修改store中的数据,必须要使用action来修改
const nameAction = changeNameAction('kobe');
store.dispatch(nameAction);
// unsubscribe();
store.dispatch(changeNameAction('kerry'));
store.dispatch(changeNumAction(30));
