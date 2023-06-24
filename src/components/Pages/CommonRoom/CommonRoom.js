import React from "react";
import ceilTop from '../../../images/newStudent.gif'
import './CommonRoom.css'
import { Link } from "react-router-dom";

const CommonRoom = ({user}) => {


  return(
    <section className="common-area">
      <img src={ceilTop} alt='moving photos on a wall' className='moving-pics' />
      <div className="intro-style">
        <section className="welcome-user"> Welcome, <span>{user}</span> back to Hogwarts </section>
        <p className="instruction"> As a new recruit to Dumbledore's Army, you get to decide how to spend your day. </p>
      </div>
      <section className="users-choice">
          <div className="class-wrapper">
         <Link to='/decision'> <h2> Go to class </h2></Link> 
          </div>
          <div className="requirement-wrapper">
          <Link to='/requirements'> <h2> Go To Room of Requirement</h2></Link> 
          </div>
      </section>
   </section>

  )
}
export default CommonRoom