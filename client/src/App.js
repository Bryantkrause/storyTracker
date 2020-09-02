import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'

function App(props) {
  return (
<Container>
<BrowserRouter>
<Switch>
<Route exact path="/" component={CharacterPage} {...props} />
</Switch>
</BrowserRouter>
</Container>


  );
}

export default App;
