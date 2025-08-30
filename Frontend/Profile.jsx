import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Profile() {
    const[display,setDisplay]=useState([]);
    const reg=sessionStorage.getItem('reg');
    useEffect(()=>{
          const regs=reg;
          if(regs)
          {
             displayapi(regs);
          }
          else
          {
            alert("Register is not came");
          }
    },[reg])

    const displayapi=async(regs)=>{
        try {
            const response=await axios.get(`http://localhost:8080/displaydata/${regs}`);
            console.log(response.data);
            setDisplay(response.data);
        } catch (error) {
            alert("Backend is not connected");
        }
    }
 const navigate=useNavigate();
    const handlingupdate=(display)=>{
      navigate("/Updateprofile",{state:{display}})
    }
  return (
    <div className='m-5'>
        <h4>Your Profile</h4>
        <table className='table table-bordered  bg-secondary border-dark'>
          <thead>
            <tr >
                <th className='bg-secondary '>Reg No.</th>
                <th className='bg-secondary '>Name</th>
                <th className='bg-secondary '>College</th>
                <th className='bg-secondary '> Year</th>
                <th className='bg-secondary '>Semester</th>
                <th className='bg-secondary'>Edit</th>
            </tr>
          </thead>
          <tbody>
            { display.map((display,index)=>(
      <tr key={index}>
                <td>{display.reg}</td>
                <td>{display.name}</td>
                <td>{display.college}</td>
                <td>{display.year}</td>
                <td>{display.semester}</td>
                <td><button className='btn btn-primary ' onClick={()=>handlingupdate(display)}>Update</button></td>
            </tr>
            ))
            
}
          </tbody>
        </table>
    <div className='row bg-dark'style={{marginBottom:"20px"}}></div>    
    </div>
    
  )
}

export default Profile
