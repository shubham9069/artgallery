import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../../AuthProvider';

const Categoryleft = ({setSortArr,SortArr,toggle,catid}) => {
    const [range,setRange]=useState(2000);
    const [CatagorySort,setCatagorySort]=useState({size:[],style:[],medium:[],artists:[]})
    const {All_Product_Page,Catagory,userToken,Cart,setCart} = useContext(AuthContext);



    // ===========price bar minmax===========

const MinMax =(value)=>{
  var updateArr = All_Product_Page
  if(catid){
       
    updateArr = updateArr?.filter((element) =>{
      // console.log(CatagorySort?.medium +  element?)
      return element?.cat_id == catid
    })
    
  }
    
  
    var min = updateArr[0]?.price;
    var max = updateArr[0]?.price;
    
    updateArr.forEach((element, i)=>{
    
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
      // setCatagorySort({size:[],style:[],medium:[]})
      var updateArr = All_Product_Page;
      if(catid){
       
        updateArr = updateArr?.filter((element) =>{
          // console.log(CatagorySort?.medium +  element?)
          return element?.cat_id == catid
        })
        
      }
    var data =  updateArr?.filter((element)=>{
      return Number(element.price) <= value
    })
    
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
        console.log("hello")
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
    if(catid){
       
      updateArr = updateArr?.filter((element) =>{
        // console.log(CatagorySort?.medium +  element?)
        return element?.cat_id == catid
      })
      console.log(updateArr)

    }
      
      
    
    
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
      if(CatagorySort.artists.length){
        
        updateArr = updateArr?.filter((element) =>{
    
          return CatagorySort?.artists.includes(element?.artist_id.toString())
        })
      }
      setSortArr(updateArr)
    
    
    
     
    
    
    }
    
    useEffect(() =>{
    if(All_Product_Page.length){
      
      filterCatagory();
      
    }
    
      
    },[CatagorySort])
    
  return (
    <>


 <div className="allproduct-left" style={{display:toggle?"inline-block":"none" }}>

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

<div style={{borderBottom: '1px solid #D9D9D9', padding: '1rem 0'}}>
  <p >Artists</p>
  {Catagory?.artists?.map((element, index) =>{


return <div className="custom-control custom-checkbox product-filter-input" >
<input type="checkbox" className="custom-control-input" id="customCheck1"   name="artists" value={element?.id} onChange={handleCatagoryChange} />
<label className="custom-control-label px-3" htmlFor="customCheck1">{element?.name}</label>
</div>
})}
</div>
</div>





    </>
  )
}

export default Categoryleft