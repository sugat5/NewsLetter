import {combineReducers} from "redux"
import { subscribeReducer } from "./subscriptionForm/reducer"

export const rootReducer=combineReducers({subscribe:subscribeReducer})