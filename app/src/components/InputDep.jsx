import useGestContext from "../context/GestContext";

function InputDep({ label, type, placeholder, id }) {
    const { state, dispatch } = useGestContext();
  
    function InputChange(e){
      dispatch({
        type: "UPDATE_INPUT",
        payload: { id, value: e.target.value },
      });
    };
  
    return (
      <>
        <label htmlFor={id}>{label} : </label>
        <input id={id} type={type} placeholder={placeholder} value={state[id] || ""} onChange={InputChange}/>
      </>
    );
  }
  
  export default InputDep;