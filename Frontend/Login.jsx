import React, { useEffect, useState } from 'react'
import Imga from './Img/loginpic.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
      const[reg,setReg]=useState("");
      const[password,setPassword]=useState("");
      const navigates=useNavigate();
   useEffect(()=>{
      sessionStorage.clear();//00
      
   },[])

      const loginHandling=async()=>
      {
         if(!reg || !password)
         {
            return alert("Fill all the required fields");
         }
         const login={
            reg,password
         }

         try {
            const response=await axios.post("http://localhost:8080/loginpage",login)
            console.log(response.data)
            if(response.data==="Login Successfully")
            {
                alert("Login Successfully");
                navigates("/Nav/Home");
                sessionStorage.setItem('reg',reg)
            }
            else{
                alert("Login failed");
                        }
         } catch (error) {
            alert("Backend not connected");
         }
         
      }

  return (
    <div className='row'>
     <div className='col-6 ms-5' style={{marginTop:"40px"}}>
     <img src={Imga} alt="" width="500px" height="500px"></img>
     </div>
     <div className='col-6' style={{marginTop:"80px", width:"350px"}}>
        <div className='form-group border shadow p-4'>
            <h4 className='text-center'>Student Login</h4>
            <label>Reg No:</label>
            <input type="number" value={reg} onChange={(e)=>setReg(e.target.value)} className="form-control mt-2" placeholder='Enter your reg no.'></input>
            <label>Password:</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2"  placeholder='Enter your password'></input>
            <button className='btn btn-primary w-100 mt-2' onClick={loginHandling}>Login</button>
            <p className='mt-3'>Do not have an account? <Link to="/Register" className='btn btn-primary '>Register</Link></p>
        </div>
     </div>
    </div>
  )
}

export default Login
