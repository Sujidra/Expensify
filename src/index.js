
import React from "react";
import ReactDOM from "react-dom";
import Routes,{history} from "./routers/Approuter"
import {Provider} from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {addExpense,removeExpense,editExpense} from "./routers/components/store/Actions/expenseAction";
import {setText,setStartDate,setEndDate,setSortBy} from "./routers/components/store/Actions/filterActions"
import {startSetExpense} from "./routers/components/store/Actions/expenseAction"
import firebase,{googleAuthProvider} from "./firebase/firebas"
import storeConfig from "./routers/components/store/store_config";
import {getVisibleExpence} from "./routers/components/store/selectors/visibleExpense"
import "./firebase/firebas";
import {startLogin,startLogout} from "./routers/components/store/Actions/loginAction"


const store=storeConfig();

store.subscribe(()=>{
    let storeobj=store.getState();
    let visibility =getVisibleExpence(storeobj.expense,storeobj.filters)
    
})



let hasRendered =false;
const render = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById("app"));
        hasRendered=true;
    }
}


const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(<p>Loading</p>,document.getElementById("app"))


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startLogin(user.uid));
        store.dispatch(startSetExpense()).then(()=>{
            render();
        })
        if(history.location.pathname==="/"){
            history.push("/dashboard");
        }
        
    }else{
        store.dispatch(startLogout());
        render();
        history.push("/");
    }
})
