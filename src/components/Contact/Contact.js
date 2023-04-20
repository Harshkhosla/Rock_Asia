import React from 'react'
import contact from './contact.png'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contacts " >
        
          <h1 className="sample d-flex align-items-center justify-content-center" style={{color:'white', height:'256px'}}>
            Contact Us
          </h1>
        </div>
     
        <div className="container">
    <form>
  <div class="mb-3">
    <label for="name" class="form-label fs-4"style={{color:"#e88c04"}} ><strong>Enter your name</strong></label>
    <input type="text" class="form-control" id="name" name="name"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label fs-4" style={{color:"#e88c04"}}><strong>Enter your email Address</strong></label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:"#e88c04"}}>We'll never share your email with anyone else.</div>
  </div>
   <div class="mb-3">
        <label for="msg" class="form-label fs-4" style={{color:"#e88c04"}}><strong>Enter your message</strong></label>
        <textarea class="form-control " name="msg" id="msg" cols="30" rows="10" ></textarea>

      </div>
  <button type="submit" class="btn btn-primary" style={{color:"#e88c04"}}><strong>Submit</strong></button>
</form>
    </div>
    <div><hr /></div>
    </div>
  )
}

export default Contact
