 
import { Route, Routes } from 'react-router-dom'
import './App.css'
 import Landingpage from './pages/Landingpage'
import Auth from './pages/Auth'
import Allbooks from './users/pages/Allbooks'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Viewbook from './users/pages/Viewbook'
import Profile from './users/pages/Profile'
import Pagenotfound from './pages/Pagenotfound'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Adminhome  from './admin/pages/Adminhome'
import Adminbooks  from './admin/pages/Adminbooks'
import Admincareers from './admin/pages/Admincareers'
import Adminsettings  from './admin/pages/Adminsettings'

function App() {
   
const [isLoading , setIsLoading] =useState(false)

useEffect(()=>{setTimeout(()=>{
  setIsLoading(true)
},7000)
},[])

  return (
    <>
    {/* path for user pages */}
        <Routes>
          <Route path = '/' element = {isLoading?<Landingpage/>:<Preloader/>} />
          <Route path = '/login' element = {<Auth/>} />
          <Route path = '/register' element = {<Auth register/>} /> {/*register is aprops */}
          <Route path = '/all-books' element = {<Allbooks/>} />
          <Route path = '/careers' element = {<Careers />} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/view-book/:id' element = {<Viewbook/>} />
          <Route path = '/profile' element = {< Profile/>} />
           
         

       {/* pages for admin  */}
        
          <Route path = '/admin-home' element = {<Adminhome/>} />
          <Route path = '/admin-books' element = {<Adminbooks/>} />
          <Route path = '/admin-careers' element = {<Admincareers/>} />
          <Route path = '/admin-settings' element = {<Adminsettings/>} />
          <Route path = '*' element = {< Pagenotfound/>} />
        </Routes>
    </>
  )
}

export default App
