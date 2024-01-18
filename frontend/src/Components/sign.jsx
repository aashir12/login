import React,{useState} from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';

const Sign = () => {
    var [val,valFun]=useState({
        naam:'',
        email:'',
        pass:'',
        num:''
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
       axios.post('/sign',
      val,
      console.log(val)
       
       
       ).then(
        console.log('successfull'),
      
        )

      }
  return (
    <>
<div class="container">
      <div class="wrapper">
        <div class="title"><span>Sign Up</span></div>
        <form action="#" onSubmit={clicker}>
        <div class="row">
        <i class="fas fa-user"></i>
            <input type="text" placeholder="Ali" required onChange={changer} value={val.naam} name='naam'/>
          </div>
          <div class="row">
          <i class="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Email or Phone" required onChange={changer} value={val.email} name='email'/>
          </div>
          <div class="row">
          <i class="fa-solid fa-phone"></i>
            <input type="tel" placeholder="+92-XXXX-XXX" required onChange={changer} value={val.num} name='num'/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required onChange={changer} value={val.pass} name='pass'/>
          </div>
          <div class="row button">
            <input type="submit" value="Sign Up" />
          </div>
          <div class="signup-link">Not a member? <Link to="/login">Login now</Link></div>
        </form>
      </div>
    </div>
{/* new */}

  
    {/* <form onSubmit={clicker}>
    <div className='Sign'>
        <h1>Sign Up</h1>
        <div className='inputs'>
            <input type='email' onChange={changer} value={val.email} name='email' placeholder='aashirnawaz5@gmail.com'/>
            <input type='text' onChange={changer} value={val.naam} name='naam' placeholder='jhon'/>
            <input type='tel' onChange={changer} value={val.num} name='num' placeholder='03X-XXXXXXXX'/>
        
            <input type='password' onChange={changer} value={val.pass} name='pass' placeholder='xxxxxx'/>
        </div>
        <button className='Login'>Sign Up</button>
    <h4>Already have an account? 
    <Link to='/login'>Log in</Link>
    </h4>
    </div>
 </form> */}
</>
  )
}

export default Sign