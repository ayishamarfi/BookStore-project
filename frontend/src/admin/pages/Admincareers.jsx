 import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'

function Admincareers() {
  const [jobpoststatus, setJobPostStatus] = useState(true)
  const [viewstatus, setViewStatus] = useState(false)
  return (
    <>
      <Adminheader />

      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <Adminsidebar />

        </div>
        <div className='md:p-4 p-1'>
          <h1 className=' text-3xl text-center font-semibold my-10'>Careers</h1>
          <div>
            <div className='flex justify-center items-center text-sm mt-5 mb-10'>
              <p onClick={() => { setJobPostStatus(true); setViewStatus(false) }} className={jobpoststatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-700 border-r border-b rounded' : 'px-4 py-3 border-t  border-gray-700 '}>Job Post</p>
              <p onClick={() => { setJobPostStatus(false); setViewStatus(true) }} className={viewstatus ? 'cursor-pointer px-4 py-3 text-blue-500 border-gray-700 border-l border-b rounded' : 'px-4 py-3 border-t  border-gray-700 '}>View Applicant</p>
            </div>
          </div>

          <div className='flex justify-between md:mt-0 mt-20'>
            <div className='flex md:px-5 px-0'>
              <input type="text" placeholder='Search by Title' className='bg-white p-1 border border-gray-200 md:w-100 w-50 md:ms-0 ms-5' />
              <button className='bg-green-700 px-4 py-1 text-white hover:text-green-700 hover:border hover:border-green-700 hover:bg-white'>Search</button>
            </div>
            <div></div>
            {jobpoststatus && <div className='md:me-10 me-5 '>
              <button className='border border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white px-3 py-1 '>Add Job</button>
            </div>}
          </div>

          {/* job post */}
          {jobpoststatus && <div className='md:grid grid-cols-1 my-7 px-5'>
            <div></div>
            <div className="shadow border border-gray-300 md:p-3 p-2 rounded">
              <div className='grid grid-cols-[4fr_1fr]'>
                <div>
                  <h1 className='text-lg'>Job Title</h1>
                  <hr className='border-gray-300 mt-3 md:me-0 me-10' />
                </div>
                <div className='flex justify-end'>
                  <button className='bg-red-700 md:p-2 p-1  rounded text-white md:ms-4hover:bg-white hover:border hover:border-red-700 hover:text-red-700 '
                  >Delete<FontAwesomeIcon icon={faTrash} className='ms-1' /></button>
                </div>

              </div>

              <div className='my-2 text-sm'>
                <h1 ><FontAwesomeIcon icon={faLocationDot}className='text-blue-700' />  Location</h1>
                <h1 className='mt-3'>Salary :</h1>
                <h1 className='mt-3'>Qualification :</h1>
                <h1 className='mt-3'>Experience :</h1>
                <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id, alias sed, laborum voluptatum deserunt ex fugiat odio ab dolores quas ipsum corporis at nemo consequuntur beatae maiores sequi dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, officia sint alias nostrum veritatis provident sed magni qui! Exercitationem quo blanditiis id sed ab, hic quisquam tempora ut natus.</p>
              </div>

            </div>
            <div></div>
          </div >}


          {/* view applicant  */}
          {viewstatus && <div className='mt-10 px-5 overflow-x-auto'>
            <table className='w-full border border-gray-200 '>
              <thead>
                <tr className='bg-blue-600 text-white font-light'>
                  <th className='p-3 border'>SL.No</th>
                  <th className='p-3 border'>Job Title</th>
                  <th className='p-3 border'>Name</th>
                  <th className='p-3 border'>Qualification</th>
                  <th className='p-3 border'>Email</th>
                  <th className='p-3 border'>Phone</th>
                  <th className='p-3 border'>Cover letter</th>
                  <th className='p-3 border'>Resume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-15border border-gray-300'></td>
                  <td className='py-15 border border-gray-300 '></td>
                  <td className='py-15 border border-gray-300'></td>
                  <td className='py-15 border border-gray-300'></td>
                  <td className='py-15 border border-gray-300'></td>
                  <td className='py-15 border border-gray-300'></td>
                  <td className='py-15 border border-gray-300'></td>
                  <td className='py-15 border border-gray-300'></td>
                </tr>
              </tbody>
            </table>
          </div>}


        </div>
      </div>
      <Footer />
    </>
  )
}

export default Admincareers