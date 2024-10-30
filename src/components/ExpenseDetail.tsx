import { Expense } from '../types/index';
import { formatDate } from '../helpers/index';
import AmountDisplay from './AmountDisplay';
import { useMemo } from 'react';
import { categories } from '../data/categories';

import{ LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

type ExpenseDetailProps ={
    expense: Expense
}

const ExpenseDetail = ({expense} : ExpenseDetailProps) => {

  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0],[expense])
  const leadingActions = () => {
    <LeadingActions>
      <SwipeAction
        onClick={()=>{}}
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  }

  const trailingActions = () => {
    <LeadingActions>
      <SwipeAction
        onClick={()=>{}}
      >
        Eliminar
      </SwipeAction>
    </LeadingActions>
  }

  return (
    <SwipeableList>
      <SwipeanleListItem
        maxSwipe={30}
        LeadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center'>
            <div className=''>
              <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono-gasto" className="w-20" />
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                <p className=''>{expense.expenseName}</p>
                <p className='text-slate-600 text-sm'>{formatDate(expense.date!.toString())}</p>
            </div>
            <AmountDisplay
                amount={expense.amount}
            />
        </div>
      </SwipeanleListItem>
    </SwipeableList>
  )
}

export default ExpenseDetail