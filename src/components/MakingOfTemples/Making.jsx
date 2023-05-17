import React from 'react'
import back from "./Graniteback.jpg"
import GraniteCard from './MakingCard'

    let making =[
        {
        id:1,
        Name: " ",
        img:'https://i.ibb.co/xSYXjyp/Whats-App-Image-2023-05-17-at-18-10-51-1.jpg'
    },
        {
        id:2,
        Name: " ",
        img:'https://i.ibb.co/8byqVZw/Whats-App-Image-2023-05-17-at-18-10-51-2.jpg'
    },
        {
        id:3,
        Name: " ",
        img:'https://i.ibb.co/G0Syyfr/Whats-App-Image-2023-05-17-at-18-10-51.jpg'
    },
        {
        id:4,
        Name: " ",
        img:'https://i.ibb.co/HBbRgF0/Whats-App-Image-2023-05-17-at-18-10-52-1.jpg'
    },
        {
        id:5,
        Name: " ",
        img:'https://i.ibb.co/9TVW7q3/Whats-App-Image-2023-05-17-at-18-10-52.jpg'
    },
]

function Granite() {
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

   
    return (
        <>
            <div className=" mx-0" style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${back})`
            }}>
                <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "350%", fontFamily: "Roboto", letterSpacing: "8px", height: '200px' }}>
                    Making Of Temples
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

export default Granite