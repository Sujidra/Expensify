import {createStore,combineReducers,applyMiddleware} from "redux";
import ExpenseReducer from "./Reducers/expenseReducer"
import filterReducer from "./Reducers/filterReducer"
import loginReducer from "./Reducers/loginReducer"
import thunk from "redux-thunk"


const storeConfig = ()=>{
    const store=createStore(combineReducers({
        expense:ExpenseReducer,
        filters:filterReducer,
        auth:loginReducer
    }),
    applyMiddleware(thunk));
    return store;
}

export default storeConfig;
