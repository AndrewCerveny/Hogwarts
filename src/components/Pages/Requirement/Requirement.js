import React, { useState } from "react";
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

  return(
    <section className="requirement-body">
      <RequirementForm/>
      <WishArea wishes={wishes}/>
    </section>
  )


}
export default Requirement;