import React from "react";
import { Link } from 'react-router-dom';
import logo from "./logo.jpg";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Rock Asia Private Limited</h4>
           
              <img
                src={logo}
                className="footer-logo"
                style={{ height: "180px", width: "150px" }}
              ></img>
            </div>
            <div className="footer-col">
              <h4>Rock Asia Private Limited </h4>
              <ul>
                <li>
                  <Link to={"/"} role="button">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} role="button">
                    About us
                  </Link>
                </li>

                <li>
                  <h6 style={{ color: "white" }}>Branch Officies: </h6>
                </li>
                <li style={{ color: "#bbbbbb" }}>• Lucknow </li>
                <li style={{ color: "#bbbbbb" }}>• Makrana </li>
                <li style={{ color: "#bbbbbb" }}>• Jaipur </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 to="/product">
                <h4 className="prod ml-3">Our Products</h4>
              </h4>
              <ul>
                <li>
                  <Link to="/product/marbel">• Marbels</Link>
                </li>
                <li>
                  <Link to="/product/granite">• Granite</Link>
                </li>
                <li>
                  <Link to="/product/sandstone">• Sandstones</Link>
                </li>
                <li>
                  <Link to="/product/sand">• Sand</Link>
                </li>
              
              </ul>
            </div>
            <div className="footer-col">
              <h4>let's talk and connect</h4>
              <ul>
                <li>
                  <h6 style={{ color: "white" }}>Our Main Branch: </h6>
                </li>
                <li>
                  <Link href="#">
                    C-4/404 Kamal Apartment-2, Bani Park, Jaipur -302016
                  </Link>
                </li>
                <li>
                  <Link href="#"> +91 99827 55555, </Link>
                </li>
                <li>
                  <Link href="#">+ 91 95603 15758</Link>
                </li>
                <li>
                  <Link href="#" style={{ text_transform: "none" }}>
                    rockasia2021@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
