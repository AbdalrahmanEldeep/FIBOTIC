import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CntForm = () => {
  const [slecetedValue,setSelected] = useState("");
  const navigate = useNavigate();

  function regist(e){
    e.preventDefault();
    if(!slecetedValue){
      alert("Please Select Your Authentication !");
    }else{
      navigate(`${slecetedValue}/login`);
    }
  }
  return (
    <form className='shadow  dark:bg-gray-700 rounded' style={{padding:"15px"}}>
        <div className="flex flex-col gap-2 items-start mb-6">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Authentication</label>
            <select onChange={({target}) => {setSelected(target.value)}} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue="Authentication">Authentication</option>
                <option value="admineAuth">Admine</option>
                <option value="student">Student</option>
            </select>
        </div>
          <button onClick={regist} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
    </form>
  )
}
