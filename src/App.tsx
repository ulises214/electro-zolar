import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

const Routes = () => {
  return (
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
  );
};

function App() {
  return (
    <Router>
      <AppBar />
      <article>
        <Routes />
      </article>
      <Footer />
    </Router>
  );
}

export default App;
