import React from "react";
import './SingleWish.css'


const SingleWish = ({id, wish,description}) => {

  return(
    <section className="wish-card">
      <h2>{wish}</h2>
      <h3>{description}</h3>
      <button className="trash">❌</button>
    </section>
  )

}
export default SingleWish;