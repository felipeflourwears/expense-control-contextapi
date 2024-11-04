import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

const FilterByCategory = () => {
  
    const { dispatch } = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        dispatch({ type: 'add-filter-category', payload: {id: e.target.value} })
    }

    //console.log("Categorías disponibles:", categories);

    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form action="" className="">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category" className="">Filter Expenses</label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value="" className="">-- All Categories --</option>
                        {categories.map( category =>(
                            <option
                                value={category.id}
                                key={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByCategory