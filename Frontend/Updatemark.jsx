import axios from 'axios';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';//
function Updatemark() {
   
    const location=useLocation();
const studentdata=location.state?.markdata || {};
console.log("check error",studentdata.cgpa);
     const[reg,setReg]=useState(studentdata.reg || "");
     const[name,setName]=useState(studentdata.name|| "");
     const[subject,setSubject]=useState(studentdata.subject || "");
     const[subcode,setSubcode]=useState(studentdata.subcode|| "");
     const[mark,setMark]=useState(studentdata.mark || "");
     const[grade,setGrade]=useState(studentdata.grade|| "");
     const[result,setResult]=useState(studentdata.result || "");
     const[cgpa,setCgpa]=useState(studentdata.cgpa || "");
const navigate=useNavigate();
     const updatehandling=async()=>
     {
        if(!reg|| !name ||!subject||!subcode||!mark||!grade||!result||!cgpa)
        {
            alert("Fill all the required fields");
        }
        const updatemarks={
            reg,name,subject,subcode,mark,grade,result,cgpa
        }
        
        try {
           const response=await axios.put("http://localhost:8080/putmarks",updatemarks);
           console.log(response.data)
           if(response.data==="Data updated successfully"){
            alert("Mark updated successfully");
            navigate("/DisplayAllmark");
           }else{
            alert("Data not present in the database");
           }
        } catch (error) {
            alert("backend not connected");
        }
     }
  return (
        <div style={{width:"350px",marginTop:"40px",marginLeft:"450px"}}>
        <div className='form-group bordered rounded shadow border border-primary  p-4' > 
        <h3 className='text-center mt-5'>Update student mark</h3>
        <div>
            <input type="number" value={reg} onChange={(e)=>setReg(e.target.value)}className="form-control mt-2" placeholder='Enter your reg no'></input>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}className="form-control mt-2" placeholder='Enter your name'></input>
            <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)} className="form-control mt-2" placeholder='Enter your subject'></input>
            <input type="text" value={subcode} onChange={(e)=>setSubcode(e.target.value)}className="form-control mt-2" placeholder='Enter your subcode'></input>
            <input type='number' value={mark} onChange={(e)=>setMark(e.target.value)} className="form-control mt-2" placeholder='Enter your mark'></input>
            <input type="text" value={grade} onChange={(e)=>setGrade(e.target.value)} className="form-control mt-2" placeholder='Enter your grade'></input>
            <input type="text" value={result} onChange={(e)=>setResult(e.target.value)} className="form-control mt-2" placeholder='Enter your result'></input>
            <input type="text" value={cgpa} onChange={(e)=>setCgpa(e.target.value)} className="form-control mt-2" placeholder='Enter your cgpa'></input>
            <button className='btn btn-primary mt-2 w-100' onClick={updatehandling}>Update Mark</button>
            <Link to="/DisplayAllmark" style={{marginLeft:"238px"}} className='btn btn-primary mt-1'>Back</Link>
        </div>
</div>
    </div>
  )
}

export default Updatemark;
