import React from 'react'
// import { Link } from 'react-router-dom';
import logo from "./logo.jpg"
import './Footer.css'
function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                        <h4>Rock Asia Private Limited</h4>
                            <img src={logo} className='footer-logo' style={{height:"180px",width:"150px"}}></img>
                        </div>
                        <div className="footer-col">
                            <h4>Rock Asia Private Limited </h4>
                            <ul>
                            <li>
                    <a to={"/"}  role="button"  >
                            Home
                        </a>
                    </li>
                            <li>
                                <a to={"/about"}  role="button"  >
                            About us
                        </a></li>
                               
                                <li><h6 style={{color:"white"}}>Branch Officies: </h6></li>
                                <li style={{color:"#bbbbbb"}}>• Lucknow </li>
                                <li style={{color:"#bbbbbb"}}>• Makrana </li>
                                <li style={{color:"#bbbbbb"}}>• Jaipur  </li>
                                <li style={{color:"#bbbbbb"}}>• Bandikui  </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <a to="/product" ><h4>Our Products</h4></a>
                            <ul>
                            <li>
                                <a to="/product/marbel" >• Marbels</a>
                            </li>
                            <li>
                                <a to="/product/granite" >• Granite</a>
                            </li>
                            <li>
                                <a to="/product/sandstone"  >• Sandstones</a>
                            </li>
                            <li>
                                <a to="/product/sand" >• Sand</a>
                            </li>
                            <li>
                                <a to="/product/sand" >• Brickss</a>
                            </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>let's talk and connect</h4>
                            <ul>
                                <li><h6 style={{color:"white"}}>Our Main Branch: </h6></li>
                                <li><a href="#">C-4/404 Kamal Apartment-2, Bani Park, Jaipur -302016</a></li>
                                <li><a href="#"> +91 99827 55555, </a></li>
                                <li><a href="#">+ 91 95603 15758</a></li>
                                <li><a href="#" style={{text_transform:"none"}}>rockasia2021@gmail.com</a></li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
