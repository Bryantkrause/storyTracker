import React from 'react'
import axios from 'axios'
import CharacterContext from '../../utils/CharacterContext'
import CharacterDisplay from '../../Components/CharacterDisplay'

const CharacterPage = _ => {
const [charState, setCharState] = React.useState ({    
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

// componentDidMount() { // When the page loads grab the data from the database and update the characters array
//     axios.get('/characters')
//       .then( ({data}) => this.setState({ characters: data }))
//   }


// render () {
    return (
      <CharacterContext.Provider value={charState}>
          <CharacterDisplay />
      </CharacterContext.Provider>
    )
  }



export default CharacterPage