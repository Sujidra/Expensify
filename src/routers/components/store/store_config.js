import {createStore,combineReducers,applyMiddleware} from "redux";
import ExpenseReducer from "./Reducers/expenseReducer"
import filterReducer from "./Reducers/filterReducer"
import thunk from "redux-thunk"


const storeConfig = ()=>{
    const store=createStore(combineReducers({
        expense:ExpenseReducer,
        filters:filterReducer
    }),
    applyMiddleware(thunk));
    return store;
}

export default storeConfig;
