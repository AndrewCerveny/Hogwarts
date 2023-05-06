import React from "react";
import './SingleWish.css'


const SingleWish = ({id, wish,description}) => {

  return(
    <section>
      <h2>{wish}</h2>
      <h3>{description}</h3>
      <button>🗑️</button>
    </section>
  )

}
export default SingleWish;