import { createStore } from "redux";
import { combineReducers } from "redux";
import centerModal from "../modules/centerModal";
import todo from "../modules/todo";
const rootReducer = combineReducers({
  centerModal: centerModal,
  todo: todo,
});
const store = createStore(rootReducer);

export default store;
