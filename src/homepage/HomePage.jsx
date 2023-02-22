import React from 'react'
import { useContext,useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../AuthProvider'
import { Banner,Slickslider,SaleBanner,ShopbyCategory } from './Exportfile'
import axios from '../axios'
import Toast from '../Toast'



const HomePage = () => {
  const {All_Product_Page} = useContext(AuthContext)
 
  
  return (
    <>
    <Banner />
    <Slickslider ImgArr={All_Product_Page} title={['RECENT','VIEW']}  /> 
    <ShopbyCategory  />
    <Slickslider ImgArr={All_Product_Page} type={1}  title={['PORTRAIT','ART']} />
    <Slickslider ImgArr={All_Product_Page} type={2} title={['TODAYS','DEALS']}  /> 
  <SaleBanner/>
  <Slickslider ImgArr={All_Product_Page} title={['RECOMMENDED','VIEW']}  /> 
  </>

  )
}

export default HomePage