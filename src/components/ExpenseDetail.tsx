import { Expense } from '../types/index';
import { formatDate } from '../helpers/index';
import AmountDisplay from './AmountDisplay';

type ExpenseDetailProps ={
    key: string
    expense: Expense
}

const ExpenseDetail = ({key, expense} : ExpenseDetailProps) => {
  return (
    <div className='bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center'>ExpenseDetail
        <div className=''>

        </div>
        <div className="">
            <p className='text-slate-600 text-sm'>{expense.expenseName}</p>
            <p className='text-slate-600 text-sm'>{formatDate(expense.date!.toString())}</p>
        </div>
        <AmountDisplay
            amount={expense.amount}
        />
    </div>
  )
}

export default ExpenseDetail