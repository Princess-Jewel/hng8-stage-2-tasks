import React from 'react';
import Layout from '../layout';
import TypedReactDemo from './TypedReactDemo';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';





const Home = () =>
  <Layout>

    <section className="container home">
      <div className="row align-items-center home1">
        {/* min-vh-100 min-vw-100 */}
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" class="img-fluid image_second" />
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
            <a href="https://drive.google.com/file/d/16bZn6VbnzaLSGKNkc7ZyEu9AFbd-XXeX/view?usp=sharing"><button type="button" className="btn btn_1">VIEW CV</button> </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" class="img-fluid image" />
        </div>
      </div>
    </section>
  </Layout>
  ;

export default Home;