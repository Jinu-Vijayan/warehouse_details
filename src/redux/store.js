import { combineReducers, createStore } from "redux";
import warehouseReducer from "./reducer";
import data from "../utils/data";

const rootReducer = combineReducers({
    warehouseData : warehouseReducer
})

const store = createStore(rootReducer,data);

export default store;