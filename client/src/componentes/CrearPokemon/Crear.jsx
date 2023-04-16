/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./Crear.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, anuladora,  getPokemons, getTypes } from "../../redux/actions";
import {NavLink} from "react-router-dom"
function Crear() {
  let dispacth = useDispatch();
  useEffect(() => {
    
    
  
  }, []);
  let [mensaje, setMensaje] = useState(null)
  let createPokemo = useSelector((state) => state.createPokemonError);
  let Pokemons = useSelector((state) => state.createPokemon);
  let types = useSelector((state) => state.types);

  let [inpus, setInpus] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const [error, setError] = useState({
    name: null,
    image: null,
    hp: null,
    attack: null,
    defense: null,
    speed: false,
    height: false,
    weight: false,
    types: null,
  });

 let [noMensaje, SetNoMensajes] = useState(null)
  //  validate
  const urlRegExp = /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
  const stringRegExp = /^[a-zA-Z]{0,20}$/;
  const numberRegExp = /^([0-9][0-9]{0,2}|1000)$/;
  function hanledChangeValidate(e) {
    let { name, value } = e.target;
    if (name === "name") {
      if (!stringRegExp.test(value)) {
        setError({
          ...error,
          [name]: true,
        });
      } else {
        setError({
          ...error,
          [name]: false,
        });
        setInpus({
          ...inpus,
          [name]: value,
        });
       
        
      }

      if (value === "") {
        setError({
          ...error,
          [name]: null,
        });
      }
      setMensaje(null)
      SetNoMensajes(null)
      if(createPokemo !== null) {
        dispacth(anuladora())
      }
      if(types === undefined) {
        dispacth(getTypes())
      }
    }

    if (name === "hp") {
      if (!numberRegExp.test(value)) {
        setError({
          ...error,
          [name]: true,
        });
      } else {
        setError({
          ...error,
          [name]: false,
        });
        setInpus({
          ...inpus,
          [name]: value,
        });
        
      }

      if (value === 0) {
        setError({
          ...error,
          [name]: null,
        });
      }
      setMensaje(false)
    }

    if (name === "attack") {
      if (!numberRegExp.test(value)) {
        setError({
          ...error,
          [name]: true,
        });
      } else {
        setError({
          ...error,
          [name]: false,
        });
        setInpus({
          ...inpus,
          [name]: value,
        });
        setMensaje(null)
      }

      if (value === 0) {
        setError({
          ...error,
          [name]: null,
        });
      }
      setMensaje(false)
      
    }

    if (name === "defense") {
      if (!numberRegExp.test(value)) {
        setError({
          ...error,
          [name]: true,
        });
      } else {
        setError({
          ...error,
          [name]: false,
        });
        setInpus({
          ...inpus,
          [name]: value,
        });
        setMensaje(null)
      }

      if (value === 0) {
        setError({
          ...error,
          [name]: null,
        });
      }
      setMensaje(false)
    }

   if(name === "image") {

    if (!urlRegExp.test(value)) {
      setError({
        ...error,
        [name]: true,
      });
    } else {
      if( value.length)  {
        setError({
          ...error,
            [name]: false
        })
       
      }
      
      
      if(value === ""){
        setError({
          ...error,
            [name]: null
        })
      }
    }
    setMensaje(null)
    SetNoMensajes(null)
   }
      


    if(name === "types") {
     if(value === "default") {
        return setInpus({
          ...inpus,
          [name]: []
         })
     }

      setInpus({
        ...inpus,
        [name]: [...inpus.types, value]
       })
      
       
       if(value.length) {
        setError({
          ...error,
            types: null
        })
       }
       setMensaje(null)
    } else {
      setInpus({
        ...inpus,
        [name]: value
       })
       setMensaje(null)
    }
    }

   
  function hanledSubmitValidate(e) {
    e.preventDefault()
  

    if(inpus.name === "" )  {
      setError({
        ...error,
          name: true
      })
      return
    } 

    if(inpus.hp === 0 )  {
      setError({
        ...error,
          hp: true
      })
      return
    } 

    if(inpus.image === "" )  {
      setError({
        ...error,
          image: true
      })
      return
    } 

    if(inpus.attack === 0 )  {
      setError({
        ...error,
          attack: true
      })
      return
    } 

    if(inpus.defense === 0 )  {
      setError({
        ...error,
          defense: true
      })
      return
    } 

    if(inpus.speed === 0 )  {
      setError({
        ...error,
          speed: true
      })
      return
    } 

    if(inpus.types.length < 1 )  {
      setError({
        ...error,
          types: true
      })
      return
    } 
    
   
   if(!urlRegExp.test(inpus.image)) {
      setMensaje(true)
      return
   }

   if(!stringRegExp.test(inpus.name)) {
    setMensaje(true)
    return
 }

  if(!numberRegExp.test(inpus.attack)  || !numberRegExp.test(inpus.defense) || !numberRegExp.test(inpus.hp)) {
    setMensaje(true)
    return
  }

  if(inpus.speed < 0 || inpus.height < 0 || inpus.weight < 0) {
      setMensaje(true)
  }
  console.log(inpus.weight)
  dispacth(createPokemon(inpus))
  dispacth(getPokemons())

  
    setInpus({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  })



   

  setError({
    name: null,
    image: null,
    hp: null,
    attack: null,
    defense: null,
    speed: false,
    height: false,
    weight: false,
    types: null,
  })
  
  setMensaje(false)
  SetNoMensajes(true)
  dispacth(getTypes());
  }

 

  

  return (
    <div className={styles.crear}>
      <div className={styles.atras}>
       <NavLink to="/Home"   >
       <ion-icon name="arrow-back"></ion-icon> <a >Atras</a>
       </NavLink>
      </div>
      <div className={styles.conten}>
        <div className={styles.container1}>
          <form
            action=""
            className={styles.formu}
            onSubmit={(e) => hanledSubmitValidate(e)}
            onChange={(e) => hanledChangeValidate(e)}
          >
            {/* Nombre */}
            <div className={styles.nombre}>
              <label
                htmlFor=""
                className={error.name === true ? styles.label : null}
              >
                Nombre
              </label>
              <div
                className={
                  error.name === true
                    ? styles.input_error
                    : styles.input_no_error
                }
              >
                <input
                  type="text"
                  name="name"
                  value={inpus.name}
                  className={styles.input}
                />
                {error.name === true ? (
                  <ion-icon name="add-circle"></ion-icon>
                ) : null}
                {error.name === false ? (
                  <ion-icon name="checkmark-circle"></ion-icon>
                ) : null}
              </div>
              {error.name === true ? (
                <p style={{ display: "block" }}>
                  El nombre no puede contener simbolos, numeros ni espacios
                </p>
              ) : null}
            </div>

            {/* Vida */}
            <div className={styles.vida}>
              <label
                htmlFor=""
                className={error.hp === true ? styles.label : null}
              >
                Vida
              </label>
              <div
                className={
                  error.hp === true ? styles.input_error : styles.input_no_error
                }
              >
                <input
                  type="number"
                  name="hp"
                  value={inpus.hp}
                  className={styles.input}
                />
                {error.hp === true ? (
                  <ion-icon name="add-circle"></ion-icon>
                ) : null}
                {error.hp === false ? (
                  <ion-icon name="checkmark-circle"></ion-icon>
                ) : null}
              </div>
              {error.hp === true ? (
                <p style={{ display: "block" }}>
                  Este campo no puede ser nenor  o igual a 0 y tampoco pude ser mayor a 1000, ni contener 4 digitos
                </p>
              ) : null}
            </div>

            {/* Ataque */}
            <div className={styles.ataque}>
              <label
                htmlFor=""
                className={error.attack === true ? styles.label : null}
              >
                Ataque
              </label>
              <div
                className={
                  error.attack === true
                    ? styles.input_error
                    : styles.input_no_error
                }
              >
                <input
                  type="number"
                  name="attack"
                  value={inpus.attack}
                  className={styles.input}
                />
                {error.attack === true ? (
                  <ion-icon name="add-circle"></ion-icon>
                ) : null}
                {error.attack === false ? (
                  <ion-icon name="checkmark-circle"></ion-icon>
                ) : null}
              </div>
              {error.attack === true ? (
                <p style={{ display: "block" }}>
                  Este campo no puede ser nenor  o igual a 0 y tampoco pude ser mayor a 1000, ni contener 4 digitos
                </p>
              ) : null}
            </div>

            {/* Defensa */}
            <div className={styles.defensa}>
              <label
                htmlFor=""
                className={error.defense === true ? styles.label : null}
              >
                Defensa
              </label>
              <div
                className={
                  error.defense === true
                    ? styles.input_error
                    : styles.input_no_error
                }
              >
                <input
                  type="number"
                  name="defense"
                  value={inpus.defense}
                  className={styles.input}
                />
                {error.defense === true ? (
                  <ion-icon name="add-circle"></ion-icon>
                ) : null}
                {error.defense === false ? (
                  <ion-icon name="checkmark-circle"></ion-icon>
                ) : null}
              </div>
              {error.defense === true ? (
                <p style={{ display: "block" }}>
                   Este campo no puede ser nenor  o igual a 0 y tampoco pude ser mayor a 1000, ni contener 4 digitos
                </p>
              ) : null}
            </div>

            {/* velocidad */}
            <div className={styles.velocidad}>
              <label htmlFor="">Velocidad</label>
              <div className={styles.input_nombre}>
                <input
                  type="number"
                  name="speed"
                  value={inpus.speed}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Altura */}
            <div className={styles.altura}>
              <label htmlFor="">Altura</label>
              <div className={styles.input_nombre}>
                <input
                  type="number"
                  name="height"
                  value={inpus.height}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Peso */}
            <div className={styles.peso}>
              <label htmlFor="">Peso</label>
              <div className={styles.input_nombre}>
                <input
                  type="number"
                  name="weight"
                  value={inpus.weight}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Imagen */}
            <div className={styles.imagen}>
              <label
                htmlFor=""
                className={error.image === true ? styles.label : null}
              >
                Imagen
              </label>
              <div
                className={
                  error.image === true
                    ? styles.input_error
                    : styles.input_no_error
                }
              >
                <input
                  type="text"
                  name="image"
                  value={inpus.image}
                  className={styles.input}
                />
                {error.image === true ? (
                  <ion-icon name="add-circle"></ion-icon>
                ) : null}
                {error.image === false ? (
                  <ion-icon name="checkmark-circle"></ion-icon>
                ) : null}
              </div>
              {error.image === true ? (
                <p style={{ display: "block" }}>Falta la imagen</p>
              ) : null}
            </div>

            {/* Tipos */}
            <div className={styles.tipos}>
              <label
                htmlFor=""
                className={error.types === true ? styles.label : null}
              >
                Tipos
              </label>
              <select name="types" className={styles.select}>
                <option className="defautl"   value="default" >
                  Tipes
                </option>
                { types ?  types.map((t) => (
                      <>
                        <option name="types" value={t.name} key={t.id}>
                          {t.name[0].toUpperCase() + t.name.substring(1)}
                        </option>
                      </>
                    ))
                 : null }
              </select>
              {error.types === true ? (
                <p style={{ display: "block" }}>No has elegido nigun tipo</p>
              ) : null}
               {error.types !== true ? <div className={styles.type}>
                {inpus.types ? inpus.types.map(t => (
                <p style={{ display: "block", color: "black", fontWeight: "bold", }} >
                  {t[0].toUpperCase() + t.substring(1)}
                </p>
              )): null}
               </div> : null }
            </div>

            {noMensaje === true && createPokemo === null ? 
                 <div className={styles.loading}>
                  <img src="https://i.pinimg.com/originals/ae/51/e1/ae51e1395e87cc72c6021df5445cc5f8.gif" alt="" />
               </div>
               : <>
               {mensaje === true ? <div className={styles.error}>
               <span>
                 <ion-icon name="alert-circle"></ion-icon> <b>Error:</b> Por
                 favor rellena todos los campos correctamente
               </span>
             </div> : null}
             { createPokemo === false && noMensaje === true ? <div className={styles.error} style={{backgroundColor: "green"}}>
             <span className={styles.active_exito}  >Pokemon creado correctamente</span>
             </div> : null}
             { createPokemo === true  && noMensaje === true ? <div className={styles.error}>
             <span className={styles.active_exito}  >El nombre no esta disponible</span>
             </div> : null}

             { createPokemo === undefined  && noMensaje === true    ? <div className={styles.error} style={{backgroundColor: "green"}}>
             <span className={styles.active_exito}  >{Pokemons.error}</span>
             </div> : null}


               </>}

            {/* button */}
            <div className={styles.btn}>
              <button type="submit">
                <span>Crear</span>
              </button>
      
            </div>
          </form>
        </div>

        <div className={styles.container2}>
          <img
            src="https://i.pinimg.com/564x/2c/67/c0/2c67c0f06eb7327d42bdb441f53fe7ee.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Crear;
