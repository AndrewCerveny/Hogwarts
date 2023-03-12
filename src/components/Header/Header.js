import React from "react";
import './Header.css'

//                        ISSUES:
// Doesn't display on other pages due to font-color being white
// change "link-wrapper" container <div>'s to <Link>'s for functionality
function Header() {
  return(
    <nav className="nav-area">
        <div className="title-wrapper">
            <h1>Dumbledore's Army</h1>
        </div>

        <div className="link-wrapper">
            <div className="nav-link">Home</div>
            <div className="nav-link">Spells</div>
            <div className="nav-link">Houses</div>
            <div className="nav-link">Favorites</div>
        </div>
    </nav>
  )
}
export default Header