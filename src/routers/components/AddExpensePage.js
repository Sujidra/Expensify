import React from "react";
import ExpenseForm from "./ExpenseForm"
import {connect} from "react-redux"
import {startaddexpense} from "./store/Actions/expenseAction"
const AddExpensePage = (props) =>(
    <div>
        <p>this create page</p>
        <ExpenseForm onSubmit={(expense)=>{props.dispatch(startaddexpense(expense))
        props.history.push("/")}}/>
    </div>
);

export default connect()(AddExpensePage);