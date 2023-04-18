import React from 'react'
// import marble from '../Data/dataM'/
import MarbleCard from './MarbleCard'
function Marble(){
  const  marble=[{
    Name:"Makrana Albeta Marble",
    Color:"White with Grey Lines",
    Surface_Finish:"Polished",
    Product_Type:"Wall Tile, Staircase, Flooring",
    Usage:"Flooring & Walls",
    Form:"Slab",
    Thichness:"15-mm",
    Shape:"Rectangular",
    Origin:"Made In India",
    Brand:"Rock Asia Pvt Ltd"
}, 
{
    Name:"Makrana White Marble Block",
    Color:"White",
    Surface_Finish:"Unpolished",
    Product_Type:"Wall Tile, Staircase, Flooring",
    Usage:"Flooring & Walls",
    Form:"Slab",
    Thichness:"15-mm",
    Shape:"Rectangular",
    Origin:"Made In India",
    Brand:"Rock Asia Pvt Ltd"
},
{
    Name:"Brown Rain Forest Marble",
    Color:"Brown",
    Surface_Finish:"Polished",
    Product_Type:"Wall Tile,Countertops,Kitchen Top ,Staircase, Flooring",
    Usage:"Flooring & Walls",
    Form:"Slab",
    Thichness:"15-20 mm",
    Shape:"Rectangular",
    Origin:"Made In India",
    Brand:"Rock Asia Pvt Ltd"
},
{
    Name:"Green Rain Forest Marble",
    Color:"Green",
    Surface_Finish:"Polished",
    Product_Type:"Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
    Usage:"Flooring & Walls",
    Form:"Slab",
    Thichness:"15-20 mm",
    Shape:"Rectangular",
    Origin:"Made In India",
    Brand:"Rock Asia Pvt Ltd"
},
{
    Name:"Brown Fantasy Marble",
    Color:"White With Brown lines",
    Surface_Finish:"Polished",
    Product_Type:"Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
    Usage:"Flooring & Walls",
    Form:"Slab",
    Thichness:"15-20 mm",
    Shape:"Rectangular",
    Origin:"Made In India",
    Brand:"Rock Asia Pvt Ltd"
}
]
  console.log(marble);
  return (
    <>
     <div className='container bg-warning'>
      <h1 className='text-center' >Marbel</h1>
    </div>
    <div className='container'>

    <div className='row my-3'>

   { marble.map((marble)=>(<MarbleCard name={marble.Name}/>)
      
      
      )}
      </div>
      </div>
      </>
  )
}

export default Marble