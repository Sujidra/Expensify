import React from "react";
import {connect} from "react-redux"
import { ReactReduxContext } from "react-redux";
import  ExpenseDisplay from "./ExpenseDisplay"
import {getVisibleExpence} from "./store/selectors/visibleExpense.js"
import {setText,setStartDate,setEndDate,setSortBy} from "./store/Actions/filterActions"
import {DateRangePicker } from "react-dates"

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
        return(
            <div>
                <div>
                    <input type="text" value={this.props.filter.text} onChange={(e)=>{
                        this.props.dispatch(setText({text:e.target.value}))}}>
                    </input>
                    <DateRangePicker 
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatechange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onfocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                        
                    <select value={this.props.filter.sortBy} onChange={(e)=>{
                    this.props.dispatch(setSortBy({sortBy:e.target.value}))}}>
                    <option value="Date">Date</option>     
                    <option value="Amount">Amount</option>       
                    </select>
                </div>
                <h1>Expense List</h1>
                <div>{visibility.map((expense)=>{
                    return <ExpenseDisplay key={expense.id}{...expense} />})}</div>
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
