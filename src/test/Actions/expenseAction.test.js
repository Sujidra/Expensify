import {addExpense,removeExpense,editExpense} from "../../routers/components/store/Actions/expenseAction"
test(("sample"),()=>{
    const text="sample";
    expect(text).toBe("sample")
})

test(("should remove expense"),()=>{
    const result=removeExpense({id:1})
    expect(result).toEqual({
        type:"REMOVE_EXPENSE",
        id:1
    })
})

test(("should edit expense"),()=>{
    const id=1;
    const updates={description:"rent"}
    const result=editExpense(id,updates)
    expect(result).toEqual({
        type:"EDITEXPENSE",
        id:1,
        updates:updates
    })
})

test(("should add expense"),()=>{
    const result=addExpense()
    expect(result).toEqual(
        {
            type:"ADD_EXPENSE",
            id:expect.any(String),
            amt:undefined,
            description:undefined,
            note:undefined,
            createdAt:undefined
        }
    )
})
test(("should add expense"),()=>{
    const result=addExpense({amt:400,description:"rent",createdAt:1000})
    expect(result).toEqual(
        {
            type:"ADD_EXPENSE",
            id:expect.any(String),
            amt:400,
            description:"rent",
            note:undefined,
            createdAt:1000
        }
    )
})
