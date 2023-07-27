import React from "react";
import "./About.css";
import Card1 from "../card/card1";
import Card2 from "../card/card2";
import Card3 from "../card/card3";

const AboutUs = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link href="https://fonts.googleapis.com/css2?family=Anuphan:wght@200&family=Oswald&family=PT+Sans:ital@0;1&display=swap" rel="stylesheet"/>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <div className="header mx-0">
        <h1
          className="sample d-flex align-items-center justify-content-center "
          style={{ color: "white", height: "256px", fontFamily: "Anuphan" , fontWeight:' bold', fontSize:'60px'}}
        >
          About Us
        </h1>
      </div>
    <div className="container">
      <div className="row box" style={{fontsize:'10px'}}>
        <div className="col-md-6">
        <h2
          className=" info text-decoration-underline  my-2 "
          style={{ color: "#e88c04" }}
        >
          Founder's Message  
        </h2>
        <div className="info1 my-2 ">
         <div className="text-decoration-underline owner"><p>MR.ANIRUDH BANSAL</p></div> 
          <div className="info2 mx-4 lh-base text-start ">
            He Completed his Schooling from Mayo College, Ajmer. He did his
            Graduation from Jain College, Bangalore & MBA from Narsee Munjee
            College, Mumbai. He is Full of vibrant energy. He is been handling
            & taking care of his family business after education. He is known
            for his strong will & he is a thoughtful person who think of
            others growth . He is a very Humble person with a considerate
            mindset.
          </div>
        </div>
        </div>
        <div className="col-md-6">
        <h2
          className=" info text-decoration-underline  my-2 "
          style={{ color: "#e88c04" }}
        >
          Founder's Message
        </h2>
        <div className="info1  my-2 ">
         <div className="text-decoration-underline owner"><p> MRS.MANISHA GUPTA BANSAL</p></div> 
          <div className="info2 mx-4 lh-base text-start ">
            She completed her Schooling from Central Academy, Lucknow. She is
            a B. Tech in Computer Science from Babu Banarasi Das Engineering
            College, Lucknow. She did her masters in Supply Chain & Operations
            from International School of Business & Media, Pune. A Strong &
            dedicated lady with confidence having more than 10 years of
            corporate Experience with organizations like Accenture, Torrent
            Pharmaceuticals, Dents Ply India Ltd, JCB India. She is talented
            with great management skills of leading the team & company to a
            brighter future with continuous improvement & innovation strategy.
          </div>
        </div>
        </div>

      </div>
      <div className="row cards d-flex justify-content-evenly mt-3">
      <div className="col-md-4"><Card1 /></div>
      <div className="col-md-4"><Card2 /></div>
      <div className="col-md-4"><Card3 /></div>
    </div>
    <div>
      <hr />
    </div>
    </div>
    </>
  );
};

export default AboutUs;
