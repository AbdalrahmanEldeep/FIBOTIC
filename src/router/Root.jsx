import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'
import Protecter from '../pages/protecter'
import Aboute from '../pages/exame'
import SAuth from '../pages/SAuth'
import AdmineAuth from '../pages/admineAuth'
import { useAuth } from '../context/ContextProvider'
import SLogin from '../pages/SLogin'
import { NOTFOUND } from '../pages/404'
import AdminePage from '../pages/admine'
import Users from '../pages/users'
import { FLEX } from '../global/Styles'
import { Aside } from '../components/Aside'

export const Root = () => {
  const {users} = useAuth();
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Protecter statuse={true}><Home/></Protecter>}/>
            <Route path="*" element={<Protecter statuse={true}><NOTFOUND/></Protecter>}/>
            <Route path="exame" element={<Protecter statuse={true}><Aboute/></Protecter>}/>
            <Route path="student/login" element={users.std_status ? <Navigate to="/student" /> : <Protecter statuse={true}><SLogin/></Protecter>}/>
            <Route path="student" element={<Protecter statuse={users.std_status}><SAuth/></Protecter>}/>
            <Route  path="/admine" element={<Protecter statuse={users.adm_status}><AdminePage/></Protecter>}/>
            <Route path='/admine/stdgraph' element={<Protecter statuse={users.adm_status}><FLEX><Aside/><Users/></FLEX></Protecter>}/>
            <Route path="admineAuth/login" element={users.adm_status ? <Navigate to={"/admine"}/> : <Protecter statuse={true}><AdmineAuth/></Protecter>}/>
        </Routes>
    </BrowserRouter>
  )
}
