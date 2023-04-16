/* eslint-disable no-unused-vars */
import {    GET_POKEMONS, GET_TYPES, FILTER_TYPE, 
    SEARCH_POKEMON, GET_POKEMON_DETAILS, CREATE_POKEMON,
   SORT_ATTACK, 
    RESET_DETAILS, 
    ERROR_CREATED_POKEMON, ERROR_SEARCH_POKEMON,  
     ALFABETICO, CREATE_OR_API, DEFAULT, ANULADORA, HP} from "./actions";



const initialState = {
pokemons: [],
defaultPokemos: [],
types: [],
createPokemon: null,
whatType: "",
pokemonDetails: {},

busqueda: false,

// respondiendo con con errores
createPokemonError:null

}




export default function reducer(state = initialState, action){
if(action.type === GET_POKEMONS) {
    return {
        ...state,
        pokemons: action.payload,
        defaultPokemos: action.payload,
        defaultp: action.payload,
        busqueda: false
    }
}

if(action.type === CREATE_POKEMON) {
    if(action.payload.error) {
       return {
        ...state,
          createPokemon: action.payload,
          createPokemonError: undefined
       }
    }else {
      return {
        ...state,
        createPokemon: action.payload,
        createPokemonError: false
      }
    }
}

if(action.type === SEARCH_POKEMON) {
    return {
        ...state,
        pokemons: [action.payload],
        defaultPokemos: [action.payload],
        busqueda: true
        
    }
}

if(action.type === ERROR_SEARCH_POKEMON) {
     return {
      ...state,
       busqueda: null 
     }
}



if(action.type === GET_TYPES) {
    return {
        ...state,
        types: action.payload
    }
}
if(action.type === FILTER_TYPE) {
  if(action.payload !== "default") {
    return {
     ...state,
        pokemons: [...state.defaultPokemos].filter(t => t.types.includes(action.payload)),
        whatType: action.payload
    }
} else {
   if(state.pokemons.length !== state.defaultPokemos.length){
     return {
       ...state,
          pokemons: [...state.defaultPokemos],
          whatType: ""
      }
   } else {
     return {
       ...state,
          pokemons: state.whatType.length ? [...state.pokemons].filter(t => t.types.includes(state.whatType)) : [...state.pokemons],
          whatType: ""
      }
   }
   
}
}

if(action.type === ALFABETICO) {
    if(action.payload === "a-z" ) {
        return {
          ...state,
          pokemons: [...state.pokemons].sort((a, b) => {
            if (a.name > b.name) return 1;
           if (a.name < b.name) return -1;
        return 0;
           }),
           defaultPokemos: [...state.defaultPokemos].sort((a, b) => {
            if (a.name > b.name) return 1;
           if (a.name < b.name) return -1;
        return 0;
           })
        }
      } 
      if(action.payload === "z-a") {
         return{
           ...state,
           pokemons: [...state.pokemons].sort((a, b) => {
            if (a.name < b.name) return 1;
           if (a.name > b.name) return -1;
        return 0;
           }),
           defaultPokemos: [...state.defaultPokemos].sort((a, b) => {
            if (a.name < b.name) return 1;
           if (a.name > b.name) return -1;
        return 0;
           })
        }
}
}

if(action.type === SORT_ATTACK) {
    if(action.payload === "relevance" ) {
        return {
          ...state,
          pokemons: [...state.pokemons].sort(
            (a, b) => b.attack - a.attack
          ),
          defaultPokemos: [...state.defaultPokemos].sort(
            (a, b) => b.attack - a.attack
          )
        }
      }
        if(action.payload === "less relevance") {
         return{
           ...state,
           pokemons: [...state.pokemons].sort(
            (a, b) => a.attack - b.attack
          ),
          defaultPokemos: [...state.defaultPokemos].sort(
            (a, b) => a.attack - b.attack
          )
         }
      };
}


if(action.type === HP) {
  if(action.payload === "mayor") {
     return {
      ...state,
      pokemons: [...state.pokemons].sort(
        (a, b) => b.hp - a.hp
      )
     }
  }
  if(action.payload === "menor") {
    return {
     ...state,
     pokemons: [...state.pokemons].sort(
       (a, b) => a.hp - b.hp
     )
    }
 }
}
if(action.type === CREATE_OR_API) {
  let pokemon;
  if(action.payload === "create") {
    pokemon = state.pokemons.filter(function (I) {
     return  typeof I.id === "string"
   });
  } 
   
 else if(action.payload === "Api") {
  pokemon = state.pokemons.filter(function (I) {
    return  typeof I.id === "number"
  })
  } 

 
   return {
     ...state,
     pokemons: pokemon
   }
}

if(action.type === DEFAULT) {
    return {
      ...state,
      pokemons: state.defaultp
    } 
}

if(action.type === GET_POKEMON_DETAILS ){
  return {
      ...state,
      pokemonDetails: action.payload,  // recibe el pokemon filtrado
      
  }
}

if(action.type === RESET_DETAILS) {
   return {
     ...state,
     pokemonDetails: action.payload
   }
}

if(action.type === ERROR_CREATED_POKEMON) {
   return {
     createPokemonError: true
   }
}

if(action.type === ANULADORA) {
  return {
    createPokemonError: null
  }
}

return state

}