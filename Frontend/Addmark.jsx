import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Addmark() {
    const[reg,setReg]=useState("");
     const[name,setName]=useState("");
     const[subject,setSubject]=useState("");
     const[subcode,setSubcode]=useState("");
     const[mark,setMark]=useState("");
     const[grade,setGrade]=useState("");
     const[result,setResult]=useState("");
     const[cgpa,setCgpa]=useState("");

     const addhandling=async()=>
     {
        if(!reg|| !name ||!subject||!subcode||!mark||!grade||!result||!cgpa)
        {
            alert("Fill all the required fields");
        }
        const addmark={
            reg,name,subject,subcode,mark,grade,result,cgpa
        }
        try {
           const response=await axios.post("http://localhost:8080/postmarks",addmark);
           console.log(response.data)
           if(response.data){
            alert("Mark added successfully");
           }
        } catch (error) {
            alert("backend not connected");
        }
     }
  return (
    <div style={{width:"350px",marginTop:"40px",marginLeft:"450px"}}>
        <div className='form-group bordered rounded shadow border border-primary  p-4' > 
        <h3 className='text-center mt-5'>Add student mark</h3>
        <div>
            <input type="number" value={reg} onChange={(e)=>setReg(e.target.value)}className="form-control mt-2" placeholder='Enter your reg no'></input>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}className="form-control mt-2" placeholder='Enter your name'></input>
            <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)} className="form-control mt-2" placeholder='Enter your subject'></input>
            <input type="text" value={subcode} onChange={(e)=>setSubcode(e.target.value)}className="form-control mt-2" placeholder='Enter your subcode'></input>
            <input type='number' value={mark} onChange={(e)=>setMark(e.target.value)} className="form-control mt-2" placeholder='Enter your mark'></input>
            <input type="text" value={grade} onChange={(e)=>setGrade(e.target.value)} className="form-control mt-2" placeholder='Enter your grade'></input>
            <input type="text" value={result} onChange={(e)=>setResult(e.target.value)} className="form-control mt-2" placeholder='Enter your result'></input>
            <input type="number" vlaue={cgpa} onChange={(e)=>setCgpa(e.target.value)} className="form-control mt-2" placeholder='Enter your cgpa'></input>
            <button className='btn btn-primary mt-2 w-100' onClick={addhandling}>Add Mark</button>
            <Link to="/" style={{marginLeft:"238px"}} className='btn btn-primary mt-1'>Back</Link>
        </div>
</div>
    </div>
  )
}
export default Addmark
