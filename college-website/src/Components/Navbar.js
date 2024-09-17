import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>

                
                 <li><a href="/"> Home</a></li>
                 <li><a href="/about"> About</a></li>
                 <li><a href="/placements"> Placements</a></li>
                 <li><a href="/campus"> Campus</a></li> 
                 
             
{/* 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/campus">Campus</Link>
            <Link to="/placements">Placements</Link>
 */}


            </ul>
        </nav>
    )
}

export default Navbar;