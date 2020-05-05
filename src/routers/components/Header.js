import React from "react";
import { NavLink } from 'react-router-dom';
import {logout} from "./store/Actions/loginAction"
import {connect} from "react-redux"

const Header = (props) =>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active">Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <button onClick={props.dispatch(logout)}>Logout</button>
    </div>
    
);
export default connect()(Header);