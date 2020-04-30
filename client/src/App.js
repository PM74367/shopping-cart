import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history';

import MainPage from './Components/Mainpage/mainPage.js';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                        <Route exact path='/' component={MainPage} />
                </Switch>
            </Router>
        );
    }
}


export default App;
