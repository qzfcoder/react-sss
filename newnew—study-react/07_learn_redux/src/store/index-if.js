const { createStore } = require('redux');
// 初始化的数据
const initialState = {
	name: 'qzf',
	counter: 100
};
// 创建reducer函数,该函数为纯函数
// reducer函数接收俩个参数,
// 参数一:store中上一次的值
// 参数二:
// 返回值:他的返回值,会作为store之后存储的state
// 调用了dispatch,会重新调用reducer
function reducer(state = initialState, action) {
	console.log(state, action);
	if (action.type == 'change_name') {
		return { ...state, name: action.name };
	} else if (action.type == 'add_number') {
		return { ...state, counter: action.counter + action.num };
	}
	return state;
}
// 创建的store
const store = createStore(reducer);

module.exports = store;
