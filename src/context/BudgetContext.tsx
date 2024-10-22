import { useReducer, createContext, ReactNode } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../components/reducers/budget-reducer"


type BudgetContextProps = {
    state: BudgetState 
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

const BudgetContext = createContext<BudgetContextProps>(null!)

const BudgetProvider = ({children} : BudgetProviderProps) => {
    
    const [state, dispatch ] = useReducer(budgetReducer, initialState)
  
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}

export { BudgetProvider, BudgetContext };