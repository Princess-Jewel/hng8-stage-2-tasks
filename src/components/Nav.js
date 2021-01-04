import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => (
    <nav data-spy="affix" data-offset-top="0">
        <ul class="nav justify-content-end bg-light nav_1">
            <li class="nav-item">
            <Link to="/" class="nav-link text-white text1">Home</Link>
            </li>

            <li class="nav-item">
            <Link to="/projects" class="nav-link text-white text1">Projects</Link>
            </li>

            <li class="nav-item">
            <Link to="/about" class="nav-link text-white text1">About</Link>
            </li>

            <li class="nav-item">
            <Link to="/contact" class="nav-link text-white text1">Contact</Link>
            </li>
            

        </ul>
    </nav>
);
export default Nav;


