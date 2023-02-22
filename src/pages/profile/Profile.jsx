import React from 'react'
import { useState } from 'react'
import Tab1 from './userProfileTab'
import './profile.css'
import Addresstab from './Addresstab'
import Tab4 from './Tab4'
import userProfileTab from './userProfileTab'
import OrderTab from '../orders/OrderTab'

const Profile = () => {
    const [tab , setTab] = useState(1)
  return (
    <>
     
    
<div className='' style={{maxWidth: '1500px' ,margin:'0 auto'}}>
    <div className='d-flex section-margin justify-content-between' >
        <div className='col-md-2'>
          
            <h5>Setting</h5>
            <div className='darkLink profileLink' href='#' style={{ color: tab === 1 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
                onClick={() => setTab(1)}>
                <i class="bi bi-person" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                User info
            </div>
            <div className='darkLink profileLink' href='#' style={{ color: tab === 2 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <i class="bi bi-heart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Favorites
            </div>
            <div className='darkLink profileLink' href='#' style={{ color: tab === 3 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <i class="bi bi-star" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Watchlist
            </div>
            <div className='darkLink profileLink' href='#' style={{ color: tab === 4 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
            onClick={() => setTab(4)}>
                <i class="bi bi-heart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Account
            </div>
            <a className='darkLink profileLink'  style={{ color: tab === 5 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
                onClick={() => setTab(5)}>
                <i class="bi bi-gear" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                My Address
            </a>

            <div className='darkLink profileLink' href='#' style={{ color: tab === 6 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <i class="bi bi-bell" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Notification
            </div>

            <a className='darkLink profileLink' href='#/orders'  style={{ color: tab === 7 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                
                <i class="bi bi-list" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                My Orders
            </a>
           
        </div>


        <div className='col-md-9' style={{ display: 'flex', flexDirection: 'column'}}>
           {tab==1 &&(<Tab1 />)}
           {tab==4 &&(<Tab4 />)}
           {tab==5 && (<Addresstab />)}
           
        </div>
    </div>

</div>














    </>
  )
}

export default Profile
