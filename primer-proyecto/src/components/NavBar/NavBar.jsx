import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        
        <div>
            <section className='titulo'><a href="#">MARKETPLACE</a></section>
            <ul className='nav'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Catalogo</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
}

export default NavBar;