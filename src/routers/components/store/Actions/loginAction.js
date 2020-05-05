import firebase,{googleAuthProvider} from "../../../../firebase/firebas"
export const login=()=>{
    return () =>{
        return firebase.auth().signInWithRedirect(googleAuthProvider)
    }
}

export const logout=()=>{
    return () =>{
        return firebase.auth().signOut();
    }
}

export const startLogin=(uid)=>{
    return{
        type:"LOGIN",
        uid
    }
}

export const startLogout=()=>{
    return{
        type:"LOGOUT"
    }
}