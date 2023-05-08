import React from 'react'
import sample1 from './slider1.jpg'
import sample2 from './slider2.jpg'
import sample3 from './slider3.jpg'
import sample4 from './slider4.jpg'
import Logo from './logo.jpg'
import kit from './1 home page.jpg'
import bath from './2 home page.jpg'

import marbel from './Marble1.jpg'
import granite from './granite1.jpg'
import Sandstone from './Sandstone1.jpg'
import Sand from './Sand1.jpg'

const Products = () => {
  return (
    <div className='container' >
      <div id="carouselExampleIndicators" class="carousel slide  mb-4 " >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src={sample2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sample1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sample3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sample4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div className="container d-flex">
<div class="p-2 flex-shrink-1" style={{width:'250px',height:'200px'}}> <img src={bath} class="d-block w-100" alt="..."/></div>

<div class="p-2 w-100 text-start"> <div style={{color:"#e88c04", fontFamily: "Roboto",fontSize:'30px'}}><strong>ROCK ASIA PRIVATE LIMITED</strong></div>Our vision is to provide best-in-class, affordable, and customized flooring and interior solutions with a fusion of Marble and Granite. We believe in nature-friendly living and strive to provide products that promote sustainability and environmental responsibility.

We are a values-driven organization, and our values are centered around empowerment, professionalism, innovation, quality, trust, and growth. Our team is committed to providing exceptional customer service, and we are always willing to go the extra mile to ensure that our customers are satisfied with our products and services.</div>
 
</div>
<div className="container d-flex">
<div class="p-2 w-100 text-start">Our business is dedicated to providing high-quality and affordable natural stones to customers worldwide. Our products include Red Coarse Sand, Marble, Granite, and other imported stones, all sourced from the finest quarries around the world. As mine owners, manufacturers, processors, traders, and suppliers, we take pride in every aspect of our business operations, ensuring that our customers receive the best possible service and products.

We invite you to explore our website and learn more about our products and services. Whether you are a homeowner, architect, or contractor, we have the perfect natural stone solution for your needs. Thank you for considering our business, and we look forward to serving you.
</div>
  <div class="p-2 flex-shrink-1" style={{width:'250px',height:'200px'}}> <img src={kit} class="d-block w-100" alt="..."/></div>
</div>
<hr />

<div><h1 style={{color:"#e88c04"}}>Our Products</h1></div>
<div className="Container d-flex justify-content-evenly mt-4">
<div class="card mx-5 mt-4" style={{width: "18rem" }}>
  <img src={marbel} class="card-img-top" alt="..."/>
  <h5 className='my-2' >MARBLE</h5>
</div>
<div class="card mt-4" style={{width: "18rem"}}>
  <img src={granite} class="card-img-top" alt="..."/>
  <h5 className='my-2'>GRANITE</h5>
  
</div>
<div class="card  mx-5 mt-4" style={{width: "18rem"}}>
  <img src={Sandstone} class="card-img-top" alt="..."/>
  <h5 className='my-2'>SANDSTONE</h5>
</div>
<div class="card mt-4" style={{width: "18rem"}}>
  <img src={Sand} class="card-img-top" alt="..."/>
  <h5 className='my-2' > RIVER BED SAND</h5>
</div>
</div>

    </div>

  )
}

export default Products