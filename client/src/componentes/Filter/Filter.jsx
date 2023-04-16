/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortAttack, filterByType,  alfabetico, createOrApi, getTypes, setDefault, vida, } from '../../redux/actions'
import styles from "./Filter.module.css"
import "../Card/types.css"


function Filter({active}) {
    let dispatch = useDispatch()
   
    
   
    let types = useSelector(state  => state.types)
  
   let [por, sePor] = useState("type")
   let [opciones, setOciones] = useState(1)

   
  

   

   const  hanledtypes = (e) => {
       dispatch(filterByType(e))
   }
   const  hanledAttack = (e) => {
      dispatch(sortAttack(e))
      
  }

  const  hanledApiOr = (e) => {
   dispatch(createOrApi(e))
   
}

const  hanledAlfabetic = (e) => {
  dispatch(alfabetico(e))
  
}

function haledDefault () {
  dispatch(setDefault())
  
}

function hanledVida (e) {
  dispatch(vida(e))
}

function opcion (v) {
  if(v > 5) {
    setOciones(1)
  } else {
    setOciones(v)
  }

 
}

   let ataque = [{act: "Mayor", fil: "relevance"}, {act: "Menor", fil: "less relevance"} ]
   let hp = [{act: "Mayor", fil: "mayor"}, {act: "Menor", fil: "menor"} ]
   let origen = [  { ori:"Api", fil: "Api"}, { ori:"Db", fil: "create"} ]
   let oalfabetico = [  { ori:"a-z", fil: "a-z"}, { ori:"z-a", fil: "z-a"} ]

   
    return (
       
      <>
    
       {active === true ? <div className={styles.container}>
        <div className={styles.opciones}>
       
          <>
        
          <span>Por: </span>  <p onClick={() => {
         sePor("nada")
           haledDefault()
        } } >Todos</p>
         {opciones === 1 ?  <p onClick={() => sePor("types")}>Tipos</p> : null} 
        {opciones === 2 ? <p onClick={() => sePor("ataque")}>Ataque</p> : null} 
        {opciones === 3 ? <p onClick={() => sePor("origen")}>Origen</p> : null}
        {opciones === 4 ? <p onClick={() => sePor("alfabetico")}>Alfabetico</p> : null}
        {opciones === 5 ?  <p onClick={() => sePor("hp")}>Vida</p> : null} 
         <ion-icon name="chevron-forward-circle-outline"  onClick={() => opcion(opciones + 1) }></ion-icon>
          </>
    
        </div>
            {active === true ? 
            <div className={styles.types}>
            <div name="types" >
            {por === "types" ? types.map(t => (
                <div className={styles.input}>
                  <input type='radio'  name='in' checked  onClick={() => hanledtypes(t.name)} />
                 <label htmlFor="">{t.name}</label>
                </div>
             )): null}
            </div>

            <div name="attack">
            {por === "ataque" ? ataque.map(t => (
                 <div className={styles.input}>
                 <input type='radio'  name='in'  value={t.fil} onClick={() => hanledAttack(t.fil)} />
                <label htmlFor="">{t.act}</label>
               </div>
             )) : null}
            </div>

            <div name="hp">
            {por === "hp" ? hp.map(t => (
                 <div className={styles.input}>
                 <input type='radio'  name='in'  value={t.fil} onClick={() => hanledVida(t.fil)} />
                <label htmlFor="">{t.act}</label>
               </div>
             )) : null}
            </div>

             <div name="apiOrCreate">
             {por === "origen" ? origen.map(t => (
                 <div className={styles.input}>
                 <input type='radio'  name='in'  value={t.fil} onClick={() => hanledApiOr(t.fil)} />
                <label htmlFor="">{t.ori}</label>
               </div>
             )) : null}
             </div>

             <div name="apiOrCreate">
             {por === "alfabetico" ? oalfabetico.map(t => (
                 <div className={styles.input}>
                 <input type='radio'  name='in' value={t.fil} onClick={() => hanledAlfabetic(t.fil)} />
                <label htmlFor="">{t.ori}</label>
               </div>
             )) : null}
             </div>


          </div>: null}
         </div> :null}

       </>
        
    )
}

export default Filter
