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

const handleSubmit = (demand, description, e) => {
  e.preventDefault()
  const request = {
      id:Date.now(), 
      wish:demand,
      description: description
  }
  handler(request)
  clearForm(demand, description)
}
const clearForm = () => {
  setDemand('') 
  setDescription('')
  return 
}
  return(
  <form className="req-form">
    <input placeholder="make a wish" name="wish" value={demand} className="r-input" onChange={(e)=> handleDemand(e)}/>
    <input placeholder='description' name='description'value={description} className="r-input" onChange={(e) => handleDemand(e)}/>
    <button className="sub" onClick={(e) => handleSubmit(demand, description, e)}>Submit</button>
  </form>
  )
}
export default RequirementForm;