import React, {useState} from 'react'
import Card from "../Card/Card"
import { useDispatch, useSelector } from 'react-redux'
import styles from "./P.module.css"
import Pagination from '../Paginacion/Paginacion'
import {NavLink} from "react-router-dom"
import Loading from '../Loading/Loading'
import { getPokemons } from '../../redux/actions'
function Pokemons() {
let dispatch = useDispatch()
let pokemons = useSelector(state => state.pokemons)
let busqueda = useSelector(state => state.busqueda)
const [page, setPage] = useState(1);
const [PokemonsPerPage] = useState(12);

// paginacion 
 
  let lastCardPerPage = page * PokemonsPerPage;
	let firtsCardPerPage = lastCardPerPage - PokemonsPerPage;
	let currentPage = pokemons.slice(firtsCardPerPage, lastCardPerPage);

  function paginate (number, length) {
    if(typeof(number) !== "object") {
      setPage(number)
   } else {
     let nun = page + number.num
     setPage(nun)
   }


   if(page < 1) {
     setPage(1)
   }

   if(page > length) {
     setPage(length)
   }


   

  }


  return (
    <div className={styles.pokemons}>
     {busqueda === true ?  <div className={styles.busqueda}>
        <h1>Resultado de tu busquda</h1>
        <p onClick={ () => dispatch(getPokemons())} >Eliminar busqueda <ion-icon name="trash" ></ion-icon></p>
      </div> : null}
      {busqueda === null ?  <div className={styles.busqueda}>
        <h1>No existe ese nombre</h1>
        <p onClick={ () => dispatch(getPokemons())} >Eliminar busqueda <ion-icon name="trash" ></ion-icon></p>
      </div> : null}
      { currentPage.length ?  currentPage.map(( p ) => (
         <NavLink  to={`/detail/${p.id}`} >
            <div  >
         <Card
           imagen = {p.image ? p.image  : "imagen"}
           nombre = {p.name ? p.name  : "name"}
           tipos = {p.types ? p.types :  []}
           numero={p.id ? p.id : "id" }
           key={p.id} 
         />
        </div>
         </NavLink>
      )): <Loading/>}

 <div className={styles.pagi}>
 <Pagination
        pokemonsPerPage={PokemonsPerPage} 
         totalPokemons={pokemons.length}
          paginate={paginate}
          page={page}/>
 </div>
    </div>
  )
}

export default Pokemons
