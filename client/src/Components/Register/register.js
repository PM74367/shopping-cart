import React, { Component } from 'react';
import HomeNavbar from './navbar';
import Registercomp from './registercomp';

class Register extends Component{
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <HomeNavbar />
                <Registercomp />
            </div>
        );           
    }
}
export default Register;