import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import ApForDestr from "../../assets/GNR.jpg";
import UsYourIlu from "../../assets/use_your_ilussion.webp";
import Lies from "../../assets/Lies.jpg";
import SpagInc from "../../assets/spaghetti_incident.jpg";
import ChinDem from "../../assets/Chinese.webp";

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: "Appetite for destruction",
        price: "$5000",
        imageUrl: ApForDestr,
        stock: 10,
        category: "HardRock",
        detail: "Primer album de estudio, grabado en el año 1987",
      },
      {
        id: 2,
        title: "Lies",
        price: "$3500",
        imageUrl: Lies,
        stock: 2,
        category: "HardRock",
        detail: "Segundo album de estudio, grabado en el año 1989",
      },
      {
        id: 3,
        title: "Use Your Illusion 1 y 2",
        price: "$7500",
        imageUrl: UsYourIlu,
        stock: 5,
        category: "SoftRock",
        detail:
          "Tercer album de estudio en formato doble, grabado en el año 1991",
      },
      {
        id: 4,
        title: "Spaghetti incident",
        price: "$4000",
        imageUrl: SpagInc,
        stock: 7,
        category: "SoftRock",
        detail: "Cuarto album de estudio, grabado en el año 1993",
      },
      {
        id: 5,
        title: "Chinesse Democracy",
        price: "$4000",
        imageUrl: ChinDem,
        stock: 11,
        category: "HardRock",
        detail: "Quinto album de estudio, grabado en el año 2002",
      },
    ];
    const productsFiltered = category
      ? productsList.filter((p) => p.category === category)
      : productsList;
      resolve(productsFiltered);
    });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrio un error, revisar la consola!");
      });
  }, [categoryId]);

  return (
    <div className="list-item-container">
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
