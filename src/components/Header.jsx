import {} from 'react'
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-md'>
    {/* -------- */}
      <div>
          <h1 className='text-xs'>Welcome back </h1>
          <p className='text-xl font-semibold'>Alex!</p>
      </div>
      {/* ------------ */}
      <div className='flex items-center space-x-5'>
      <div className='hidden md:flex'>
        <input placeholder='search...' className='bg-indigo-100/30 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-100'/>
      </div>
      <div className='flex items-center space-x-5'>
        <button className='relative text-2xl  text-gray-700'>
        <FaBell/>
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
        </button>
      </div>
      <div>
      <img src='/Riyaz.jpg' className='w-8 h-8 rounded-full border-2 border-indigo-500'/>
      </div>
      </div>
    </div>
  )
}

export default Header