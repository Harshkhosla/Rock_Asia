import React from 'react'
import sample1 from './slider1.jpg'
import sample2 from './slider2.jpg'
import sample3 from './slider3.jpg'
import sample4 from './slider4.jpg'
import Logo from './logo.jpg'
import marbel from './Marble1.jpg'
const Products = () => {
  return (
    <div className='container'>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sample1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sample2} class="d-block w-100" alt="..."/>
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
<div class="p-2 w-100">Our business is dedicated to providing high-quality and affordable natural stones to customers worldwide. Our products include Red Coarse Sand, Marble, Granite, and other imported stones, all sourced from the finest quarries around the world. As mine owners, manufacturers, processors, traders, and suppliers, we take pride in every aspect of our business operations, ensuring that our customers receive the best possible service and products.

At the core of our business is our mission to add value to people's lives through the integration of peaceful elements into architectural projects. We understand that our natural stones play a vital role in the creation of beautiful and functional living spaces. From traditional to modern styles, we have a wide range of products to meet the needs of our clients.
</div>
  <div class="p-2 flex-shrink-1"> <img src={Logo} class="d-block w-100" alt="..."/></div>
</div>
<div className="container d-flex">
<div class="p-2 flex-shrink-1"> <img src={Logo} class="d-block w-100" alt="..."/></div>
<div class="p-2 w-100">Our business is dedicated to providing high-quality and affordable natural stones to customers worldwide. Our products include Red Coarse Sand, Marble, Granite, and other imported stones, all sourced from the finest quarries around the world. As mine owners, manufacturers, processors, traders, and suppliers, we take pride in every aspect of our business operations, ensuring that our customers receive the best possible service and products.

At the core of our business is our mission to add value to people's lives through the integration of peaceful elements into architectural projects. We understand that our natural stones play a vital role in the creation of beautiful and functional living spaces. From traditional to modern styles, we have a wide range of products to meet the needs of our clients.
</div>
 
</div>



<div className="Container d-flex justify-content-evenly">
<div class="card" style={{width: "18rem"}}>
  <img src={marbel} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src={marbel} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src={marbel} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src={marbel} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
    </div>
  )
}

export default Products
