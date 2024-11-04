import { useMemo, useEffect } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"


const ExpenseList = () => {

    const { state } = useBudget()  
    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(()=> filteredExpenses.length === 0 , [filteredExpenses]) 

    useEffect(() => {
        console.log("Categoría actual:", state.currentCategory);
        console.log("Gastos filtrados:", filteredExpenses);
    }, [state.currentCategory, filteredExpenses]);
    


    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">There aren't expenses</p> :(
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">List of Expenses</p>
                    {filteredExpenses.map(expense =>(
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default ExpenseList