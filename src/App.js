import './App.css';
import { BrowserRouter as  Router,  Switch,  Route,  Link } from 'react-router-dom';
import Home from './components/home';
import Armatuplan from './components/armatuplan';
import Gracias from './components/gracias';
import CotzState from './context/cotz/cotz_state';
function App() {
  return (
    <div className="container">
      <CotzState>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>    
          </Route>
          <Route path="/armatuplan">
            <Armatuplan/>
          </Route>
          <Route path="/gracias">
            <Gracias/>
          </Route>
        </Switch>
      </Router>
      </CotzState>
    </div>
  );


}

export default App;
