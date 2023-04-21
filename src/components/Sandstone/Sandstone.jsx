import React from 'react'
import SandstoneCard from './SandstoneCard'
import back from "./Sandstoneback.jpg"
function Sandstone() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

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
     <div className=" mx-0" style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${back})`
            }}>
                <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'black', fontSize: "500%", fontFamily: "Roboto", letterSpacing: "10px", height: '200px' }}>
                    Sandstone
                </h1>
            </div>
      
      <div className='container'>

        <div className='row my-3'>

          {sandstone.map((sandstone) => <SandstoneCard
          name={sandstone.Name} 
          img={sandstone.img}
          ></SandstoneCard>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Sandstone