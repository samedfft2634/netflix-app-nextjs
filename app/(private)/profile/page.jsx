import React from 'react'
import ProfileContainer from './components/ProfileContainer'

export const metadata = {
  title:"Profile",
  description:"This is profile page."
}

const Profile = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div className="flex flex-col">
    <h1 className='text-3xl md:text-6xl text-white text-center'>Who's watching?</h1>
    <ProfileContainer />
      </div>
      
    </div>
  )
}

export default Profile