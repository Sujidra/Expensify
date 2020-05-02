import React from "react";
import { BrowserRouter, Route, Switch,link, NavLink } from 'react-router-dom';
import Header from "./components/Header"
import ExpenseDashboardPage from "./components/ExpenseDashboardPage"
import AddExpensePage from "./components/AddExpensePage"
import ExpenseEditPage from "./components/ExpenseEditPage"
import HelpPage from "./components/HelpPage"
import Error from "./components/Error"

const Routes= () =>{
return (
    <BrowserRouter>
        <div>
            <Header />
        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={ExpenseEditPage} />
                <Route path="/help" component={HelpPage} />

                <Route component={Error} />
            </Switch>
        </div>
    </BrowserRouter>
)
};
export default Routes;