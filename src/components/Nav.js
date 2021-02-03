import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => (
    <div>
    <nav data-spy="affix" data-offset-top="0" className="main-nav">
      
        <ul className="nav justify-content-end bg-light nav_1">
            <li className="nav-item">
            <Link to="/" className="nav-link text-white text1">Home</Link>
            </li>

            <li className="nav-item">
            <Link to="/projects" className="nav-link text-white text1">Projects</Link>
            </li>

            <li className="nav-item">
            <Link to="/about" className="nav-link text-white text1">About</Link>
            </li>

            <li className="nav-item">
            <Link to="/contact" className="nav-link text-white text1">Contact</Link>
            </li>
            

        </ul>
    </nav>

<nav class="navbar navbar-expand-lg navbar-light nav_2">
<Link to="/" className="navbar-brand text-white">Princess</Link>
{/* <a class="navbar-brand text-white" href="#">Princess</a> */}
<button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
   
    <li className="nav-item  active">
            <Link to="/" className="nav-link text-white">Home</Link>
            </li>
    <li className="nav-item">
            <Link to="/projects" className="nav-link text-white">Projects</Link>
            </li>
    <li className="nav-item">
            <Link to="/about" className="nav-link text-white">About</Link>
            </li>
    <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>
            

  </ul>
</div>
</nav>
</div>

);
export default Nav;


