import React from "react";

const HouseCard = ({animal, commonRoom,founder,ghost,heads,houseColors,name,traits}) => {

const allNames = heads.map((head) => {
  const person = {}
    person.firstName = head.firstName
    person.lastName = head.lastName 
    return person
 })

 const person1Fn =  allNames[0].firstName
 const person1Ln = allNames[0].lastName
 const person2Fn = allNames[1].firstName
 const person2Ln = allNames[1].lastName

 const houseTraits = traits.map((trait) => trait.name)
 const makeString = houseTraits.join(', ')
 
 



  return(
  <section className="house-card">
    <h2>  Name: {name}</h2>
    <h3> Animal: {animal}</h3>
    <h3> Common Room: {commonRoom}</h3>
    <h3> Founder: {founder}</h3>
    <h3> Head of Houses: 
      <p> {person1Fn}, {person1Ln}</p>
      <p>{person2Fn}, {person2Ln}</p>
    </h3>
    <h3> Ghost: {ghost}</h3>
    <h3>  Colors:{houseColors}</h3>
    <h2> Traits</h2>
    <p>{makeString}</p>
  </section>
  )
}
export default HouseCard;

