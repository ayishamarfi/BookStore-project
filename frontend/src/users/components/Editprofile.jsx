import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Editprofile() {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false)
  return (
    <>
      {/* <div>
        <div>
          <div></div>
          <div className='my-4'>
            <label htmlFor="editUserProfile">
              <input type="file" style={{ diplat: 'none' }} id='editUserProfile' />
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
              <FontAwesomeIcon icon={faPen} className='px-4 py-3 bg-yellow-400' style={{ marginLeft: '130px', marginTop: '-40px' }} />
            </label>
          </div>
          <div className="mb-3">
            <input type="text" placeholder='Username' className='p-2 w-full bg-white border border-gray-200 rounded' />
          </div>
          <div className="mb-3">
            <input type="text" placeholder='Password' className='p-2 w-full bg-white border border-gray-200 rounded' />
          </div>
          <div className="mb-3">
            <input type="text" placeholder='Confirm Password' className='p-2 w-full bg-white border border-gray-200 rounded' />
          </div>
          <div className="mb-3">
            <textarea placeholder='Bio' id="" className='p-2 w-full bg-white border border-gray-200 rounded' rows={6}></textarea>
          </div>
          <div className="flex justify-end my-5">
            <button className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:bg-white'>Reset</button>
            <button className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:bg-white'>Update</button>
          </div>
        </div>

      </div> */}


      {offCanvasStatus &&
        <div>

          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
          {/* created a new div. deleted all others */}
          <div className='bg-white h-full w-70 z-50 fixed top-0 left-0 p-3 '>
            <div className='flex bg-gray-900 text-white p-3 justify-between'>
              <h1 className='text-xl'>Edit User profile </h1>
              <FontAwesomeIcon icon={faXmark} className='fa-xl' onClick={() => setOffCanvasStatus(false)} />
            </div>


            <div className='my-5 flex justify-center items-center'>
              <label htmlFor="editUserProfile">
                <input type="file" id='editUserProfile' style={{ display: 'none' }} />
                <img src=" https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="no image" style={{ width: "140px", height: '140px', borderRadius: '50%' }} />
                <div style={{ marginLeft: '90px', marginTop: '-30px' }}><FontAwesomeIcon icon={faPen} className='p-2 bg-yellow-400' /></div>

              </label>
            </div>

            <div className="mb-2 ">
              <input type="text" placeholder='Username' className='w-full border border-gray-300  rounded' />
            </div>
            <div className="mb-2 ">
              <input type="text" placeholder='Password' className='w-full border border-gray-300  rounded' />
            </div>
            <div className="mb-2">
              <input type="text" placeholder='Confirm Password' className='w-full border border-gray-300  rounded' />
            </div>
            {/* to type a long para */}
            <div className="mb-2">
              <textarea placeholder='Bio' className='w-full border border-gray-300  rounded' rows={5}></textarea>
            </div>

            <div className='flex md:justify-end justify-center mt-5'>
              <button className='text-sm bg-amber-700 text-white px-3 py-2  hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white rounded'>Reset</button>
              <button className='text-sm bg-green-700 text-white px-3 py-2 hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4 rounded'>Update</button>

            </div>
          </div>
        </div>}





      <div className='flex justify-end'>
        <button onClick={() => setOffCanvasStatus(true)} className='px-3 py-2 border border-blue-500 rounded hover:bg-blue-600 hover:text-white text-blue-500'><FontAwesomeIcon icon={faPenToSquare} />Edit</button>
      </div>

    </>
  )
}

export default Editprofile
