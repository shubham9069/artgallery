import React,{useState} from 'react'

const Tab4 = () => {
    const [users, setUsers] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""

    });
    const { username, email, mobile, password } = users;
    const onchange = e => {
        // setErrorMsg('')
        setUsers(users => ({ ...users, [e.target.name]: e.target.value }));
    }
  return (
    <>
    <div>
    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>Personal Details</h5>
    <p style={{marginTop:'30px',color:"#56BDBD"}}><i class="bi bi-pen" Style={'color:#56BDBD; font-size:1rem !important ;margin-right:10px '}></i>edit </p>  
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter full name" name="username" value={username} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='name' placeholder="Last name" name="username" value={username} onChange={e => onchange(e)}></input>  
    </div>
    <div className="between-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Enter Email" name="username" value={username} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='name' placeholder="Gender" name="username" value={username} onChange={e => onchange(e)}></input>  
    </div>
    </div>


    <div>
    <div className="between-div" style={{margin: "10px 0"}}>
    <h5 style={{ marginTop: "30px" }}>My Address </h5>
    
    </div>
    <div className="center-div" style={{gridGap:'40px',margin: "1.5rem 0"}}>
    <input className='profile-input' type='name' placeholder="Zip-Code" name="username" value={username} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='name' placeholder="City/Town" name="username" value={username} onChange={e => onchange(e)}></input>  
    </div>
    <div className="center-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Address Lane 1" name="username" value={username} onChange={e => onchange(e)}></input>  
    {/* <input className='profile-input' type='name' placeholder="Gender" name="username" value={username} onChange={e => onchange(e)}></input>   */}
    </div>
    <div className="center-div" style={{gridGap:'40px',margin: "1.rem  0"}}>
    <input className='profile-input' type='name' placeholder="Address Lane 1" name="username" value={username} onChange={e => onchange(e)}></input>  
    {/* <input className='profile-input' type='name' placeholder="Gender" name="username" value={username} onChange={e => onchange(e)}></input>   */}
    </div>
    <div className="center-div" style={{gridGap:'40px',margin: "1.5rem  0"}}>
    <input className='profile-input' type='name' placeholder="Land Mark" name="username" value={username} onChange={e => onchange(e)}></input>  
    <input className='profile-input' type='name' placeholder="State" name="username" value={username} onChange={e => onchange(e)}></input>  
    </div>
    </div>
            
            <form className='inputForm' >
                

                <button type='submit' className='themeButton' style={{ marginTop: 20, width: '100%' }}>Save changes</button>

            </form>

          
            




    </>
  )
}

export default Tab4