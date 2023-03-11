import React from "react";
import './Header.css'

function Header() {
  return(
    <nav className="nav-area">
        <div className="title-wrapper">
            <h1>Dumbledore's Army</h1>
        </div>

        <div className="link-wrapper">
            <div className="nav-link">Spells</div>
            <div className="nav-link">Houses</div>
            <div className="nav-link">Placeholder</div>
            <div className="nav-link">Placeholder</div>
        </div>
    </nav>
  )
}
export default Header