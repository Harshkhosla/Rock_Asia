import React from 'react'
import back from "./Templeback.jpg"
import TempleCard from './TempleCard'

function Temples() {
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

    let temples = [{
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
    }
    ]
    return (
        <>
            <div className=" mx-0" style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${back})`
            }}>
                <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "350%", fontFamily: "Roboto", letterSpacing: "8px", height: '200px' }}>
                    TEMPLE
                </h1>
            </div>

            <div className='container'>

                <div className='row my-3'>

                    {temples.map((temples) => <TempleCard
                        name={temples.Name}
                        img={temples.img}
                    ></TempleCard>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Temples