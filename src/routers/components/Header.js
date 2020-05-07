import React from "react";
import { NavLink } from 'react-router-dom';
import {logout} from "./store/Actions/loginAction"
import {connect} from "react-redux"

const Header = (props) =>(
    <div className="header">
        <NavLink class="headtitle" to="/dashboard" activeClassName="is-active">Expensify</NavLink>
        <button className="logout" onClick={props.dispatch(logout)}>Logout</button>
    </div>
    
);
export default connect()(Header);