import React from 'react';
import Layout from '../layout';
import TypedReactDemo from './TypedReactDemo';
import About from '../pages/About';
import Contact from '../pages/Contact';



const Home = () =>

  <Layout>
    <section className="container home">
      <div className="row align-items-center home1">
        {/* min-vh-100 min-vw-100 */}
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" className="img-fluid image_second" />
        </div>

        <div className="col-md-6 text-center home_1">
          <TypedReactDemo
            strings={[
              'Princess Jewel Jel-Edema',
              'A Front-End Developer',
              'Open To Work Anywhere!',


            ]}
          />
          <p>I am an independent self-starter team player who is organized, detail oriented and able to work in a dynamic environment.
          I have hands-on experience working with React.js. I also have experience converting Figma and Adobe XD design mockups to HTML and CSS.
          </p>
          <div className="button_class d-flex justify-content-center">
            <a href="https://drive.google.com/file/d/1P7-_TL1GgMRn8qodAzRHaIZloQ3U-G0f/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn_1">VIEW CV</button> </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" className="img-fluid image" />
        </div>
      </div>
    </section>
    <Layout>

      <section className="container projects">
      <div><h1>Few Projects</h1></div>
      <div className="row">
        <div className="col-md-6 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/image1_mzste9.png"} alt="pic" className="image_5 img-fluid" />
          <h4>ORDER-AM</h4>
          <p>An Online Food Store</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://orderam.ng/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn">Live Link</button> </a>
          </div>
        </div>

        
        <div className="col-md-6 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1619644526/Capture1_2_mxeusi.png"} alt="pic" className="image_5 img-fluid pandar" />
          <h4>PANDAR APP</h4>
          <p>A Digital Application for trading Bitcoin, Giftcards and paying Bills</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://pandar.ng/" target="_blank" rel="noopener noreferrer"> <button type="button" className="btn">Live Link</button> </a>
          </div>
        </div>


        <div className="col-md-6 projects_1">
         <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306332/image6_cclkcv.png"} alt="pic" className="image_5 img-fluid" />
          <h4>EKO MARKET SHOP</h4>
          <p>An E-Commerce Store </p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://ekomarketshop.com/" target="_blank" rel="noopener noreferrer"> <button type="button" className="btn">Live Link</button> </a>
          </div>
        </div>

        <div className="col-md-6 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306320/image7_zpx42y.png"} alt="pic" className="image_5 img-fluid" />
          <h4>MY GITHUB REPOSITORY CLONE</h4>
          <p>I used GITHUB GRAPHQL API to fetch Data</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://my-github-clone.netlify.app/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn">Live Link</button> </a>
          </div>
        </div>


      </div>
    </section>
    </Layout>

    <About/>
    <Contact/>
  </Layout>
  ;

export default Home;