import React, { useState } from "react";
import RequirementForm from "../../RequirementForm/RequirementForm";
import './Requirement.css'
import WishArea from "../../WishArea/WishArea";

const Requirement = () => {
  const [wishes, setWishes] = useState([
    {id:1, wish:'dummies for practice', description: 'imaginary enemies'},
    {id:2, wish:'Prefect badges', description: 'Extra badges to sneak around halls'},
    {id:3, wish:'Boggarts', description: 'creature transforms into fears '},
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