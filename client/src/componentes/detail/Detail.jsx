/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styles from "./Detail.module.css"
import { useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getPokemonsDetail, resetDetail} from "../../redux/actions"
import Loading from "../Loading/Loading"
import "../Card/types.css"
function Detail() {
let {id} = useParams()
let dispacth = useDispatch()
useEffect(() => {

    dispacth(getPokemonsDetail(id))
},[])

let pokemons = useSelector((state) => state.pokemonDetails)

  return (
    <div className={styles.detail}>
      <div className={styles.icon}> 
           <NavLink to="/Home">
           <a  onClick={() => dispacth(resetDetail())} ><ion-icon name="arrow-back-outline"></ion-icon></a>
           </NavLink>
        </div>
         {pokemons ? <div className={styles.conten}>
        <div className={styles.caja01}>
          <div className={styles.imagen}>
           <img src={pokemons.image} alt="" />
          </div>
          <div className={styles.infoIn}>
          <div className={styles.types_nombre}>
           <div className={styles.nombre}>
           <h2 key={pokemons.name}>{pokemons.name ? pokemons.name[0].toUpperCase() + pokemons.name.substring(1): null}</h2>
           </div>
           <div className={styles.types}>
            { pokemons.types ? pokemons.types.map(t => (
            <p className={t}>{t[0].toUpperCase() + t.substring(1)}</p>
           )) : null}
            </div>
          </div> 
          <div className={styles.nun}>
            <p>{typeof pokemons.id === "string" ? null : `#0${pokemons.id}`}</p>
          </div>
        </div>
          </div>
         
        <div className={styles.caja02}>
         <div className={styles.info}>
          <div>
          <p>Vida</p> <span style={{width: `${pokemons.hp}%`}}></span> <p>{pokemons.hp}</p>
          </div>
          <div>
          <p>Ataque</p> <span style={{width: `${pokemons.attack}%`}}></span> <p>{pokemons.attack}</p>
          </div>
           <div>
           <p>Defensa</p> <span style={{width: `${pokemons.defense}%`}} ></span> <p>{pokemons.defense}</p>
           </div>
           <div>
           <p>Velocidad</p> <span style={{width: `${pokemons.speed}%`}} ></span> <p>{pokemons.speed}</p>
           </div>
           <div>
           <p>Altura:</p> <span style={{width: `${pokemons.height}%`}}></span> <p>{pokemons.height}</p>
           </div>
            <div>
            <p>Peso</p> <span style={{width: `${pokemons.weight}%`}} ></span> <p>{pokemons.weight}</p>
            </div>
            
         </div>
        </div>
      </div>: <Loading/> }
    </div>
  )
}

export default Detail
