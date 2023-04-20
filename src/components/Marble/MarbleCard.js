import React from 'react'
import Marble from './Marble';

function MarbleCard({name}) {
    console.log(name);
  return (<>
    
    {/* <div className='container'> */}
      <div className="col-md-3">
        {/* <div class="col"> */}
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title ">{name}</h5>
              </div>
          {/* </div> */}
        </div>
      </div>
    {/* </div> */}

  </>
  )
}

export default MarbleCard