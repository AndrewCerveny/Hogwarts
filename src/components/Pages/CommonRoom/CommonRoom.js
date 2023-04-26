import React from "react";
import pictures from '../../../images/photos.gif'
import './CommonRoom.css'

const CommonRoom = () => {


  return(
    <section className="common-area">
      <img src={pictures} alt='moving photos on a wall' className='moving-pics' />
      <section className="welcome-user"> Welcome to Hogwarts <span> insert name here</span></section>
      <section className="agenda"> Decide today's agenda </section>
      <section className="users-choice">
          <div className="class-wrapper">
          <h2> Go to class </h2>
          </div>
          <div className="requirement-wrapper">
            <h2> Go To Room of Requirement</h2>
          </div>
      </section>
   </section>

  )
}
export default CommonRoom