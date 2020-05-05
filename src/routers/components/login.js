import React from "react";
import {connect} from "react-redux"
import {login} from "./store/Actions/loginAction"

const LoginPage =(props) =>{
    return(
        <button onClick={props.dispatch(login)}>Login</button>
    )
}
export default connect()(LoginPage);