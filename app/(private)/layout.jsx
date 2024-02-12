'use client'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PrivateLayout = ({children}) => {
    const {currentUser} = useAuthContext()
    const router = useRouter()
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        if(!user){
            router.replace("/login")
        }
    },[currentUser])
  return (
    <div>
        {children}

    </div>
  )
}

export default PrivateLayout