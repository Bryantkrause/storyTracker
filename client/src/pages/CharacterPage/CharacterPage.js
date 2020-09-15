import React, {useState, useEffect} from 'react'
import CharacterContext from '../../utils/CharacterContext'
import API from '../../utils/API'
import CharacterDisplay from '../../Components/CharacterDisplay'
import CharacterForm from '../../Components/CharacterForm'

const {getCharacters, addCharacter, updateCharacters, deleteCharacters } = API

const CharacterPage = () => {

const [charState, setCharState] = useState({
  character: '',
  characters: []
})

charState.handleInputChange = (event) => {
  setCharState({...charState, [event.target.name]:
    event.target.value})
}

charState.handleAddChar = (event) => {
  event.preventDefault()
  addCharacter({ text: charState.character, isDone: false})
  .then(({data: character}) =>{
    let characters = JSON.parse(JSON.stringify
      (charState.characters))
      characters.push(character)
      setCharState({...charState, characters})
  })
  .catch(e => console.error(e))
}

useEffect(() => {
  getCharacters()
  .then(({data: characters }) => {
    setCharState({ ...charState, characters})
  })
.catch(e => console.error(e))
})

return (
<CharacterContext.Provider value={charState}>
<CharacterForm/>
<CharacterDisplay/>
</CharacterContext.Provider>

)


}

export default CharacterPage