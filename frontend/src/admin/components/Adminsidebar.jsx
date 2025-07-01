import { faBagShopping, faBars, faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom'

function Adminsidebar() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [homeStatus, setHomeStatus] = useState(false)
    const [booksStatus, setBooksStatus] = useState(false)
    const [careersStatus, setCareersStatus] = useState(false)
    const [settingsStatus, setSettingsStatus] = useState(false)

    const filter = (data) => {
        if (data == 'home') {

            navigate('/admin-home')
        }
        else if (data == 'books') {

            navigate('/admin-books')
        }
        else if (data == 'careers') {

            navigate('/admin-careers')
        }
        else if (data == 'settings') {

            navigate('/admin-settings')
        }
        else {
            navigate('*')
        }
    }




    useEffect(() => {

        if (location.pathname == '/admin-home') { //location.pathname is to know the path which the browser is loading
            setHomeStatus(true)
        }
        else if (location.pathname == '/admin-books') {
            setBooksStatus(true)
        }
        else if (location.pathname == '/admin-careers') {
            setCareersStatus(true)
        }
        else if (location.pathname == '/admin-settings') {
            setSettingsStatus(true)
        }

    }, [])
    return (
        <>
            <div className='bg-blue-100 w-full h-full flex justify-center items-center flex-col md:flex hidden'>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </div>
                <h1 className='text-xl my-10'>Username</h1>
                <div className="mb-4 me-3" onClick={() => filter('home')}>
                    <input type="radio" id='home' className='me-3' name='path' readOnly checked={homeStatus} />
                    <label htmlFor="home"><FontAwesomeIcon icon={faBars} /> Home  </label>
                </div>
                <div className="mb-4 me-3" onClick={() => filter('books')}>
                    <input type="radio" id='books' className='me-3' name='path' readOnly checked={booksStatus} />
                    <label htmlFor="books"><FontAwesomeIcon icon={faBook} /> Books</label>
                </div>
                <div className="mb-4" onClick={() => filter('careers')}>
                    <input type="radio" id='  careers' className='me-3' name='path' readOnly checked={careersStatus} />
                    <label htmlFor="  careers"><FontAwesomeIcon icon={faBagShopping} /> Careers</label>
                </div>
                <div className="mb-4" onClick={() => filter('settings')}>
                    <input type="radio" id='settings' className='me-3' name='path' readOnly checked={settingsStatus} />
                    <label htmlFor=" settings"><FontAwesomeIcon icon={faGear} /> Settings</label>
                </div>

            </div>

            <div className='bg-blue-100 w-full h-full flex justify-center items-center flex-col flex md:hidden pt-10'>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </div>

                <h1 className='text-xl my-4'>Username</h1>
                <div className='flex justify-center items-center md:hidden  bg-blue-100 py-3'>
                    <button onClick={() => setShow(!show)}><FontAwesomeIcon icon={faBars} className='fa-2x' /></button>
                </div>
                {show && <div>
                    <div className="mb-4 me-3" onClick={() => filter('home')}>
                        <input type="radio" id='home' className='me-3' name='path' readOnly checked={homeStatus} />
                        <label htmlFor="home"><FontAwesomeIcon icon={faBars} /> Home  </label>
                    </div>
                    <div className="mb-4 me-3" onClick={() => filter('books')}>
                        <input type="radio" id='books' className='me-3' name='path' readOnly checked={booksStatus} />
                        <label htmlFor="books"><FontAwesomeIcon icon={faBook} /> Books</label>
                    </div>
                    <div className="mb-4" onClick={() => filter('careers')}>
                        <input type="radio" id='  careers' className='me-3' name='path' readOnly checked={careersStatus} />
                        <label htmlFor="  careers"><FontAwesomeIcon icon={faBagShopping} /> Careers</label>
                    </div>
                    <div className="mb-4" onClick={() => filter('settings')}>
                        <input type="radio" id='settings' className='me-3' name='path' readOnly checked={settingsStatus} />
                        <label htmlFor=" settings"><FontAwesomeIcon icon={faGear} /> Settings</label>
                    </div>
                </div>}

            </div>

        </>

    )
}

export default Adminsidebar
