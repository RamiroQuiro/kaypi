import { logout } from '@/app/api/hello/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BotonLogOut() {

const navigate=useRouter()

const onLogout=()=>{
logout().then(()=>{
    navigate.push('/login')
})
}

  return (
    <button
    onClick={onLogout}
    className="flex flex-col items-center mx-auto text-center absolute bottom-14 w-full px-2 justify-center gap-4 cursor-pointer"
  >
    LogOut
  </button>
  )
}
