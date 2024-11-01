import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"


const ExpenseList = () => {

  const { state } = useBudget()  
  const isEmpty = useMemo(()=> state.expenses.length === 0 , [state.expenses]) 
  return (
    <div className="mt-10">
        {isEmpty ? <p className="text-gray-600 text-2xl font-bold">There aren't expenses</p> :(
            <>
                <p className="text-gray-600 text-2xl font-bold my-5">List of Expenses</p>
                {state.expenses.map(expense =>(
                    <ExpenseDetail
                        expense={expense}
                    />
                ))}
            </>
        )}
    </div>
  )
}

export default ExpenseList