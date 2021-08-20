import React from 'react';
import Layout from '../layout';


const About = () => 
    <Layout>
       <section className="container skills">
      <div> <h1>Skills</h1></div>
      <div className=" col-md-12 box-container">
        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306322/react_ktgiby.svg"} alt="pic"  className="image_1" />
          <h5>React JS</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306317/js_rbk7fv.svg"} alt="pic" className="image_1"/>
          <h5>Javascript</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/bootstrap_p4ixck.svg"} alt="pic" className="image_1" />
          <h5>Bootstrap 4</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/css3_rvm9xy.svg"} alt="pic" className="image_1"/>
          <h5>CSS 3</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/figma_nwrjm0.svg"} alt="pic" className="image_1"/>
          <h5>Figma</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306307/wordpress_wex6we.svg"} alt="pic" className="image_1" />
          <h5>WordPress</h5>
        </div>
      </div>
    </section>



    <section className="container experience ">
      <div><h1>Work Experiences</h1></div>
      <div className="row justify-content-around  mb-5">
        <div className="col-md-4">
          <div className="box_1">
            <div className="year">02.2021 - present</div>
            <h3>Google</h3>
            <p>Created the frontend of the Google Web Application and the Users' Dashboard. </p>
            <p> Integrated  APIs to the site to fetch digital currency rates and unique users' data.</p>
            <p>Wrote PHP for the Frontend and also created a Blog.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="box_1">
            <div className="year">09.2020 - 02.2021</div>
            <h3>CitiTravelers</h3>
            <p>Created database schemas with MySQL and assisted with Frontend development where needed. </p>
            <p> Integrated Paystack's API to the site to handle payment so users can subscribe and pay for certain features.</p>
            <p>Assisted with maintenance of clients' websites.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="box_1">
            <div className="year">08.2020 - 12.2020</div>
            <h3>Heuos</h3>
            <p>Consumed  RESTful APIs for the Frontend.</p>
            <p> Integrated SOAP APIs of top Financial Institutions.</p>
            <p> Wrote Unit Tests.</p>
            <p> Worked on refactoring legacy codes to make. them more efficient, clean and readable</p>
          </div>
        </div>


      </div>
    </section>

    </Layout>
;


export default About;