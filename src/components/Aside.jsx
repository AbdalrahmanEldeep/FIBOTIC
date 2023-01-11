import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SortSharpIcon from '@mui/icons-material/SortSharp';
import { AsideRes, BtnToggler } from '../global/Styles'
import LogoutIcon from '@mui/icons-material/Logout';
export const Aside = () => {
  const [asideResStatus,setAsideStatus] = useState(false);
  return (
   <AsideRes className='dark:bg-gray-800' left={asideResStatus ? "0" : "-100%"}>
    <BtnToggler className='text-white' onClick={() => setAsideStatus(!asideResStatus)}><SortSharpIcon fontSize='large'/></BtnToggler>
      <aside className="w-full" aria-label="Sidebar">
         <div className=" overflow-y-auto  bg-gray-50 dark:bg-gray-800">
         <div className='pb-24  bg-white text-gray-900'  style={{marginBottom:"50px"}}>
            <a href="#" className="w-full bg-gray-500 ">
               <span className=" text-center p-2 block font-bold text-xl">FIBOTIC-ADMINE</span>
            </a>
         </div>
            <ul className="space-y-2 px-3 py-4">
               <li>
                  <Link to="/admine/student" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                     <span className="flex-1 font-bold ml-3 whitespace-nowrap">Students</span>
                  </Link>
               </li>
               <li>
                  <Link to="/admine/stdgraph" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                     <span className="ml-3 font-bold">Info Graph</span>
                  </Link>
               </li>
            </ul>
            <ul className="pt-4 mt-4 px-3 py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
               <li>
                  <Link to="/admine/stdquizzes" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                     <span className="ml-3 font-bold">Quizzes</span>
                  </Link>
               </li>
               <li>
                  <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                     <span className="ml-3 font-bold">Help</span>
                  </a>
               </li>
               <li>
                  <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <LogoutIcon/>
                     <span className="ml-3 font-bold">Go out</span>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>

   </AsideRes>

  )
}
