import firebase,{googleAuthProvider} from "../../../../firebase/firebas"
export const startLogin=()=>{
    return () =>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logout=()=>{
    return () =>{
        return firebase.auth().signOut();
    }
}