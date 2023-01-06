import React, { useEffect, useRef, useState } from 'react'

export const StdForm = () => {
    const [email,setEmail] = useState("");
    const em = useRef();
    const [id,setId] = useState("");
    const [group,setGroup] = useState("");
    const [section,setSection] = useState("");
    const [collage,setCollage] = useState("");
    const [worng,setWorng] = useState("");
    


  function send(e){
    e.preventDefault();
    const regexEmailPattern = /^[a-z/.]+@ejust.edu.eg$/g;
    if(!regexEmailPattern.test(em.current.value)){
        setWorng("Please Enter Valid Email not contain numbers ending with @ejust.edu.eg")
        em.current.focus();
    }else{
        setWorng("");
        setEmail(target.value);
    }
  }

  return (
    <form className='shadow dark:bg-gray-700' style={{padding:"15px"}}>
            <div className="mb-6">
                <p className='text-center text-red-500 font-medium'>{worng}</p>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input ref={em} type="email" id="email" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@ejust.edu.eg"  />
            </div>
            <div className="mb-6">
                <label htmlFor="stdid" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
                <input type="text" id="stdid" placeholder='32022xxxx' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="countries" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select Group</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Group">Group</option>
                    <option value="G1">G1</option>
                    <option value="G2">G2</option>
                    <option value="G3">G3</option>
                    <option value="G4">G4</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Section</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Section">Section</option>
                    <option value="1">S1</option>
                    <option value="2">S2</option>
                    <option value="3">S3</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Collage</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Collage">Collage</option>
                    <option value="CSIT">CSIT</option>
                </select>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4  h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I'm Ejsut Student  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button onClick={send} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to Queze</button>
    </form>
  )
}
