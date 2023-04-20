import React from "react";
import "./About.css";
import logo from './logo.jpg';
// import logo from './logo.jpg';

// import Card from '../card/card'

const AboutUs = () => {
  return (
    <div className="container">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>  
        
        <div className="header my-0  ">
          <h1 className="sample d-flex align-items-center justify-content-center" style={{color:'black', height:'256px'}}>
            About Us
          </h1>
        </div>
        <div className="box my-0 my-0 h-300px" >
         
          <div className="box1"style={{width:'50%'}}>
            <h2 className=" info text-decoration-underline mx-5 my-2 fs-5" style={{}}>Founder's Message</h2>
            {/* <hr /> */}
            <div className="info1 mx-5 my-2 fs-5">
              <p>MR.ANIRUDH BANSAL</p>
              <div className="info2 mx-7 lh-lg"  >
                He Completed his Schooling from Mayo College, Ajmer. He did his
                Graduation from Jain College, Bangalore & MBA from Narsee Munji
                College, Mumbai. He is Full of vibrant energy. He is been
                handling & taking care of his family business after education.
                He is known for his strong will & he is a thoughtful person who
                think of others growth . He is a very Humble person with a
                considerate mindset.
              </div>
            </div>
          </div>
<div class="vl" style={{border: '1px solid black',width:'1px', height: '548px'}}></div>
          <div style={{width:'50%'}}>
            <h2 className=" info text-decoration-underline mx-5 my-2 fs-5">Founder's Message</h2>
            {/* <hr /> */}
            <div className="info1 mx-5 my-2 fs-5">
              <p> MRS.MANISHA GUPTA BANSAL</p>
              <div className="info2 mx-7 fs-5 lh-lg">
                She completed her Schooling from Central Academy, Lucknow. She
                is a B. Tech in Computer Science from Babu Banarasi Das
                Engineering College, Lucknow. She did her masters in Supply
                Chain & Operations from International School of Business &
                Media, Pune. A Strong & dedicated lady with confidence having
                more than 10 years of corporate Experience with organizations
                like Accenture, Torrent Pharmaceuticals, Dents Ply India Ltd,
                JCB India. She is talented with great management skills of
                leading the team & company to a brighter future with continuous
                improvement & innovation strategy.
              </div>
            </div>
          </div>
        </div>
        <div class="container ">
  <div class="row align-items-center mx-5" style={{height:'160px'}}>
    <div class="col  my-3 mx-5">
      <h3 className="heading ">Our Mission</h3>
      <p>We aim to add value to people’s lives everyday by adding peaceful elements to any architectural projects.</p>
    </div>
    <div class="col  mx-5">
      <h3>Our Vision</h3>
      <p>To provide best in class affordable customised flooring & Interior solutions with Marble & Granite fusion for modern nature friendly living</p>
    </div>
    <div class="col  mx-5">
      <h3>Our Values</h3>
      <p>Empowerment / Professional / Innovation / Quality / Trust / Growth.</p>
    </div>
  </div>
</div>
    
<div className="container">


</div>
    </div>
  )
}

export default AboutUs
