import moment from"moment"
export const getVisibleExpence=(expenses,{text,startDate,endDate,sortBy})=>{
    return expenses.filter((expense)=>{
        console.log(endDate.isSameOrAfter(moment(expense.createdAt),'day'))
        const startDateMatch=startDate? startDate.isSameOrBefore(moment(expense.createdAt),'day'):true
        const endDateMatch=endDate? endDate.isSameOrAfter(moment(expense.createdAt),'day'):true
        const textMatch=expense.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==="Date"){
            return a.createdAt<b.createdAt? 1 :-1;
        }else if(sortBy==="Amount"){
            return a.amt<b.amt? 1 :-1;
        }
    })
}
