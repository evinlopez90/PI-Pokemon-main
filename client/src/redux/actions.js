import axios from 'axios';
require('dotenv').config();

// --- URL API PI POKEMONS ---





// --- Action Types ---
export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_POKEMON = 'FILTER_POKEMON';
export const RESET_FILTER_ORDER = 'RESET_FILTER_ORDER';
export const RATING = 'RATING';
export const SORT_ATTACK = 'SORT_ATTACK';
export const RESET_DETAILS = 'RESET_DETAILS';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const MODIFY_PAGE = 'MODIFY_PAGE';
export const TOP_PAGE = 'TOP_PAGE';
export const BOTTOM_PAGE = 'BOTTOM_PAGE';

// --- Action Creators -------------------------------------
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RESET_CREATED_POKEMON = 'RESET_CREATED_POKEMON';
export const RESET_SEARCH_POKEMON = 'RESET_SEARCH_POKEMON';
export const RESET_DETAILS_POKEMON = 'RESET_DETAILS_POKEMON';
// --- Action Errors -------------------------------------
export const ERROR_CREATED_POKEMON = 'ERROR_CREATE_POKEMON';
export const ERROR_SEARCH_POKEMON = 'ERROR_SEARCH_POKEMON';
export const ERROR_GET_POKEMONS = 'ERROR_GET_POKEMONS';

// --- Action Loadding -------------------------------------
export const LOADING_DETAILS = 'LOADING_DETAILS';
export const LOADING_POKEMONS = 'LOADING_POKEMONS';
export const LOADING_SEARCH = 'LOADING_SEARCH';


//  loading pokemons
export function getPokemons(){
    
    return function (dispatch){ 
        axios.get("http://localhost:3096/pokemons")
        .then(response => {
            dispatch({
                type: GET_POKEMONS,
                payload: response.data, // recibe un arreglo de pokemons
            });

        }) // error del BACK
        .catch(error => {
            console.log("Error coneccion BACK");
        });
    }
}




//  loading TYPES
export function getTypes(){
    
    return function (dispatch){ 
        axios.get("http://localhost:3096/types")
        .then(response => {
            // ordenamiento alfabetico de los types
            response.data.sort(function (a, b) {
                return a.name.localeCompare(b.name);}); //
            dispatch({
                type: GET_TYPES,
                payload: response.data, // recibe un arreglo de pokemons
            })
        })// cacth generar un dispatch un error
        .catch(error => {
            console.log("Error coneccion BACK");
        });        
    }
}



export function createPokemon(newPokemon){
    return function (dispatch){ 
        axios.post("http://localhost:3096/pokemons", newPokemon)
        .then(response => {
                    dispatch({
                        type: CREATE_POKEMON,
                        payload: response.data, // recibe pokemon creado
                    });
        })// cacth generar un dispatch un error
        .catch(error => {
            dispatch({
                 type: ERROR_CREATED_POKEMON,
                 payload: error.response.data.error, // recibe error
             });           
        });
    }
}



export function resetCreatedPokemon(){
    return {
        type: RESET_CREATED_POKEMON,
        payload: false,
    }
}


export function resetSearchPokemon(){
    return {
        type: RESET_SEARCH_POKEMON,
        payload: false,
    }
}



//  search by name
export function searchPokemon(searchName){
    
    return function (dispatch){ 
        axios.get("http://localhost:3096/pokemons?name=" + searchName)
        .then(response => {
            dispatch({
                type: SEARCH_POKEMON,
                payload: response.data, // recibe .... un objeto pokemon 
                });

        })// cacth generar un dispatch un error
        .catch(error => {
            dispatch({
                type: ERROR_SEARCH_POKEMON,
                });
        });
    }
}


export function loadingDetailsSet(value){
    return{
        type: LOADING_DETAILS,
        payload: value,
    }
}



export function loadingPokemonsSet(value){
        return{
            type: LOADING_POKEMONS,
            payload: value,
        }
}


export function loadingSearchSet(){
    return{
        type: LOADING_SEARCH,
    }
}



// reset Order Filter
export function resetFilterOrder(){
    return {
        type: RESET_FILTER_ORDER,
        payload: null,
    }
}




// order by NAME
export function rating(order){
    return {
        type: RATING,
        payload: order,
    }
};


// order by ATTACK
export function sortAttack(order){
    return {
        type: SORT_ATTACK,
        payload: order,
    }
};


export function filterByType(type){
    return {
        type: FILTER_TYPE,
        payload: type,
    }
};


export function filterByPokemon(pokemonType){
    return {
        type: FILTER_POKEMON,
        payload: pokemonType,
    }
};