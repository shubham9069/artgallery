import React from 'react'
import "./navbar.css"
import logo from '../asset/image 1.png'
import { Link } from 'react-router-dom'


const Navigationbar = () => {
  return (
   
    <div className='container-fluid main-div '>
        <div className='row between-div'>
            <div className='col-md-3 center-div '>
           <Link to='/' ><img src={logo} alt=""></img></Link>
            </div>

            <div className='col-md-5 menu'>
           
           <ul>
                 <li className='nav-btn'>Home</li>
                 <li className='nav-btn'>About</li>
                 <li className='nav-btn'>Contact</li>
                 <Link to='/allproduct' className='nav-btn link-a'>Product</Link>
             </ul>
        
       
            </div>
            
            <div className='col-md-4 center-div menu '>
            
           <ul>
                    <li  className='nav-btn'><i className="bi bi-search"></i></li>
                 <Link to='/cart'  className='nav-btn link-a'><i className="bi bi-cart"></i></Link>
                 <li  className='nav-btn'><i className="bi bi-heart"></i></li>
                 <li className='nav-btn'><Link to='/login' className='btn-design link-a'>Sign in</Link></li>
             </ul>
      
       
            </div>
        </div>





    </div>

   
   

   
  )
}

export default Navigationbar


