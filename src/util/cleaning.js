function cleanSpells(array) {
  const alteredSet = array.map((spell) => {
    const remake = {}
    remake.id =  spell.id
    remake.name = spell.name
    remake.incantation = spell.incantation
    remake.effect = spell.effect
    remake.light = spell.light 
    remake.type = spell.type
    return remake
  })
  return alteredSet
}

function cleaningHouse(array){
  const alteredHouse = array.map((house) => {
    const constructedHome = {}
    constructedHome.id = house.id
    constructedHome.animal = house.animal
    constructedHome.commonRoom= house.commonRoom
    constructedHome.founder = house.founder
    constructedHome.ghost = house.ghost
    constructedHome.houseColors = house.houseColours
    constructedHome.heads = house.heads
    constructedHome.name = house.name
    constructedHome.traits = house.traits
    return constructedHome
  })
  return alteredHouse
}


export {cleanSpells, cleaningHouse} 