import React, { useState, useEffect } from "react";
import RequirementForm from "../../RequirementForm/RequirementForm";
import './Requirement.css'
import WishArea from "../../WishArea/WishArea";

const Requirement = () => {
  const [wishes, setWishes] = useState([
    {id:1, wish:'Dummies For Practice', description: 'Imaginary Enemies'},
    {id:2, wish:'Prefect Badges', description: 'To Sneak The Halls'},
    {id:3, wish:'Boggarts', description: 'Creature Transforms Into Worst Fears '},
    {id:4, wish:'Pixies', description: 'Target Practice'}
  ])
  
  
  const handleRequest = (request) => {
    const updateWishes = setWishes([...wishes, request])
    return updateWishes
  }
  const removeWish = (id) => {
    const allButDeleted = wishes.filter((wish) => wish.id !== id)
    setWishes(allButDeleted)
    return allButDeleted
  }
  
  useEffect(()=> {

  },[wishes])


  
  return(
    <section className="requirement-body">
      <RequirementForm  handler={handleRequest}/>
      {!wishes.length && <h2 className="warning"> What do you need / desire? </h2>}
      <WishArea wishes={wishes} remove={removeWish}/>
    </section>
  )


}
export default Requirement;