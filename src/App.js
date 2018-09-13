import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, Drawer,List,ListItem,ListItemText } from '@material-ui/core';
import {hot} from 'react-hot-loader';
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBw0sjgahg2TOnLsnKwVplktXTlc4PPYLw",
  authDomain: "cribbay.firebaseapp.com",
  databaseURL: "https://cribbay.firebaseio.com",
  projectId: "cribbay",
  storageBucket: "cribbay.appspot.com",
  messagingSenderId: "837872881114"
};
firebase.initializeApp(config);
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open:false,
      signup:false,
      signin:false,
    };
    this.toggleDrawer=this.toggleDrawer.bind(this);
    this.toggleSignup=this.toggleSignup.bind(this);
    this.toggleSignin=this.toggleSignin.bind(this);
  }
  toggleDrawer(event){
    this.setState((prevState)=>{
      return {open:!prevState.open};
    });
  }
  toggleSignup(event){
    this.setState((prevState)=>{
      return {signup:true,signin:false};
    });
  }
  toggleSignin(event){
    this.setState((prevState)=>{
      return {signin:true,signup:false};
    });
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <List component="nav">
            <ListItem onClick={this.toggleSignup} button>
              <ListItemText primary="Signup"/>
            </ListItem>
            <ListItem onClick={this.toggleSignin} button>
              <ListItemText primary="Login"/>
            </ListItem>
          </List>
        </Drawer>
        {(this.state.signup)? <Signup /> :null}
        {(this.state.signin)? <Login /> :null} 
      </div>
    );
  }
}
export default hot(module)(App);
