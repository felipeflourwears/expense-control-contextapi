import { categories } from '../data/categories';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { useState, useEffect } from 'react';
import { DraftExpense, Value } from '../types';
import ErrorMessage from './ErrorMessage';
import { useBudget } from '../hooks/useBudget';


const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()

    })

    const [error, setError] = useState('')
    const [previousAmount, setPreviousAmount] = useState(0)
    const { dispatch, state, availableExpense } = useBudget()

    useEffect(() => {
        if(state.editingId){
          const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0]
          setExpense(editingExpense)
          setPreviousAmount(editingExpense.amount)
        }
    }, [state.editingId])

    const handleChangeDate = (value : Value) =>{
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name)
        //console.log(isAmountField)
        setExpense({
            ...expense,
            [name] : isAmountField ? +value : value
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //Validation
        if(Object.values(expense).includes('')){
            console.log("Error...")
            setError("All fields are required")
            return
        }else{
            console.log("Todo OK")
        }

        if((expense.amount - previousAmount) > availableExpense){
            setError("You exceeded your budget")
            return
        }

        if(state.editingId){
            dispatch({type: 'update-expense', payload:{
                expense:{
                    id: state.editingId,
                    ...expense
                }
            }})
        }else{
            dispatch({ type: 'add-expense', payload: {
                expense
            }})
        }
        //Reset State
        setExpense({
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date()
        })
        //Reset Previous
        setPreviousAmount(0)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-purple-500 py-2">
                {state.editingId ? 'Edit Expense' : 'New Expense'}
            </legend>

            {error && (
                <ErrorMessage>{error}</ErrorMessage>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Expense Name:
                </label>
                <input type="text" className="bg-slate-100 p-2" id="expenseName" placeholder="Add Expense Name:" name="expenseName" value={expense.expenseName} onChange={handleChange}/>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Quantity: 
                </label>
                <input type="number" className="bg-slate-100 p-2" id="expenseName" placeholder="Add Quantity Expense Example: 300" name="amount" value={expense.amount} onChange={handleChange}/>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Category: 
                </label>
                <select name="category" id="category" className="bg-slate-100 p-2" value={expense.category} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    {categories.map( category => (
                        <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="dateExpense" className="text-xl">
                    Date Expense:
                </label>
                <DatePicker
                    className='bg-slate-100 p-2 border-0'
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

            <input type="submit" className="bg-purple-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" value={state.editingId ? 'Kept Changes' : 'New Expense'}/>
        </form>
    )
}

export default ExpenseForm