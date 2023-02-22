import React from 'react'
import "./navbar.css"
import logo from '../asset/image 1.png'
import { Link } from 'react-router-dom'
  import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import { Logout } from '../../pages/exportfiles'


const Navigationbar = () => {
  const {userToken,userData,Cart} =useContext(AuthContext)
  const logout = Logout();
  return (

    <div className="main-div d-flex section-paddingX py-3 " >
    <nav className="navbar navbar-expand-lg bg-body-tertiary " Style={'background-color: transparent !important; width:100% !important; padding:0 !important'}>
    <div className="container-fluid "  >
    <img src={logo} alt="" className='artgallery-logo'></img>
      <button className="navbar-toggler" type="button" style={{margin:'0 0 0 auto'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gridGap:'10px'}}>
          <li className="nav-item">
            <Link to="/" className="nav-link nav-btn active link-a" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-btn" href="#">About</a>
          </li>
        
          <li className="nav-item">
            <Link to='/allproduct' className="nav-link nav-btn">Product</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-btn">Contact us </a>
          </li>
        </ul>
        {/* <div className='d-flex'>
        <Link to='/cart'  className='nav-btn link-a'><i className="bi bi-cart"></i></Link>
                 <a  className='nav-btn'><i className="bi bi-heart"></i></a>
        </div> */}
       
      </div>
     
 
    </div>
 
  
    
  </nav>
  <div className='d-flex Buttonofnavbar '>
       {userToken?<>
        <li className="nav-item dropdown headerLink">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={userData?.avatar} alt="pic" style={{
                      height: 30, width: 30, borderRadius: 30, marginRight: 5,
                    }}></img>  <span>{userData?.name}</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" Style={ 'padding: 15px; paddingTop: 20px; width:max-content;position: absolute;right: 0'}>

                    <div className='row'>
                      <div className='col-md-3 alignCenter'>
                        <img src={userData?.avatar} alt="pic" style={{
                          height: 60, width: 60, borderRadius: 30, marginRight: 10,
                        }}></img>
                      </div>
                      <div className='col-md-9' style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: 18, fontWeight: '700', color: '#000' }}> {userData?.name}</span><br></br>
                        <a className='darkLink grayLink' href='#/profile' style={{ margin: 0 }}>See your profile</a>
                      </div>
                    </div>

                    <li style={{ marginTop: 20 }}><hr className="dropdown-divider"></hr></li>

                    <div style={{ margin: 15 }}>
                      <Link to='/cart' className='darkLink' href='#/cart' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-cart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}>
                        </i>
                        Cart
                        <span class="position-absolute translate-middle badge rounded-pill bg-danger">
    {Cart?.cart_items?.length ? Cart?.cart_items?.length: "No"}
    <span class="visually-hidden">unread messages</span>
  </span></Link>
                    </div>

                    {/* <div style={{ margin: 15 }}>
                      <a className='darkLink' href='#/change-password' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-gear" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                        Change password</a>
                    </div> */}

                    <div style={{ margin: 15 }}>
                      <Link to='/help&support' className='darkLink' href="#/help" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-question-circle" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Help & Support</Link>
                    </div>

                    <div style={{ margin: 15 }}>
                      <div className='darkLink' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}
                        onClick={() => logout()}>
                        <i className="bi bi-box-arrow-right" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Logout</div>
                    </div>

                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </li>  
                
                 </>
                
                 :
                  <Link Link to='/login' className='btn-design link-a'>Sign in</Link>
                 }
       </div>

  
    </div>
   

   
  )
}

export default Navigationbar


