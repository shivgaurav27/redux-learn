import { createStore } from "redux";
import CakeReducer from "./cakes/CakeReducer";

const store = createStore(CakeReducer);
export default store;
