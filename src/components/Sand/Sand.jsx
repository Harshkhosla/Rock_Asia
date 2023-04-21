import React from 'react'
import back from "./Sandback.jpg"


function Sand() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>


  return (
    <>
      <div className=" mx-0" style={{
        width: "100%",
        height: "200px",
        backgroundImage: `url(${back})`
      }}>
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "300%", fontFamily: "Roboto", letterSpacing: "5px", height: '200px' }}>
          River Bed Side Red Coarse Sand
        </h1>
      </div>
      <div className='container'>
        {/* <div className=''>
          <img src={sand} alt="" />
        </div> */}
        <div class=" text-center">
          <h5 class=" text-uppercase " style={{ fontSize: "16px" }} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos, recusandae iste esse nulla accusamus exercitationem. Recusandae, odit sit deleniti vel incidunt ut non repellat temporibus? Nobis facere nemo sit?</h5>
        </div>

      </div>


    </>
  )
}

export default Sand