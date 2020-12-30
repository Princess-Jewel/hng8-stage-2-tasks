import React from 'react';
import Layout from '../layout';
import TypedReactDemo from './TypedReactDemo';





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
          <a href="https://drive.google.com/file/d/14N4HwPS6WOPdtNWjzet18kv4CoCaDJSU/view?usp=sharing"><button type="button" className="btn btn_1">VIEW CV</button> </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306966/vector_kflkvj.jpg"} alt="pic" class="img-fluid image" />
        </div>
      </div>
    </section>

    <section className="container skills">
      <div> <h1>Skills</h1></div>
      <div className=" col-md-12 box-container">
        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306322/react_ktgiby.svg"} alt="pic" class="image_1" />
          <h5>React JS</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306317/js_rbk7fv.svg"} alt="pic" class="image_1" />
          <h5>Javascript</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/bootstrap_p4ixck.svg"} alt="pic" class="image_1" />
          <h5>Bootstrap 4</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/css3_rvm9xy.svg"} alt="pic" class="image_1" />
          <h5>CSS 3</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/figma_nwrjm0.svg"} alt="pic" class="image_1" />
          <h5>Figma</h5>
        </div>

        <div className="box">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306307/wordpress_wex6we.svg"} alt="pic" class="image_1" />
          <h5>WordPress</h5>
        </div>
      </div>
    </section>



    <section className="container experience mt-5">
      <div><h1>Work Experiences</h1></div>
      <div className="row justify-content-around  mb-5">
        <div className="col-md-4">
          <div className="box_1">
            <div className="year">09.2020 - present</div>
            <h3>CitiTravelers</h3>
            <p>Created database schemas with MySQL and assisted with Frontend development where needed. </p>
            <p> Integrated Paystack's API to the site to handle payment so users can subscribe and pay for certain features.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box_1">
            <div className="year">08.2020 - present</div>
            <h3>Heuos</h3>
            <p>Wrote RESTful APIs to be consumed by the Frontend team.</p>
            <p> Integrated SOAP APIs of top Financial Institutions.</p>
            <p> Wrote Unit Tests.</p>
            <p> Worked on refactoring legacy codes to make. them more efficient, clean and readable</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="box_1">
            <div className="year">04.2020 - 08.2020</div>
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

    <section className="container projects">
      <div><h1>Projects</h1></div>
      <div className="row">
        <div className="col-md-4 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/image1_mzste9.png"} alt="pic" className="image_5 img-fluid" />
          <h4>ORDER-AM</h4>
          <p>An Online Food Store</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://orderam.ng/"><button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
           <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/image2_rhzrmu.png"} alt="pic" className="image_5 img-fluid" />
          <h4>SPEEDYAUTOS</h4>
          <p>An Automobiles Website</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://speedyautos.ng/"><button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306316/image9_swsdip.png"} alt="pic" className="image_5 img-fluid" />
          <h4>CITITRAVELERS</h4>
          <p>A Traveling/ Visa Consultant Agency</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://www.cititravelers.com/"> <button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306312/image4_pdthlv.png"} alt="pic" className="image_5 img-fluid" />
          <h4>ISARUNGANO</h4>
          <p>A Zimbabwean Online StoryTeller</p>
          <div className="button_class d-flex justify-content-center">
          <a href="http://isarungano.co.zw/"> <button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
         <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306309/image5_rjr66p.png"} alt="pic" className="image_5 img-fluid" />
          <h4>A SIGNIN PAGE </h4>
          <p>A Signin Page linked to GOOGLESHEETS to save inputted Data</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://asigninpage.netlify.app/"> <button type="button" className="btn">Live-Link</button> </a>
          </div>

        </div>

        <div className="col-md-4 projects_1">
         <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306332/image6_cclkcv.png"} alt="pic" className="image_5 img-fluid" />
          <h4>EKO MARKET SHOP</h4>
          <p>An E-Commerce Store </p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://ekomarketshop.com/"> <button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306320/image7_zpx42y.png"} alt="pic" className="image_5 img-fluid" />
          <h4>MY GITHUB REPOSITORY CLONE</h4>
          <p>I used GITHUB GRAPHQL API to fetch Data</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://my-github-clone.netlify.app/"><button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
          <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306324/image8_kaebjm.png"} alt="pic" className="image_5 img-fluid" />
          <h4>A REACT WEATHER APP</h4>
          <p> Get all the information that you’ll need about your weather and forecast.</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://my-own-weather-app.netlify.app/"><button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

        <div className="col-md-4 projects_1">
         <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306317/image_nhzdj6.png"} alt="pic" className="image_5 img-fluid" />
          <h4>HEUOS</h4>
          <p>A Software Development Company</p>
          <div className="button_class d-flex justify-content-center">
          <a href="https://heuos.co.zw/"><button type="button" className="btn">Live-Link</button> </a>
          </div>
        </div>

      </div>
    </section>

    <section className="container contact">
      <div><h1>Contact Me</h1></div>
      <div className="row align-items-center">

      <div className="col-md-6">
        <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306331/vector2_ktmhy6.jpg"} alt="pic" className="img-fluid vector_3" />
        </div>

        <div className="col-md-4 info">

          <div className="info-box">
            <h4> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306305/email_otd9pj.svg"} alt="pic" className="image_2" /><span>PrincessJewel80@gmail.com</span></h4>
          </div>

          <div className="info-box">
            <h4><img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/phone_cv21sh.svg"} alt="pic" className="image_2" /><span>+2349061312216</span></h4>
            <h4><img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/phone_cv21sh.svg"} alt="pic" className="image_2" /><span>+2347083368633</span></h4>
          </div>

          <div className="info-box">
            <h4> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306319/location_pljare.svg"} alt="pic" className="image_2" /><span>Lagos-Nigeria </span> </h4>
          </div>

          <div className="socials">
            <ul>
              <li><a href="https://linkedin.com/in/princess-jewel-jel-edema"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306321/linkedin_oe1h3e.svg"} alt="pic" className="image_3" /></a></li>
              <li><a href="https://twitter.com/thatebonychic/"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306322/twitter_kl30sw.svg"} alt="pic" className="image_3" /></a></li>
              <li><a href="https://github.com/Princess-Jewel/"> <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306307/github_twjnkw.svg"} alt="pic" className="image_3" /></a></li>
            </ul>
          </div>

        </div>

        <div className="col-md-2">
        <section></section>
        </div>

        <div className="col-md-6">
        <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306331/vector2_ktmhy6.jpg"} alt="pic" className="img-fluid vector_2" />
        </div>
      </div>
    </section>


  </Layout>
  ;

export default Home;