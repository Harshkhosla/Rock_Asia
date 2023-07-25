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
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "350%", fontFamily: "Roboto", letterSpacing: "8px", height: '200px' }}>
          SAND
        </h1>
      </div>
      <div className='container'>
       
        <div class=" text-center">
          <h4 class=" text-uppercase " style={{textAlign:"justify" }} >
            <>
              <li>River Sand-Unwashed</li>
              <li>River Sand-Washed</li>
              <li>Builder Sand</li>
              <li>Plaster Sand</li>
              <li>Filler Sand</li>
              <li>Super Sand</li>
              <li>1,2mm Sand</li>
            </>
            

            </h4>
        </div>

      </div>


    </>
  )
}

export default Sand