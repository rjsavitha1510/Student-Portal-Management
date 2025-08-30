import React from 'react'
import homepic from './Img/home.jpg';
import Footer from './Footer';
function Home() {

  return (
    <>
      <div className='row'>
         <div className='col-6'>
          <img src={homepic} alt=""style={{width:"600px", marginTop:"20px" }}></img>
         </div>
         <div className='col-6'>
             <h2 className="text-center" style={{marginTop:"40px",color:"blue"}}>Welcome to Student Portal</h2>
              <h5  className="ms-4"style={{marginTop:"20px"}}> The Home Page serves as a secure and efficient gateway for students to manange their academic and personal information. 
                Designed with a user-friendly layout, the homepage provides navigation bar that includes: </h5>
                <h5 className="ms-5">Home - for returning to the main dashboard.</h5>
                 <h5 className="ms-5">Profile - to view and update personal and academic details.</h5>
                 <h5 className="ms-5">Result - to check examination results and performance.</h5>
                 <h5 className="ms-5">Logout - to safely exit the system.</h5>
                 <h5 className="ms-4">A key feature of the portal is its robust security system,which ensures that all confidential data,such as personal information,academic records,
                  and financial details are encrypted and protected against unauthorized access.
                 </h5>
             <p></p>
         </div>

      </div>
      <Footer></Footer>
     </>
  )
}

export default Home;
