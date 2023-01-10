import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { Aside } from "../components/Aside";
import { useAuth } from "../context/ContextProvider";

export default function AdminePage() {

 const  {dispatch} = useAuth();
  useEffect(() => {
     const {currentUser} = getAuth();
     if(!currentUser.email.startsWith("admine") & !currentUser){
        dispatch({
            type: "ADM_STATUS",
            act: false,
        });
     }else{
      dispatch({
        type: "ADM_STATUS",
        act: true,
      });
     }
  },[])
  return (
    <div>
      <Aside/>
    </div>
  )
}
