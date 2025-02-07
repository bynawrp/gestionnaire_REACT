import { useState } from "react";
import AddDep from "./AddDep";
import ListeDep from "./ListeDep";

function Gestionnaire() {
  const [showAdd, setShowAdd] = useState(true);

  return (
    <>
      <nav className="nav-header">
        <a href="#" onClick={() => setShowAdd(true)}>Ajouter une dépense</a>
        <a href="#" onClick={() => setShowAdd(false)}>Liste des dépenses</a>
      </nav>

      {showAdd ? <AddDep /> : <ListeDep />}
    </>
  );
}

export default Gestionnaire;
