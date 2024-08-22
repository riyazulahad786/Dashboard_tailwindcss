import {} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
       <div className='flex'>
       <Sidebar/>
        <div className='w-full  md:ml-48 overflow-y-auto '>
            <Header/>
            <Outlet/>
        </div>
       </div>
    </div>
  )
}

export default Layout