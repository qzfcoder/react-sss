import { ADD_NUMBER, DEL_NUMBER } from "./constants";
export const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
export const delNumberAction = (num) => ({
  type: DEL_NUMBER,
  num,
});
