import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return(
    <nav className="nav-area">
        <div className="title-wrapper">
            <h1>Dumbledore's Army</h1>
        </div>

        <div className="link-wrapper">
          <Link to={'/'}><div className="nav-link">Home</div></Link>  
          <Link to={'/commons'}> <div className="nav-link">Commons</div></Link>
          <Link to={'/decision'}> <div className="nav-link">Agenda</div></Link>
          <Link to={'/spellHub'}><div className="nav-link">Spells</div></Link>
          <Link to={'/houses'}><div className="nav-link"> Houses</div></Link>
          <Link to={'/requirements'}><div className="nav-link"> Requirement</div></Link>       
        </div>
    </nav>
  )
}
export default Navbar