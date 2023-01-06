import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protecter({statuse,children}) {
    const navigate = useNavigate();

    if(!statuse){
        return <navigate to="/"/>
    }else{
        return({children})
    }
}
