import { v4 as uuid} from "uuid";

export const addExpense =({amt,description,note,createdAt}={})=>{
    return{
        type:"ADD_EXPENSE",
        id:uuid(),
        amt,
        description,
        note,
        createdAt
    }
}
export const removeExpense =({id}={})=>
{
    return{
        type:"REMOVE_EXPENSE",
        id:id
    }
}
export const editExpense =(id,updates) =>{
    return {
        type:"EDITEXPENSE",
        id:id,
        updates
    }
}
