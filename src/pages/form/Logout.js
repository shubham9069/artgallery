import React from 'react'
import { useContext,useState} from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Toast from '../../Toast'
import { useNavigate } from 'react-router-dom'
import Loader from '../../component/Loader'




const Logout =  () => {
   const navigate =useNavigate()
   const [isLoading,setIsLoading] = useState(true)
   const {userData,userToken,setUserData,setUserToken,setCart} = useContext(AuthContext)

  

    const logout =async ()=>{
    try{
      setIsLoading(true)
        const response= await axios({
          method: "get",
         url:'/logout',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${userToken}`
          },
         })
         
         if(response.status===200){
          const data = response.data
          window.localStorage.clear();
          setUserData("")
          setUserToken("")
          setCart([])
          
          navigate('/')
          
          Toast(data.message,response.status)
          
          
          
          
         
         }
       }
       catch(err){
        const error = err.response.data
        Toast(error.message)
        navigate('/')
       }
       finally{
        setIsLoading(false)
       }

}
return logout
}





 export default Logout
