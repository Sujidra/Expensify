import {createStore,combineReducers} from "redux";
import ExpenseReducer from "./Reducers/expenseReducer"
import filterReducer from "./Reducers/filterReducer"


const storeConfig = ()=>{
    const store=createStore(combineReducers({
        expense:ExpenseReducer,
        filters:filterReducer
    }));
    return store;
}

export default storeConfig;
