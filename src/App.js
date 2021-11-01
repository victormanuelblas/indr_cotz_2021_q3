import './App.css';
import { BrowserRouter as  Router,  Switch,  Route,  Link } from 'react-router-dom';
import Home from './components/home';
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
          <Route path="/carinfo">
            
          </Route>
        </Switch>
      </Router>
      </CotzState>
    </div>
  );


}

export default App;
