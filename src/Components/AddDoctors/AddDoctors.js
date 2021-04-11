import React, { useState } from 'react';
import SideBar from '../Dashboard/Sidebar/SideBar';

const AddDoctors = () => {

    const [info, setInfo] = useState({});

    const [file, setFile] = useState(null);


    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (event) => {
          console.log('clicked',file,info.name,info.email)
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:7000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
           
            event.preventDefault()    
    }


    return (
        <div className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4" >
                <h2>Add Doctors</h2>

                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" onBlur={handleBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" name="name" onBlur={handleBlur} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Upload Picture</label>
                        <input type="file" onChange={handleFileChange} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;