import React, { useState } from 'react'
import '../Components/Form.css'


const Form = () => {

    const [user, setuser] = useState({ username: '', email: '', mob: '', password: '', confirmpassword: '' })
    const [error, seterror] = useState({})
    const newError = {}
    const [Flag,setFlag]  = useState(false)
    
    const handleChange = (e) => {
        
        setuser({...user,[e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.username === '') {
            //   seterror({username:'Please enter the Username'})
            newError.username = 'Please enter the Username'
        }
        else if (user.username.length <= 2 || user.username >= 10) {
            newError.username ='username must be betwwen 2 and 10'
        }
        if (user.email === '') {
            // seterror({email:'Please enter the Email'})
             newError.email = 'Please enter the Email'
        } else if (user.email.indexOf('@')<=0) {
            newError.email = "@ invalid position"
        } else if ((user.email.charAt(user.email.length - 4) !== ".") && (user.email.charAt(user.email.length - 3) !== ".")) {
            newError.email = "invalid . position"
        }
        if (user.mob === '') {
            // seterror({mob:'Please enter the Mobile Number'})
             newError.mob = 'Please enter the Mobile Number'
        }else if (user.mob.length <= 1 || user.mob.length > 10) {
            newError.mob = 'Please enter the 10 digits only'
        }
        else if (isNaN(user.mob)) {
            newError.mob = 'Please enter the digit only'
        } 
        if (user.password === '') {
            // seterror({password:'Please enter the Password'})
             newError.password = 'Please enter the Password'
        } else if (user.password.length <= 2 || user.password.length > 15) {
            newError.password = 'password must be between 15 characters'
        }
        if (user.confirmpassword === '') {
            // seterror({confirmpassword:'Please enter the '})
             newError.confirmpassword = 'Please enter the conform password'
        } else if (user.confirmpassword !== user.password) {
             newError.confirmpassword = 'Password is not Matching'
        }
        else {
            setFlag(true)
        }
       seterror(newError)
    }

    return (
        <div>
            <h1 className='flag'>{Flag?<p>{user.username} you have successfully registered</p>:''} </h1>
    <div className='form-container' style={{border:'1px solid lightgray', borderRadius:'8px', width:"400px" , padding:'20px 0', margin:'16px auto'}} onSubmit={handleSubmit}>
          <div className='insta-logo'>
              <h1 style={{textAlign:'center', fontSize:'30px', padding:'10px 20px', fontWeight:'500'}}>Easy<span className='text-[#FAA300]' >Foods</span></h1>
          </div>
          <form className='form' style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <div className='form-group'>
                  <input type="text" style={{ width: '100%', boder: '1px solid #ccc', padding:'8px 5px '}} placeholder='Username' onChange={handleChange} value={user.username} name='username' autoComplete='false'/>
                  <span style={{ color: 'red' }}> {error.username }</span>
              </div>

              <div className='form-group'>
                  <input type="text" style={{ width: '100%', boder: '1px solid #ccc', padding:'8px 5px '}} placeholder='Email' onChange={handleChange} value={user.email} name='email' autoComplete='false' />
                  <span style={{ color: 'red' }}>{error.email }</span>
              </div>
              <div className='form-group'>
                  <input type="text" style={{ width: '100%', boder: '1px solid #ccc', padding:'8px 5px '}} placeholder='Mobile Number' onChange={handleChange} value={user.mob} name='mob' autoComplete='false' />
                  <span style={{ color: 'red' }}>{error.mob }</span>
              </div>

              <div className='form-group'>
                  <input type="text" style={{ width: '100%', boder: '1px solid #ccc', padding:'8px 5px '}} placeholder='Password' onChange={handleChange} value={user.password} name='password' autoComplete='false' />
                  <span style={{ color: 'red' }}>{ error.password}</span>
              </div>
              <div className='form-group'>
              <input type="text" style={{ width: '100%', boder: '1px solid #ccc', padding:'8px 5px '}} placeholder='Confirm Password' onChange={handleChange} value={user.confirmpassword} name='confirmpassword' autoComplete='false' />
                  <span style={{ color: 'red' }}>{ error.confirmpassword}</span>
              </div>


              <button type='submit' style={{padding:'10px 25px', backgroundColor:'#007bff', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer', marginBottom:'20px'}} className='hover: text-[#0056b3]'>Sign in</button>

            





          </form>
            </div>
            </div>
  )
}

export default Form
