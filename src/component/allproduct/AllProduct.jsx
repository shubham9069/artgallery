import React ,{useState,useEffect, useContext} from 'react'
import './Allproduct.css';
import {bottomRight} from '../../homepage/asset/Export'
import { Link } from 'react-router-dom';
import Toast from '../../Toast';
import axios from '../../axios';
import { AuthContext } from '../../AuthProvider';

const AllProduct = () => {

  const {All_Product_Page,Catagory,userToken,Cart,setCart} = useContext(AuthContext);
  
  const [range,setRange]=useState(2000)
  const [SortArr,setSortArr]=useState(null)
  const [CatagorySort,setCatagorySort]=useState({size:[],style:[],medium:[]})
 
  const [isLoading,setIsLoading]=useState(true)



  // =========sort by dropown=========
const sortby=(e)=>{
  // console.log(e.target.value);
  
  setRange(2000)
  var data = [...All_Product_Page];

if(e.target.value=="name"){
 
  data?.sort((a,b)=>{ return a?.name< b?.name &&(1) })
  console.log(data )
  
}
if(e.target.value=="priceL_to_H"){
    
   data.sort((a,b)=>{ return a?.price-b?.price })
  
}
if(e.target.value=="priceH_to_L"){
    
   data.sort((a,b)=>{ return b?.price-a?.price })
  
}

setSortArr(data)
}
 

// ===========price bar minmax===========

const MinMax =(value)=>{
  
var min = All_Product_Page[0]?.price;
var max = All_Product_Page[0]?.price;

All_Product_Page.forEach((element, i)=>{

  if(min>element.price){
    min=element.price

  }
  if(max<element.price){
    max=element.price

  }
  
})
return value=="min"? min:max
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


// --------------------filret for price bar ------------------

const getdata =(value)=>{
  
var data = All_Product_Page?.filter((element)=>{
  return Number(element.price) <= value
})

console.log(data)
setSortArr(data);
}
const HandleRange =(e)=>{
  setRange(e.target.value)
  filterByPrice(e.target.value)


}



const filterByPrice = debounce((value) => getdata(value), 400)

// --------------------onchanage for checkbox -----------

const handleCatagoryChange = (e)=>{
  

  if(e.target.checked){

    setCatagorySort({...CatagorySort,[e.target.name]:[...CatagorySort[e.target.name],e.target.value]})
  }
  else{
    console.log("hjrllo")
    var data = CatagorySort[e.target.name]?.filter((element) =>{

      return element != e.target.value
    })

    setCatagorySort({...CatagorySort,[e.target.name]:data})    
  }

}

// ------------------filter for  Category --------------

const filterCatagory = ()=>{
  setRange(2000)
// console.log("hello cdchdccd")
  var updateArr = All_Product_Page;
  


  if(CatagorySort.medium.length){
   
    updateArr = updateArr?.filter((element) =>{
      // console.log(CatagorySort?.medium +  element?)
      return CatagorySort?.medium.includes(element?.medium.toString()) 
    })
    
     
  }
  if(CatagorySort.size.length){
    
    updateArr = updateArr?.filter((element) =>{
      
      return CatagorySort?.size.includes(element?.size.toString())
    })
  }
  if(CatagorySort.style.length){
    
    updateArr = updateArr?.filter((element) =>{

      return CatagorySort?.style.includes(element?.style.toString())
    })
  }
  setSortArr(updateArr)



 


}

useEffect(() =>{
if(All_Product_Page.length){

  filterCatagory();
  
}

  
},[CatagorySort])

//  ----------------------------add to cart --------------------

const Add_to_cart= async(id) =>{
  const Form = new FormData()
  Form.append("product_id",id)
  Form.append("qty",1)
  try{
    setIsLoading(true)
    const response= await axios({
      method: "post",
     url:'/add-to-cart',
     data:Form,
     headers:{
      Authorization:`Bearer ${userToken}`,
      "Content-Type": "multipart/form-data",
      
     }
     })
     
     if(response.status===200){
      const data = response.data;
      setCart(data)
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
  <div className="all-product section-padding">


  {/* ----------------top----------------- */}
    <div className="allproduct-top">
      <select onClick={sortby} >
      <option value="" selected >Recommended</option>
     
        <option value="name">A - z</option>
        <option value="priceL_to_H">price Low to High</option>
        <option value="priceH_to_L">price High To Low </option>
        
      
        
      </select>
    </div>
    
<div className=" d-flex" style={{gridGap:'10px'}}>
    {/* --------------left---------------- */}
    <div className="allproduct-left">

    <div style={{borderBottom: '1px solid #D9D9D9', padding : '1rem 0'}}>
      {/* <p >Price</p> */}
      <div className="custom-control custom-checkbox product-filter-input"  >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h6>Range</h6>
                            <span>₹{MinMax("min")} - ₹{MinMax("max")}</span>
                        </div>
                        <form className='rangeForm'>
                            <input type="range" id="rangeInput" name="rangeInput" min={MinMax("min")} max={MinMax()} value={range} onChange={HandleRange}  className='rangeInput' ></input>
                        </form>
                        <span>Upto ₹{range}</span>
</div>

    </div>

    <div style={{borderBottom: '1px solid #D9D9D9' , padding : '1rem 0'}}>
      <p >Medium</p>
      {Catagory?.mediums.map((element, index) =>{


        return <div className="custom-control custom-checkbox product-filter-input" >
  <input type="checkbox" className="custom-control-input" id="customCheck1" name="medium" value={element?.id} onChange={handleCatagoryChange} />
  <label className="custom-control-label px-3" htmlFor="customCheck1">{element?.medium}</label>
</div>
      })}
      
    </div>

    <div style={{borderBottom: '1px solid #D9D9D9', padding: '1rem 0'}}>
      <p >Size</p>
      {Catagory?.sizes.map((element, index) =>{


return <div className="custom-control custom-checkbox product-filter-input" >
<input type="checkbox" className="custom-control-input" id="customCheck1"   name="size" value={element?.id} onChange={handleCatagoryChange} />
<label className="custom-control-label px-3" htmlFor="customCheck1">{element?.size}</label>
</div>
})}
    </div>

    <div style={{borderBottom: '1px solid #D9D9D9', padding: '1rem 0'}}>
      <p >Style</p>
      {Catagory?.styles.map((element, index) =>{


return <div className="custom-control custom-checkbox product-filter-input" >
<input type="checkbox" className="custom-control-input" id="customCheck1"  name="style" value={element?.id} onChange={handleCatagoryChange} />
<label className="custom-control-label px-3" htmlFor="customCheck1">{element?.style}</label>
</div>
})}

    </div>
</div>

{/* ===================right================= */}
    <div className="allproduct-right">

    { 
    SortArr?.length ? SortArr?.map((element, index) =>{


return <div>
<Link to={'/ProductDetails/' + element.product_id} key={index} className="link-a"><img src={element?.images?.length ? element?.images[0] : null}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>
<span style={{color:' #56BDBD'}}>RS {element?.price}</span>
</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>
<div className='d-flex center-div' style={{ gridGap:'20px',marginBottom:'1rem'}}>

{Cart?.cart_items?.length && (Cart?.cart_items?.find((product) =>product?.item_id == element?.product_id)!=undefined) ? 
  <Link to="/cart" className="white-themeButton link-a"   >Already added  </Link>
  :
<button className="themeButton" onClick={()=>Add_to_cart(element?.product_id)} >Add To cart  </button>}


<button className="themeButton" >Buy Now </button>
</div>
</div>
    })
    : SortArr==null? All_Product_Page?.map((element, index) =>{


return <div>
<Link to={'/ProductDetails/' + element.product_id} key={index} className="link-a"><img src={element?.images?.length ? element?.images[0] : null}></img> </Link>
<div className='between-div m-3'>
<p style={{fontWeight: '600',margin:0,}}>{element.name}</p>
<span style={{color:' #56BDBD'}}>RS {element?.price}</span>
</div>
<p className='product-box-desc' dangerouslySetInnerHTML={{__html: `${element?.description}`}}></p>
<div className='d-flex center-div' style={{ gridGap:'20px',marginBottom:'1rem'}}>


{Cart?.cart_items?.length && (Cart?.cart_items?.find((product) => product?.item_id == element?.product_id)!=undefined) ? 
  <Link to="/cart" className="white-themeButton link-a"   >Already added  </Link>
:
<button className="themeButton" onClick={()=>Add_to_cart(element?.product_id)} >Add To cart  </button>}


<button className="themeButton" >Buy Now </button>
</div>
</div>

})
:"no product found "

    }

  </div>

  </div>
  </div>

    </>
  )
}

export default AllProduct