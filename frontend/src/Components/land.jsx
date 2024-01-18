import React from 'react';
import {Link} from 'react-router-dom'

const Land = () => {
  return (
   <>
   <div className='container'>

   <div className='wrapper' style={{textAlign:'center',padding:'10%'}}>
   <div>Thanks for Coming now please Login</div>
       <Link to='/login' style={{margin:'',color:'#1ABC9C',textDecoration:'none'}}>Login Up</Link>
   </div>
   </div>
   </>
  )
}

export default Land