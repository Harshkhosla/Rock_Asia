import React from 'react'
// import marble from '../Data/dataM'/
import MarbleCard from './MarbleCard'
function Marble() {
  const marble = [{
    id: 1,
    img:"https://i.ibb.co/DpZVj9d/Marble1.jpg" ,
    Name: "Makrana Albeta Marble",
    Color: "White with Grey Lines",
    Surface_Finish: "Polished",
    Product_Type: "Wall Tile, Staircase, Flooring",
    Usage: "Flooring & Walls",
    Form: "Slab",
    Thichness: "15-mm",
    Shape: "Rectangular",
    Origin: "Made In India",
    Brand: "Rock Asia Pvt Ltd"
  },
  {
    id: 2,
    img:"https://i.ibb.co/XDL2yyQ/Marble2.jpg" ,
    Name: "Makrana White Marble Block",
    Color: "White",
    Surface_Finish: "Unpolished",
    Product_Type: "Wall Tile, Staircase, Flooring",
    Usage: "Flooring & Walls",
    Form: "Slab",
    Thichness: "15-mm",
    Shape: "Rectangular",
    Origin: "Made In India",
    Brand: "Rock Asia Pvt Ltd"
  },
  {
    id: 3,
    img:"https://i.ibb.co/NpPQQJp/Marble3.jpg",
    Name: "Brown Rain Forest Marble",
    Color: "Brown",
    Surface_Finish: "Polished",
    Product_Type: "Wall Tile,Countertops,Kitchen Top ,Staircase, Flooring",
    Usage: "Flooring & Walls",
    Form: "Slab",
    Thichness: "15-20 mm",
    Shape: "Rectangular",
    Origin: "Made In India",
    Brand: "Rock Asia Pvt Ltd"
  },
  {
    id: 4,
    img:"https://i.ibb.co/Q6SF1XM/Marble4.jpg",
    Name: "Green Rain Forest Marble",
    Color: "Green",
    Surface_Finish: "Polished",
    Product_Type: "Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
    Usage: "Flooring & Walls",
    Form: "Slab",
    Thichness: "15-20 mm",
    Shape: "Rectangular",
    Origin: "Made In India",
    Brand: "Rock Asia Pvt Ltd"
  },
  {
    id: 5,
    img:"https://i.ibb.co/cChSHF3/Marble5.jpg" ,
    Name: "Brown Fantasy Marble",
    Color: "White With Brown lines",
    Surface_Finish: "Polished",
    Product_Type: "Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
    Usage: "Flooring & Walls",
    Form: "Slab",
    Thichness: "15-20 mm",
    Shape: "Rectangular",
    Origin: "Made In India",
    Brand: "Rock Asia Pvt Ltd"
  }
  ]
  console.log(marble);
  return (
    <>
    <div className="header mx-0">
          <h1 className="sample d-flex align-items-center justify-content-center" style={{color:'black',fontWeight:"bolder", height:'200px'}}>
            Marble
          </h1>
        </div>
      {/* <div className='container bg-warning'>
        <h1 className='text-center' >Marbel</h1>
      </div> */}
      <div className='container'>

        <div className='row my-3'>

          {marble.map((marble) => <MarbleCard
          name={marble.Name} 
          img={marble.img}
          ></MarbleCard>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Marble