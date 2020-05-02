import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import history from '../../history';
const Background = require("../images/particles3.jpg");

var sectionStyle = {
	className: "img-fluid",
	backgroundImage: `url(${Background})`,
	backgroundRepeat:'no-repeat',
	backgroundSize:'100% 100%'
};

class Logincomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show1: false,
            error: ''
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    renderRedirect = () => {
            history.push(`/Form/:${this.state.username}`);
    }

    clickHandler = (event) => {
        event.preventDefault();
        this.setState({ show2: false, show1: false });
        const User = {
            username: this.state.username.toLowerCase(),
            password: this.state.password
        };

        fetch("http://localhost:5000/loginshop", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(User)
        }).then(res => {
            if(res.status === 200) {
                this.renderRedirect();
            }
            else{
                this.setState({ show1: true, error: 'Credentials are invalid' });
            }
        })
        
    };
    
    render() {
        return (
            <div>

                <section className="container-fluid" style={sectionStyle}>
                    <div style={{height:'100px' }}> 
                    
                    </div>

                    <Button size="large" disabled>
                	<h2 style={{fontFamily:'Courier New', textAlign:'center', color:'#031dad', fontWeight:'bold'}}>
                    	So Glad You're Back !
                	</h2>
                    </Button>

                    <div style={{height:'50px' }}> 
                    
                    </div>

                    {this.state.show1 && <div style={{ fontSize: '50px', color: 'red' }}> {this.state.error} </div>}

                    <div>
                        <form onSubmit={this.clickHandler}>
                            
                            
                            <TextField
                                id="username"
                                label="email"
                                variant="outlined"
                                autoFocus
                                required
                                onChange={(event, newValue) => this.setState({ username: newValue, show1: false })}
                            />
                            <div style={{height:'30px' }}> 
                    
                            </div>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange={(event, newValue) => this.setState({ password: newValue, show2: false })}
                            />
                            <br />
                            <div style={{height:'25px' }}> 
                    
                            </div>
                            <Button color="primary" size="large" variant="contained" type="submit">
                    	        Login
                            </Button>
                        </form>

                        <div style={{height:'70px' }}> 
                    
                        </div>

                        <br />
                        <Link to='/Login'>
                            <Button size="large" variant="contained" color="secondary">
                                <h2 style={{fontFamily:'Courier New', textAlign:'center', fontWeight:'bold'}}>
                                    Login As Customer
                                </h2>
                            </Button>
                        </Link>

                        <div style={{height:'30px' }}> 
                    
                        </div>

                        <div style={{height:'100px' }}> 
                    
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Logincomp;