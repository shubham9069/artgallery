import React from 'react'
import './footer.css'
// import logo from '../asset/image 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'


const Footer = () => {
    const navigate = useNavigate()
    const {All_Product_Page,Catagory} = useContext(AuthContext)
  return (
    <div className='footer ' style={{marginTop:'2rem'}}>
    <div className='main-footer d-flex' >
    <div className='footer-section' >
    <div Style={'width:100px; height:100px; border-radius:50% !important;background:white'}>
        <img src='images/withoutbg.png' alt="logo"  style={{width:'100%',height:'100%',objectFit:'contain',padding:'7px'}}></img>
        </div>
    </div>
<div className='footer-section'>
<h5>Quick Link </h5>
    <Link to="/aboutus">About us</Link>
    <Link to='/'>Advisory</Link>
    <Link to='/Privacy_&_policy '>Privacy & Policy</Link>
    <Link to='/Terms_&_condition'>Term & Conditions</Link>
    
    
   
   
</div>
<div className='footer-section'>
    <h5>PRODUCTS</h5>
    {All_Product_Page?.slice(0,4)?.map((element)=>{

        return <Link to={'/ProductDetails/' + element.product_id}>{element?.name}</Link>
    })}
    
    
</div>

<div className='footer-section'>
<h5>ARTISTS</h5>
{Catagory?.artists.slice(0,4).map((element)=>{

    return <Link to={'/Artistdetails/' + element.id} >{element?.name}</Link>
})}
   
</div>
<div className='footer-section'>
<h5>FOLLOW US ON</h5>
<div className='d-flex' style={{marginBottom:'1rem'}}>

<a href='https://www.instagram.com/grandioseartblr' target='_blank'><i className="bi bi-instagram px-1"></i></a>
<a href='https://www.facebook.com/grandioseartblr ' target='_blank'><i class="bi bi-facebook px-1"></i></a>
<a href='https://www.linkedin.com/company/82990164/admin/ ' target='_blank'><i class="bi bi-linkedin px-1"></i></a>
<a href='https://twitter.com/ArtGrandiose' target='_blank'><i class="bi bi-twitter px-1"></i></a>
<a href='https://www.youtube.com/channel/UCXzI1kDcNDCclPXZ6ga0Suw' target='_blank'><i class="bi bi-youtube px-1"></i></a>


</div>
    <h5>CONTACT US</h5>
    <a href='mailto:info@grandioseart.com' className='link-a' ><p>info@grandioseart.com</p></a>
    <a href='mailto:support@grandioseart.com' className='link-a' ><p>support@grandioseart.com</p></a>
    
    
</div>

    </div>
    <div className='bottom-line'>
        <p className='center-div ' style={{padding:'1.5rem',margin:0,color:'white'}}>@ 2022 xyz All right resereved</p>
    </div>
   
    </div>
  )
}

export default Footer