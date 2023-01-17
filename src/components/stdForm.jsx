import React, { useEffect, useRef, useState } from 'react'
import {child, get, getDatabase, ref} from "firebase/database";
import { useAuth } from '../context/ContextProvider';

export const StdForm = () => {
    const [email,setEmail] = useState("");
    const EM = useRef();
    const [group,setGroup] = useState("");
    const GR = useRef();
    const [section,setSection] = useState("");
    const SEC = useRef();
    const [student_id,setStudent_ID] = useState();
    const IDES = useRef();
    const [collage,setCollage] = useState("");
    const COL = useRef();
    const [worng,setWorng] = useState("");
    const check = useRef();
    const {users,dispatch} = useAuth()



    useEffect(() => {
        return () =>{
            dispatch({
                type:"STD_STATUS",
                act:false
            })
        }
    },[])


  function groupHandeler({target}) {
    if(COL.current.value == "Collage"){
        setWorng("Please Select Your Collage")
        target.value="Group";
    }else{
        const dbRef = ref(getDatabase());
        setWorng("")
        get(child(dbRef, `users/${COL.current.value}/${GR.current.value}/`)).then((snapshot) => {
            if (snapshot.exists()) {
                dispatch({
                    type:"ADD_SEC",
                    sec:snapshot.val()
                })
            }else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
  }

  function send(e){
    e.preventDefault();
    const regexEmailPattern = /^[a-z/.]+@ejust.edu.eg$/g;


    if(!regexEmailPattern.test(EM.current.value)){
        setWorng("Please Enter Valid Email not contain numbers ending with @ejust.edu.eg")
        EM.current.focus();
    }else if(COL.current.value == "Collage"){
        setWorng("Please Select Your Collage")
    }else if(GR.current.value =="Group"){
        setWorng("Please Select Your Group")
    }else if(SEC.current.value == "Section"){
        setWorng("Please Select Your Section")
    }else if(IDES.current.value == "ID"){
        setWorng("Please Select Your ID")
    }else if(!check.current.checked){
        setWorng("Please Select terms & conditions")
    }else{
        setWorng("");
        setEmail(EM.current.value);
        setGroup(GR.current.value);
        setSection(SEC.current.value);
        setCollage(COL.current.value);
        setStudent_ID(IDES.current.value);
    }
  }
  function IDHandeler(e){
    if(COL.current.value == "Group"){
        setWorng("Please Select Your Group")
        target.value="Section";
    }else{
        const dbRef = ref(getDatabase());
        setWorng("")
        get(child(dbRef, `users/${COL.current.value}/${GR.current.value}/${SEC.current.value}`)).then((snapshot) => {
            if (snapshot.exists()) {
                dispatch({
                    type:"ADD_IDS",
                    ids:snapshot.val()
                })
            } else {
            console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
  }
  return (
    <form className='shadow dark:bg-gray-700' style={{padding:"15px"}}>
            <div className="mb-6">
                <p className='text-center text-red-500 font-medium'>{worng}</p>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input ref={EM} type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@ejust.edu.eg"  />
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Collage</label>
                <select ref={COL} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Collage">Collage</option>
                    <option value="CSITS1">CSITS1</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="GRP" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select Group</label>
                <select ref={GR} onChange={(e) => groupHandeler(e)} id="GRP" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Group">Group</option>
                    <option value="G1">G1</option>
                    <option value="G2">G2</option>
                    <option value="G3">G3</option>
                    <option value="G4">G4</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="SEC" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Section</label>
                <select onChange={(e) => IDHandeler(e)} ref={SEC} id="SEC" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Section">Section</option>
                    ${Object.keys(users.sections ? users.sections :{"wait...":"null"}).map((e) => {
                      return <option defaultValue={e} key={e}>{e}</option> 
                    })}
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="IDS" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Section</label>
                <select ref={IDES} id="IDS" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Section">ID</option>
                    ${Object.keys(users.IDS ? users.IDS : {"wait...":"null"} ).map((e) => {
                      return <option defaultValue={e} key={e}>{e}</option> 
                    })}
                </select>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input ref={check} id="terms" type="checkbox" value="" className="w-4  h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I'm Ejsut Student  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button onClick={send} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to Queze</button>
    </form>
  )
}
