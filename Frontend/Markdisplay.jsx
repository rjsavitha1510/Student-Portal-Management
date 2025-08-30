import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Markdisplay() {
    const[markdata,setMarkdata]=useState([]);
    const reg=sessionStorage.getItem('reg');
    useEffect(()=>{
           const regno=reg;
          if(regno)
          {
             marks(regno);
          }
          else
          {
            alert("Register is not came");
          }
    },[reg])

    const marks=async(regno)=>{
        try {
            const response=await axios.get(`http://localhost:8080/getmarks/${regno}`);
            console.log(response.data);
            setMarkdata(response.data);

        } catch (error) {
            alert("Backend is not connected")
        }
    }


  return (
    <div className='m-5'>
        <h4>Your Result </h4>
        <table className='table table-bordered bg-secondary border-dark'>
        <thead>
            <tr>
                <th className='bg-secondary' >Reg No.</th>
                <th className='bg-secondary'>Name</th>
                <th className='bg-secondary'>Subject</th>
                <th className='bg-secondary'>Subcode</th>
                <th className='bg-secondary'>Mark</th>
                <th className='bg-secondary'>Grade</th>
                <th className='bg-secondary'>Result</th>
                <th className='bg-secondary'>Cgpa</th>
            </tr>
        </thead>
        <tbody>
            {markdata.map((markdata,index)=>(
                <tr key={index}>
                   <td>{markdata.reg}</td>
                   <td>{markdata.name}</td>
                   <td>{markdata.subject}</td>
                   <td>{markdata.subcode}</td>
                   <td>{markdata.mark}</td>
                   <td>{markdata.grade}</td>
                   <td>{markdata.result}</td>
                   <td>{markdata.cgpa}</td>
         
                </tr>
            ))}
            
        </tbody>
        </table>
    </div>
  )
}

export default Markdisplay
