import React from 'react'
import { useContext,useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../AuthProvider'
import { Banner,Slickslider,SaleBanner,ShopbyCategory } from './Exportfile'
import axios from '../axios'
import Toast from '../Toast'
import { AllProduct } from '../component/Exportfiles'
import Loader from '../component/Loader'



const HomePage = () => {
  const {All_Product_Page,homepage,setHomepage} = useContext(AuthContext)
  const {Recommended} = homepage

  
const [isLoading,setIsLoading] = useState(true)



  const get_all= async(url,type) =>{

    try{
      setIsLoading(true)
      const response= await axios({
        method: "get",
       url:url,
       })
       
       if(response.status===200){
        const data = response.data;

          setHomepage((p)=>({...p,["Recommended"]:data?.products}))
         

        }
        
      //   Toast(data.message,response.status)
       
     }
     catch(err){
      const error = err.response.data
      Toast(error.message);
      


     }
     finally{
      setIsLoading(false)
     }
    }

    useEffect(()=>{
     !Recommended?.length? get_all('/get_recommanded_products'):setIsLoading(false)
      
     
    },[])
  
  return (
    <>
    
    <Banner />
    <Slickslider ImgArr={All_Product_Page} title={['RECENT','VIEW']}  /> 
    <ShopbyCategory  />
    {/* <Slickslider ImgArr={All_Product_Page} type={1}  title={['PORTRAIT','ART']} /> */}
    <Slickslider ImgArr={All_Product_Page} type={2} title={['TODAYS','DEALS']}  /> 
  <SaleBanner/>
  <Slickslider ImgArr={Recommended} title={['RECOMMENDED','VIEW']}  /> 
  </>

  )
}

export default HomePage