import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Allbooks() {
  return (
    <>
      <Header />
      <div>
        <h1 className='my-10 text-center text-3xl'>Collection</h1>
        <div className='md:grid grid-cols-3 mb-10'>
          <div></div>
          <div className='flex mx-2 '>
            <input type="text" placeholder='Search by Title' className='bg-white border border-gray-200 w-full ps-2 ' />
            <button className='bg-blue-900 px-4 py-3 text-white hover:bg-blue-950'>Search</button>
          </div>
          <div></div>
        </div>
        <div className='md:grid grid-cols-[1fr_4fr] md:px-10 px-5'>
          <div>
            <h1 className='text-xl font-medium py-3 ms-10 font-bold'>Filters</h1>
            <div className='my-2 flex'>
              <input type="radio" id='Literary Fiction' name='filter' />
              <label htmlFor="Literary Fiction" className='ms-3'>Literary Fiction</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id='Philosophy'name='filter' />
              <label htmlFor="Philosophy" className='ms-3'> Philosophy</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id=' Romance'name='filter' />
              <label htmlFor="  Romance" className='ms-3'>  Romance</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id='Mystery/Thriller' name='filter'/>
              <label htmlFor=" Mystery/Thriller" className='ms-3'> Mystery/Thriller</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id=' Horror'name='filter' />
              <label htmlFor="  Horror" className='ms-3'>  Horror</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id=' Autobiography'name='filter' />
              <label htmlFor=" Autobiography" className='ms-3'> 
               Autobiography</label>
            </div>
            <div className='my-2 flex'>
              <input type="radio" id='Self-Help'name='filter' />
              <label htmlFor=" Self-Help" className='ms-3'> Self-Help</label>
            </div>
             <div className='my-2 flex'>
              <input type="radio" id='Politics'name='filter' />
              <label htmlFor=" Politics" className='ms-3'>Politics</label>
            </div>
          </div>
          <div className='md:grid grid-cols-4 mb-10'>
            <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '160px' }}>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '150px', height: '200px' }} />
              <p className='mt-3 text-blue-400 text-sm'>Dan Brown</p>
              <p>The Da vinci Code</p>
              <Link to={'/view-book/:id'}><button className='bg-blue-900 w-full text-white py-2 px-5 my-3 hover:bg-blue-950 text-sm'>View book</button></Link>
            </div>
            <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '160px' }}>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '150px', height: '200px' }} />
              <p className='mt-3 text-blue-400 text-sm'>Dan Brown</p>
              <p>The Da vinci Code</p>
              <Link to={'/view-book/:id'}><button className='bg-blue-900 w-full text-white py-2 px-5 my-3 hover:bg-blue-950 text-sm'>View book</button></Link>
            </div>
            <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '160px' }}>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '150px', height: '200px' }} />
              <p className='mt-3 text-blue-400 text-sm'>Dan Brown</p>
              <p>The Da vinci Code</p>
              <Link to={'/view-book/:id'}><button className='bg-blue-900 w-full text-white py-2 px-5 my-3 hover:bg-blue-950 text-sm'>View book</button></Link>
            </div>
            <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '160px' }}>
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '150px', height: '200px' }} />
              <p className='mt-3 text-blue-400 text-sm'>Dan Brown</p>
              <p>The Da vinci Code</p>
              <Link to={'/view-book/:id'}><button className='bg-blue-900 w-full text-white py-2 px-5 my-3 hover:bg-blue-950 text-sm'>View book</button></Link>
            </div>

             

            
             
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Allbooks

