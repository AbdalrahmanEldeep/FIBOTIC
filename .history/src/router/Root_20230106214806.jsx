import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Protecter from '../pages/protecter'
import Aboute from '../pages/user'

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Protecter statuse={true}><Home/></Protecter>}/>
        <Route path="/exame" element={<Protecter statuse={false}><Aboute/></Protecter>}/>
        </Routes>
    </BrowserRouter>
  )
}
