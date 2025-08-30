import React from 'react'
import { Link } from 'react-router-dom'
import Fb from './Img/fb.png'
import Insta from './Img/insta.png'
function Footer() {
  return (
    <div className='bg-dark p-4'>
        <h4 className='text-light text-center'>Copyright 2025 <Link to="https://skcet.ac.in/" className='text-decoration-none'>SRI KRISHNA COLLEGE OF ENGINEERNING AND TECHNOLOGY</Link> <Link to="https://www.facebook.com/skcetofficial/"><img src={Fb} width="40px" height="40px" className='ms-5' alt=""></img></Link><Link to="https://www.instagram.com/skcetofficial/"><img src={Insta} alt="" width="40px" height="40px" className='ms-4'></img></Link></h4>
    </div>
  )
}

export default Footer
