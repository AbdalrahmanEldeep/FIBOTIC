import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Protecter from '../pages/protecter'
import Aboute from '../pages/exame'
import Student from '../pages/student'

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Protecter statuse={true}><Home/></Protecter>}/>
            <Route path="/exame" element={<Protecter statuse={true}><Aboute/></Protecter>}/>
            <Route path="/student" element={<Protecter statuse={true}><Student/></Protecter>}/>
        </Routes>
    </BrowserRouter>
  )
}
