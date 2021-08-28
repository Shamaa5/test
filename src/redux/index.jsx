import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {reduser} from "./reduser";
import thunk from "redux-thunk";


const logger = createLogger({
    diff: true,
    collapsed: true,
})
export const store = createStore(reduser, applyMiddleware(thunk,logger))

