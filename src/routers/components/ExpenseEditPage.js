import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux"
import {addExpense,removeExpense,editExpense} from "./store/Actions/expenseAction";

const ExpenseEditPage = (props) =>{
    console.log(props);
return(
    
    <div>
        <p>this edit page.the id id:{props.match.params.id}</p>
        <ExpenseForm expense={props.expense} onSubmit={(expense)=>{props.dispatch(addExpense(expense))
        props.history.push("/")}}/>
        <button  onClick={(e)=>{props.dispatch(removeExpense({id:props.expense.id}));
        props.history.push("/")}}>Remove</button>
    </div>
    )
}
const mapStateToPraops=(state,props)=>{
    return {expense:state.expense.find((expen)=>{
        return expen.id===props.match.params.id;
    })}
}
export default connect(mapStateToPraops)(ExpenseEditPage);