import './css/signup.scss';
import { validateEmail, validatePassword } from './Utils.js';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Paper, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import fire from './fire';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            repeat: '',
            errorMsg: '',
        };
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    handleEmailBlur(event) {
        if (event.target.value && !validateEmail(event.target.value)) {
            this.setState({
                errorMsg: 'Enter Valid E-Mail.',
            });
        } else {
            this.setState({
                errorMsg: '',
            })
        }
    }
    handlePasswordChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handlePasswordBlur(event) {
        if (event.target.value && !validatePassword(event.target.value)) {
            this.setState({
                errorMsg: 'Password must be atleast 6 characters long.',
            });
        } else {
            this.setState({
                errorMsg: '',
            });
        }
    }
    handleSubmit(event){
        if(!validateEmail(this.state.email) && !validatePassword(this.state.pass)
                && document.querySelector('#pass').value === document.querySelector('#repeat').value){
            this.setState({
                errorMsg:'Invalid Credentials',
            });
        }else{
            let data = {'email':this.state.email,'password':this.state.pass,};
            fetch('https://cribbay.herokuapp.com/signup',{
                method:'POST',
                mode:'cors',
                cache:'no-cache',
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                },
                body:JSON.stringify(data),
            }).then((response)=>{
                if(response.ok){
                    alert("Sign Up successful");
                }else{
                    alert("Sign up unsuccessful");
                }
            });
        }
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    render() {
        return (
            <Paper elevation={1} className='signup'>
                <Typography variant="headline">Sign Up</Typography>
                <Typography variant='caption'>{this.state.errorMsg}</Typography>
                <form className='form' style={{ overflow: 'auto' }}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>First Name</InputLabel>
                        <Input id="fname" name="fname" autoComplete="name" autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Last Name</InputLabel>
                        <Input id="lname" name="lname" autoComplete="name" autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Email</InputLabel>
                        <Input id="email" name="email" 
                            onChange={this.handleEmailChange}
                            onBlur={this.handleEmailBlur}
                            value={this.state.email}
                            autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Phone Number</InputLabel>
                        <Input id="phone" name="phone" autoComplete="number" autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Password</InputLabel>
                        <Input id="pass" name="pass" 
                            onChange={this.handlePasswordChange}
                            onBlur={this.handlePasswordBlur}
                            value={this.state.pass}
                            type="password" autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Repeat Password</InputLabel>
                        <Input id="repeat" name="repeat" 
                            onChange={this.handlePasswordChange}
                            onBlur={this.handlePasswordBlur}
                            value={this.state.repeat}
                            type="password" autoFocus />
                    </FormControl>
                    <Button variant="raised" 
                        onClick={this.handleSubmit}
                        style={{ float: 'right' }}>
                        Submit
                    </Button>
                </form>
            </Paper>
        );
    }

}

export default hot(module)(SignUp);