import useGestContext from "../context/GestContext"

function SelectedDep({id}){
    const { state, dispatch } = useGestContext();
    
    function SelectChange(event){
     const value = event.target.value
     dispatch({
        type : "SELECT_CAT",
        payload : value,
     })
    }
    
    return (
     <>
        <label htmlFor={id}>Catégorie/Type : </label>
        <select id={id} value={state.selectedCat} onChange={SelectChange}>
            <option value={""} disabled>---</option>
            {state.categories.map((cat, i) => (
                <option key={i} value={cat.label}>{cat.label}</option>
            ))}
        </select>
     </>
    )
    
}

export default SelectedDep