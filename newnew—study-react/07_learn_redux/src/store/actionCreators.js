// actionCreators：帮我们创建action
const { ADD_NUMBER, CHANGE_NAME } = require('./constants');

const changeNameAction = (name) => {
	return {
		type: CHANGE_NAME,
		name: name
	};
};
const changeNumAction = (num) => {
	return {
		type: ADD_NUMBER,
		num: num
	};
};

module.export = {
	changeNameAction,
	changeNumAction
};
