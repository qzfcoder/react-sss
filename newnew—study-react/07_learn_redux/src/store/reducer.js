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
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.name };
		case ADD_NUMBER:
			return { ...state, counter: state.counter + action.num };
		default:
			return state;
	}
}

module.export = reducer;
