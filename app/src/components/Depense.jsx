function Depense({name, montant, categorie, func}){
    return(
        <div className="depense">
            <li><strong>{name}</strong> - {montant}€ ({categorie})</li>
            <button className="supp" onClick={func}>Supprimer</button>
        </div>
    )
}

export default Depense