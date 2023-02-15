import React from 'react'
import './edit.css'
const Editdetails = () => {
  return (
    <>
 
               
                


            <div className='container section '>
                <h3 style={{ color: '#000' }}> Edit Details</h3>
               
                <form className='inputForm'>
                <label for="name" style={{color:"#555555"}}>Mobile Number</label>
                    <div className='row'>
                        <div  className='form-group col-md-9'>
                            <input className="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>
                       
                        
                    </div>
                    <label for="name" style={{color:"#555555"}}>Full Name</label>
                    <div className='row'>
                        
                        <div className='form-group col-md-9'>
                            <input placeholder='Enter Name'  class="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>
                    </div>
                    <label for="name" style={{color:"#555555"}}> Email</label>
                    <div className='row'>
                        <div className='form-group col-md-9'>
                            <input placeholder='Enter Email'  class="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>

                    </div>
 
                    <div className='row'>
                        <div className='form-group col-md-3'>
                            <div class="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}>

                            <label className="gender">Male
  <input type="radio" checked="checked" name="radio"/>
  <span class="checkmark"></span>
</label>
                            </div>
                        </div>
                        <div className='form-group col-md-3'>
                            <div className="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}>

                            <label className="gender">Female
  <input type="radio" checked="checked" name="radio"/>
  <span class="checkmark"></span>
</label>
                            </div>
                        </div>
                        </div> 

                    <label for="name" style={{color:"#847c7c"}}>Birthday(dd/mm/yyy)</label>
                    <div className='row'>
                        <div className='form-group col-md-9'>
                            <input placeholder='date' type="text"  class="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>
                       
                        
                    </div>

                    <label for="name" style={{color:"#847c7c"}}>Location</label>
                    <div className='row'>
                        <div className='form-group col-md-9'>
                            <input   class="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>
                        </div>
                       
                        <h4>Alternate Mobile Number</h4>
                        <label for="mobile" style={{color:"#555555"}}>Moible Number*</label>
                        <div className='row'>
                        <div  className='form-group col-md-9'>
                            <input   className="form-control" style={{border:"1px solid #EBEBEB",height: "45px"}}></input>
                        </div>
                        </div>

                       
                        <div className='row'>
                        <div  className=' col-md-12'>
                        <button type='submit' className='themeButton' style={{ width: '30%' }}>SAVE DETAILS</button>
                        </div>
                        </div>
                            <br></br>
                        <div className='row'>
                        <div  className='col-md-12'>
                        <button type='submit' className='password' style={{ width: '30%' }}>CHANGE PASSWORD</button>
                        </div>
                        </div>
                   

                
                </form>
            </div>
            
   </>

  )
}

export default Editdetails