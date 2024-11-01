import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetTracker = () => {

    const { state, totalExpense, availableExpense, dispatch } = useBudget()

    const percentage = +((totalExpense / state.budget) * 100).toFixed(2)
    console.log(percentage)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center'>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626' : '#7e22ce',
                        trailColor:'#F5F5F5',
                        textSize: 8,
                        textColor: percentage === 100 ? '#DC2626' : '#7e22ce'
                    })}
                    text={`${percentage}% Spent`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type='button'
                    className="bg-[#DC2626] w-full p-2 text-white uppercase font-bold rounded-lg hover:bg-purple-600"
                    onClick={()=>  dispatch({type: 'reset-app' })}
                >
                    Reset App
                </button>
                <AmountDisplay 
                    label="Budget"
                    amount={state.budget}
                />
                <AmountDisplay 
                    label="Avalaible"
                    amount={availableExpense}
                />
                <AmountDisplay 
                    label="Spent"
                    amount={totalExpense}
                />
            </div>
        </div>
    )
}

export default BudgetTracker