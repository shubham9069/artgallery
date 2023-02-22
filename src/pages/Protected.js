import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const Protected = () => {
    const strtoken = window.localStorage.getItem('userToken');
    const strdata = window.localStorage.getItem('userData');
   
    const token = JSON.parse(strtoken);
    const data = JSON.parse(strdata);


  return (
    token && data ? <Navigate to='/' /> : <Outlet/>
  )
}

export default Protected