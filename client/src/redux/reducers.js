import {    GET_POKEMONS, GET_TYPES, FILTER_TYPE, FILTER_POKEMON, 
    SEARCH_POKEMON, GET_POKEMON_DETAILS, CREATE_POKEMON,
    MODIFY_PAGE, TOP_PAGE, BOTTOM_PAGE,
    RESET_FILTER_ORDER, SORT_NAME, SORT_ATTACK, 
    RESET_DETAILS, RESET_CREATED_POKEMON, RESET_SEARCH_POKEMON, RESET_DETAILS_POKEMON,
    ERROR_CREATED_POKEMON, ERROR_SEARCH_POKEMON,  
    LOADING_POKEMONS, LOADING_DETAILS, LOADING_SEARCH} from "./actions";



const initialState = {
pokemons: [],
defaultPokemos: [],
types: [],
// -------------------------- filter and order --------------------------------
sortNone: true,
filterTypes: false,
filterPokemons: false,
sortAlfabetico:[false, false],
sortAttack:[false, false],


// ---------------------------- loading -------------------------------------------
loadingDetails: false,
loadingPokemons: false,
searchingPokemon : false, // --> indica que el loading es por la busqueda
}





export default function reducer(state = initialState, action){


}