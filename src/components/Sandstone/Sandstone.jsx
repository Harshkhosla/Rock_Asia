import React from 'react'
import SandstoneCard from './SandstoneCard'
function Sandstone() {
 
let sandstone=[
    {
        Name:"Rainbow Sandstone",
        img:"https://i.ibb.co/HDV5rs3/Sandstone1.jpg",
        Color:"Brown",
        Surface_Finish:"Polished,Sand Blasted,Honned,Antique,Chisseled",
        Product_Type:"Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
        Usage:"Flooring ,Walls,,Water Fountains,Wash Basin,Cobbles",
        Form:"Slab,Tile",
        Thichness:"15-20 mm",
        Shape:"Rectangular",
        Origin:"Made In India",
        Brand:"Rock Asia Pvt Ltd"
       },
       {
        Name:"Teakwoood Sandstone",
        img:"https://i.ibb.co/SXtD1Nc/Sandstone2.jpg" ,
        Color:"Brown",
        Surface_Finish:"Polished,Sand Blasted,Honned,Antique,Chisseled",
        Product_Type:"Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
        Usage:"Flooring ,Walls,,Water Fountains,Wash Basin,Cobbles",
        Form:"Slab,Tile",
        Thichness:"15-20 mm",
        Shape:"Rectangular",
        Origin:"Made In India",
        Brand:"Rock Asia Pvt Ltd"}
    ]
    
  return (
    <>
      <div className='container bg-warning'>
        <h1 className='text-center' >Marbel</h1>
      </div>
      <div className='container'>

        <div className='row my-3'>

          {Sandstone.map((Sandstone) => <SandstoneCard
          name={Sandstone.Name} 
          img={Sandstone.img}
          ></SandstoneCard>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Sandstone