import logo from './logo.svg';
import './App.css';

function Login(){
  if(document.forms["login"].username.value == "hi"
  && document.forms["login"].password.value == "nice"){
    alert("nice")
  } else
    alert("Please try again")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        Welcome to the San Jose Fictional Fossil Archive
        <br></br><br></br>
        Please log in with your employee credentials.
        <br></br>
        <i>Don't remember? Talk to your supervisor.</i>
        <br></br><br></br>

        <form id="login">

        <label for="username">Username: </label>
        <input type="text" id="username"/>
        <br></br>
        <label for="password">Password: </label>
        <input type="text" id="password"/>
        
        <br></br>
        <button type="button" onClick={Login}>Log in</button>
        
        </form>
      </header>
    </div>
  );
}

export default App;
