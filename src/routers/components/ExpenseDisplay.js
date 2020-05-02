import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";


const ExpenseDisplay =({dispatch,id,description,amt,createdAt}) =>{
    return (
        <div>
            <p><Link to ={`/edit/${id}`}> {description}</Link><br></br>Amount:{amt}<br></br>CreateAt:{createdAt}</p>
            
        </div>
    )
    
}
export default connect()(ExpenseDisplay)