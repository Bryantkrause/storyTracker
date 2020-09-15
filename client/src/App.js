import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter as Router,
   Switch,
   Route } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'
import CharacterContext from './utils/UserContext'


function App() {
  const [theState, setTheState] = useState({
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
    character: '',
    characters: []
  })
  theState.handleInputChange = (event) => {
    setUserState({ ...theState, [event.target.name]: event.target.value })
  }

  
  // theState.setTheState = (value) => {
  //   setTheState({ ...theState, cityState: value })
  // }

  return (
<CharacterContext.Provider value={theState}>
<Router>
<Switch>
<Route exact path="/">
<CharacterPage/>
</Route>

</Switch>
</Router>
</CharacterContext.Provider>

  );
}

export default App;
