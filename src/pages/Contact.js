import React from 'react';
import Layout from '../layout';
import Img7 from '../images/phone.svg';
import Img8 from '../images/location.svg';
import Img9 from '../images/email.svg';
import Img10 from '../images/linkedin.svg';
import Img11 from '../images/twitter.svg';
import Img12 from '../images/github.svg';

const Contact = () => 
    <Layout>
           <section class="container contact">
      <div><h1>Contact Me</h1></div>
      <div class="row align-items-center">
        <div class="col-md-4 info">

          <div class="info-box">
            <h4> <img src={Img9} alt="pic" class="image_2" /><span>PrincessJewel80@gmail.com</span></h4>
          </div>

          <div class="info-box">
            <h4><img src={Img7} alt="pic" class="image_2" /><span>+2349061312216</span></h4>
            <h4><img src={Img7} alt="pic" class="image_2" /><span>+2347083368633</span></h4>
          </div>

          <div class="info-box">
            <h4> <img src={Img8} alt="pic" class="image_2" /><span>Lagos-Nigeria </span> </h4>
          </div>

          <div class="socials">
            <ul>
              <li><a href="https://linkedin.com/in/princess-jewel-jel-edema"> <img src={Img10} alt="pic" class="image_3" /></a></li>
              <li><a href="https://twitter.com/thatebonychic/"> <img src={Img11} alt="pic" class="image_3" /></a></li>
              <li><a href="https://github.com/Princess-Jewel/"> <img src={Img12} alt="pic" class="image_3" /></a></li>
            </ul>
          </div>

        </div>

        <div class="col-md-8">

        </div>
      </div>
    </section>
    </Layout>
;

export default Contact;