import {createContext, useContext} from "react";
import useGestReducer from "../reducer/GestReducer.jsx";

const GestContext = createContext()

export function GestProvider({children}){
    const [state, dispatch] = useGestReducer();
    return <GestContext.Provider value={{state, dispatch}}>{children}</GestContext.Provider>
}

function useGestContext(){
    return useContext(GestContext)
}

export default useGestContext