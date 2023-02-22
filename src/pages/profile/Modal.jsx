import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import validator from 'validator'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import Toast from '../../Toast';
import axios from '../../axios';






const Modale = ({show,setShow, data,getAddress}) => {
  const {userToken}=useContext(AuthContext)
  const [isLoading,setIsLoading]=useState(false)
  const [type,settype]= useState( data?.type || 1)
  const [is_default,setIs_default] = useState( data?.is_default || false)

  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Work" },
    { id: 3, name: "Other" },
]


const [Address,setAddress] = useState({
  name:data?.name || "",
  mobile:data?.mobile || "",
  street:data?.street || "",
  landmark:data?.landmark || "",
  city:data?.city || "",
  state: data?.state || "",
  country:data?.country || "",
  pin_code:data?.pin_code || "",
  



})


const {name,mobile,street,landmark,city,state,country,pin_code} = Address

const onChange=(e) => {


  setAddress({...Address,[e.target.name]:e.target.value})
}
    
const Add_Address = async(e)=>{
  e.preventDefault()

  if(!mobile || !street  || !city || !pin_code  ) return Toast("plz fill required field mobile,street,city,pin_code") 
  
   if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
  
   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/add-address',
      data:{
        name,mobile,street,landmark,city,state,country,pin_code,type,is_default
      },
      headers: {
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "application/json",
        
      },
     })
     
     if(response.status===200){
      const data = response.data
      getAddress()
      Toast(data.message,response.status)
     
     }
   }
   catch(err){
    const error = err.response.data
    Toast(error.message);
    


   }
   finally{
    setShow(false)
    setIsLoading(false)
   }
}


const Update_Address = async()=>{
 
const address_id = data?.id
  
   if( !validator.isMobilePhone(mobile)) return Toast("mobile is not valid")
  
   try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/update-address',
      data:{
        name,mobile,street,landmark,city,state,country,pin_code,type,is_default,address_id
      },
      headers: {
        Authorization:`Bearer ${userToken}`,
        "Content-Type": "application/json",
        
      },
     })
     
     if(response.status===200){
      const data = response.data
      getAddress()
      Toast(data.message,response.status)
     
     }
   }
   catch(err){
    const error = err.response.data
    Toast(error.message);
    


   }
   finally{
    setShow(false)
    setIsLoading(false)
   }
}
  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)} className="modale-Addaddress" >
        <Modal.Header closeButton>
          <Modal.Title>Change Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
    
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Name" name="name" value={name} onChange={onChange}></input>  
    <input className='profile-input' type='number' placeholder="Mobile" name="mobile" value={mobile} onChange={onChange} ></input>  
    </div>

    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Street" name="street" value={street} onChange={onChange} ></input>   
    <input className='profile-input' type='name' placeholder="Landmark" name="landmark" value={landmark} onChange={onChange}></input>   
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="City" name="city" value={city} onChange={onChange}></input>  
    <input className='profile-input' type='name' placeholder="State" name="state" value={state} onChange={onChange}></input>  
    </div>

    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="pin_code " name="pin_code" value={pin_code} onChange={onChange}></input>  
    <select className='profile-input' name="country" value={country} onChange={onChange}>
      <option selected hidden>--Country--</option>
      <option value="india">india</option>
    </select>  
    </div>

    <div className='d-flex'>
                        {items.map((item, idx) =>
                            <div key={idx} className="rowAlign d-flex align-items-center" style={{
                                height: 40,
                                marginRight: 20,
                                padding: 5,
                               
                            }}>
                                <div className='radio'
                                    style={{
                                        backgroundColor: type == item.id ? "#56BDBD" : 'transparent',borderRadius:"10px"
                                        
                                    }}
                                    onClick={() => {
                                        settype(item.id)
                                    }}
                                >
                                    <i className="bi bi-circle-fill" Style={'font-size: 13px !important; margin: 1px; color: #fff' }></i>
                                </div>
                                <span style={{ color: '#000' }}>{item.name}</span>
                            </div>
                        )}
                    </div>


                    <div className='col-md-6' style={{ display: 'flex', alignItems: 'center', margin: '15px 0 20px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #aaa', height: 20, width: 20, borderRadius: 3, marginRight: 10, cursor: 'pointer' }}
                            onClick={() => setIs_default(!is_default)}>
                            {is_default ?
                                <i className="bi bi-check-lg" style={{ color: '#56BDBD' }}></i>
                                : null}
                        </div>
                        <p style={{ color: '#000', margin: 0 }}>Use as default address</p>
                    </div>
    </div>






        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={!data ?Add_Address: Update_Address}>
            submit  
          </Button>
          
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Modale