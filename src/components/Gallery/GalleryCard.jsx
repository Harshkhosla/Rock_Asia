import React from 'react'



function GraniteCard({ img }) {

  return (<>


    <div className="col-md-3">

      <div class="card mx-2 my-2">
        <img src={img} class="card-img-top" alt="" />
        {/* <div class="card-body text-center">
          <h5 class="card-title text-uppercase " style={{ fontSize: "16px" }} >{name}</h5>
        </div> */}

      </div>
    </div>


  </>
  )
}

export default GraniteCard