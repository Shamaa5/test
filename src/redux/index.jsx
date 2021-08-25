import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {reduser} from "./reduser";


const logger = createLogger({
    diff: true,
    collapsed: true,
})
export const store = createStore(reduser, applyMiddleware(logger))

