import React from 'react'
import Header from '../users/components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Landingpage() {
  return (
    <>
      <Header />
      <div className='text-white flex justify-center items-center flex-col relative' style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/046/253/271/large_2x/a-stack-of-books-on-a-table-in-front-of-a-library-free-photo.jpg')", backgroundSize: "cover",
        backgroundRepeat: "no-repeat",backgroundPosition:'center', width: '100%', height: '350px',
      }}>
        <h1 className='text-4xl font-bold mb-5'>Wonderfull Gifts</h1>
        <p >Give your family and friends a book</p>
        <div className='flex justify-center mt-5 relative'> 
        <input className='border-0 rounded-full md:w-90 w-8 p-1 bg-white placeholder:pl-5 ' type="text" placeholder='search book' style={{ width: '350px' }} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black absolute mt-2 ms-75'/>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mb-10 font-bold mt-5'>
        <h1 className='md:text-2xl'>New Arrival</h1>
        <p style={{ fontSize: '15px' }}>Explore our new collection</p>
      </div>
      <div className=' md:grid grid-cols-4 my-10 ms-30' style={{ fontSize: '12px' }}>
        <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '180px' }}>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '200px', height: '200px' }} />
          <p className='mt-3 text-blue-400'>Dan Brown</p>
          <p>The Da vinci Code</p>
          <p> $18</p>
        </div>

        <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '180px' }} >
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '200px', height: '200px' }} />
          <p className='mt-3 text-blue-400'>Dan Brown</p>
          <p>The Da vinci Code</p>
          <p> $18</p>
        </div>

        <div className='md:mb-0 mb-3 shadow-md  flex justify-center items-center flex-col ' style={{ width: '180px' }} >
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '200px', height: '200px' }} />
          <p className='mt-3 text-blue-400'>Dan Brown</p>
          <p>The Da vinci Code</p>
          <p> $18</p>
        </div>
        <div className='md:mb-0 mb-3 shadow-md flex justify-center items-center flex-col' style={{ width: '180px' }}>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361293878i/4248.jpg" alt="no image" style={{ width: '200px', height: '200px' }} />
          <p className='mt-3 text-blue-400'>Dan Brown</p>
          <p>The Da vinci Code</p>
          <p> $18</p>
        </div>
        <p>Loading...</p>
      </div>
      <div className='text-center mb-10'>
        <button className='text-white bg-blue-950  p-1 '>Explore More</button>
      </div>
      <div className='md:grid grid-cols-2 mx-20 my-10'>
        <div className='flex justify-center items-center flex-col font-bold'>
          <h6 className=' '> FEATURED AUTHORS</h6>
          <p>Captivates with every word</p>
          <p className='mt-10 text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus atque asperiores odio, repudiandae tenetur veritatis consequatur sed cupiditate perspiciatis, fuga nesciunt minima quia, iste nulla libero laudantium animi quaerat.</p>
          <br />
          <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat voluptate dolorum ut quidem dolore exercitationem perferendis, voluptatem sint, vel molestias, quos eius aut magni fuga commodi nostrum necessitatibus iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptatibus rerum reprehenderit ducimus illum incidunt. Quidem maiores ipsum vitae quaerat aliquam deserunt iure, dolorem mollitia sit quia libero asperiores nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid. Laborum amet saepe fuga maxime quam sit eaque modi officia! Tempora repellat dignissimos reprehenderit minima quia eius, amet quae debitis.</p>
        </div>
        <div className='md:ms-10 md:mt-3 mt-10 '>
          <img src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" alt="no image" />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Landingpage
