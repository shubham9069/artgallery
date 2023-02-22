import React,{useContext, useState} from 'react'
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Toast from '../../Toast';
import img from '../assest/Rectangle 4007.png' 
import validator from 'validator';


const UserProfileTab = () => {
const [isLoading,setIsLoading] = useState(false)
const {userData,setUserData,userToken} = useContext(AuthContext)    
const [oldPassowrd,setOldPassowrd] = useState("")
const [newPassowrd,setNewPassowrd] = useState("")
    
    const [users, setUsers] = useState({
        name: userData?.name,
        email: userData?.email,
        mobile: userData?.mobile,

    });
    const { name, email, mobile } = users;
    const onchange = e => {
        // setErrorMsg('')
        setUsers(users => ({ ...users, [e.target.name]: e.target.value }));
    }



       
  const edit_profile = async(e)=>{
    e.preventDefault()

     if(!email) return Toast("please fill properly")
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
    
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/edit_profile',
        data:{
          name,email,mobile
        },
        headers: {
          Authorization:`Bearer ${userToken}`,
          "Content-Type": "application/json",
          
        },
       })
       
       if(response.status===200){
        const data = response.data
       
        setUserData(data.Customer)
        window.localStorage.setItem('userData', JSON.stringify(data.Customer));
    
        Toast(data.message,response.status)
       
       }
     }
     catch(err){
      const error = err.response.data
      Toast(error.message);
      


     }
     finally{
      setIsLoading(false)
     }
  }
  return (
   <>

<img src={img} alt="cover" style={{
                width: '100%', height: 280, objectFit: 'cover'
            }}></img>

            <img src={img} alt="cover" style={{
                width: 150, height: 150, borderRadius: 100,
                border: '10px solid white',
                marginTop: -80,
                alignSelf: 'center'
            }}></img>
            <br></br>

<div>
    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>Personal Details</h5>
    
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter full name" name="name" value={name} onChange={e => onchange(e)}></input>
      
      
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter Email" name="email" value={email} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='name' placeholder="Enter Mobile no " name="mobile" value={mobile} onChange={e => onchange(e)}></input>  
    
    </div>
    <button type='submit' className='themeButton' style={{ marginTop: 20, width: '100%',maxWidth:'300px' }} onClick={edit_profile}>Save changes</button>
    </div>


    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>Change Password </h5>
     
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="New Passowrd " name="New Password" value={oldPassowrd} onChange={e =>setOldPassowrd(e.target.value)} style={{maxWidth:'300px'}} ></input>  
    
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Confirm passowrd " name="current Passowrd" value={newPassowrd} onChange={e => setNewPassowrd(e.target.value)} style={{maxWidth:'300px'}}></input>  
    
    </div>
    
            

    <button type='submit' className='themeButton' style={{ marginTop: 20, width: '100%',maxWidth:'300px' }}>Change Password</button>
    

        

   </>
  )
}

export default UserProfileTab