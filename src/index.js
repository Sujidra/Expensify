
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routers/Approuter"
import {Provider} from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {addExpense,removeExpense,editExpense} from "./routers/components/store/Actions/expenseAction";
import {setText,setStartDate,setEndDate,setSortBy} from "./routers/components/store/Actions/filterActions"
import storeConfig from "./routers/components/store/store_config";
import {getVisibleExpence} from "./routers/components/store/selectors/visibleExpense"

const store=storeConfig();

store.subscribe(()=>{
    let storeobj=store.getState();
    let visibility =getVisibleExpence(storeobj.expense,storeobj.filters)
    console.log(visibility);
})

const e1 =store.dispatch(addExpense({amt:500,description:"coffee",createdAt:1000}))
const e2 = store.dispatch(addExpense({amt:590,description:"grocery",createdAt:100}))
const e3 = store.dispatch(addExpense({amt:570,description:"rent",createdAt:2000}))
//store.dispatch(removeExpense({id:e2.id}))
console.log("hiiiiisuji4")
store.dispatch(editExpense(e3.id,{amt:340}))
//store.dispatch(setText({text:"grocery"}))
//store.dispatch(setStartDate({startDate:1000}))
//store.dispatch(setSortBy({sortBy:"Date"}))
//console.log(store.getState())
const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)



ReactDOM.render(jsx,document.getElementById("app"))