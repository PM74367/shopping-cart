import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history';

import MainPage from './Components/Mainpage/mainPage.js';
import Login from './Components/Login/login.js';
import Register from './Components/Register/register.js';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/Register' component={Register} />
                </Switch>
            </Router>
        );
    }
}


export default App;
