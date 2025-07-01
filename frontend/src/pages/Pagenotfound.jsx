import React from 'react'

function Pagenotfound() {
  return (
    <div className='grid grid-cols-3 w-full'>
        <div></div>
        <div className='flex justify-center items-center flex-col h-screen'>
        <img src=" https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="no image" className='w-1/2'/>
        <div className='text-center'>
            <p>Oh No!</p>
            <h1 className='text-5xl mt-3'>Looks Like You're Lost</h1>
            <p className='mt-3 text-xl'>The page you are looking for is not available</p>
        </div>
        <button className='mt-4 bg-blue-900 text-white px-4 py-3 hover:bg-white hover:border hover-border-blue-900 hover:text-blue-900 rounded-md'>Back Home</button>
      </div>  
      <div></div>
      
    </div>
  )
}

export default Pagenotfound
