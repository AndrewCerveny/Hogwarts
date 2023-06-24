import React from "react";
import { useState } from "react";
import './RequirementForm.css'

const RequirementForm = ({handler}) => {
const [demand , setDemand] = useState('')
const [description, setDescription] = useState('')

const handleDemand = (e) => {
  const {name, value} = e.target
  name === "wish" ? setDemand(value) : setDescription(value)
}
  return(
  <form className="req-form">
    <input placeholder="make a wish" name="wish" value={demand} className="r-input" onChange={(e)=> handleDemand(e)}/>
    <input placeholder='description' name='description'value={description} className="r-input" onChange={(e) => handleDemand(e)}/>
    <button className="sub">Submit</button>
  </form>
  )
}
export default RequirementForm;