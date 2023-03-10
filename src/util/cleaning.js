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

export default cleanSpells