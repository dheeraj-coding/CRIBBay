import './css/signup.scss';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import { Paper, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';


class SignUp extends Component {
    render(){
        return(
            <Paper elevation={1} className='signup'>
                <Typography variant="headline">Sign Up</Typography>
                <form className='form' style={{overflow:'auto'}}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>First Name</InputLabel>
                        <Input id="fname" name="fname" autoComplete="name" autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Last Name</InputLabel>
                        <Input id="lname" name="lname" autoComplete="name" autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Email</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Phone Number</InputLabel>
                        <Input id="phone" name="phone" autoComplete="number" autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Password</InputLabel>
                        <Input id="pass" name="pass" type="password" autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Repeat Password</InputLabel>
                        <Input id="repeat-pass" name="repeat-pass" type="password" autoFocus/>
                    </FormControl>
                    <Button type="submit" variant="raised" style={{float:'right'}}>
                        Submit
                    </Button>
                </form>
            </Paper>
        );
    }

}

export default hot(module)(SignUp);