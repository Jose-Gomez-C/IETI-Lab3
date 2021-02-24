import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { Login } from './components/Login';
import { SignUp } from './Components/SignUp'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/"
          component={Login} exact> </Route>
          <Route path="/signup"
          component={SignUp} exact> </Route>
          <Route path="/logout" render={()=>{
            localStorage.clear();
            return <Redirect to="/"></Redirect>;
          }} exact />
      </Switch> 
    </Router>
  );
}
export default App;
