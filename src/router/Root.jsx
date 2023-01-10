import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
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
            <Route path="student" element={<Protecter statuse={users.std_status}><SAuth/></Protecter>}/>
            <Route path="student/login" element={<Protecter statuse={true}><SLogin/></Protecter>}/>
            <Route  path="/admine" element={<Protecter statuse={users.adm_status}><AdminePage/></Protecter>}/>
            <Route path='/admine/users' element={<Protecter statuse={users.adm_status}><FLEX><Aside/><Users/></FLEX></Protecter>}/>
            <Route path="admineAuth/login" element={<Protecter statuse={true}><AdmineAuth/></Protecter>}/>
        </Routes>
    </BrowserRouter>
  )
}
