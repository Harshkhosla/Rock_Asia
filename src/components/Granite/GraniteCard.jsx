import React from 'react'



function GraniteCard({name,img}) {
    console.log(name);
  return (<>
    
    {/* <div className='container'> */}
      <div className="col-md-3">
        {/* <div class="col"> */}
          <div class="card">
            <img src={img} class="card-img-top" alt="" />
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase "style={{fontSize:"17px"}} >{name}</h5>
              </div>
          {/* </div> */}
        </div>
      </div>
    {/* </div> */}

  </>
  )
}

export default GraniteCard