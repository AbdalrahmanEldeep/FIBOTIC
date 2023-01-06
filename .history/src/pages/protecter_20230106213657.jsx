import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protecter({statuse}) {
    const navigate = useNavigate();

    if(!statuse){
        return 
    }
}
