import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppBar />
      <article>
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
      </article>
      <Footer />
    </Router>
  );
}

export default App;
