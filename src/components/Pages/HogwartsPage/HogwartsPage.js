import React from "react";
import './HogwartsPage.css'
import hogwarts from '../../../images/Hogwarts.webp'
import { useState } from "react";
import { Link } from "react-router-dom";

const HogwartsPage = () => {
  const [userName , setUserName] = useState('')

  return(
  <section className="hogwarts-area">
    <img className="hogwarts-pic" src={hogwarts} alt='picture of hogwarts castle'/>
    <section className="intro-wrapper">
        <h2> I </h2>
        <input
          name='userName'
          placeholder="Name here"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p> Solemnly swear that I am up to no good </p>
    </section>
      <Link to="/commons">
        <div className="hogwarts-sub" >
          <button className="hogwart-enter"> Enter </button>
        </div>
      </Link>
  </section>)

  

}
export default HogwartsPage
