import React, { Component } from "react";
import logo from './logo.svg';

function Login(){
  if(document.forms["login"].username.value == "terry"
  && document.forms["login"].password.value == "123"){
    alert("Logged in")
  } else
    alert("Please try again")
}
function SignUp(){
    alert("Signed Up!")
}

class Home extends Component {
  render() {
    return (
      <div className="App-header">

      Welcome to the San Jose State Fossil Archive

     Please log in with your employee credentials
     <i>Don't remember? Talk to your supervisor.</i>
        Never been here? Sign up!
     <br></br><br></br>

     <form id="login">

     <label for="username">Username: </label>
     <input type="text" id="username"/>
     <br></br>
     <label for="password">Password: </label>
     <input type="password" id="password"/>

     <br></br>
     <button type="button" onClick={Login}>Log in</button>
     <button type="button" onClick={SignUp}>Sign Up</button>
     </form>
      </div>
    );
  }
}

export default Home;
