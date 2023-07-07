import React from "react";
import './HouseForm.css'
import { useState, useEffect } from "react";



const HouseForm = ({houses}) => {
 const [chosenTrait, setChosenTrait] = useState(null)
 const [formInfo, setFormInfo] = useState(null)


const getFormInfo = (houses) => {
  const getHouseDetails = houses.map((house) => {
   const houseCont = {}
   houseCont.house = house.name 
   houseCont.traits = house.traits
   houseCont.id = house.id
   return houseCont
  })
  setFormInfo(getHouseDetails)
  return getHouseDetails
}

useEffect(()=> {
  getFormInfo(houses)
},[])

const createList = (arrayOfHouses) => {
 const getTraitName =  arrayOfHouses.reduce((arr, house) => {  
   const getDeeperTraits = house.traits.map(trait => {
    const houseFacts = 
    { traits:trait.name, 
      houseName:house.name,
      key:Date.now()
    }
    return houseFacts
   })
   arr.push(getDeeperTraits)
  return arr
 },[])
 console.log("DABOOMBA", getTraitName);
 return getTraitName
}


  return(<section className="house-form-area">
    <section className="sorting-hat"> 
      <img src="" alt=""/>
    </section>
    <form className="house-test">
      <label> What describes you?  </label>
        {/* {createList(houses)}  */}
        <button type="submit"> Submit </button>
    </form>

  </section>
  )
}
export default HouseForm;

