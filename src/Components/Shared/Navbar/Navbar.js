import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link me-5 active" aria-current="page"  >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="appointment" class="nav-link me-5 active" aria-current="page"  >Appointment</Link>
        </li>
        <li class="nav-item">
          <Link to="dashboard" class="nav-link me-5 active" aria-current="page"  >DashBoard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-5 active text-white" aria-current="page"  >Reviews</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-5 active text-white" aria-current="page"  >Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-5 active text-white" aria-current="page"  >Contract Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;