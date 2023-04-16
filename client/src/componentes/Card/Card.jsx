import React from 'react'
import styles from "./Card.module.css"
import "./types.css"
function Card({nombre, tipos, imagen, numero}) {

  return (
    <div className={styles.card} >
     {nombre.length || tipos.length || imagen.length || numero.length || tipos.length > 0 ? 
     <>
     <div  className={styles.imagen}>
      <img src={imagen} alt="" />
     </div>

     <div className={styles.numero}>
      <span> {typeof numero === "string" ? null : `#0${numero}` }</span>
     </div>
     <div className={styles.info}>
        
        <h1>{nombre[0].toUpperCase() + nombre.substring(1)}</h1>
        <div className={styles.i}>
        {  tipos ? tipos.map(t => (
            <p  className={t}  key={t}>{t[0].toUpperCase() + t.substring(1)}</p>
        )) : null}
        </div>
     </div>
     </> 
   : null }
    </div>
  )
}

export default Card
