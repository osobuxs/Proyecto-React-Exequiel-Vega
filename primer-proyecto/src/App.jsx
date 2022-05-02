import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

// function onAdd(product, count){
//   if (product.stock >= count){
//     console.log("producto agregado", product.title);
//   }
//   else {
//     console.log(`no hay de stock de ${product.title} suficiente`);
//   }

// }
function onAdd() {
  console.log("dummy");
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box titulo="Bienvenido">
        <ItemListContainer />
      </Box>
    </div>
  );
}

export default App;
