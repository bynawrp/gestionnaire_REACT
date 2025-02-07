import useGestContext from "../context/GestContext";
import { useState } from "react";
import Depense from "./Depense";

function ListeDep() {
  const { state, dispatch } = useGestContext();
  const [showDetails, setShowDetails] = useState(false);

  function deleteDepense(index) {
    console.log(index);
    dispatch({ 
        type: "DELETE_DEP", 
        payload: index 
    });
  };

  return (
    <div className="container">
      <h2>Liste des Dépenses</h2>
      {state.liste_depenses.length === 0 ? (
        <span>Aucune dépense enregistrée.</span>
      ) : (
        <>
          <ul>
            {state.liste_depenses.map((depense, i) => (
              <Depense key={i} name={depense.name} montant={depense.montant} categorie={depense.categorie} func={()=>{deleteDepense(i)}}/>
            ))}
          </ul>
          <div className="total">
            <span><strong>Total des dépenses: </strong>{state.total_dep.toFixed(2)}€</span>
            <button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Masquer" : "Détails"}
            </button>
          </div>

          {showDetails && (
            <div className="details">
              <h3>Total par catégorie :</h3>
              <ul>
                {state.categories.map((cat, i) => (
                  cat.total > 0 ? (
                    <li key={i}>
                      <strong>{cat.label}</strong> : {cat.total.toFixed(2)}€
                    </li>
                  ) : null
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListeDep;