/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from "../Paginacion/Pagination.module.css"

function Pagination({ pokemonsPerPage, totalPokemons, paginate, page }) {
  
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalPokemons / pokemonsPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }
 
  return (
   <div className= {styles.pagination}>
    { totalPokemons > 1   ? <span >{page > 1 ? <ion-icon name="caret-back-circle-outline" onClick={() => paginate({num: -1}, pageNumbers.length)} ></ion-icon> : null}</span> : null}
    <ul className={styles.lista}>
    {totalPokemons > 15 ?  pageNumbers.map((num) => (
      <li key={num} >
        <a onClick={() => paginate(num)}  className={num === page ? styles.active : ""} >
          {num}
        </a>
      </li>
    )) : null }
</ul>

 {totalPokemons > 15 ? <span>{page !== 9 ? <ion-icon name="caret-forward-circle-outline"  onClick={() => paginate({num: +1}, pageNumbers.length)}></ion-icon>: null}</span> : null}
   </div>
  )
}

export default Pagination