const store = require("./store");

console.log(store.getState());

// 修改store中的数据,必须要使用action来修改
const nameAction = { type: "change_name", name: "kobe" };
store.dispatch(nameAction);
console.log("ending", store.getState());
