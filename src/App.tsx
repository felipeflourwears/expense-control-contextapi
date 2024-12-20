import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import { useBudget } from "./hooks/useBudget"
import { useMemo, useEffect } from "react"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

  const { state } = useBudget()
  console.log(state)

  const isValidBudget = useMemo(()=> state.budget > 0 , [state.budget])

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
    localStorage.setItem('budget', state.budget.toString())
  },[state])

  useEffect(() => {
    console.log("Lista de gastos actualizada:", state.expenses);
  }, [state.expenses]);

  useEffect(() => {
    if(state.currentCategory === ''){
      console.log("ALL Categories")
    }else{
      console.log("Categoría actual:", state.currentCategory);
    }
  }, [state.currentCategory]);


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
          <FilterByCategory/>
          <ExpenseList/>
          <ExpenseModal/>
        </main>
      ) }
    </>
  )
}

export default App
