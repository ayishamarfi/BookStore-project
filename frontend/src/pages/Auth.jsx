import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div id='loginpage' className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-3xl'>BOOK STORE</h1>
      <div className='md:grid grid-cols-3 w-full mt-10'>
         <div></div>
         <div className='p-5'>
          <form className='bg-gray-900 p-10 rounded-md flex justify-center items-center flex-col'>
            <div style={{width:'70px' , height:'70px' , borderRadius:'50%' , border:'1px solid white' }} className='flex justify-center items-center text-white'>
              <FontAwesomeIcon icon={faUser} className='fa-2x'/>
            </div> 
            {register?<h1  className='text-2xl text-white my-4'>Register</h1>  
            :
            <h1 className='text-2xl text-white my-4'>Login</h1>}
           
            {register&&<div className="my-3 w-full">
              <input type="text" placeholder='Username' className='w-full bg-white rounded p-2' />
            </div>}
            <div className="mb-3 w-full">
              <input type="text" placeholder=' Email' className='w-full bg-white rounded p-2' />
            </div>
            <div className="mb-3 w-full">
              <input type="text" placeholder='Password' className='w-full bg-white rounded p-2' />
            </div>
            <div className="my-3 w-full">
              {register?<button className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800'>Register</button>
              :
              <button className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800'> Login</button>}
            </div>
            {!register&&<div>
            <p className='text-white'>-------------------or----------------</p>
            <div className='w-full my-3'>
              <button className='w-full bg-white p-2 rounded text-black'>  google </button>
            </div>
            </div>}
            <div className='text-white'>
               {register?<p>Are you already a user? <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p>
               :
               <p>Are you a new user?<Link to={'/register'}className='text-blue-400 underline'> register </Link></p>}
            </div>
          </form>
         </div>
         <div></div>
      </div>
    </div>
  )
}

export default Auth
