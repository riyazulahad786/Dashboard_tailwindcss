import {} from 'react'

function MemberCard({member}) {
  return (
    <div className='p-6 shadow rounded-xl bg-white space-y-4'>
        <div>
            <h1 className='text-xl text-gray-900'>{member.total_members}</h1>
            <p className='text-sm text-gray-600'>{member.job}</p>
        </div>
    </div>
  )
}

export default MemberCard