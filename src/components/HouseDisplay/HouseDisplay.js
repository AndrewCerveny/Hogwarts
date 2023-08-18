import React from "react";
import HouseCard from "../HouseTest/HouseCard";
import './HouseDisplay.css'

const HouseDisplay = ({houses}) => {
  const houseInfo = houses.map((house) => 
    
    <section key={house.id} className='card-cont'>
      <HouseCard
        animal={house.animal}
        commonRoom={house.commonRoom}
        founder={house.founder}
        ghost={house.ghost}
        heads={house.heads}
        houseColors={house.houseColors}
        name = {house.name}
        traits={house.traits}
      />
    </section>
  )
  return(
    <section className="housing-section">
      {houseInfo}
    </section>
  )
}
export default HouseDisplay;