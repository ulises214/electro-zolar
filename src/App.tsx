import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path='/'>
          pito1
        </Route>
        <Route exact path='/instalaciones'>
          pito2
        </Route>
        <Route exact path='/servicio'>
          pito3
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
