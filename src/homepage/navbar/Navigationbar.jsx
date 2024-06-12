import React from 'react'
import "./navbar.css"
import logo from '../asset/image 1.png'
import { Link, useNavigate,useLocation } from 'react-router-dom'
  import { useContext,useState,debounce } from 'react'
import { AuthContext } from '../../AuthProvider'
import { Logout } from '../../pages/exportfiles'
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react'



const Navigationbar = () => {
  const location =useLocation()
  const navigate = useNavigate()
  const {userToken,userData,Cart,All_Product_Page,Catagory} =useContext(AuthContext);
  const [SearchArr,setSearchArr] = useState([])
  const [searchShow,setSearchShow] = useState(false)
  
  const handleSearch=(inputvalue)=>{
    if(inputvalue==""){
      setSearchArr([])
      return 
    }
    
    inputvalue = inputvalue.toLowerCase()
    var PaintingArr = All_Product_Page?.filter((element=>{
      var lowercase = element.name.toLowerCase().split(" ").join("");
      
      
      return lowercase.includes(inputvalue) || element.name.toLowerCase().includes(inputvalue) || element.size_name.includes(inputvalue.toString())
    }))


    // var ArtistArr = Catagory?.artists?.filter((element=>{
    //   var lowercase = element.name.toLowerCase().split(" ").join("");

    //   return lowercase.includes(inputvalue) ||  element.name.toLowerCase().includes(inputvalue);
    // }))
    
setSearchArr([...PaintingArr])
  }
  
    
  const debounce = (func, delay) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)  // func.apply(null,args)     
        }, delay)
    }
  }
  

  const filerSearch = debounce((inputvalue) => handleSearch(inputvalue), 300)


useEffect(() => {

  setSearchShow(false)
},[location?.pathname])
 
  const logout = Logout();
  return (

    <div className="main-div d-flex section-paddingX py-3 "  >
    <nav className="navbar navbar-expand-lg bg-body-tertiary " Style={'background-color: transparent !important; width:100% !important; padding:0 !important'}>
    <div className="container-fluid "  >
    <img src={logo} alt="" className='artgallery-logo' onClick={()=>{navigate('/')}}></img>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


      <div className="collapse navbar-collapse " id="navbarSupportedContent">

      <div className="searchbaron1000 d-flex justify-content-between" style={{margin:'0 auto',position:'relative',    width: '100%', flex: 1,gridGap:20}}>
 
 <div style={{maxWidth:'300px',width:'100%',position:'relative', display:'flex'}} onClick={()=>setSearchShow(!searchShow)}>
 <input type="text" className="form-control" id="search" placeholder="Search bar "
  style={{backgroundColor: 'transparent',border: '1px solid #cccccc'}}
    onChange={(e)=>filerSearch(e.target.value)}
    
    autocomplete="off"
  />
  <i class="bi bi-search" Style={'position:absolute;right:10px;font-size:1.2rem !important;top:2.5px;cursor:pointer;'}></i>
    {searchShow && (  <div className="searchdropdown" >
        {SearchArr.length ?  SearchArr?.map((element)=>{
    {/* console.log(typeof element) */}
    return <div onClick={()=>navigate('/ProductDetails/' + element.product_id)}>
      <img src={typeof element?.images=="string"? element.images: element.images[0]}></img>
      <p>{element.name}</p>
      <p>&#x20B9; {element?.price}</p>
    </div>}):<div>no product found</div>}
    </div>)}
  </div>
  
   <Link to='/cart' className="nav-link nav-btn" id="carticon" >
            <i className="bi bi-cart-x" Style={'font-size: 16px !important ;'}>
            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{fontSize:9}}>
    {Cart?.cart_items?.length ? Cart?.cart_items?.length: 0}
    <span className="visually-hidden">unread messages</span>
  </span>
                        </i>  
                        </Link>

</div>

        <ul className="navbar-nav " style={{gridGap:'10px',margin:'0 0 0 auto'}}>
          <li className="nav-item">
            <Link to="/freeConsulting" className="nav-link nav-btn link-a"  >FREE CONSULTATION</Link>
          </li>
        
        
          <li className="nav-item">
            <Link to='/allproduct' className="nav-link nav-btn">PRODUCT</Link>
          </li>
          <li className="nav-item">
            <Link to='/AllArtist' className="nav-link nav-btn">ARTIST</Link>
          </li>
          <li className="nav-item" id='cartHide'>
            <Link to='/cart' className="nav-link nav-btn">
            <i className="bi bi-cart-x" Style={'font-size: 16px !important ;'}>
            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{fontSize:9}}>
    {Cart?.cart_items?.length ? Cart?.cart_items?.length: 0}
    <span className="visually-hidden">unread messages</span>
  </span>
                        </i>  
                        CART</Link>
          </li>
          
          
        </ul>
      
       
      </div>
     
 
    </div>
 
  
    
  </nav>
  <div className='d-flex Buttonofnavbar dropdown  '>
       {userToken?<>
        <Dropdown size="lg" id="dropdownnavbar">
        <Dropdown.Toggle className="nav-link dropdown-toggle " id="dropdown-basic" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'transparent',border:'none'}}>
                    <img src={userData?.avatar}  style={{
                      height: 20, width: 20, borderRadius: 30, marginRight: 5,

                    }}
                    onError={(e) =>
          (e.target.onError = null)(
            (e.target.src =
              "images/userdefault.png")
          )}
                    ></img>  <span style={{color:'#009ba1'}}>{userData?.name}</span>
                  </Dropdown.Toggle>
    
      <Dropdown.Menu size="lg" style={{padding:'1rem',width:'200px'}}>
      <Dropdown.Item className='row'>
                      <div className='center-div'>
                        <img src={userData?.avatar} alt="pic" 
                        style={{
                          height: 50, width:50, borderRadius: 30, marginRight: 10,
                        }}
                        onError={(e) =>
          (e.target.onError = null)(
            (e.target.src =
              "images/userdefault.png")
          )}></img>
                      </div>
                      <div className='' style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: 18, fontWeight: '700', color: '#000' }}> {userData?.name}</span><br></br>
                        <Link to='/profile' className='darkLink grayLink'  style={{ padding: 0 }}>See your profile</Link>
                      </div>
                    </Dropdown.Item>
                    <li style={{ marginTop: 20 }}><hr className="dropdown-divider"></hr></li>

       <Dropdown.Item >
                      {/* <Link to='/cart' className='darkLink' href='#/cart' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-cart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}>
                        </i>
                        Cart
                        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
    {Cart?.cart_items?.length ? Cart?.cart_items?.length: "No"}
    <span className="visually-hidden">unread messages</span>
  </span></Link> */}
                    </Dropdown.Item>  

                       <Dropdown.Item >
                      <Link to='/orders' className='darkLink' href="#/help" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                      <i className="bi bi-list" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                        My Orders</Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <Link to='/help&support' className='darkLink' href="#/help" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}>
                        <i className="bi bi-question-circle" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Help & Support</Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <div className='darkLink' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0 }}
                        onClick={() => logout()}>
                        <i className="bi bi-box-arrow-right" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 13 }}></i>
                        Logout</div>
                    </Dropdown.Item>        
      </Dropdown.Menu>
    </Dropdown> 
                
                 </>
                
                 :
                  <Link Link to='/login' className='btn-design link-a' id="signinnavbar">Sign in</Link>
                 }
       </div>

  
    </div>
   

   
  )
}

export default Navigationbar


