import React from 'react';
import Layout from '../layout';
import Img1 from '../images/bootstrap.svg';
import Img2 from '../images/css3.svg';
import Img3 from '../images/figma.svg';
import Img4 from '../images/react.svg';
import Img5 from '../images/wordpress.svg';
import Img6 from '../images/js.svg';

const About = () => 
    <Layout>
        <section class="container about">
      <h1>About Me</h1>
      <div class="row">
          <div class="col-md-12">
          <p>I am an independent self-starter team player who is organized, detail oriented and able to work in a dynamic environment.
          I have hands-on experience working with React.js. I also have experience converting Figma and Adobe XD design mockups to HTML and CSS.
          I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization. I am a fast learner who is able to thrive individually and also as part of a team
          </p>
          </div>
      </div>
    </section>

    <section class="container skills">
      <h1>My Skills</h1>
      <div class="box-container">
          <div class="box">
          <img src= {Img4} alt="pic" class="image_1" />
          <h5>React JS</h5>
          </div>

          <div class="box">
          <img src= {Img6} alt="pic" class="image_1" />
          <h5>Javascript</h5>
          </div>

          <div class="box">
          <img src= {Img1} alt="pic" class="image_1" />
          <h5>Bootstrap 4</h5>
          </div>

          <div class="box">
          <img src= {Img2} alt="pic" class="image_1" />
          <h5>CSS 3</h5>
          </div>

          <div class="box">
          <img src= {Img3} alt="pic" class="image_1" />
          <h5>Figma</h5>
          </div>

          <div class="box">
          <img src= {Img5} alt="pic" class="image_1" />
          <h5>WordPress</h5>
          </div>
      </div>
    </section>

    <section class="container experience mt-5">
      <div><h1>Work Experiences</h1></div>
      <div class="row justify-content-around  mb-5">
        <div class="col-md-4">
          <div class="box_1">
            <div class="year">09.2020 - present</div>
            <h3>CitiTravelers</h3>
            <p>Created database schemas with MySQL and assisted with Frontend development where needed. </p>
            <p> Integrated Paystack's API to the site to handle payment so users can subscribe and pay for certain features.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box_1">
            <div class="year">08.2020 - present</div>
            <h3>Heuos</h3>
            <p>Wrote RESTful APIs to be consumed by the Frontend team.</p>
            <p> Integrated SOAP APIs of top Financial Institutions.</p>
            <p> Wrote Unit Tests.</p>
            <p> Worked on refactoring legacy codes to make. them more efficient, clean and readable</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box_1">
            <div class="year">04.2020 - 08.2020</div>
            <h3>Dynamix Tech Solutions</h3>
            <p>Assisted with maintenance of clients' websites.</p>
            <p> Mastered the usage of CMS like WordPress.</p>
            <p> Contributed to development of clients' websites.</p>
            <p>Part of a team that developed clients' websites with React framework.</p>
            <p>Trained new Interns in HTML, CSS, the usage and application of Javascript, and overlooked their progress. </p>
            
          </div>
        </div>

      </div>
    </section>

    </Layout>
;


export default About;