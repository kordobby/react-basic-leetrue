import { createStore } from "redux";
import { combineReducers } from "redux";
import centerModal from "../modules/centerModal";

const rootReducer = combineReducers({
  centerModal: centerModal,
});
const store = createStore(rootReducer);

export default store;
