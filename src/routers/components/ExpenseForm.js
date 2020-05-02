import React from "react";
import moment from "moment";
import {SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:(props.expense)?props.expense.description:" ",
            amt:(props.expense)?(props.expense.amt/100).toString():"",
            notes:(props.expense)?props.expense.notes:"",
            createdAt:(props.expense)?moment(props.expense.createdAt):moment(),
            calenderFocus: false,
            error:" "
        }
    }
    
    ondescriptionChange=(e)=>{
        const des=e.target.value;
        this.setState(()=>{
            return {description:des}
        })
    }
    onAmtChange=(e)=>{
        const amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/))
        this.setState(()=>{
            return {amt:amount}
        })
    }
    onNotesChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>{
            return {notes:note}
        })
    }
    onDateChange=(createdAt)=>{

        this.setState(()=>{
            return {createdAt}
        })
    }
    onFocusChange=({focused})=>{

        this.setState(()=>({calenderFocus:focused}));
            
        
    };
    onSubmitFunc=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amt){
            this.setState(()=>{
                return {error:"Please provise description and amount"}
            })
        }else{
            this.setState(()=>{
                return {error:" "}
            })
            this.props.onSubmit({
                description:this.state.description,
                amt:parseFloat(this.state.amt,10)*100,
                notes:this.state.notes,
                createdAt:this.state.createdAt.valueOf(), 
            })
        }
    }
    render(){
        
        return(
            <form onSubmit={this.onSubmitFunc}>
                {(this.state.error) && <p>{this.state.error}</p>}
                <input type="text" value={this.state.description} onChange={(e)=>{this.ondescriptionChange(e)}} />
                <input type="number" value={this.state.amt} onChange={(e)=>{this.onAmtChange(e)}}/>
                <textarea value={this.state.notes} onChange={(e)=>{this.onNotesChange(e)}}></textarea>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocus}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
                <button value="submit">{this.props.expense?<p>Update Expense</p>:<p>Add Expense</p>}</button>
            </form>
        )
        
    }
}
export default ExpenseForm;