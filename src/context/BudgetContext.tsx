/*Body always same */

import { useReducer, createContext, ReactNode, useMemo } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer"


type BudgetContextProps = {
    state: BudgetState 
    dispatch: React.Dispatch<BudgetActions>
    totalExpense: number,
    availableExpense: number
}

type BudgetProviderProps = {
    children: ReactNode
}

const BudgetContext = createContext<BudgetContextProps>(null!)

const BudgetProvider = ({children} : BudgetProviderProps) => {
    
    const [state, dispatch ] = useReducer(budgetReducer, initialState)
    const totalExpense = useMemo(()=> state.expenses.reduce((total, expense)=> expense.amount + total, 0) ,[state.expenses])
    const availableExpense = state.budget - totalExpense
  
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpense,
                availableExpense
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

export { BudgetProvider, BudgetContext };