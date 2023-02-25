import React,{useContext} from 'react';
import {useLocation,Navigate,Outlet} from 'react-router-dom';
import {AuthContext} from '../AuthProvider'


const  Requiredlogin=()=> {
    
    const {userToken,userData} = useContext(AuthContext);
    const location = useLocation();
   

  
  return (
    userToken && userData
    ? <Outlet/>
    :<Navigate to="/Login" state={{from :location}} replace={true} />
    
  )
}

export default Requiredlogin

