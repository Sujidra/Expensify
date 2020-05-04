import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment"

const ExpenseDisplay =({dispatch,id,description,amt,createdAt}) =>{
    return (
        <div>
            <Link to ={`/edit/${id}`}> {description}</Link>
            <p>Rs.{numeral(amt/100).format('Rs0.00')} on {moment(createdAt).format("MMMM Do, YYYY")}
            </p>
            
        </div>
    )
    
}
export default connect()(ExpenseDisplay)