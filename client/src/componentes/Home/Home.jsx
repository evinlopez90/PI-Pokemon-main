/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import NavBar from "../NavBar/NavBar"
import {useDispatch, useSelector, } from "react-redux"

import { getPokemons, getTypes } from '../../redux/actions'
import Pokemons from '../pokemons/Pokemons'
function Home() {
  let dispatch = useDispatch()
let pokemons = useSelector(state => state.defaultPokemos)
  
  useEffect(() => {
      if(pokemons.length === 0) {
        dispatch(getPokemons())
        dispatch(getTypes())
      }
  
  }, [dispatch, pokemons])

  return (
    <>
      <NavBar/>  
       <Pokemons/>
    </>
  )
}

export default Home