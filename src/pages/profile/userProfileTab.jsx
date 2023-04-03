import React,{useContext, useState} from 'react'
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Toast from '../../Toast';
import img from '../assest/Rectangle 4007.png' 
import validator from 'validator';
import Loader from '../../component/Loader';


const UserProfileTab = () => {
const [isLoading,setIsLoading] = useState(false)
const {userData,setUserData,userToken} = useContext(AuthContext)    
const [oldPassword,setoldPassword] = useState("")
const [newPassword,setnewPassword] = useState("")
const [images,setimages] = useState("")
    
    const [users, setUsers] = useState({
        name: userData?.name,
        email: userData?.email,
        mobile: userData?.mobile,
        

    });
    const { name, email, mobile } = users;
    const onchange = e => {
        // setErrorMsg('')
        setUsers({ ...users, [e.target.name]: e.target.value });
    }



       
  const edit_profile = async(e)=>{
    e.preventDefault()
    
     
     if( !validator.isEmail(email)) return Toast("email is not valid")
     if( !/^[0]?[789]\d{9}$/.test(mobile)) return Toast("mobile no  is not valid")
    var form = new FormData()
    form.append('name',name)
    form.append('email',email)
    form.append('mobile',mobile)
    form.append('images',images)
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/edit_profile',
        data: form
        ,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${userToken}`,
         
          
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

  const Change_passowrd= async(e)=>{
    e.preventDefault()

     if(!newPassword ) return Toast("please fill new password")
     if( !validator.isStrongPassword(newPassword)) return Toast("password is not strong")
    var formdata = new FormData()
    formdata.append("new_psw",newPassword)
    formdata.append("old_psw",oldPassword)
    
     try{
      setIsLoading(true)
      const response= await axios({
        method: "post",
       url:'/change-password',
        data:formdata,
        headers: {
          Authorization:`Bearer ${userToken}`,
          "Content-Type": "application/json",
          
        },
       })
       
       if(response.status===200){
        const data = response.data
      
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

  // const image =()=>{
  //   var preview = document.querySelector('img');
  //   var file    = document.querySelector('input[type=file]').files[0];
  //   var reader  = new FileReader();
  
  //   reader.addEventListener("load", function () {
  //     preview.src = reader.result;
  //   }, false);
  
  //   if (file) {
  //     alert(file)
  //     reader.readAsDataURL(file);
  //   }
  
  // }
  return (
   <>
{isLoading &&(<Loader />)}
<img src={img} alt="cover" style={{
                width: '100%', height: 280, objectFit: 'cover'
            }}
            ></img>
<div className='d-flex justify-content-center' style={{marginTop:'-80px'}}>
            <img src={userData?.avatar} alt="cover" style={{
                width: 150, height: 150, borderRadius: 100,
                border: '10px solid white',
               
                alignSelf: 'center',
                backgroundColor:'white'
            }}
            onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src =
              "images/userdefault.png")
          )}
         
            ></img>
           
            </div>
            <br></br>

<div>
    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>Personal Details</h5>
    
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter full name" name="name" value={name} onChange={e => onchange(e)}></input>
    <input className='profile-input' type='file'  name="images"  onChange={e => setimages(e.target.files[0])}></input>
      
      
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter Email" name="email" value={email} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='Number' placeholder="Enter Mobile no " name="mobile" value={mobile} onChange={e => onchange(e)}></input>  
    
    </div>
    <button type='submit' className='themeButton' style={{ marginTop: 20, width: '100%',maxWidth:'300px' }} onClick={edit_profile}>Save changes</button>
    </div>


    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>Change Password </h5>
     
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="old Passowrd "  value={oldPassword} onChange={e =>setoldPassword(e.target.value)} style={{maxWidth:'300px'}} ></input>  
    
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="new passowrd "  value={newPassword} onChange={e => setnewPassword(e.target.value)} style={{maxWidth:'300px'}}></input>  
    
    </div>
    
            

    <button className='themeButton' style={{ marginTop: 20, width: '100%',maxWidth:'300px' }} onClick={Change_passowrd}>Change Password</button>
    

        

   </>
  )
}

export default UserProfileTab