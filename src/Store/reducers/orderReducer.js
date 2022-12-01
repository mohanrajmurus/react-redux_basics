import { ADD_ORDER, DELETE_ORDER } from "../actions/types";
const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, { ...action.payload, id: generateId(state) }];
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.payload);
    default:
      return state;
  }
};
const generateId = (orders) => {
  let id = 0;
  if (orders.length > 0) id = orders[orders.length - 1].id;
  return ++id;
};
export default orderReducer;
