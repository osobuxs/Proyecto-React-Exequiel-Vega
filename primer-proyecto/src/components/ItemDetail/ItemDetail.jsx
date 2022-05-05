import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <div className="left">
        <div className="img-detail-container">
          <img src={item?.imageUrl} alt="Imagen del producto" />
        </div>
      </div>
      <div className="right">
        <div className="info-container">
          <h2>{item?.title}</h2>
          <p className="black">{item?.detail}</p>
          <p className="red">Precio: {item?.price}</p>
          <div className="count-container">
            <p className="black">Stock disponible: {item?.stock}</p>
            <ItemCount initial={0} stock={item?.stock} onAdd={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
