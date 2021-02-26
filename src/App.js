import React, {Component} from 'react';
import './App.css';
import {Login} from "./Components/Login";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Drawer from './Components/Drawer';
import { Redirect } from 'react-router-dom';
import { SignUp } from './Components/SignUp';



class App extends Component {

    constructor(props) {
        super(props); 
    
    }

    render() {

        return (

            <Router>
                <Switch>
                    <Route path="/"
                    component={Login} exact> </Route>
                    
                    <Route path="/signup"
                    component={SignUp} exact> </Route>

                    <Route path="/todo"
                        component={Drawer} exact> </Route>

                    <Route path="/logout" render={()=>{
                        localStorage.clear();
                        return <Redirect to="/"></Redirect>;
                        }} exact />
                </Switch>
            
            </Router>
        );

    }
}
export default App;
