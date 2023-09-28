import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    // here will be our reducers (each in his own folder)
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
});

export default store
