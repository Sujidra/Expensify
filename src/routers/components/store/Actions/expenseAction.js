import { v4 as uuid} from "uuid";
import firebase from  "../../../../../src/firebase/firebas"

export const addExpense =({id,amt,description,note,createdAt}={})=>{
    return{
        type:"ADD_EXPENSE",
        id,
        amt,
        description,
        note,
        createdAt
    }
}
export const startaddexpense=({amt,description,notes,createdAt}={})=>{
    const expense={
        description,
        amt,
        notes,
        createdAt
    }
    return(dispatch)=>{
        return firebase.database().ref("expenses").push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense}))
        })
    }
}
export const setExpense=(expense)=>{
return{
        type:"SET_EXPENSE",
        expense
    }
}

export const startSetExpense=()=>{
    const expenses=[]
    return (dispatch)=>{
        return firebase.database().ref("expenses").once("value").then((snapshot)=>{
            snapshot.forEach((childsnap) => {
                let expense={
                    id:childsnap.key,
                    ...childsnap.val()
                }
                expenses.push(expense)
            });
            dispatch(setExpense(expenses));
        })
    }
}

export const removeExpense =({id}={})=>
{
    return{
        type:"REMOVE_EXPENSE",
        id:id
    }
}
export const startremoveExpense =({id})=>{
    return(dispatch)=>{
        return firebase.database().ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    }
}

export const editExpense =(id,updates) =>{
    return {
        type:"EDITEXPENSE",
        id:id,
        updates
    }
}

export const starteditExpense =(id,updates)=>{
    return(dispatch)=>{
        return firebase.database().ref(`expenses/${id}`).update({...updates}).then(()=>{
            dispatch(editExpense(id,updates));
        })
    }
}

