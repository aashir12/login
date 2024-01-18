import React,{useState} from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    var [val,valFun]=useState({
     email:'',
     pass:''
    });

    function changer (event){
        var {value,name}=event.target;
       valFun((prev)=>{    
        return {
            ...prev,
            [name]:value,
        }
       });
    }
  async function clicker(e){
    e.preventDefault()
   await axios.post('/login',val)
    .then(console.log('Congrats! You have logged Inn'))

   }
    return (

<> 
<div class="container">
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form action="#" onSubmit={clicker}>
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email or Phone" required onChange={changer} value={val.email} name='email'/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required onChange={changer} value={val.pass} name='pass'/>
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login" />
          </div>
          <div class="signup-link">Not a member? <Link to="/sign">Signup now</Link></div>
        </form>
      </div>
    </div>
{/* new */}
  {/* <form onSubmit={clicker}>
        <div className='login' >
            <h1>Log in</h1>
            <div className='inputs'>
                <input type='email' placeholder='abc@mail.com' onChange={changer} value={val.email} name='email'></input>
                <input type='password' placeholder='xxxxxx' onChange={changer} value={val.pass} name='pass' ></input>
            </div>
            <input type='submit' className='Login' />

        <h4>don't have an account?
        <Link to='/sign'>Sign Up</Link></h4>
        </div>
</form> */}
    </>
  )
}

export default Login