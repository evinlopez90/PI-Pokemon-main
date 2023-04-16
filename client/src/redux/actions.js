import axios from 'axios';

// --- URL API PI POKEMONS ---





// --- Action Types ---
export const GET_POKEMONS = 'GET_POKEMONS';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_TYPE = 'FILTER_TYPE';
export const ALFABETICO = 'ALFABETICO';
export const SORT_ATTACK = 'SORT_ATTACK';
export const RESET_DETAILS = 'RESET_DETAILS';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const DEFAULT = 'DEFAULT';
export const CREATE_OR_API = 'CREATE_OR_API';
export const HP = 'HP';

// --- Action Creators -------------------------------------
export const CREATE_POKEMON = 'CREATE_POKEMON';

// --- Action Errors -------------------------------------
export const ERROR_CREATED_POKEMON = 'ERROR_CREATE_POKEMON';
export const ERROR_SEARCH_POKEMON = 'ERROR_SEARCH_POKEMON';
export const ANULADORA = 'ANULADORA';


// --- Action Loadding -------------------------------------



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


export function getPokemonsDetail (id){
    
    return function (dispatch){ 
        axios.get(`http://localhost:3096/pokemons/${id}`)
        .then(response => {
            dispatch({
                type: GET_POKEMON_DETAILS,
                payload: response.data, // recibe un Objeto 
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
                payload: "No existe ese nombre"
                });
        });
    }
}




export function resetDetail(){
    return {
        type: RESET_DETAILS,
        payload: null,
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
export function alfabetico (order){
    return {
        type: ALFABETICO,
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
 
  export function createOrApi (value) {
   return (dispatch) => dispatch({
        type: CREATE_OR_API,
        payload: value
    })
}

 
export function setDefault (value) {
    return (dispatch) => dispatch({
         type: DEFAULT,
         payload: value
     })
 }

 export function anuladora () {
    return (dispatch) => dispatch({
         type: ANULADORA
     })
 }

 export function vida (value) {
    return (dispatch) => dispatch({
         type: HP,
         payload: value
     })
 }


