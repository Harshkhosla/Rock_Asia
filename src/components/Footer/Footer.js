import React from 'react'
import logo from "./logo.jpg";
import './Footer.css'


const Footer = () => {
  return (
    <>
    <div>
  
  <footer
          className="text-center text-lg-start text-white mt-3 "
          style={{backgroundColor:" #24262b"}}
          >
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
      {/* <!-- Section: Links --> */}
      <section className="">
        {/* <!--Grid row--> */}
        <div className="footer row">
          {/* <!-- Grid column --> */}
          <div className="footer col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4  " style={{fontWeight:"bolder",fontSize:"20px" ,textDecoration:"underline" }}>
            Rock Asia Private Limited
            </h6>
           <img class="row justify-content-center" src={logo} style={{ height: "180px", width: "150px" ,margin:'auto'}}alt="" />
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="footer col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration:"underline"}}>Links</h6>
            <p>
              <a className="text-white" href="/" style={{textDecoration:'none'}}>Home</a>
            </p>
            <p>
              <a className="text-white" href="/about"style={{textDecoration:'none'}}>About</a>
            </p>
            <p>
              <a className="text-white" href="/setup"style={{textDecoration:'none'}}>SetUp</a>
            </p>
            <p>
              <a className="text-white" href="/gellary" style={{textDecoration:'none'}}>Gallery</a>
            </p>
            <p>
                  <h6 style={{ color: "white" ,textDecoration:'underline' }}>Branch Offices:- </h6>
                </p>
                <li style={{ color: "#bbbbbb" }}> Lucknow </li>
                <li style={{ color: "#bbbbbb" }}> Jaipur </li>
                <li style={{ color: "#bbbbbb" }}> Makrana </li>
            {/* <p>
              <a className="text-white">Bootstrap Angular</a>
            </p> */}
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="footer col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration:"underline"}}>
              Our Products
            </h6>
            <p>
              <a className="text-white" href='/Sand' style={{textDecoration:'none'}}>River bed Sand</a>
            </p>
            <p>
              <a className="text-white" href='/Marble'style={{textDecoration:'none'}}>Marble</a>
            </p>
            <p>
              <a className="text-white" href='/Granite'style={{textDecoration:'none'}}>Granite</a>
            </p>
            <p>
              <a className="text-white" href='/Sandstone'style={{textDecoration:'none'}}>Sandstone</a>
            </p>
            <p>
              <a className="text-white" href='/Temple'style={{textDecoration:'none'}}>Temple</a>
            </p>
            <p>
              <a className="text-white" href='/Articles'style={{textDecoration:'none'}}>Articles</a>
            </p>
            <p>
              <a className="text-white" href='/others'style={{textDecoration:'none'}}>Others</a>
            </p>
           
          </div>

          {/* <!-- Grid column --> */}
          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="footer col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration:"underline"}}>let's talk and connect</h6>
            <p><i className="fas fa-home" style={{marginRight:'6px'}}></i> C4/404 , kamal Apartment -2, Opposite Jaipur Metals, Bani Park , Jaipur ( Rajasthan) Pin - 302016</p>
            <p><i className="fas fa-envelope mr-3" style={{marginRight:'9px'}}></i>rockasia2021@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 99827 55555,</p>
            <p><i className="fas fa-phone mr-3"></i> + 91 95603 15758</p>
          </div>  
          {/* <!-- Grid column --> */}
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr className="my-3"/>

      {/* <!-- Section: Copyright --> */}
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          {/* <!-- Grid column --> */}
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            {/* <!-- Copyright --> */}
            <div className="p-3">
              © 2023 Copyright:All rights reserved
              
            </div>
            {/* <!-- Copyright --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            {/* <!-- Facebook --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

            {/* <!-- Twitter --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               
               role="button"
               ><i className="fab fa-twitter"></i
              ></a>

            {/* <!-- Google --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               
               role="button"
               ><i className="fab fa-google"></i
              ></a>

            {/* <!-- Instagram --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
              
               role="button"
               ><i className="fab fa-instagram"></i
              ></a>
          </div>
          {/* <!-- Grid column --> */}
        </div>
      </section>
      {/* <!-- Section: Copyright --> */}
    </div>
    {/* <!-- Grid container --> */}
  </footer>
  
    </div>
    </>
  )
}

export default Footer