import { ADD_NUMBER, DEL_NUMBER } from './constants';

const initialState = {
	counter: 100
};
export function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NUMBER:
			return { ...state, counter: state.counter + action.num };
		case DEL_NUMBER:
			return { ...state, counter: state.counter - action.num };
		default:
			return state;
	}
}
export default reducer;
