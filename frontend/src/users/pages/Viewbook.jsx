import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'

function Viewbook() {

  const [modalstatus,setModalStatus]=useState(false)
  return (
    <>
      <Header />
      <div className='border-0 mt-10 md:mx-20 md:px-10 px-2 mx-5 mb-10 shadow-2xl py-5'>
         <div className='flex justify-end mt-2'>
              <FontAwesomeIcon icon={faEye} className='top-2 right-2 cursor-pointer text-gray-400 md:p-0 p-10' onClick={()=> setModalStatus(true)
              } />
            </div>
        <div className='md:grid grid-cols-[1fr_4fr]'>
          <div>

            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="no img" className='my-5 md:p-0 p-20 ' />
          </div>

          <div>
           
            <h1 className='text-center mt-5 md:text-2xl text-sm font-bold'>Ikigai: The Japanese Secret to a Long and Happy Life</h1>
            <p className='text-center text-blue-400 text-sm'>- Héctor García, Francesc Miralles</p>

            <div className='grid md:grid-cols-3  mt-5  justify-between items-center md:mx-10 mx-0 text-sm md:px-0 px-5'>
              <div>
                <p>Publisher : Penguine Life</p>
                <p>Seller Mail : maxwell@gmail.com</p>
              </div>

              <div>
                <p>Language : English</p>
                <p>Real Price : $ 15</p>
              </div>

              <div>
                <p>No. of pages : 208</p>
                <p>ISBN : 978-10425727</p>
              </div>

            </div>
            <p className='mt-10 md:mx-10 text-justify md:px-0 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere veritatis quasi molestias nesciunt in eveniet, minima voluptate odio voluptatem dolore, adipisci officiis veniam porro, ipsam iste laboriosam libero laborum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore laborum provident a quae officiis adipisci consequuntur totam repellendus incidunt, quis, perferendis unde, fugit nesciunt perspiciatis eos magni minima eligendi.

            </p>

            <div className='flex justify-end text-white mt-5'>
              <button className='bg-blue-900 me-3 px-6 py-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-2'/>Back</button>
              <button className='bg-green-700 px-6 py-2 rounded'>Buy $ 13</button>
            </div>
          </div>

        </div>


      </div>


      {/* modal */}
      {modalstatus && 
      <div>
        <button className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 ">Open dialog</button>

        <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true"  onClick={()=>setModalStatus(false)}>

          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className ="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-white">
                 <div className='bg-gray-900  p-4 text-white flex justify-between items-center'>
                <p className='text-xl'>Book Photos</p>
                <FontAwesomeIcon icon={faXmark} className='fa-2x' onClick={()=>setModalStatus(false)}/>
                 </div>
                 <div className='p-4'>
                  <h1 className='text-blue-500'><FontAwesomeIcon icon={faCamera} className='me-3'/>Camera Click of the Book in the hand of seller</h1>
                  <div className='md:flex'>
                    <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="no img" style={{width:'250px',height:"300px",objectFit:'cover'}} className='mt-2  md-mt-0 mx-2'/>
                  <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="no img" style={{width:'250px',height:"300px",objectFit:'cover'}} className='mt-2  md-mt-0 mx-2'/>
                  <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="no img" style={{width:'250px',height:"300px",objectFit:'cover'}} className='mt-2 md-mt-0 mx-2'/>
                  </div>
                 </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>}
  

      <Footer />

    </>
  )
}

export default Viewbook
