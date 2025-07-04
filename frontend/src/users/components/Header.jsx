 import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [clickStatus, setClickStatus] = useState(false)
  const [dropdownstatus, setDropDownStatus] = useState(false)
  // const [token, setToken] = useState("")


  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     setToken(sessionStorage.getItem("token"))
  //   }
  // }, [])


  return (
    <>
      {/* header */}
      <div className='p-3 flex justify-between items-center'>
        <div className='flex items-center'>
          <img src="https://openclipart.org/download/275692/1489798288.svg" alt="no img
         " style={{ width: "60px", height: "60px" }} />
          <h1 className='text-xl font-bold ms-3 md:hidden flex'>Book Store</h1>{/* smallscreen */}
        </div>

        <h1 className='text-3xl font-bold ms-30 hidden md:flex'>Book Store</h1>{/* largescreen */}

        <div className='flex items-center'>
          <div className='md:flex hidden'>
            <FontAwesomeIcon icon={faInstagram} className='mx-2' />
            <FontAwesomeIcon icon={faXTwitter} className='mx-2' />
            <FontAwesomeIcon icon={faFacebookF} className='mx-2' />
          </div>

          <div className='md:flex hidden'>
             <Link to={"/login"}><button className='px-4 py-3 ms-3 border border-black rounded cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>

              
              {/* <div className="relative inline-block text-left">
                <div>
                  <button onClick={() => setDropDownStatus(!dropdownstatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="user icon" style={{ width: '40px', height: '40px' }} />

                  </button>
                </div>


                {dropdownstatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1" role="none">

                    <Link to="/profile"><a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</a></Link>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</a>

                  </div>
                </div>}

              </div> */}


          </div>

        </div>
      </div>

      {/* navbar */}

      <nav className='bg-gray-900 p-3'>
        <div className='flex md:hidden justify-between items-center'>
          <span onClick={() => setClickStatus(!clickStatus)} className='text-white text-2xl'
          ><FontAwesomeIcon icon={faBars} /></span>
           <Link to={"/login"}><button className='px-4 py-3 ms-3 border border-white rounded text-white cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-3' />Login</button></Link>
            
           
            {/* <div className="relative inline-block text-left">
                <div>
                  <button onClick={() => setDropDownStatus(!dropdownstatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="user icon" style={{ width: '40px', height: '40px' }} />

                  </button>
                </div>


                {dropdownstatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1" role="none">

                    <Link to="/profile"><a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</a></Link>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</a>

                  </div>
                </div>}

              </div> */}
        </div>

        <ul className={clickStatus ? 'md:flex text-white' : 'text-white md:flex hidden md:justify-center  me-10 mt-4 md:mt-0'}>
          <Link to="/"><li className='px-3'>Home</li></Link>
          <Link to="/all-books"><li className='px-3'>Book</li></Link>
          <Link to="/careers"><li className='px-3'>Careers</li></Link>
          <Link to="/contact"><li className='px-3'>Contact</li></Link>
        </ul>

      </nav>


    </>
  )
}

export default Header