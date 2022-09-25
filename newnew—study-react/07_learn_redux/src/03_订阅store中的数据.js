const store = require('./store');
const { ADD_NUMBER, CHANGE_NAME } = require('./constants');

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
	console.log('ending', store.getState());
});

// 修改store中的数据,必须要使用action来修改
const nameAction = { type: CHANGE_NAME, name: 'kobe' };
store.dispatch(nameAction);
unsubscribe();
store.dispatch({ type: CHANGE_NAME, name: 'kerry' });
