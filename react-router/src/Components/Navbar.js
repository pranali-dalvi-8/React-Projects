import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <div>
           
            <nav>
                {/* <NavLink to="/"><li>Home</li></NavLink> */}
                <a  href="/"><li>Home</li></a>
                <a href="/about"> <li>About</li></a>
                <a href="/contact"> <li>Contact</li></a>
                <a href="/user"> <li>User</li></a>
            </nav>


              {/* <Home/>
              <Contact/>
              <About/> */}
        </div>
    );
}

export default Navbar;