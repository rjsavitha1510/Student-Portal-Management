import { useState } from 'react';
import Imgs from './Img/student.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Register()
{
    const [reg, setReg]=useState("");
    const [name, setName]=useState("");
    const[password,setPassword]=useState("");
    const[college,setCollege]=useState("");
    const[year,setYear]=useState("");
    const[semester,setSemester]=useState("");

    const navigate=useNavigate();


    const registerhandling=async()=>{
        if(!reg||!name||!password||!college||!year||!semester)
        {
             return alert("Fill all the required fields");
        }
        const register={
            reg,name,password,college,year,semester
        }

        try {
            const response=await axios.post("http://localhost:8080/student-register",register);
            console.log(response.data);
            if(response.data)
            {
                
                alert("Register Successfully");
                navigate("/");
            }
        } catch (error) {
            alert("backend is not connected");
        }
    }
    return (
      <div className="row " >
          <div className="col-6  ms-5" style={{marginTop:"40px"}}>
            <img src={Imgs} alt="" width="500px" height="500px" />
          </div>
          <div className="col-6" style={{marginTop:"80px", width:"350px"}}>
            <div className="form-group border shadow p-4">
             <h4 className="text-center">Student Registration</h4>
             <input type="number" value={reg} onChange={(e)=>setReg(e.target.value)} className="form-control mt-2" placeholder="Enter your reg no"></input>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mt-2" placeholder="Enter your name"></input>
             <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2" placeholder="Enter your password"></input>
            <input type="text" value={college} onChange={(e)=>setCollege(e.target.value)} className="form-control mt-2" placeholder='Enter your college'></input>
             <input type="number" value={year} onChange={(e)=>setYear(e.target.value)} className="form-control mt-2" placeholder="Enter your year"></input>
             <input type="number" value={semester} onChange={(e)=>setSemester(e.target.value)} className="form-control mt-2" placeholder="Enter your semester"></input>
            <button className="btn btn-primary mt-2 w-100" onClick={registerhandling}>Register</button>
            <p className="mt-3" style={{marginLeft:"32px"}}>Do you have an account?<Link to="/Login" className=" btn btn-primary">Login</Link></p>
            </div>
          </div>

      </div>
    )
}
export default Register;
