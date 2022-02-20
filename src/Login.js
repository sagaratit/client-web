import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 handleClick(event){
  var apiBaseUrl = "http://127.0.0.1:8080/api/";
  var self = this;
  console.log("here 1");
  var payload={
  "email":this.state.username,
  "password":this.state.password
  }
  console.log("here");

  // const express = require("express");
  // const app = express();
  // const cors = require("cors");
  // app.use(
  //   cors(
  //     {
  //       origin:"http://localhost:8080"
  //     }
  //   )
  // )
  //axios.defaults.headers.axios.defaults.headers.post['mode'] = 'no-cors'; 
  // await fetch(apiBaseUrl+'login', {
//   headers: { "Content-Type": "application/json; charset=utf-8" },
//   method: 'POST',
//   body: JSON.stringify(payload)
// })
console.log("you are here 1");
  axios.post(apiBaseUrl+'login', payload,{
		mode: 'no-cors',
		crossdomain: true,
	})
  .then(function (response) {
    console.log("you are here");
  console.log(response);
  if(response.data.code === 200){
  console.log("Login successfull");
  // var uploadScreen=[];
  // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  // }
  // else if(response.data.code === 204){
  console.log("Username password do not match");
  alert("username password do not match")
  }
  else{
  console.log("Username does not exists");
  alert("Username does not exist");
  }
  })
  .catch(function (error) {
  console.log(error);
  });

  console.log("you are here 2");
  }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Client Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;