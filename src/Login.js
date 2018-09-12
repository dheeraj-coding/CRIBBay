import './css/signup.scss'
import React, { Component } from 'react';
import { Paper, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import {validateEmail,validatePassword} from './Utils.js';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            errorMsg: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    handleEmailBlur(event){
        if(event.target.value && !validateEmail(event.target.value)){
            this.setState({
                errorMsg:'Enter Valid E-Mail.',
            });
        }else{
            this.setState({
                errorMsg:'',
            })
        }
    }
    handlePasswordChange(event){
        this.setState({
            pass:event.target.value,
        });
    }
    handlePasswordBlur(event){
        if(event.target.value && !validatePassword(event.target.value)){
            this.setState({
                errorMsg:'Password must be atleast 6 characters long.',
            });
        }else{
            this.setState({
                errorMsg:'',
            });
        }
    }
    render() {
        return (
            <Paper elevation={1} className='signin'>
                <Typography variant='headline'>Sign In</Typography>
                <Typography variant='caption' style={{ color: 'red' }}>{this.state.errorMsg}</Typography>
                <form style={{ overflow: 'auto' }}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>E-Mail</InputLabel>
                        <Input id='email' name='email' onChange={this.handleEmailChange} onBlur={this.handleEmailBlur}
                            value={this.state.email} autoComplete='name' autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Password</InputLabel>
                        <Input type='password' id='password' name='password' onChange={this.handlePasswordChange} onBlur={this.handlePasswordBlur} 
                            value = {this.state.pass} autoComplete='password' autoFocus />
                    </FormControl>
                    <Button type='submit' variant='raised' fullWidth margin='normal'
                        style={{ marginTop: '1em' }}>
                        Login
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default hot(module)(Login);