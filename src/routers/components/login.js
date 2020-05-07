import React from "react";
import {connect} from "react-redux"
import {login} from "./store/Actions/loginAction"

const LoginPage =(props) =>{
    return(
        <div className="bg">
            <div className="loginbox">
                <h1 className="title">Expensify</h1>
                <p className="content">Its time to get your expenses under control</p>
                <button className="button"onClick={props.dispatch(login)}>Login with Google</button>
            </div>
                
        </div>
        
    )
}
export default connect()(LoginPage);