import logo from './logo.svg';
import './App.css';

function Login(){

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form id="login">

        Welcome to the San Jose Fictional Fossil Archive
        <br></br><br></br>
        Please log in with your employee credentials.
        <br></br>
        <i>Don't remember? Talk to your supervisor.</i>
        <br></br><br></br>

        <label for="username">Username: </label>
        <input type="text" id="username"/>
        <br></br>
        <label for="password">Password: </label>
        <input type="text" id="password"/>
        
        <br></br>
        <button type="button" onClick="Login()">Log in</button>
        
        </form>
      </header>
    </div>
  );
}

export default App;
