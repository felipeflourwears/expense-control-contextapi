import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import { useBudget } from "./hooks/useBudget"
import { useMemo } from "react"
import ExpenseModal from "./components/ExpenseModal"

function App() {

  const { state } = useBudget()
  console.log(state)

  const isValidBudget = useMemo(()=> state.budget > 0 , [state.budget])

  return (
    <>
      <header className="bg-purple-800 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Expense Control
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ?(
          <BudgetTracker/>
        ):(
          <BudgetForm/>
        )}
        
      </div>
      {isValidBudget &&(
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal/>
        </main>
      ) }
    </>
  )
}

export default App
