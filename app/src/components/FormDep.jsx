import InputDep from "./InputDep"
import SelectedDep from "./SelectedDep"

import useGestContext from "../context/GestContext";

function FormDepense(){
    const { state, dispatch } = useGestContext();

    function addDepense(){
        if (state.name || state.montant || state.selectedCat) {
            if(parseInt(state.montant) < 0){
                alert("Le montant ne doit pas etre négatif !");
                dispatch({ type: "UPDATE_INPUT", 
                    payload: { id: "montant", 
                    value: "" } 
                });
                return;
            }
        }else{
            alert("Tous les champs doivent être remplis !");
            return;
        }

        const depense = {name : state.name, montant: state.montant, categorie: state.selectedCat};
    
        dispatch({ 
            type: "ADD_DEP", 
            payload: depense 
        });
    
        dispatch({ 
            type: "UPDATE_INPUT", 
            payload: { id: "name", value: "" } 
        });

        dispatch({ type: "UPDATE_INPUT", 
            payload: { id: "montant", 
            value: "" } 
        });

        dispatch({ type: "UPDATE_INPUT", 
            payload: { id: "selectedCat", 
            value: "" } 
        });
    }

    return(
        <>
            <InputDep id={"name"} type={"text"} label={"Nom de la dépense"} placeholder={"ex : Voiture, Frigo etc..."}/>
            <br/>
            <InputDep id={"montant"} type={"number"} label={"Montant de la dépense"} placeholder={"ex : 10, 22, 33.2 etc... (€)"}/>
            <br/>
            <SelectedDep id={"select"}/>
            <br/>
            <button onClick={addDepense}>Ajouter</button>
        </>
    )
}

export default FormDepense