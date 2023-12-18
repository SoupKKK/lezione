import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonComponent text="ciao sono il primo bottone" alert="hai cliccato il primo bottone" />
      <hr />
      <ImageComponent src="https://img.freepik.com/free-photo/closeup-shot-adorable-kitten-sitting-couch_181624-46615.jpg?w=826&t=st=1661376842~exp=1661377442~hmac=ddbc90a80a7179ac4ac0b6017327562157a57933c95d475b80c7e24b869c114a" alt="GATTINO" />
      <hr />
      <ButtonComponent text="ciao sono il secondo bottone" alert="hai cliccato il secondo bottone" />
      <br />  <br />   <br />

    </div>
  );
}

export default App;
