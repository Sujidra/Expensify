import { connect } from "react-redux"
import React from "react";
import {Route,Redirect} from "react-router-dom"
import Header from "./components/Header"

const PublicRoute = (props)=>{
    
    return(
        props.isauth?<Redirect to="/dashboard"/>:<Route {...props}/> 
    )
}

const mapStateToProps = (state)=>{
    return{isauth:!!state.auth.uid}
}

export default connect(mapStateToProps)(PublicRoute)