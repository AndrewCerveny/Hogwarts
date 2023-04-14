import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SpellCard from "../../SpellCard/SpellCard";
import "../../App/App"
import diagonAlley from  '../../../images/homepage-background.jpg'
import './homepage.css'


function Homepage({handleName}) {
    const [userName, setUserName] = useState('')

    return(
        <section className="home-area">
            <img  className='d-alley'src={diagonAlley} alt={'a picture of diagonAlley'}/>
            
            <Link className="hog-link" to={'./hogwarts'}>
                <div className="enter-site">
                   <h2> Ride The Hogwarts Express </h2>  
                </div>
            </Link>
            
        </section>
    )
}
export default Homepage;