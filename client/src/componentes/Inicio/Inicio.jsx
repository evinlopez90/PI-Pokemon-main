import React from 'react'
import styles from "./Inicio.module.css"
import imagen from "../../Imagenes/inic.png"
import {Link} from "react-router-dom"
function Inicio() {
  return (
    <div className={styles.container}>
      <div className={styles.caja1}>
        <img src={imagen} alt="" />
      </div>
      <div className={styles.caja2}>
        <h1>Bienvenido a  Pokemons  App donde podras explorar todo lo que ofrece PokeApi  </h1>
        <p>Todos los datos de Pokémon que necesitarás en un solo lugar crea filtra ordena y mira los detalles de cada pokemon</p>
        <div className={styles.btn} >
        <Link to="/Home">
        <button >
          Ir
        </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Inicio
