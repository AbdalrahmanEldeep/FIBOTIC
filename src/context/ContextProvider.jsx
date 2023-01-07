import { createContext, useContext, useReducer } from "react";
import { customState, dbController } from "./Reducers";




const GlobalState = createContext();


export const GlobalProvider = ({children}) => {
const [state,dispatch] = useReducer(dbController,customState);
 return (
    <GlobalState.Provider value={{users:state,dispatch}}>
        {children}
    </GlobalState.Provider>
  )
}


export const useAuth = () =>{
    return useContext(GlobalState);
} 