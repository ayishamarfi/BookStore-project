 
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
     <div className='md:grid grid-cols-3 md:p-10 p-5 text-white bg-blue-950'>
      <div>
        <h1 className='text-xl md:ms-0 ms-35'>ABOUT US</h1>
        <p className='mt-3 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur rem quae nemo quo quis quasi quos, atque vitae similique, inventore fugit praesentium magni delectus ex accusantium illum dolorum pariatur.</p>
      </div>
      <div className='flex justify-center'>
        <div>
          <h1 className='text-xl md:mt-0 mt-5 md:ms-0 ms-15'>NEWSLETTER</h1>
          <p className='mt-4'>Stay updated with our latest trends</p>
          <div className='flex mt-4'>
            <input type="text" placeholder='Email Id' className='bg-white p-2 placeholder:text-gray-400'/>
            <button className='bg-amber-400 py-2 px-3 text-black'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      </div>
      <div className='md:mt-0 mt-5 md:ms-0 ms-35'>
        <h1 className='text-xl'>FOLLOW US</h1>
        <p className='mt-4 ms-2 '>Let us be social</p>
        <div className='flex mt-3'>
          <FontAwesomeIcon icon={faInstagram} className=' me-5'/>
          <FontAwesomeIcon icon={faXTwitter} className='me-5' />
          <FontAwesomeIcon icon={faFacebook} className=' me-5' />
          <FontAwesomeIcon icon={faLinkedin} className=' me-5' />

        </div>
      </div>
     </div>
     <div className='bg-black p-2 text-center'>
      <p className='text-white' style={{fontSize:'10px'}}>Copyright © 2023 All rights reserved | This website is made  by <span><FontAwesomeIcon icon={faHeart} style={{color: "#cc0f35",}} /></span>    Ayisha Marfi</p>
     </div>
    </>
  )
}

export default Footer
