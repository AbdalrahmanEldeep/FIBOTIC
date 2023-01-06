import React from 'react'
import { Navigate  } from 'react-router-dom'

export default function Protecter({statuse,children}) {

    if(!statuse){
       <Navigate to="/"/>
    }else{
        return children
    }
}
