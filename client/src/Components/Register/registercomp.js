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

class Registercomp extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name: '',
            last_name: '',
            email: '',
            password1: '',
            password2: '',
            show1: false,
            error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            first_name: this.state.first_name.toLowerCase(),
            last_name: this.state.last_name.toLowerCase(),
            email: this.state.email.toLowerCase(),
            password1: this.state.password1,
            password2: this.state.password2,
          };

        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then( res => {
            if(res.status === 200) {
                history.push('/Login');
            }
            else if(res.status === 401) {
                this.setState({show1:true, error: 'invalid credentials'});
            }
            else {
                this.setState({show1:true, error: 'password should match'});
            }

        }).catch( err => {
            console.log(err);
        });
    };
    render() {
        return (
            <div>

                <section className="container-fluid" style={sectionStyle}>
                    <div style={{height:'100px' }}> 
                    
                    </div>

                    <Button size="large" disabled>
                	<h2 style={{fontFamily:'Courier New', textAlign:'center', color:'#031dad', fontWeight:'bold'}}>
                    	Welcome to Shopping Cart.
                	</h2>
                    </Button>

                    <div style={{height:'50px' }}> 
                    
                    </div>

                    {this.state.show1 && <div style={{fontSize:'50px', color:'red'}}> {this.state.error} </div>}

                    <div>
                        <form onSubmit={this.clickHandler}>
                            
                            
                            <TextField
                                id="first"
                                label="first Name"
                                variant="outlined"
                                autoFocus
                                required
                                onChange = {(event, newValue) => this.setState({first_name:newValue})}
                            />

                            <div style={{height:'30px' }}> 

                            </div>

                            <TextField
                                id="last"
                                label="last Name"
                                variant="outlined"
                                autoFocus
                                required
                                onChange = {(event, newValue) => this.setState({last_name:newValue})}
                            />

                            <div style={{height:'30px' }}> 

                            </div>

                            <TextField
                                id="email"
                                label="email"
                                variant="outlined"
                                autoFocus
                                required
                                onChange = {(event, newValue) => this.setState({email:newValue})}
                            />
                            <div style={{height:'30px' }}> 

                            </div>

                            <TextField
                                id="password1"
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange = {(event, newValue) => this.setState({password1:newValue})}
                            />

                            <div style={{height:'30px' }}> 
                    
                            </div>
                            <TextField
                                id="password2"
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                minLength="8"
                                maxLength="12"
                                onChange = {(event, newValue) => this.setState({password2:newValue})}
                            />

                            <div style={{height:'30px' }}> 
                    
                            </div>
                            <Button color="primary" size="large" variant="contained" type="submit">
                    	        Register
                            </Button>
                        </form>

                        <div style={{height:'70px' }}> 
                    
                        </div>

                        <br />
                        <Link to='/Login'>
                            <Button size="large" variant="contained" color="secondary">
                                <h2 style={{fontFamily:'Courier New', textAlign:'center', fontWeight:'bold'}}>
                                    Already Registered, Login Now
                                </h2>
                            </Button>
                        </Link>

                        <div style={{height:'100px' }}> 
                    
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Registercomp;