import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

//   function hundleClick(){
//     console.log('click!')
//   }

  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Felicidades, es el visitante numero 1 millon
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={hundleClick}>Click Me!</button> */}
      </header>
    </div>
  );
}

export default App;
