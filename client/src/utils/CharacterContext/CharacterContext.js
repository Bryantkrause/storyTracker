import React from 'react'

const CharacterContext = React.createContext({
  name: '',
  level: '',
  proficiency: '',
  speed: '',
  initiative: '',
  ac: '',
  health: '',
  attackModifiers:{},
  race: '',
  age: '',
  abilityScore: {},
  color: '',
  status: '',
  characters: [],
  deleteCharacter: () => {},
  characterSubmit: () => {},
  inputChange: () => {},
  getCharacter: () => {}
})

export default CharacterContext