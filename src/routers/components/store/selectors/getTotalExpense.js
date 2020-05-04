const getTotalExpense=(expenses)=>{
    let i,total=0;
    for(i=0;i<expenses.length;i++){
        total=total+expenses[0].amt;
        //total=expenses[1].amount+total;
    }
    return total;
}
export { getTotalExpense}