import { useState, } from "react";

function Form(props){
  const [selectedCategory, setSelectedCategory] = useState ("")

 
const getTypes = () => {
  const spellHolder = []
  
  props.spells.forEach((spell) => {
   if(!spellHolder.includes(spell.type)){
    spellHolder.push(spell.type)
   }
 
  })
  return spellHolder.map((type, index) =>
    <option key={index} value={type}> {type} </option>
   
  )
}
 const handleClear = (e) => {
  e.preventDefault()
  setSelectedCategory("")
  props.clearOut()
 }



 return(
  <form className="form">
    <section className="filter-area">
     <select onChange={(e) => setSelectedCategory(e.target.value)}>
      {getTypes()}
      </select>
      <button onClick={(e) => props.selectClick(e ,selectedCategory)}>Submit</button>
      <button onClick={(e) => handleClear(e)}>Clear</button>
    </section>
  </form>
 )
}
export default Form;