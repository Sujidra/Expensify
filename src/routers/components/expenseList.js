import React from "react";
import {connect} from "react-redux"
import { ReactReduxContext } from "react-redux";
import { NavLink } from 'react-router-dom';
import  ExpenseDisplay from "./ExpenseDisplay"
import {getVisibleExpence} from "./store/selectors/visibleExpense.js"
import {getTotalExpense} from "./store/selectors/getTotalExpense.js"
import {setText,setStartDate,setEndDate,setSortBy} from "./store/Actions/filterActions"
import {DateRangePicker } from "react-dates"
import numeral from "numeral";

class ExpenseList extends React.Component{
state={
   calenderFocused:null
}
onDatechange=({startDate,endDate})=>{
this.props.dispatch(setStartDate({startDate}))
this.props.dispatch(setEndDate({endDate}))
}
onfocusChange=(focusedInput)=>{
    this.setState(()=>({calenderFocused:focusedInput}))
}
    
    render(){
        let visibility =getVisibleExpence(this.props.expenses,this.props.filter)
        let totalexpense=getTotalExpense(visibility);
        return(
            <div>
                <div className="subhead">
                    <h2>Viewing {visibility.length} expenses and its total is Rs.{numeral(totalexpense/100).format('0.00')} </h2>
                    <NavLink className="expensebutton" to="/create" activeClassName="is-active">Add Expense</NavLink>
        
                </div>
                <div className="expensefilter_container">
                    <div >
                        <input className="searchbox" placeHolder="Seach text" type="text" value={this.props.filter.text} onChange={(e)=>{
                            this.props.dispatch(setText({text:e.target.value}))}}>
                        </input>
                    </div>
                    <div>
                        <DateRangePicker 
                        startDate={this.props.filter.startDate}
                        endDate={this.props.filter.endDate}
                        onDatesChange={this.onDatechange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onfocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        />
                    </div>
                    <div>    
                        <select className="sortbox" value={this.props.filter.sortBy} onChange={(e)=>{
                        this.props.dispatch(setSortBy({sortBy:e.target.value}))}}>
                        <option value="Date">Date</option>     
                        <option value="Amount">Amount</option>       
                        </select>
                    </div>
                    
                </div>
                <h1>Expense List</h1>
                <div>{visibility.map((expense)=>{
                    return <ExpenseDisplay key={expense.id}{...expense} />})}
                </div>
            </div>
    
        )
    }
    
};
const mapStateToProps= (state)=>{
    return {
        expenses:state.expense,
        filter:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)
