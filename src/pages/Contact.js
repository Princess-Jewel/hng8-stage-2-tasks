import React from 'react';
import Layout from '../layout';


const Contact = () => 
    <Layout>
    <section className="container contact">
      <div><h1>Contact Me</h1></div>
     <center>
     <div className="align-items-center">

<div className="col-md-6">
  <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306331/vector2_ktmhy6.jpg"} alt="pic" className="img-fluid vector_3" />
  </div>

  <div className="col-md-4 info">

    <div className="info-box">
        <p>
          <a className="mail" href="mailto:princessjewel80@gmail.com"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/email_otd9pj.svg"} alt="pic" className="image_2 mail" /><span>PrincessJewel80@gmail.com</span></a>
        </p>
    </div>

    <div className="info-box">
        <p>
        <a className="mail" href="tel:+2349061312216">
        <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/phone_cv21sh.svg"} alt="pic" className="image_2" /><span>+2349061312216</span>
        </a>
        </p>
        <p>
        <a className="mail" href="tel:+2347083368633">
        <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/phone_cv21sh.svg"} alt="pic" className="image_2" /><span>+2347083368633</span>
        </a>
        </p>
    </div>

    <div className="info-box">
      <p> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306319/location_pljare.svg"} alt="pic" className="image_2" /><span>Lagos-Nigeria </span> </p>
    </div>

   <center>
   <div className="socials">
      <ul>
        <li><a href="https://linkedin.com/in/princess-jewel-jel-edema" target="_blank" rel="noopener noreferrer"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/linkedin_oe1h3e.svg"} alt="pic" className="image_3" /></a></li>
        <li><a href="https://twitter.com/thatebonychic/" target="_blank" rel="noopener noreferrer"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306322/twitter_kl30sw.svg"} alt="pic" className="image_3" /></a></li>
        <li><a href="https://github.com/Princess-Jewel/" target="_blank" rel="noopener noreferrer"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306307/github_twjnkw.svg"} alt="pic" className="image_3" /></a></li>  
       
      </ul>
    </div>
   </center>

  </div>

  <div className="col-md-2">
  <section></section>
  </div>

  <div className="col-md-6">
  <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306331/vector2_ktmhy6.jpg"} alt="pic" className="img-fluid vector_2" />
  </div>
</div>
     </center>
    </section>


    </Layout>
;

export default Contact;