import React from 'react';
import Layout from '../layout';
import Img13 from '../images/image1.PNG';
import Img14 from '../images/image2.PNG';
import Img15 from '../images/image9.PNG';
import Img16 from '../images/image4.PNG';
import Img17 from '../images/image5.PNG';
import Img18 from '../images/image6.PNG';
import Img19 from '../images/image7.PNG';
import Img20 from '../images/image8.PNG';
import Img21 from '../images/image.PNG';

const Projects = () => 
    <Layout>
           <section class="container projects">
      <div><h1>Projects</h1></div>
      <div class="row">
        <div class="col-md-4 projects_1">
          <img src={Img13} alt="pic" class="image_5 img-fluid" />
          <h4>ORDER-AM</h4>
          <p>An Online Food Store</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://orderam.ng/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
           <img src={Img14} alt="pic" class="image_5 img-fluid" />
          <h4>SPEEDYAUTOS</h4>
          <p>An Automobiles Website</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://speedyautos.ng/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img15} alt="pic" class="image_5 img-fluid" />
          <h4>CITITRAVELERS</h4>
          <p>A Traveling/ Visa Consultant Agency</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://www.cititravelers.com/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <a href="http://isarungano.co.zw/"> <img src={Img16} alt="pic" class="image_5 img-fluid" /></a>
          <h4>ISARUNGANO</h4>
          <p>A Zimbabwean Online StoryTeller</p>
          <div class="button_class d-flex justify-content-center">
          <a href="http://isarungano.co.zw/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
         <img src={Img17} alt="pic" class="image_5 img-fluid" />
          <h4>A SIGNIN PAGE </h4>
          <p>A Signin Page linked to GOOGLESHEETS to save inputted Data</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://asigninpage.netlify.app/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>

        </div>

        <div class="col-md-4 projects_1">
         <img src={Img18} alt="pic" class="image_5 img-fluid" />
          <h4>EKO MARKET SHOP</h4>
          <p>An E-Commerce Store </p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://ekomarketshop.com/"> <button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img19} alt="pic" class="image_5 img-fluid" />
          <h4>MY GITHUB REPOSITORY CLONE</h4>
          <p>I used GITHUB GRAPHQL API to fetch Data</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://my-github-clone.netlify.app/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
          <img src={Img20} alt="pic" class="image_5 img-fluid" />
          <h4>A REACT WEATHER APP</h4>
          <p> Get all the information that you’ll need about your weather and forecast.</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://my-own-weather-app.netlify.app/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

        <div class="col-md-4 projects_1">
         <img src={Img21} alt="pic" class="image_5 img-fluid" />
          <h4>HEUOS</h4>
          <p>A Software Development Company</p>
          <div class="button_class d-flex justify-content-center">
          <a href="https://heuos.co.zw/"><button type="button" class="btn">Live-Link</button> </a>
          </div>
        </div>

      </div>
    </section>
    </Layout>
;


export default Projects;