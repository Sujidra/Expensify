import React from "react";
import {connect} from "react-redux"
import {startLogin} from "./store/Actions/loginAction"

const LoginPage =(props) =>{
    return(
        <button onClick={props.dispatch(startLogin)}>Login</button>
    )
}
export default connect()(LoginPage);