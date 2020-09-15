import React, {useContext} from 'react'
import CharacterContext from '../../utils/CharacterContext'

const Characters = () => {

const {characters, handleRemoveChar, handleToggleChar} = useContext(CharacterContext)

return (
  <div>
    {
      characters.length ? characters.map(character => (
        <p>
        <span
        style={{ color: characters.isDone ? 'green' : 'gray'}}
        onclick={() => handleToggleChar(character._id,character.isDone)}>
      {character.name}
        </span>
          <button onClick={() => handleRemoveChar
          (character.id)}>X</button>

        </p>
      )) : null
      }


  </div>
)

}

export default Characters