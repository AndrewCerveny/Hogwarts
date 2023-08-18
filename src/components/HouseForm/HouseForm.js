import React from "react";
import './HouseForm.css'
import { useState, useEffect } from "react";



const HouseForm = ({houseData}) => {
  


  



  
 


 
 
 
 
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

//  const createList = (houseInfo) => {
//   console.log(houseInfo);
// //   const getTraitName =  arrayOfHouses.reduce((arr, house) => {  
// //     const getDeeperTraits = house.traits.map(trait => {
// //       const houseFacts = 
// //       { traits:trait.name, 
// //         houseName:house.name,
// //         key:Date.now()
// //       }
// //       return houseFacts
// //     })
// //     arr.push(getDeeperTraits)
// //     return arr
// //   },[])
// //   setFormInfo(getTraitName)
// //  return getTraitName
// }
