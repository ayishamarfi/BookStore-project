import React from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Adminsettings() {
  return (
    <>
      <Adminheader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <Adminsidebar />
        </div>
        <div className='p-4'>
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
          <div className="md:grid grid-cols-2 mt-10">
            <div className='md:px-10 px-5'>
              <p className='text-justify text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate error eveniet at earum omnis quibusdam natus qui, obcaecati dicta expedita perferendis nobis eaque quo culpa ea accusamus repudiandae recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consectetur, facere reprehenderit soluta repellat eius quam earum delectus omnis ex quidem harum natus fugiat cum cumque voluptatibus aliquam tempore quas.</p>
              <p className='mt-5 text-justify text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eum nihil iste vel dolores minima doloremque repudiandae omnis, facilis dignissimos aut, quia optio incidunt unde hic obcaecati quis! Quas, sunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nesciunt assumenda modi reprehenderit facilis? Dolores numquam ut dolore corporis aliquam, quasi repellendus nemo ab, excepturi facere doloribus sit minus. Cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas modi rem iste, harum nisi dicta sunt et laudantium distinctio rerum minus omnis sit aliquid nulla consectetur corporis veniam voluptatum porro?</p>
            </div>
            <div className='md:px-10 px-5 mt-2'>
              <form className='bg-blue-200 p-5 rounded'>
                <div className='flex justify-center items-center my-5 '>
                  <label htmlFor="editUserProfile">
                    <input type="file" style={{ display: 'none' }} id='editUserProfile' />
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{ width: '110px', height: '110px', borderRadius: '50%' }} />
                    <div><FontAwesomeIcon icon={faPen} className='px-3 rounded py-2 bg-yellow-400 text-white' style={{ marginLeft: '60px', marginTop: '-70px' }} /></div>
                  </label>
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder='username' className='bg-white rounded w-full p-1' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Password' className='bg-white rounded w-full p-1' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Confirm Password' className='bg-white rounded w-full p-1' />
                </div>
                <div className='flex justify-between mt-5'>
                  <button className='bg-amber-700 text-white rounded py-1 text-white hover:text-amber-700 hover:border hover:border-amber-700 hover:bg-white w-1/2'>Reset</button>
                   <button className='bg-green-700 text-white rounded py-1 text-white hover:text-green-700 hover:border hover:border-green-700 hover:bg-white w-1/2 ms-2'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Adminsettings
