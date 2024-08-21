import {} from 'react'
// import { SlCalender } from "react-icons/sl";
// import { FaUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {
    const SidebarLink =[
        {   id:1,
            Path:"/",
            name:'Dashboard',
            icons:<MdOutlineDashboard/>
        },
        {   id:2,
            Path:"/member",
            name:'Members',
            icons:<MdRememberMe/>
        },
        {   id:3,
            Path:"/messages",
            name:'Messages',
            icons:<FaRegMessage/>
        },
        {   id:4,
            Path:"/projects",
            name:'Projects',
            icons:<FaProjectDiagram/>
        },
        {   id:5,
            Path:"/clients",
            name:'Clients',
            icons:<FaUserTie/>
        },
        {   id:6,
            Path:"/",
            name:'Work Plans',
            icons:<FaNetworkWired/>
        },
        {   id:7,
            Path:"/help",
            name:'Help',
            icons:<IoMdHelpCircle/>
        },
        
    ]
  return (
    <div className='w-16 left-0 top-0  fixed z-10 h-screen pt-9 border-r md:w-48 px-4 '>
        {/* logo */}
        <div className='mb-8'>
             <img src='/logo.svg' className='img-fluid w-28 hidden md:flex'/>
             <img src='/logo.svg' className='img-fluid w-8 md:hidden flex'/>

        </div>
        {/* navigations */}
        <div>
           <ul className='space-y-3 items-center'>
           {
                SidebarLink.map((link,i)=>(
                    <>
                        <li className='font-medium rounded-md py-2 px-5  hover:bg-gray-100 hover:text-indigo-500'>
                            <Link key={i} className='flex  items-center gap-4 ' to={link.path}>
                                <span>{link.icons}</span>
                                <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                            </Link>
                        </li>
                    </>
                ))
            }
           </ul>
        </div>
        <div>
            <p>
                <span>Need Help?</span>
            </p>
        </div>
    </div>
  )
}

export default Sidebar