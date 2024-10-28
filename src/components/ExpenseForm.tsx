import { categories } from '../data/categories';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

const ExpenseForm = () => {

    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];  

    return (
        <form action="" className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-purple-500 py-2">
                New Expense
            </legend>

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Expense Name:
                </label>
                <input type="text" className="bg-slate-100 p-2" id="expenseName" placeholder="Add Expense Name:" name="expenseName"/>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Quantity: 
                </label>
                <input type="number" className="bg-slate-100 p-2" id="expenseName" placeholder="Add Quantity Expense Example: 300" name="amount"/>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Category: 
                </label>
                <select name="category" id="category" className="bg-slate-100 p-2">
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
                />
            </div>

            <input type="submit" className="bg-purple-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" value={'Register Expense'}/>
        </form>
    )
}

export default ExpenseForm