import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


function Updateprofile() {
const location=useLocation();
const profile=location.state?.display || {};

       const[reg,setReg]=useState(profile.reg || "");
     const[name,setName]=useState(profile.name || "");
     const[password,setPassword]=useState(profile.password  || "");
    const[college,setCollege]=useState(profile.college || "");
    const[year,setYear]=useState(profile.year || "");
    const[semester,setSemester]=useState(profile.semester || "");
     
     const navigate=useNavigate();
   
     const addhandling=async()=>
     {
        if(!reg||!name||!password||!college||!year||!semester)
        {
             return alert("Fill all the required fields");
        }
        const updateprofile={
            reg,name,password,college,year,semester
        }

        try {
           const response=await axios.put("http://localhost:8080/update",updateprofile);
           console.log(response.data)
           if(response.data==="Data updated successfully"){
            alert("profile updated successfully");
            navigate("/Nav/Profile");
           }
           else{
              alert("Data not present in the database");
           }
        } catch (error) {
            alert("backend not connected");
        }
     }
  return (
    <div style={{width:"350px",marginTop:"40px",marginLeft:"450px"}}>
        <div className='form-group bordered rounded shadow border border-primary  p-4' > 
        <h3 className='text-center mt-5'>Update student profile</h3>
        <div>
            <input type="number" value={reg} onChange={(e)=>setReg(e.target.value)}className="form-control mt-2" placeholder='Enter your reg no'></input>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}className="form-control mt-2" placeholder='Enter your name'></input>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2" placeholder="Enter your password"></input>
            <input type="text" value={college} onChange={(e)=>setCollege(e.target.value)} className="form-control mt-2" placeholder='Enter your college'></input>
             <input type="number" value={year} onChange={(e)=>setYear(e.target.value)} className="form-control mt-2" placeholder="Enter your year"></input>
             <input type="number" value={semester} onChange={(e)=>setSemester(e.target.value)} className="form-control mt-2" placeholder="Enter your semester"></input>
               <button className='btn btn-primary mt-2 w-100' onClick={addhandling}>Update Profile</button>
            <Link to="/Nav/Profile" style={{marginLeft:"238px"}} className='btn btn-primary mt-1'>Back</Link>
        </div>
</div>
    </div>
  )
}

export default Updateprofile
