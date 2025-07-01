 import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'

function Adminbooks() {
  const [bookliststatus, setBookListStatus] = useState(true)
  const [userstatus, setUserStatus] = useState(false)
  return (
    <>
      <Adminheader />


      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <Adminsidebar />

        </div>
        <div className='p-4 mb-20'>
          <h1 className=' text-2xl text-center font-semibold my-10'>All Books</h1>
          <div className='md:px-40 px-5'>
            <div className='flex justify-center items-center text-sm my-5'>
              <p onClick={() => { setBookListStatus(true); setUserStatus(false) }} className={bookliststatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-300 border-r border-b rounded' : 'px-4 py-3 border-t  border-gray-300 '}>Book List</p>
              <p onClick={() => { setBookListStatus(false); setUserStatus(true) }} className={userstatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-300 border-l border-b rounded' : 'px-4 py-3 border-t  border-gray-300 '}>Users</p>
            </div>
          </div>

          {/* book list */}
          {bookliststatus && <div className='md:mx-10 mx-20 grid md:grid-cols-4 grid-cols-1 mt-10'>
            {/* card */}
            <div className='bg-white shadow-xl p-2 text-center rounded w-60 h-85 '>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no img" className='w-60 h-50 object-cover' />
              <h1 className='mt-3 text-blue-600 text-sm'>Dan Brown</h1>
              <p className='text-base'>The Da vinci Code</p>
              <p className='text-red-500 text-sm'>maxwell@gmail.com</p>
              <button className='bg-green-700 w-full mt-3 p-1 text-white hover:bg-white hover:text-green-700 hover:border hover:border-green-700'>Approve</button>
            </div>

            <div className='bg-white shadow-xl p-2 text-center rounded w-60 h-85 md:ms-10  mt-5 md:mt-0'>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no img" className='w-60 h-50 object-cover' />
              <h1 className='mt-3 text-blue-600 text-sm'>Dan Brown</h1>
              <p className='text-base'>The Da vinci Code</p>
              <p className='text-red-500 text-sm'>maxwell@gmail.com</p> 
              <div className='flex justify-end mt-3'>
                <img src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=" alt="no img" style={{ width: '30px' }} />
              </div>
            </div>


             <div className='bg-white shadow-xl p-2 text-center rounded w-60  h-85 md:ms-20 mt-5 md:mt-0'>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no img" className='w-60 h-50 object-cover'  />
              <h1 className='mt-3 text-blue-600 text-sm'>Dan Brown</h1>
              <p className='text-base'>The Da vinci Code</p>
              <p className='text-red-500 text-sm'>maxwell@gmail.com</p> 
              <div className='flex justify-end mt-3'>
                <img src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=" alt="no img" style={{ width: '30px' }} />
              </div>
            </div>


          </div>}


          {/* user */}
        {userstatus &&  <div className='p-4 mt-10'>
            <div className="md:grid grid-cols-3 text-white">
              <div className='px-5'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600  mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='px-5 mt-4 md:mt-0'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600 text-lg mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                     <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>


                <div className='px-5 mt-4 md:mt-0'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600 text-lg mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                     <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="md:grid grid-cols-3 text-white md:mt-10 mt-5">
              <div className='px-5'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600 text-lg mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                     <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='px-5 mt-4 md:mt-0'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600 text-lg mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                     <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>


                <div className='px-5 mt-4 md:mt-0'>
                <div className="bg-gray-300 rounded p-4">
                  <p className='text-red-600 text-lg mb-2'>ID: 67db016f0901e0a56c1adf62</p>
                  <div className="grid grid-cols-[1fr_3fr]">
                    <div className='flex justify-center items-center'>
                      <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no img" />
                    </div>
                     <div className='flex justify-center items-center flex-col'>
                      <h1 className='text-lg text-blue-500'>Jennifer Steve</h1>
                      <h1 className=' text-black ms-5 text-sm'>jennifer@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}



        </div>
      </div>
      <Footer />


    </>
  )
}

export default Adminbooks