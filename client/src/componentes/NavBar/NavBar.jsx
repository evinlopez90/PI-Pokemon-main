/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import  styles from "./Navbar.module.css"
import Filter from '../Filter/Filter'
import  {Link, useLocation} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { searchPokemon } from '../../redux/actions'
function NavBar() {
  let location = useLocation()
  let dispatch = useDispatch()

  let [valor, setValor] = useState("")
  let [active, seActive] = useState(true)
  
  function hendleSutmit (e) {
    e.preventDefault()
    
     dispatch(searchPokemon(valor))
      setValor("")
  }

  return (
     <>
     <div className={styles.filter}>
        <Filter active= {active}/>
      </div>
     <div className={styles.container}>
    
      <div className={styles.container_form}>
      <div className={styles.iconos}>
     <p>Filtrar</p>   <span onClick={() => seActive(!active)}>  {active  === true ? <ion-icon name="backspace"></ion-icon> : <ion-icon name="filter" ></ion-icon>}</span>
        </div>
      <form onSubmit={(e) => hendleSutmit(e)  } className={styles.form}>
      <input type="text" placeholder='search pokemon' value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type='submit'  > 
      <ion-icon name="search-outline"></ion-icon>
      </button>
     </form>
      </div>
     <div className={styles.ul_container}>
     <nav>
      <ul>
        <li>
        <Link to="/" >
        <a >Inicio</a>
        </Link>
        </li>
        <li>
          <Link to="/Home">
          <a style={{color: location.pathname === "/Home" ? "#09f" : null}}>
            Home
          </a>
          </Link>
        </li>
        <li>
        <Link to="/Crear">
        <a style={{color: location.pathname === "/Crear" ? "#09f" : null }}>
        Crear
      </a>
        </Link>
        </li>
        <li>
         <Link to="/About">
         <a style={{color: location.pathname === "/About" ? "#09f" : null }}>
            About
          </a>
         </Link>
        </li>
      </ul>
     </nav>
     </div>
    </div>
   
     </>
  )
}

export default NavBar