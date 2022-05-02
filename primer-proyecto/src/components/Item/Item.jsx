import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

function onAdd() {
  console.log("dummy");
}

function Item({ item }) {
  return (
    <div className="card">
      <div className="header">{item?.title}</div>
      <div className="content">
        <div className="img-container">
          <img
            className="product-img"
            src={item?.imageUrl}
            alt="Imagen del producto"
          />
        </div>
      </div>
      <div className="footer">
        {item?.price} <br />
        Stock disponible: {item?.stock}
        <ItemCount stock={item?.stock} initial={1} onAdd={onAdd}></ItemCount>
      </div>
    </div>
  );
}

export default Item;
