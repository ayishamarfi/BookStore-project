import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Adminheader() {
  return (
    <>
    <nav className='py-3 px-5 flex'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{width:'60px', height:'60px'}} />
            <h1 className='text-2xl hidden md:flex font-bold ms-2'>BOOK STORE</h1>
        </div>
        <div className='ms-auto'>
            <button className='px-4 py-3 border rounded'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>
        </div>
      
    </nav>
    <div className='bg-gray-900 p-2 w-full text-center text-white'>Welcome, Admin! Youu're all set to manage and minitor the system Let's get to work!</div>
</>
  )
}

export default Adminheader
