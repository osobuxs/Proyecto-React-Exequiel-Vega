import React from "react";
import "./Box.css";

const Box = ({ titulo, children }) => {
  return (
    <>
      <div className="div">
        <div>
          <section>
            <h2>¿Quienes son los Guns N' Roses?</h2>
            <p>
              Guns N' Roses es una banda estadounidense de hard rock formada en
              Hollywood en la zona de Sunset Strip, alrededor de Santa Mónica,
              en el área metropolitana de Los Ángeles, California en 1985. El
              grupo fue fundado por el vocalista Axl Rose y el guitarrista Izzy
              Stradlin.
            </p>
          </section>
          <section>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1w7OgIMMRc4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
        </div>
        <div>
          <section>
            <h3>Historia:</h3>
          </section>
          <p>
            La formación actual cuenta con el vocalista Axl Rose, el guitarrista
            rítmico Richard Fortus, los tecladistas Dizzy Reed y Melissa Reese,
            el baterista Frank Ferrer, el bajista Duff McKagan y el guitarrista
            líder Slash. Estos dos últimos son considerados miembros clásicos de
            la agrupación y luego de una ausencia de 23 años, retomaron su lugar
            en la banda. La banda ha vendido más de 150 millones de álbumes en
            todo el mundo,incluyendo más de 60 millones de álbumes solo en los
            Estados Unidos,lo que los posiciona en el puesto n°18 en la lista de
            los artistas con más ventas y éxito de todos los tiempos. Su álbum
            debut Appetite for Destruction de 1987 ha vendido 35 millones de
            copias a nivel mundial y alcanzó el número 1 en el Billboard 200 en
            Estados Unidos. Además, cuatro canciones del álbum ingresaron en el
            Top 10 en la Billboard Hot 100, y «Sweet Child o' Mine» quedó en el
            número uno.
          </p>
          <h4>Discografia:</h4>
          <ul className="lista">
            <li>Live ?*! Like a Suicide</li>
            <li>Apettite for destruction</li>
            <li>Lies</li>
            <li>Use your ilussion 1 y 2</li>
            <li>Spaghetti incident</li>
            <li>Chinese Democracy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Box;
