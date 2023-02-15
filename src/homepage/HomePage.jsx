import React from 'react'
import {bottomLeft, img1,img2,img3,img4,bottomRight} from './asset/Export'
import { Banner,Slickslider,SaleBanner,ShopbyCategory } from './Exportfile'


var image =[img1,img2,img3,img4,img1,img2,img3,img4]
const HomePage = () => {
  return (
    <>
    <Banner />
    <div style={{padding:'0 2rem'}}><Slickslider ImgArr={image} title={['RECENT','VIEW']}  /> </div>
    <ShopbyCategory />
    <Slickslider ImgArr={image} type="1"  title={['PORTRAIT','ART']} />
    <div style={{padding:'0 2rem'}}><Slickslider ImgArr={image} type={2} title={['TODAYS','DEALS']}  /> </div>
  <SaleBanner/>
  <div style={{padding:'0 2rem'}}><Slickslider ImgArr={image} title={['RECOMMENDED','VIEW']}  /> </div>
  </>

  )
}

export default HomePage