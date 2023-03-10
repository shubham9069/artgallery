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
    const [Toggle,setToggle]=useState(false)
  return (
    <>
     
    
<div className='' style={{maxWidth: '1500px' ,margin:'0 auto'}} >
<h4 id="below650" onClick={()=>setToggle(!Toggle)}> toogle by </h4>
    <div className='d-flex section-margin justify-content-between' id="main-div-right" >
        <div className='col-md-2' id="above650">
          
            <h5>Setting</h5>
            <div className='darkLink profileLink' href='#' style={{ color: tab === 1 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
                onClick={() => setTab(1)}>
                <i class="bi bi-person" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                User info
            </div>
            {/* <div className='darkLink profileLink' href='#' style={{ color: tab === 3 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <i class="bi bi-star" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Watchlist
            </div> */}
            {/* <div className='darkLink profileLink' href='#' style={{ color: tab === 4 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
            onClick={() => setTab(4)}>
                <i class="bi bi-heart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                Account
            </div> */}
            <a className='darkLink profileLink'  style={{ color: tab === 5 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
                onClick={() => setTab(5)}>
                <i class="bi bi-gear" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
                My Address
            </a>

           
        </div>

        { Toggle ?  <div className='col-md-2'  >
          
          <h5>Setting</h5>
          <div className='darkLink profileLink' href='#' style={{ color: tab === 1 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
              onClick={() => setTab(1)}>
              <i class="bi bi-person" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
              User info
          </div>
          {/* <div className='darkLink profileLink' href='#' style={{ color: tab === 3 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}>
              <i class="bi bi-star" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
              Watchlist
          </div> */}
          {/* <div className='darkLink profileLink' href='#' style={{ color: tab === 4 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
          onClick={() => setTab(4)}>
              <i class="bi bi-heart" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
              Account
          </div> */}
          <a className='darkLink profileLink'  style={{ color: tab === 5 ? "#56BDBD" : '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 15 }}
              onClick={() => setTab(5)}>
              <i class="bi bi-gear" style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}></i>
              My Address
          </a>

         
      </div>
        :
        ""}


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
