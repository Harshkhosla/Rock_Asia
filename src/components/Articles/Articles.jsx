import React from 'react'
import back from "./Articlesback.jpg"
import ArticlesCard from './ArticlesCard'

function Articles() {
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

    let articles = [{
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
                <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'white', fontSize: "500%", fontFamily: "Roboto", letterSpacing: "10px", height: '200px' }}>
                ARTICLES
                </h1>
            </div>

             <div className=" mx-0" style={{
        width: "100%",
        height: "100px",
        
      }}>
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'rgb(176 65 22)', fontSize: "300%", fontFamily: "Roboto", letterSpacing: "7px", height: '100px' }}>
          Tables
        </h1>
      </div>

            <div className='container'>

                <div className='row my-3'>

                    {articles.map((articles) => <ArticlesCard
                        name={articles.Name}
                        img={articles.img}
                    ></ArticlesCard>
                    )
                    }
                </div>
            </div>
             <div className=" mx-0" style={{
        width: "100%",
        height: "100px",
        
      }}>
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'rgb(176 65 22)', fontSize: "300%", fontFamily: "Roboto", letterSpacing: "7px", height: '100px' }}>
          Lamps
        </h1>
      </div>

            <div className='container'>

                <div className='row my-3'>

                    {articles.map((articles) => <ArticlesCard
                        name={articles.Name}
                        img={articles.img}
                    ></ArticlesCard>
                    )
                    }
                </div>
            </div>
             <div className=" mx-0" style={{
        width: "100%",
        height: "100px",
        
      }}>
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'rgb(176 65 22)', fontSize: "300%", fontFamily: "Roboto", letterSpacing: "7px", height: '100px' }}>
          Planters
        </h1>
      </div>

            <div className='container'>

                <div className='row my-3'>

                    {articles.map((articles) => <ArticlesCard
                        name={articles.Name}
                        img={articles.img}
                    ></ArticlesCard>
                    )
                    }
                </div>
            </div>
             <div className=" mx-0" style={{
        width: "100%",
        height: "100px",
        
      }}>
        <h1 className="sample d-flex align-items-center justify-content-center" style={{ color: 'rgb(176 65 22)', fontSize: "300%", fontFamily: "Roboto", letterSpacing: "7px", height: '100px' }}>
          Washbasins
        </h1>
      </div>

            <div className='container'>

                <div className='row my-3'>

                    {articles.map((articles) => <ArticlesCard
                        name={articles.Name}
                        img={articles.img}
                    ></ArticlesCard>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Articles