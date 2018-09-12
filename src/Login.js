import './css/signup.scss'
import React , {Component} from 'react';
import { Paper, Typography, FormControl, InputLabel, Input, Button} from '@material-ui/core';
import { hot } from 'react-hot-loader';

class Login extends Component{
    render(){
        return(
            <Paper elevation={1} className='signin'>
                <Typography variant='headline'>Sign In</Typography>
                <form style={{overflow:'auto'}}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>E-Mail</InputLabel>
                        <Input id='email' name='email' autoComplete='name' autoFocus/>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel>Password</InputLabel>
                        <Input id='password' name='password' autoComplete='password' autoFocus/>
                    </FormControl>
                    <Button type='submit' variant='raised' fullWidth margin='normal'
                            style={{marginTop:'1em'}}>
                        Login
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default hot(module)(Login);