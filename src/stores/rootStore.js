import { configureStore,applyMiddleware, MiddlewareArray } from "@reduxjs/toolkit";

//configurestore is A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience.
//Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.


//In Redux, you use the store to manage and track the data that's changing in the application.
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";//out actions can be asynchronous with its help
const store=configureStore({reducer:rootReducer},applyMiddleware(thunk));
export default store;