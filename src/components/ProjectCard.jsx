import {} from 'react'
import { LuFiles } from "react-icons/lu";

function ProjectCard({project}) {
  return (
    <div className='shadow p-4 rounded bg-white space-y-3'>
              <div>
              <h1 className='text-lg font-semibold'>{project.name}</h1>
              <p className='text-sm'>{project.type}</p>
              </div>
              <p>{project.date}</p>

      <div>
         <div>

         </div>
      </div>


      <div className='rounded-xl justify-between items-center p-2 flex'>
         <div className='flex'>
            <img src='/Riyaz.jpg' className='w-6 h-6 rounded-xl'/>
            <img src='/Riyaz.jpg' className='w-6 h-6 rounded-xl'/>
            <img src='/Riyaz.jpg' className='w-6 h-6 rounded-xl'/>

         </div>
         <p><LuFiles/><span>{project.file}</span></p>
      </div>


    </div>
  )
}

export default ProjectCard