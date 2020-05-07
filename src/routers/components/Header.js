import React from "react";
import { Link } from 'react-router-dom';
import {logout} from "./store/Actions/loginAction"
import {connect} from "react-redux"

const Header = (props) =>(
    <div className="header">
        <Link class="headtitle" to="/dashboard">Expensify</Link>
        <button className="logout" onClick={props.dispatch(logout)}>Logout</button>
    </div>
    
);
export default connect()(Header);