import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

  const navigate = useNavigate()

    const dispatch = useDispatch()
    
    const logoutHandler = () =>{
       authService.logout().then(()=>{
        dispatch(logout())
        navigate('/')
    }) 
    }

  return (
    <button 
    className='inline-block font-bold px-6 py-2 duration-500  text-lg hover:text-gray-400 active:text-gray-300 rounded-full text-gray-300'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn