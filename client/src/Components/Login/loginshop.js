import React, {Component} from 'react';
import Logincompshop from './logincompshop';
import HomeNavbar from './navbar';
class Login extends Component {
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <HomeNavbar />
                <Logincompshop />
            </div>
        );
    }
}


export default Login;