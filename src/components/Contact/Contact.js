import React from 'react'
import contact from './contact1.jpg'
import './contact.css'

const Contact = () => {
  <link rel="icon" href="https://sreejaa.com/assets/img/fav.png" type="image/png" sizes="16x16"></link>
  return (
    <div>
      <div className="contacts " >
        <img src="" alt="" />
          <h1 className="sample d-flex align-items-center justify-content-center" style={{color:'white', height:'256px'}}>
            Contact Us
          </h1>
        </div>
     
          
  <div class="container content mt-5" >
	<div class="row margin-bottom-30">
		<div class="col-md-8 mb-margin-bottom-25 mr-5px" style={{border:"2px solid #e88c04"}}>
    <form>
  <div class="mb-3 text-start">
    <label for="name" class="form-label fs-5 mt-2" >Enter your name</label>
    <input type="text" class="form-control" id="name" name="name"/>
  </div>
  <div class="mb-3 text-start">
    <label for="email" class="form-label fs-5  " >Enter your email Address</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:"#e88c04"}}>We'll never share your email with anyone else.</div>
  </div>
   <div class="mb-3 text-start">
        <label for="msg" class="form-label fs-5 " >Enter your message</label>
        <textarea class="form-control " name="msg" id="msg" cols="30" rows="10" ></textarea>

      </div>
  <button type="submit" class="btn btn-warning text-start mb-2"><strong >Submit</strong></button>
</form>
		
			
		</div>
		<div class="col-md-4 mt-5" style={{paddingLeft: '80px'}}>
		
			<div class="headline" style={{color:"#e88c04"}}><h2>Contacts</h2></div>
			<ul class="list-unstyled who margin-bottom-30" >
				<li><a href="#" style={{color:'black',textDecoration:'none'}}><i class="fa fa-home mx-2" aria-hidden="true"  ></i>C-4/404 Kamal Apartment-2, Bani Park, Jaipur -302016</a></li>
				<li><a href="" style={{color:'black', textDecoration:'none'}}><i class="fa fa-envelope"></i>rockasia2021@gmail.com</a></li>
				<li><a href="#" style={{color:'black',textDecoration:'none'}}><i class="fa fa-phone"></i>+91 99827 55555</a></li>
				<li><a href="#" style={{color:'black',textDecoration:'none'}}><i class="fa fa-whatsapp"></i>+ 91 95603 15758</a></li>
			</ul>

	
			<div class="headline mt-5 fs-2" style={{color:"#e88c04"}}><h2>Business Hours</h2></div>
			<ul class="list-unstyled margin-bottom-30">
				<li><strong>Monday-Friday:</strong> 10am to 7pm</li>
				<li><strong>Saturday:</strong> 10am to 4pm</li>
				<li><strong>Sunday:</strong> Closed</li>
			</ul>

		</div>

	</div>
</div>
    </div>
  )
}

export default Contact
