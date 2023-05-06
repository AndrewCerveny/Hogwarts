import React from "react";
import pictures from '../../../images/photos.gif'
import './CommonRoom.css'
import { Link } from "react-router-dom";

const CommonRoom = ({user}) => {


  return(
    <section className="common-area">
      <img src={pictures} alt='moving photos on a wall' className='moving-pics' />
      <section className="welcome-user"> Welcome, <span>{user}</span> to Hogwarts </section>
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