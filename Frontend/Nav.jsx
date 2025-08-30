import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
   <div className='row bg-dark'>
        <div className='col-6'>
            <h3 className='text-white p-2 ms-2'>Student Dashboard</h3>
        </div>
        <div className='col-6'>
            <nav className='nav nav-expand-lg h5 ms-4'>
                <div className='nav'>
                    <Link to="/Nav/Home"  className='text-white text-decoration-none mt-3 ms-5'> Home</Link>
                    <Link  to="/Nav/Profile" className='text-white text-decoration-none mt-3 ms-5'>Profile</Link>
                    <Link to="/Nav/Markdisplay" className='text-white text-decoration-none mt-3 ms-5' >Result</Link>
                    <Link to="/" className='text-white text-decoration-none mt-3 ms-5'>Logout</Link>
                </div>

            </nav>
        
        </div>
    </div>
     
    <Outlet></Outlet>
    
    </>
  )
}

export default Nav
