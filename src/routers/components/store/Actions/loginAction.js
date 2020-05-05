import firebase,{googleAuthProvider} from "../../../../firebase/firebas"
export const startLogin=()=>{
    return () =>{
        return firebase.auth().signInWithRedirect(googleAuthProvider)
    }
}

export const logout=()=>{
    return () =>{
        return firebase.auth().signOut();
    }
}