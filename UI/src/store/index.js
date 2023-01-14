import {applyMiddleware, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "./reducer"

const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;