import React from 'react'

const Contact = () => {
  return (
    <div>
     
    <div className="container">
    <form>
  <div class="mb-3">
    <label for="name" class="form-label">Enter your name</label>
    <input type="text" class="form-control" id="name" name="name"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
   <div class="mb-3">
        <label for="msg" class="form-label">Enter Your message</label>
        <textarea class="form-control" name="msg" id="msg" cols="30" rows="10"></textarea>

      </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    <div><hr /></div>
    </div>
  )
}

export default Contact
