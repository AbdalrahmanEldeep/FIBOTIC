import React from 'react'

export const CntForm = () => {
  return (
    <form className='shadow' style={{padding:"15px"}}>
            <div className="flex flex-col gap-2 items-start mb-6">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Authentication</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="Authentication">Authentication</option>
                    <option value="1">Admine</option>
                    <option value="2">Student</option>
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to Queze</button>
    </form>
  )
}
