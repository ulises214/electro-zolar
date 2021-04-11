import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
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
