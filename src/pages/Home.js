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
         
        </div>
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" className="img-fluid image" />
        </div>
      </div>
    </section>
    <Layout>

    </Layout>

    <About/>
    <Contact/>
  </Layout>
  ;

export default Home;