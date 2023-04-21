import React from "react";
import "./About.css";
import logo from './logo.jpg';
import Card1 from '../card/card1'
import Card2 from '../card/card2'
import Card3 from '../card/card3'

const AboutUs = () => {
  return (
    <>

      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
          ></link>  
        <div className="header mx-0">
          <h1 className="sample d-flex align-items-center justify-content-center" style={{color:'black', height:'256px'}}>
            About Us
          </h1>
        </div>
        <div className="box " style={{margin:'0px'}} >
         
          <div className="box1"style={{width:'50%'}}>
            <h2 className=" info text-decoration-underline mx-5 my-2 fs-4" style={{color:"#e88c04"}}>Founder's Message</h2>
            {/* <hr /> */}
            <div className="info1 mx-5 my-2 fs-5">
              <p>MR.ANIRUDH BANSAL</p>
              <div className="info2 mx-7 lh-base"  >
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
<div class="vl" style={{border: '1px solid black',width:'1px', height: '430px'}}></div>
          <div style={{width:'50%'}}>
            <h2 className=" info text-decoration-underline mx-5 my-2 fs-4" style={{color:"#e88c04"}}>Founder's Message</h2>
            {/* <hr /> */}
            <div className="info1 mx-5 my-2 fs-5">
              <p> MRS.MANISHA GUPTA BANSAL</p>
              <div className="info2 mx-7 fs-5 lh-base" >
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
 
        {/* <div class="container ">
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
</div> */}
    

   <div className="cards d-flex justify-content-evenly mt-4">

    <Card1/>
    <Card2/>
    <Card3/>
   </div>
   <div><hr /></div>
   <div className="fs-3" style={{color:"#e88c04"}}><strong>Our Branches</strong></div>
   <div className="phoots d-flex justify-content-evenly">
   <div class="card mt-4" style={{width: "18rem"}}>
  <img src="https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?w=1060&t=st=1681854058~exp=1681854658~hmac=b1ad62682438e048c1e3411be9e9dff0bec06fdaa777022ac2815f2559d8c078" class="card-img-top" alt="..."/>
  <h5 className='my-2'style={{color:"#e88c04"}}>Lucknow</h5>
  
</div>
<div class="card  mx-5 mt-4" style={{width: "18rem"}}>
  <img src="https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?w=1060&t=st=1681854058~exp=1681854658~hmac=b1ad62682438e048c1e3411be9e9dff0bec06fdaa777022ac2815f2559d8c078" class="card-img-top" alt="..."/>
  <h5 className='my-2'style={{color:"#e88c04"}}>Makrana</h5>
</div>
<div class="card mt-4" style={{width: "18rem"}}>
  <img src="https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?w=1060&t=st=1681854058~exp=1681854658~hmac=b1ad62682438e048c1e3411be9e9dff0bec06fdaa777022ac2815f2559d8c078"class="card-img-top" alt="..."/>
  <h5 className='my-2'style={{color:"#e88c04"}} >Jaipur</h5>
</div>
   </div>

          </>
  )
}

export default AboutUs
