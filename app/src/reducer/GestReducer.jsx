import { useReducer } from "react";

const initialState = {
    liste_depenses: [],
    total_dep : 0,
    categories : [
        { label: "Alimentation", total: 0 },
        { label: "Logement", total: 0 },
        { label: "Transport", total: 0 },
        { label: "Divertissement", total: 0 },
        { label: "Santé", total: 0 },
        { label: "Éducation", total: 0 },
        { label: "Autres", total: 0 },
      ],
    selectedCat : "",
  };

  function calcTotalDepCat(liste_cat, liste_depenses) {
    liste_cat.forEach((cat) => {
      cat.total = 0;
    });
    
    liste_depenses.forEach((dep) => {
        const categorie = liste_cat.find((cat) => cat.label === dep.categorie);
        if (categorie) {
          categorie.total += parseFloat(dep.montant) || 0;
        }
    });
    return liste_cat
}

  function calcTotalDep(liste_depenses) {
    return liste_depenses.reduce((sum, dep) => sum + parseFloat(dep.montant) || 0, 0);
  }
  
  function deleteDep(liste_depenses, index){
    const newList = [...liste_depenses];
    newList.splice(index, 1);
    return newList;
  }

  function reducer(state, action) {
    switch(action.type){
        case "ADD_DEP":
            const newList = [...state.liste_depenses, action.payload];
            return {
              ...state,
              liste_depenses: newList,
              selectedCat: "",
              total_dep: calcTotalDep(newList),
              categories: calcTotalDepCat(state.categories, newList),
            }

        case "DELETE_DEP" :
            const newListDelete = deleteDep(state.liste_depenses, action.payload)
            return {
                ...state,
                liste_depenses: newListDelete,
                total_dep: calcTotalDep(newListDelete),
                categories: calcTotalDepCat(state.categories, newListDelete),
            }
    
        case "SELECT_CAT":
            return {
              ...state,
              selectedCat: action.payload,
            }
    
        case "UPDATE_INPUT":
            return {
              ...state,
              [action.payload.id]: action.payload.value,
            }
        
        default:
            return state;
    }
  }
  

  function useGestReducer(){
      return useReducer(reducer, initialState)
  }
  
  export default useGestReducer