import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import loginReducer from "./Page/Login/reducer";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ loginReducer });
const configureStore = () => createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
