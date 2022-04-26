import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";




function App() {

  return (
    <div className="App">
      <NavBar></NavBar> 
      <Box titulo="Bienvenido">
      <ItemListContainer/>
      </Box>
      
      
    </div>
  );
}

export default App;
