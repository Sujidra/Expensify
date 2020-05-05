import React from "react";
import { Router, Route, Switch,link, NavLink } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header"
import ExpenseDashboardPage from "./components/ExpenseDashboardPage"
import AddExpensePage from "./components/AddExpensePage"
import ExpenseEditPage from "./components/ExpenseEditPage"
import HelpPage from "./components/HelpPage"
import Error from "./components/Error"
import LoginPage from "./components/login";
import PrivateRoute from "./PrivateRoute"

export const history=createHistory();

const Routes= () =>{
return (
    <Router history={history}>
        <div>
                    
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute component={Error} />
            </Switch>
        </div>
    </Router>
)
};
export default Routes;