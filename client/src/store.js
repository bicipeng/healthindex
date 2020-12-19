//create store in redux https://redux.js.org/recipes/configuring-your-store
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}
const middleware = [thunkMiddleware]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export default store;