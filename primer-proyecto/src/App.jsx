import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Box from "./components/Box";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Box titulo="">
        <ItemListContainer greetings="Proximamente: Catalogo!" />
      </Box>
      {/* <Button texto='Boton' color='green'>
        
      </Button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Felicidades, es el visitante numero 1 millon</p>
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
