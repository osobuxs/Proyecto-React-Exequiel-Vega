import React, { useEffect, useState } from "react";
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import ApForDestr from "../../assets/GNR.jpg";
import UsYourIlu from "../../assets/use_your_ilussion.webp";
import Lies from "../../assets/Lies.jpg";
import SpagInc from "../../assets/spaghetti_incident.jpg";
import ChinDem from "../../assets/Chinese.webp";

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: "Appetite for destruction",
        price: "$5000",
        imageUrl: ApForDestr,
        stock: 10,
      },
      {
        id: 2,
        title: "Use Your Illusion 1 y 2",
        price: "$7500",
        imageUrl: UsYourIlu,
        stock: 5,
      },
      {
        id: 3,
        title: "Lies",
        price: "$3500",
        imageUrl: Lies,
        stock: 2,
      },
      {
        id: 4,
        title: "Spaghetti incident",
        price: "$4000",
        imageUrl: SpagInc,
        stock: 7,
      },
      {
        id: 5,
        title: "Chinesse Democracy",
        price: "$4000",
        imageUrl: ChinDem,
        stock: 11,
      },
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  function onAdd(product, count) {
    if (product.stock >= count) {
      console.log("producto agregado", product.title);
    } else {
      console.log(`no hay de stock de ${product.title} suficiente`);
    }
  }
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="list-item-container">
      <ItemList items={products} onAdd={onAdd} />
    </div>
  );
}

export default ItemListContainer;
