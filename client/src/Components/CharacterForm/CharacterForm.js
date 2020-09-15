import React, {useContext} from 'react'
import CharacterContext from '../../utils/CharacterContext'


const CharForm = () => {

const {character, handleAddChar, handleInputChange} = useContext(CharacterContext)

return (
    <form>
        <p>
            <label htmlFor="char"> Character</label>
            <input type="text" name="char" id="character" value= {character}onChange={handleInputChange}/>
        </p>
        <p>
            <button  onClick={handleAddChar}> Add Character</button>
        </p>

    </form>
)

}

export default CharForm