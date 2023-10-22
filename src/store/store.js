import { restReducer } from "../reducer/reducer"

const { createStore, combineReducers, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")


//reducer define to combine reducers(key and value same)
const reducers=combineReducers({
    restReducer
})
//middleware(to convert synshrous redux to asynchronus redux)
const middleware=[thunk]


//create store
const store=createStore(reducers,applyMiddleware(...middleware))

//export stor
export default store
