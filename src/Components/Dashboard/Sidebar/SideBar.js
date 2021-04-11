import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="col-md-2">
            <h1>This is side bar page</h1>
            <Link to="/addDoctors" className="btn btn-primary" > Add Doctor </Link>
        </div>
    );
};

export default SideBar;