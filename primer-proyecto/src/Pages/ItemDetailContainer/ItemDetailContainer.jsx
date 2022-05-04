import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ApForDestr from "../../assets/GNR.jpg";
import UsYourIlu from "../../assets/use_your_ilussion.webp";
import Lies from "../../assets/Lies.jpg";
import SpagInc from "../../assets/spaghetti_incident.jpg";
import ChinDem from "../../assets/Chinese.webp";

function getItem(id) {
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
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    // const { id } = useParams();

    useEffect(() => {
        getItem(1)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer