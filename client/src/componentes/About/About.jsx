/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from "./About.module.css"
import {NavLink} from "react-router-dom"

function About() {
  return (
    <div className={styles.About} >
      <div className={styles.nav}>
       <NavLink to="/Home">
       <a>Inicio</a>
       </NavLink>
      </div>
      <div className={styles.informacion}>
         <div className={styles.caja1}>
          <img src="https://i.pinimg.com/564x/ad/6d/29/ad6d29c7bceb2097c04843b1c55762eb.jpg" alt="" />
         </div>
         <div className= {styles.caja2}>
         <h1>Este es un proyecto de pokemons de Evin Lopez para el Bootcamp de henry </h1>
         </div>
      </div>
      <div className={styles.informacion2}>
         <div className= {styles.caja3}>
         <h1> Herramientas utilizada en el Backend </h1>
         <p>Node js. Sequelize y Express js. </p>
         </div>
         <div className={styles.caja4}>
          <img src="https://i.pinimg.com/564x/35/75/a3/3575a3456a68e669e7268e3aee4be73e.jpg" alt="" />
         </div>
      </div>

      <div className={styles.informacion2}>
         <div className={styles.caja4}>
          <img src="https://i.pinimg.com/564x/3a/d2/56/3ad25624f4365bdcf857082e724348b3.jpg" alt="" />
         </div>
         <div className= {styles.caja3}>
         <h1> Herramientas utilizada en el Frontend </h1>
         <p>React y Redux </p>
         </div>
      </div>
    </div>
  )
}

export default About