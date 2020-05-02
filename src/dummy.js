import {createStore} from "redux";
const store= createStore((state={count:0},action )=>{
    switch(action.type){
        case "INCREMENT":return { count: state.count+action.incrementBy}
        case "DECREMENT":return { count: state.count-action.decrementBy}
        case "RESET":return { count: 0}

        default : return state;
    }
    
}) 

const incre =({incrementBy = 1}={})=>{
    return{
        type:"INCREMENT",
        incrementBy:incrementBy
    }
}
const decre =({decrementBy = 1}={})=>{
    return{
        type:"DECREMENT",
        decrementBy:decrementBy
    }
}
const reset =()=>{
    return{
        type:"RESET",
    }
}
 store.subscribe(()=>{
    console.log(store.getState());    
 })  

store.dispatch(incre({incrementBy:10}))
store.dispatch(decre({decrementBy:5}))



store.dispatch({
    type:"RESET"
})


