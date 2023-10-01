import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import modalsReducer from "../reducers/modalsReducer";


const rootReducer = combineReducers({
  modals: modalsReducer,
});
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export type AppDispatch = typeof store.dispatch
export default store;
