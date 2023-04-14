import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

//                        ISSUES:
// Doesn't display on other pages due to font-color being white
// change "link-wrapper" container <div>'s to <Link>'s for functionality
function Navbar() {
  return(
    <nav className="nav-area">
        <div className="title-wrapper">
            <h1>Dumbledore's Army</h1>
        </div>

        <div className="link-wrapper">
          <Link to={'/'}><div className="nav-link">Home</div></Link>  
           <Link to={'/display'}> <div className="nav-link">Spells</div></Link>
          <Link to={'/houses'}> <div className="nav-link">Houses</div></Link>
           <Link to={'/decision'}><div className="nav-link">Decision</div></Link> 
            <div className="nav-link">Favorites</div>
        </div>
    </nav>
  )
}
export default Navbar