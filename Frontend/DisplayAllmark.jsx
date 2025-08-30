import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DisplayAllmark() {
    const [markdata, setMarkdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMarks();
    }, []);

    const fetchMarks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/all-marks");
            setMarkdata(response.data);
        } catch (error) {
            alert("Backend is not connected");
        }
    };

    const handleUpdate = (markdata) => {
        navigate("/Updatemark", { state: { markdata } });
    };

    const handleDelete = async (reg) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this mark?");
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`http://localhost:8080/delete/${reg}`);
            alert(response.data); // Show backend response
            fetchMarks(); // Refresh table after deletion
        } catch (error) {
            alert("Error deleting mark. Backend might not be connected.");
        }
    };

    return (
        <div className='m-5'>
            <h4 className='text-center'>All Students Result</h4>
            <table className='table table-bordered bg-secondary border-dark mt-4'>
                <thead>
                    <tr>
                        <th>Reg No.</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Subcode</th>
                        <th>Mark</th>
                        <th>Grade</th>
                        <th>Result</th>
                        <th>Cgpa</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {markdata.map((markdata, index) => (
                        <tr key={index}>
                            <td>{markdata.reg}</td>
                            <td>{markdata.name}</td>
                            <td>{markdata.subject}</td>
                            <td>{markdata.subcode}</td>
                            <td>{markdata.mark}</td>
                            <td>{markdata.grade}</td>
                            <td>{markdata.result}</td>
                            <td>{markdata.cgpa}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => handleUpdate(markdata)}>Update</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDelete(markdata.reg)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAllmark;
