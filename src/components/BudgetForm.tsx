import { useMemo, useState } from "react"



const BudgetForm = () => {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setBudget(+e.target.value)
    }

    const isValid = useMemo(()=>{
        return isNaN(budget) || budget <= 0
    }, [budget])

    return (
        <form action="" className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-purple-700 font-bold text-center">
                    Define Budget
                </label>
            </div>
            <input
                id="budget"
                type="number" 
                className="w-full bg-white border border-gray-200 p-2" 
                placeholder="Define your budget" 
                name="budget"
                value={budget}
                onChange={handleChange}
            />
            <input 
                type="submit" 
                className="bg-purple-700 hover:bg-purple-900 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40" 
                value="Define Budget"
                disabled={isValid}
            />
        </form>
    )
}

export default BudgetForm