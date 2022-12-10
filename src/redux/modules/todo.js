// action
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

// create action
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

/*
id : 0. 1. 2. 
title :
contents :
isDone:
 */

const initialState = [];

const todo = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_TODO: // payload : 객체
      return [...state, action.payload];
    case DEL_TODO: // payload : 숫자만 보내주면 됨
      const newData = state.filter((value, index) => {
        return value.id !== action.payload;
      });
      return newData;
    default:
      return state;
  }
};

export default todo;
