import React, {Component} from 'react';
import Logincomp from './logincomp';
import HomeNavbar from './navbar';
class Login extends Component {
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <HomeNavbar />
                <Logincomp />
            </div>
        );
    }
}


export default Login;