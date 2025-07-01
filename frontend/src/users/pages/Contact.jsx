 import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />

      <div className='md:grid grid-cols-[1fr_4fr_1fr] my-10'>
        <div></div>

        <div className='p-5'>
          <h1 className='text-center text-3xl'>Contacts</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore totam voluptas modi enim eveniet. Iusto odit qui officiis culpa doloribus nemo praesentium ullam error, dignissimos placeat in, illum voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic voluptate ipsam repellat earum deleniti vitae molestiae porro illum doloremque doloribus quae fugit minima praesentium, odio perferendis </p>

        </div>
        <div></div>
      </div>

      <div className='md:grid grid-cols-[1fr_4fr_1fr] my-10'>
        <div></div>
        <div className='md:grid grid-cols-3 ms-20'>
          <div className='flex '><FontAwesomeIcon icon={faLocationDot} className='me-2 border-0 bg-gray-300 p-2 rounded-full' style={{ width: '25px', height: "25px" }} /><p>123 Main Street, Apt 4B,<br />Anytown, CA 91234</p>
          </div>
          <div className='flex md:justify-center md:mt-0 mt-3'>
            <FontAwesomeIcon icon={faPhone} className='me-2 border-0 bg-gray-300 p-2 rounded-full' style={{ width: '25px', height: "25px" }} /><p>+91  9857412547</p>
          </div>
          <div className='flex md:justify-end md:mt-0 mt-3'>
            <FontAwesomeIcon icon={faMailBulk} className='me-2 border-0 bg-gray-300 p-2 rounded-full' style={{ width: '25px', height: "25px" }} /><p>bookstore@gmail.com</p>
          </div>
        </div>
        <div></div>
      </div>


      <div className=' md:grid grid-cols-[1fr_4fr_1fr] mb-10'>
        <div></div>

        <div className='md:grid grid-cols-2 md:ms-20 px-5'>
          {/* box */}
          <div className='border-0 rounded p-4 bg-gray-300 '>
            <div className='mb-2'>
              <input type="text" placeholder='Name' className='p-2 border border-gray-200 w-full rounded bg-white' />
            </div>

            <div className='mb-2'>
              <input type="text" placeholder='Email ID' className='p-2 border border-gray-200 w-full rounded  bg-white' />
            </div>

            <div className='mb-2'>
              <textarea name="" id="" placeholder='message' className='p-5 border border-gray-200 w-full rounded  bg-white'></textarea>
            </div>

            <button className='p-2 border bg-blue-950 w-full rounded  text-white'>Send<FontAwesomeIcon icon={faPaperPlane} className='ms-2' /></button>

          </div>

          {/* map */}
          <div className='mt-5 md:mt-0'>
            <iframe   title="Kakkanad Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720487!2d76.309480940915!3d10.00881346470453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1749447187506!5m2!1sen!2sin"  allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='md:ms-10 w-full' style={{height:"300px"}}></iframe>
             </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Contact
