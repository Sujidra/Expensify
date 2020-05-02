const defaultEXpense = []
const ExpenseReducer =(state=defaultEXpense,action) =>{
    switch(action.type){
        case "ADD_EXPENSE":{
            let expobj={id:action.id,amt:action.amt,description:action.description,note:action.note,createdAt:action.createdAt}
            return [
                ...state,
                expobj
            ]
        }
        case "REMOVE_EXPENSE":{
            return state.filter(({id})=>{
                return id !==action.id
            })
        }
        case "EDITEXPENSE":{
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }
                
            }
            )
        }       
        default:return state;
    }
}

export default ExpenseReducer;