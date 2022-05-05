import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/inicio" element={<Box titulo="Hola" />} />
      </Routes>
    </div>
  );
}

export default App;
