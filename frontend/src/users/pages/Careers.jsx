import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  const [modalstatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='md:grid grid-cols-[1fr_4fr_1fr] my-10'>
        <div></div>

        <div className='p-5'>
          <h1 className='text-center text-3xl'>Careers</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore totam voluptas modi enim eveniet. Iusto odit qui officiis culpa doloribus nemo praesentium ullam error, dignissimos placeat in, illum voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic voluptate ipsam repellat earum deleniti vitae molestiae porro illum doloremque doloribus quae fugit minima praesentium, odio perferendis </p>

        </div>

        <div></div>
      </div >
      <h1 className='md:ms-20 ms-5 text-2xl my-10'>Current Opening</h1>
      <div className='md:grid grid-cols-3'>
        <div></div>
        <div className='flex px-5'>
          <input type="text" placeholder='Search by Title ' className='bg-white p-2 border border-gray-200 w-full' />
          <button className='bg-blue-900 px-4 py-3 text-white hover:bg-green-900'>Search</button>
        </div>
        <div></div>
      </div>


      <div className='md:grid grid-cols-[1fr_4fr_1fr] my-10 px-5'>
        <div></div>
        <div className="shadow p-5 rounded">
          <div className='grid grid-cols-[4fr_1fr]'>
            <div>
              <h1 className='text-xl  '>Job Title</h1>
              <hr className='border-gray-300 mt-3 ' />
            </div>
            <div>
              <button className='bg-blue-800 px-4 py-3 rounded text-white  ms-4' onClick={() => setModalStatus(true)}>Apply<FontAwesomeIcon icon={faSquareArrowUpRight} className='ms-1' /></button>
            </div>

          </div>

          <div className='my-4'>
            <h1 className='text-blue-700'><FontAwesomeIcon icon={faLocationDot} />Location :</h1>
            <h1 className='mt-3'>Salary :</h1>
            <h1 className='mt-3'>Qualification :</h1>
            <h1 className='mt-3'>Experience :</h1>
            <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id, alias sed, laborum voluptatum deserunt ex fugiat odio ab dolores quas ipsum corporis at nemo consequuntur beatae maiores sequi dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, officia sint alias nostrum veritatis provident sed magni qui! Exercitationem quo blanditiis id sed ab, hic quisquam tempora ut natus.</p>
          </div>

        </div>
        <div></div>
      </div >

      {/* modal */}
      {modalstatus &&
        <div>
          <button className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">Open dialog</button>

          <div className="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                  <div className="bg-white">
                    {/*modal heading */}
                    <div className='bg-gray-900  p-4 text-white flex justify-between items-center' onClick={() => setModalStatus(false)}>
                      <p className='text-xl'>Application Form</p>
                      <FontAwesomeIcon icon={faXmark} className='fa-2x' onClick={() => setModalStatus(false)} />
                    </div>
                    {/* modal body */}
                    <div className='p-4'>
                      <div className="md:grid grid-cols-2">
                        <div className='px-2'>
                          <div className='mb-2'>
                            <input type="text" placeholder='Full Name' className='p-3 border border-gray-200 w-full rounded' />
                          </div>
                          <div className='mb-2'>
                            <input type="text" placeholder='Email ID' className='p-3 border border-gray-200 w-full rounded' />
                          </div>
                        </div>

                        <div className='px-2'>
                          <div className='mb-2'>
                            <input type="text" placeholder='Qualification' className='p-3 border border-gray-200 w-full rounded' />
                          </div>
                          <div className='mb-2'>
                            <input type="text" placeholder='Phone' className='p-3 border border-gray-200 w-full rounded' />
                          </div>
                        </div>
                      </div>

                      <div className='px-2 mb-3'>
                        <textarea placeholder='Cover Letter' className='p-2 border border-gray-200 w-full rounded '></textarea>
                      </div>

                      <div className='px-2 mb-3'>
                        <input type="file" placeholder='Phone' className='border border-gray-200 w-full rounded file:bg-gray-200 file:p-2  file:text-gray-500 text-sm ' />
                      </div>



                    </div>

                    {/* modal footer */}
                    <div class="bg-gray-300 px-4 py-3   w-full  flex justify-end gap-3">
                      <button type="button" class="  px-6 py-1 bg-green-700 text-white hover:bg-white hover:text-green-700">Submit</button>
                      <button type="button" className=" px-7 py-1 bg-yellow-400 text-white  hover:bg-white hover:text-yellow-400">Reset</button>
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

export default Careers