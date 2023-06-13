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
          <Link className='link' to={'/'}><div className="nav-link">Home</div></Link>  
          <Link className='link' to={'/commons'}> <div className="nav-link">Commons</div></Link>
          <Link className='link' to={'/decision'}> <div className="nav-link">Agenda</div></Link>
          <Link  className='link'to={'/spellHub'}><div className="nav-link">Spells</div></Link>
          <Link className='link' to={'/houses'}><div className="nav-link"> Houses</div></Link>
          <Link className='link' to={'/requirements'}><div className="nav-link"> Requirement</div></Link>       
        </div>
    </nav>
  )
}
export default Navbar