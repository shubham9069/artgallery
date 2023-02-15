import {Outlet} from 'react-router-dom'
import {react,useEffect,useContext,useState} from 'react'

import {AuthContext} from '../AuthProvider'


const PresistLogin =()=>{
    const {userToken,setUserToken,setUserData,userData,setEnquiry_id}= useContext(AuthContext);
    const [isloading,setIsLoading] = useState(true);
  

    useEffect(() => {

        const tokenGet = () =>{
            console.log("hello")
            const strtoken = window.localStorage.getItem('userToken');
            const strdata = window.localStorage.getItem('userData');
            const enqdata = window.localStorage.getItem('enquiry_id');
            const token = JSON.parse(strtoken);
            const data = JSON.parse(strdata);
            const enquiry__data = JSON.parse(enqdata);
            console.log(token)
            setUserToken(token)
            setEnquiry_id(enquiry__data)
            setUserData(data)
            setIsLoading(false)
        }
      

        
    userToken && userData ? setIsLoading(false):tokenGet()
     
    }, [])

    return (
        <>
        {isloading  
            ? <div id="cover-spin"></div>
            :<Outlet/>
         }
    </>
    )

    
}

export default PresistLogin
