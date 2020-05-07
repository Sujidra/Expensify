import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment"

const ExpenseDisplay =({dispatch,id,description,amt,createdAt}) =>{
    return (
        <div className="list">
            <div className="listitem">
                <Link className="itemtitle" to ={`/edit/${id}`}> {description}</Link>
                <p>{moment(createdAt).format("MMMM Do, YYYY")}</p>
            </div>
            <div className="amount">
                <p><b>Rs.{numeral(amt/100).format('Rs0.00')}</b></p>
            </div>
        </div>
    )
    
}
export default connect()(ExpenseDisplay)