import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';



function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Appetite for destruction',
        price: '$5000',
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_988247-MLA29633026301_032019-O.webp',
      },
      {
        id: 2,
        title: 'Use Your Illusion 1 y 2',
        price: '$7500',
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_987810-MLA27164764518_042018-O.webp'
      },
      {
        id: 3,
        title: 'Lies',
        price: '$3500',
        imageUrl: 'https://media.karousell.com/media/photos/products/2017/10/07/guns_n_roses__g_n_r_lies__cd_album_1507391779_7abc78d0.jpg'
      },
      {
        id: 4,
        title: 'Spaghetti incident',
        price: '$4000',
        imageUrl: 'https://m.media-amazon.com/images/I/61ru5vjTeSL._SL1000_.jpg'
      }
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
    </div>
  )
}

export default ItemListContainer