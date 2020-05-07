import React from "react";
import ExpenseForm from "./ExpenseForm";
import {connect} from "react-redux"
import {starteditExpense,startremoveExpense,editExpense} from "./store/Actions/expenseAction";

const ExpenseEditPage = (props) =>{
    
return(
    
    <div>
        <p className="addsubhead">Edit Expense</p>
        <ExpenseForm expense={props.expense} onSubmit={(expense)=>{props.dispatch(starteditExpense(props.expense.id,expense))
        props.history.push("/")}}/>
        <button  className="addexpense" onClick={(e)=>{props.dispatch(startremoveExpense({id:props.expense.id}));
        props.history.push("/")}}>Remove Expense</button>
    </div>
    )
}
const mapStateToPraops=(state,props)=>{
    return {expense:state.expense.find((expen)=>{
        return expen.id===props.match.params.id;
    })}
}
export default connect(mapStateToPraops)(ExpenseEditPage);