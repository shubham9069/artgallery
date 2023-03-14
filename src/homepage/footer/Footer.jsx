import React from 'react'
import './footer.css'
import logo from '../asset/image 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'


const Footer = () => {
    const navigate = useNavigate()
    const {All_Product_Page,Catagory} = useContext(AuthContext)
  return (
    <div className='footer ' style={{marginTop:'2rem'}}>
    <div className='main-footer d-flex' >
    <div className='footer-section'>
        <img src={logo} alt="logo" style={{maxWidth: '180px'}}></img>
    </div>
<div className='footer-section'>
<h5>Heading</h5>
    <Link to="/allproduct">All Product</Link>
    <Link to="/aboutus">About us</Link>
    <Link to='/Privacy_&_policy '>Privacy & Policy</Link>
    <Link to='/Terms_&_condition'>Term & Conditions</Link>
   
   
</div>
<div className='footer-section'>
    <h5>PRODUCTS</h5>
    {All_Product_Page?.slice(0,5)?.map((element)=>{

        return <Link to={'/ProductDetails/' + element.product_id}>{element?.name}</Link>
    })}
    
    
</div>

<div className='footer-section'>
<h5>ARTISTS</h5>
{Catagory?.artists.slice(0,5).map((element)=>{

    return <Link to={'/Artistdetails/' + element.id} >{element?.name}</Link>
})}
   
</div>
<div className='footer-section'>
<h5>FOLLOW US ON</h5>
<div className='d-flex' style={{marginBottom:'1rem'}}>

<i className="bi bi-instagram px-2"></i>
<i className="bi bi-facebook px-2"></i>
</div>
    <h5>CONTACT US</h5>
    <Link to='/help&support' className='link-a' ><p>Help & support</p></Link>
    <Link to='/contactus' className='link-a' ><p>Contact Form</p></Link>
    
</div>

    </div>
    <div className='bottom-line'>
        <p className='center-div ' style={{padding:'1.5rem',margin:0,color:'white'}}>@ 2022 xyz All right resereved</p>
    </div>
   
    </div>
  )
}

export default Footer