 import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import Editprofile from '../components/Editprofile'

function Profile() {

  const [sellstatus, setSellStatus] = useState(true)
  const [bookstatus, setBookStatus] = useState(false)
  const [purchasestatus, setPurchaseStatus] = useState(false)
  const [bookdetails, setBookDetails] = useState({
    title: "",
    author: "",
    publisher: "",
    language: "",
    noofpages: "",
    isdn: "",
    imageurl: "",
    category: "",
    price: "",
    dprice: "",
    abstract: "",
    uploadimages: []
  })
  console.log(bookdetails);

  const handleUpload = (e)=>{
    console.log(e.target.files);
    const fileArray = bookdetails.uploadimages
    fileArray.push(e.target.files[0])
    setBookDetails({...bookdetails,uploadimages:fileArray})
      //create objecturl =>to covert a file into url
    
  }






  return (
    <>
      <Header />

      <div className=' bg-gray-900' style={{ height: "200px" }}>   </div>
      <div style={{ width: "230px", height: "230px", borderRadius: "50%", marginTop: "-130px ", marginLeft: "70px" }} className='p-3 flex justify-center items-center items-center bg-white'>
        <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="user icon" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
      </div>

      <div className='flex justify-between my-5 md:px-20 px-10'>
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl'>Ken Mathew<FontAwesomeIcon icon={faCheckCircle} className='ms-3 text-blue-500 mt-2 fa-sm' /></h1>
        </div>

        <Editprofile />

      </div>

      <p className='text-justify md:px-20 px-10 my-5 text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem reprehenderit laboriosam est repudiandae corrupti cum, fugiat omnis. Omnis velit eveniet perspiciatis commodi quos maxime illo modi fuga excepturi, reprehenderit debitis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolorem adipisci enim magni eveniet porro neque deserunt nobis impedit praesentium. Labore nihil repellat excepturi error dicta in consectetur illum iure?</p>

      <div className='md:px-40 px-5'>
        {/* tabs */}
        <div className='flex justify-center items-center my-5'>
          <p onClick={() => { setSellStatus(true); setBookStatus(false); setPurchaseStatus
            //conditionally rendering the class
            (false) }} className={sellstatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded' : 'px-4 py-3 border-b border-gray-300 '}>Sell Book</p>
          <p onClick={() => { setSellStatus(false); setBookStatus(true); setPurchaseStatus(false) }} className={bookstatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded' : 'px-4 py-3 border-b border-gray-300 '}>Book Status</p>
          <p onClick={() => { setSellStatus(false); setBookStatus(false); setPurchaseStatus(true) }} className={purchasestatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded' : 'px-4 py-3 border-b border-gray-300 '}>Purchase History</p>
        </div>

        {/* sell Book */}

        {sellstatus && <div className='md:p-10 p-5'>
          <div className='bg-gray-200 md:p-10 p-5 rounded '>
            <h1 className='text-center text-3xl font-medium'>Book Details</h1>
            <div className="md:grid grid-cols-2">
              <div className='md:my-10 mt-5 px-2'>

                <div className='mb-3'>
                  <input type="text" value={bookdetails.title} onChange={(e) => setBookDetails({ ...bookdetails, title: e.target.value })} placeholder='Title ' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.author} onChange={(e) => setBookDetails({ ...bookdetails, author: e.target.value })} placeholder='Author ' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.noofpages} onChange={(e) => setBookDetails({ ...bookdetails, noofpages: e.target.value })} placeholder='No of pages' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.imageurl} onChange={(e) => setBookDetails({ ...bookdetails, imageurl: e.target.value })} placeholder='Image URL' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.price} onChange={(e) => setBookDetails({ ...bookdetails, price: e.target.value })} placeholder='Price' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.dprice} onChange={(e) => setBookDetails({ ...bookdetails, dprice: e.target.value })} placeholder='Discount Price' className='p-2 bg-white rounded w-full' />

                </div>
                <div className='mb-3'>
                  <textarea value={bookdetails.abstract} onChange={(e) => setBookDetails({ ...bookdetails, abstract: e.target.value })} placeholder='Abstract' rows={'8'} className='p-2 bg-white rounded w-full' ></textarea>

                </div>

              </div>
              {/* 2nd grid */}
              <div className='md:my-10 px-2'>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.publisher} onChange={(e) => setBookDetails({ ...bookdetails, publisher: e.target.value })} placeholder='Publisher' className='p-2 bg-white rounded w-full' />

                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.language} onChange={(e) => setBookDetails({ ...bookdetails, language: e.target.value })} placeholder='Language' className='p-2 bg-white rounded w-full' />

                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.isdn} onChange={(e) => setBookDetails({ ...bookdetails, isdn: e.target.value })} placeholder='ISDN' className='p-2 bg-white rounded w-full' />

                </div>
                <div className='mb-3'>
                  <input type="text" value={bookdetails.category} onChange={(e) => setBookDetails({ ...bookdetails, category: e.target.value })} placeholder='Category' className='p-2 bg-white rounded w-full' />

                </div>

                <div className='flex justify-center items-center mt-10 flex-col' >
                  <label htmlFor="uploadBookImg">
                    <input value={bookdetails.uploadimages} onChange={(e) => setBookDetails({ ...bookdetails, uploadimages: e.target.value })} onClick={handleUpload} type="file" id='uploadBookImg' style={{ display: "none" }} />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no img" style={{ width: '200px', height: '200px' }} />

                  </label>
                  <div className='mt-10 flex items-center'>
                    <img src="https://fivebooks.com/images/Pat2r9m1B4cua7lI/plain/fb/2017/06/0140169822.01.LZ_.jpg" alt="no img" className='mx-2' style={{ width: "50px", height: "50px" }} />
                    <img src="https://fivebooks.com/images/Pat2r9m1B4cua7lI/plain/fb/2017/06/0140169822.01.LZ_.jpg" alt="no img" className='mx-2' style={{ width: "50px", height: "50px" }} />
                    <img src="https://fivebooks.com/images/Pat2r9m1B4cua7lI/plain/fb/2017/06/0140169822.01.LZ_.jpg" alt="no img" className='mx-2' style={{ width: "50px", height: "50px" }} />

                    <label htmlFor="uploadBookImg">
                      <input type="file" id='uploadBookImg' style={{ display: "none" }} />
                      <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg bg-gray-300 border border-white ms-4' />
                    </label>
                  </div>

                </div>

              </div>
            </div>

            <div className='flex md:justify-end justify-center mt-5'>
              <button className='bg-amber-700 text-white px-4 py-3  hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white rounded'>Reset</button>
              <button className='bg-green-700 text-white px-4 py-3  hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4 rounded'>Submit</button>
            </div>


          </div>
        </div>
        }

        {/* book Status */}
        {bookstatus &&
          <div className='p-10 my-20 shadow rounded'>
            <div className='bg-gray-200 p-5 rounded mt-4'>
              <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                  <h1 className='text-2xl'>Title</h1>
                  <h2>Author</h2>
                  <h3 className='text-blue-600'>$ Price</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptatem accusamus eligendi voluptates enim, distinctio repellendus natus asperiores, delectus autem provident explicabo iure dolor nihil numquam consequuntur alias facilis dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat nisi culpa, quae ea aliquam odio libero eius maiores non id repudiandae ipsum ab excepturi, minima obcaecati nulla, cupiditate accusamus?</p>
                </div>

                <div className='px-5 mt-4 md:mt-4'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBxfCubfrjaVkSl76Qig-tFvyc_v7YG4rWA&s" alt="no img" className='w-full' style={{ height: "250px", objectFit: "cover" }} />
                  <div className='flex justify-end'>
                    <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600 mt-4 '>Delete</button>
                  </div>
                </div>
              </div>
              <div>

              </div>

            </div>

          </div>}

        {/* purchase History */}
        {purchasestatus && <div className='p-10 my-20 shadow rounded'>
          <div className='bg-gray-200 p-5 rounded mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h2>Author</h2>
                <h3 className='text-blue-600'>$ Price</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptatem accusamus eligendi voluptates enim, distinctio repellendus natus asperiores, delectus autem provident explicabo iure dolor nihil numquam consequuntur alias facilis dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat nisi culpa, quae ea aliquam odio libero eius maiores non id repudiandae ipsum ab excepturi, minima obcaecati nulla, cupiditate accusamus?</p>
              </div>

              <div className='px-5 mt-4 md:mt-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBxfCubfrjaVkSl76Qig-tFvyc_v7YG4rWA&s" alt="no img" className='w-full' style={{ height: "250px", objectFit: "cover" }} />

              </div>
            </div>
            <div>

            </div>

          </div>

        </div>}

      </div>





      <Footer />
    </>
  )
}

export default Profile