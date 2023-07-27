import React from 'react'
import back from "./Graniteback.jpg"
import GraniteCard from './GalleryCard'

    let making =[
        
    {
        Name: "Alaska Red Granite",
        img: "https://i.ibb.co/DpH2MFm/Granite1.jpg",
        Color: "Orangish red",
        Surface_Finish: "Polished",
        Product_Type: "Walls,Kitchen Tops,Countertops, Staircase, Flooring",
        Usage: "Flooring & Walls",
        Form: "Slab",
        Thichness: "15-mm",
        Shape: "Rectangular",
        Origin: "Made In India",
        Brand: "Rock Asia Pvt Ltd"
    },
    {
        Name: "Alaska Granite (MonaLisa)",
        img: "https://i.ibb.co/CPTfQDf/Granite2.jpg",
        Color: "Greyish White",
        Surface_Finish: "Unpolished",
        Product_Type: "Walls,Kitchen Tops,Countertops, Staircase, Flooring",
        Usage: "Flooring & Walls",
        Form: "Slab",
        Thichness: "15-mm",
        Shape: "Rectangular",
        Origin: "Made In India",
        Brand: "Rock Asia Pvt Ltd"
    },
    {
        Name: "Alaska Granite (Pentagonia)",
        img: "https://i.ibb.co/Qk4cZsb/Granite3.jpg",
        Color: "White",
        Surface_Finish: "Polished",
        Product_Type: "Walls,Kitchen Tops,Countertops, Staircase, Flooring",
        Usage: "Flooring & Walls",
        Form: "Slab",
        Thichness: "15-20 mm",
        Shape: "Rectangular",
        Origin: "Made In India",
        Brand: "Rock Asia Pvt Ltd"
    },
    {
        Name: "Alaska White Granite",
        Color: "White",
        img: "https://i.ibb.co/163pnZc/Granite4.jpg",
        Surface_Finish: "Polished",
        Product_Type: "Walls,Countertops,Kitchen Top, Staircase, Flooring",
        Usage: "Flooring & Walls",
        Form: "Slab",
        Thichness: "15-20 mm",
        Shape: "Rectangular",
        Origin: "Made In India",
        Brand: "Rock Asia Pvt Ltd"
    },
    {
        Name: "P-White Granite",
        Color: "Grey",
        img: "https://i.ibb.co/jZqTFpL/Granite5.jpg",
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
        Name: "Fish Black Granite",
        img: "https://i.ibb.co/sb7SMRf/Granite6.jpg",
        Color: "Black",
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
        Name: "Titanium Black Granite",
        img: "https://i.ibb.co/mCdT69Z/Granite7.jpg",
        Color: "Black",
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
        Name: "Black Marquina Granite",
        img: "https://i.ibb.co/7kKr5XD/Granite8.jpg",
        Color: "Black",
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
        Name: "Tiger Granite",
        img: "https://i.ibb.co/4Rh038b/Granite9.jpg",
        Color: "Brown",
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
        Name: "Majestic Black Granite",
        img: "https://i.ibb.co/6J9hgDC/Granite10.jpg",
        Color: "Graphite Black",
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
        Name: "Rosy Pink Granite",
        img: "https://i.ibb.co/x3kKZfy/Granite11.jpg",
        Color: "Graphite Black",
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
        Name: "Red Gem Granite",
        img: "https://i.ibb.co/b1KMWq4/Granite12.jpg",
        Color: "Graphite Black",
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
        Name: "China White Granite",
        img: "https://i.ibb.co/PwTWSyH/Granite13.jpg",
        Color: "Graphite Black",
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
        Name: "Crystal Blue Granite",
        img: "https://i.ibb.co/d5QctNT/Granite14.jpg",
        Color: "Graphite Black",
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
        Name: "Coral Black Granite",
        img: "https://i.ibb.co/FqSB7nD/Granite15.jpg",
        Color: "Graphite Black",
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
        Name: "Aravali Brown Granite",
        img: "https://i.ibb.co/WDx2VS5/Granite16.jpg",
        Color: "Graphite Black",
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
        Name: "Dessert Gold Granite",
        img: "https://i.ibb.co/6tdJwqx/Granite17.jpg",
        Color: "Graphite Black",
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
        Name: "Antico cream Granite",
        img: "https://i.ibb.co/SyDZSdb/Granite18.jpg",
        Color: "Beidge",
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
        Name: "Alaska Gold Granite",
        img: "https://i.ibb.co/HKDxQYt/Granite19.jpg",
        Color: "Golden Brown",
        Surface_Finish: "Polished",
        Product_Type: "Wall Tile,Countertops,Kitchen Top, Staircase, Flooring",
        Usage: "Flooring & Walls",
        Form: "Slab",
        Thichness: "15-20 mm",
        Shape: "Rectangular",
        Origin: "Made In India",
        Brand: "Rock Asia Pvt Ltd"
        
    },{

        id: 1,
        img: "https://i.ibb.co/DpZVj9d/Marble1.jpg",
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
        img: "https://i.ibb.co/XDL2yyQ/Marble2.jpg",
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
        img: "https://i.ibb.co/NpPQQJp/Marble3.jpg",
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
        img: "https://i.ibb.co/Q6SF1XM/Marble4.jpg",
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
        img: "https://i.ibb.co/cChSHF3/Marble5.jpg",
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
      },{
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
        Brand:"Rock Asia Pvt Ltd"},
        
]

function Gallery() {
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

   
    return (
        <>
            <div className=" mx-0" style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${back})`
            }}>
                <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "350%", fontFamily: "Roboto", letterSpacing: "8px", height: '200px' }}>
                    Gallery
                </h1>
            </div>

            <div className='container'>

                <div className='row my-3'>

                    {making.map((making) => <GraniteCard
                        name={making.Name}
                        img={making.img}
                    ></GraniteCard>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery