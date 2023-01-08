import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Protecter from '../pages/protecter'
import Aboute from '../pages/exame'
import SAuth from '../pages/SAuth'
import AdmineAuth from '../pages/admineAuth'
import { useAuth } from '../context/ContextProvider'
import SLogin from '../pages/SLogin'
import { NOTFOUND } from '../pages/404'

export const Root = () => {
  const {users} = useAuth();

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Protecter statuse={true}><Home/></Protecter>}/>
            <Route path="*" element={<Protecter statuse={true}><NOTFOUND/></Protecter>}/>
            <Route path="/exame" element={<Protecter statuse={true}><Aboute/></Protecter>}/>
            <Route path="/student" element={<Protecter statuse={users.std_status}><SAuth/></Protecter>}/>
            <Route path="/student/login" element={<Protecter statuse={true}><SLogin/></Protecter>}/>
            <Route path="/admineAuth" element={<Protecter statuse={true}><AdmineAuth/></Protecter>}/>
        </Routes>
    </BrowserRouter>
  )
}
