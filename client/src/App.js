import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history';

import MainPage from './Components/Mainpage/mainPage.js';
import Login from './Components/Login/login.js';
import Loginshop from './Components/Login/loginshop.js'
import Register from './Components/Register/register.js';
import Registershop from './Components/Register/registershop.js';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/Loginshop' component={Loginshop} />
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/Registershop' component={Registershop} />
                </Switch>
            </Router>
        );
    }
}


export default App;
