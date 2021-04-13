import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserFriends, faCog, faCalendarWeek, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'


const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:7000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="mt-5"  >

            <div className="ms-4">
                <ul className="list-unstyled sidebarDesign">

                    <li >
                        <Link to="/addDoctors" className="text-white " style={{ textDecoration: "none" }} >
                            <FontAwesomeIcon icon={faUserPlus} /> Add Doctor
                            </Link>
                    </li>
                    <li>
                        <Link to="/addDoctors" className="text-white" style={{ textDecoration: "none" }}  >

                            <FontAwesomeIcon icon={faUserFriends} /> Patients
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctors" className="text-white" style={{ textDecoration: "none" }} >
                            <FontAwesomeIcon icon={faCog} /> Settings
                    </Link>
                    </li>
                    <li>
                        <Link to="/appointment" className="text-white" style={{ textDecoration: "none" }}  >
                            <FontAwesomeIcon icon={faCalendarWeek} /> Appointment
                    </Link>
                    </li>
                </ul>

                <div className="logoutlink">
                    <Link to="/appointment" className="text-white" style={{ textDecoration: "none" }}  >
                        <FontAwesomeIcon icon={faSignOutAlt} />LogOut
                    </Link>
                </div>

            </div>

            {/* <div>
                {
                    isDoctor && <Link to="/addDoctors" className="btn btn-primary" > Add Doctor </Link>
                }
            </div> */}
        </div>
    );
};

export default SideBar;