import React from "react";
import { useState } from "react";
import './RequirementForm.css'

const RequirementForm = () => {
const [demand , setDemand] = useState('')
const [ description, setDescription] = useState('')

  return(
  <form className="req-form">
    <input placeholder="make a wish" name="wish" className="r-input" />
    <input placeholder='description' name='description'className="r-input"/>
    <input type='submit' placeholder="submit"className="r-input"/>
  </form>
  )
}
export default RequirementForm;