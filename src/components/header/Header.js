import * as React from "react";
import './header.css';

import Logo from "./logo.jpg";
import { Link } from "react-router-dom";


const Header = () => {

  

  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg mb-4 ">
  <div class="container-fluid">
    <img src={Logo} class="mx-3"style={{width:'45px', height:'50px'}}alt="" />
    <a class="navbar-brand fs-3" href="/" style={{color:'#e88c44', fontWeight:'bold'}}>ROCK ASIA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/Sand">River Bed Sand</a></li>
            <li><a class="dropdown-item" href="/Marble">Marble</a></li>
            <li><a class="dropdown-item" href="/Granite">Granite</a></li>
            <li><a class="dropdown-item" href="Sandstone">Sanstone</a></li>
            <li><a class="dropdown-item" href="Temple">Temple</a></li>
            <li><a class="dropdown-item" href="Article">Articles</a></li>
            <li><a class="dropdown-item" href="/others">Others</a></li>
          </ul>
        </li>


        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="/setup">Our Setup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="/gallery">Gallery</a>
        </li>
       
       
      </ul>
      <a href="/contact us" class="btn fw-bold">Get in Touch</a>
    </div>
  </div>
</nav>
    </div>
    </>
  );
};

export default Header;
