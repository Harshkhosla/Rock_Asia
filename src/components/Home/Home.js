import React from "react";
import sample1 from "./slider1.jpg";
import sample2 from "./slider2.jpg";
import sample3 from "./slider3.jpg";
import sample4 from "./slider4.jpg";

import kit from "./1 home page.jpg";
import bath from "./2 home page.jpg";

import marbel from "./Marble1.jpg";
import granite from "./granite1.jpg";
import Sandstone from "./Sandstone1.jpg";
import Sand from "./Sand1.jpg";
import "./home.css";

const Products = () => {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide  mb-4 "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={sample2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={sample1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={sample3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={sample4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        

        <div className="row" style={{fontSize:'10px'}}>
          <div className="pdfImg col-md-3 m-auto text align-items-center">
            <img src={bath} style={{ width: "12rem" }} alt="" />
          </div>
          <div className="text col-md-9">
            <h1
              className="text-start1"
              style={{ color: "#e88c04", fontFamily: "Roboto" }}
            >
              <strong>ROCK ASIA PRIVATE LIMITED</strong>
            </h1>
            <p className=" para1 text-start">
              Our vision is to provide best-in-class, affordable, and customized
              flooring and interior solutions with a fusion of Marble and
              Granite. We believe in nature-friendly living and strive to
              provide products that promote sustainability and environmental
              responsibility. We are a values-driven organization, and our
              values are centered around empowerment, professionalism,
              innovation, quality, trust, and growth. Our team is committed to
              providing exceptional customer service, and we are always willing
              to go the extra mile to ensure that our customers are satisfied
              with our products and services.
            </p>
          </div>
        </div>
        
        <div className="row" style={{fontSize:'10px'}}>
          <div className="text col-md-9">
            <p className="text-start">
              Our business is dedicated to providing high-quality and affordable
              natural stones to customers worldwide. Our products include Red
              Coarse Sand, Marble, Granite, and other imported stones, all
              sourced from the finest quarries around the world. As mine owners,
              manufacturers, processors, traders, and suppliers, we take pride
              in every aspect of our business operations, ensuring that our
              customers receive the best possible service and products. We
              invite you to explore our website and learn more about our
              products and services. Whether you are a homeowner, architect, or
              contractor, we have the perfect natural stone solution for your
              needs. Thank you for considering our business, and we look forward
              to serving you.
            </p>
          </div>
          <div className="pdfImg col-md-3 m-auto text align-items-center mr-2">
            <img src={kit} style={{ width: "12rem" }} alt="" />
          </div>
        </div>

        <hr />

        <div>
          <h1 style={{ color: "#e88c04" }}>Our Products</h1>
        </div>
        <div className="Container row d-flex justify-content-evenly mt-4">
          <div className="card col-md-3 mt-4 " style={{ width: "18rem" }}>
            <a href="/Marble">
            <img src={marbel} className="card-img-top" alt="..." />
            </a>
            <h5 className="my-2">MARBLE</h5>
          </div>
          <div className="card col-md-3 mt-4" style={{ width: "18rem" }}>
          <a href="/Granite">
            <img src={granite} className="card-img-top" alt="..." />
            </a>
            <h5 className="my-2">GRANITE</h5>
          </div>
          <div className="card  col-md-3 mt-4" style={{ width: "18rem" }}>
          <a href="/Sandstone">
            <img src={Sandstone} className="card-img-top" alt="..." />
            </a>
            <h5 className="my-2">SANDSTONE</h5>
          </div>
          <div className="card col-md-3 mt-4" style={{ width: "18rem" }}>
          <a href="/Sand">
            <img src={Sand} className="card-img-top" alt="..." />
            </a>
            <h5 className="my-2"> RIVER BED SAND</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
