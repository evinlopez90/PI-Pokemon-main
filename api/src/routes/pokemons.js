require('dotenv').config();
const {  getAllPokemons, 
         getPokemonApiById, getPokemonDbById, getPokemonApiByName,
          getPokemonsDbByName} = require("./contollers/getPokemon");
const { Router } = require('express');
const router = Router();
const { Sequelize } = require('sequelize');
const {Pokemons, Types} = require('../db.js');



router.get('/', async (req, res, next) => {

    try {       
        const {name} = req.query;
        if (name){
            // -------------------------------- consultar por name           
            // busqueda en la API externa
            let pokemonSearch = await getPokemonApiByName(name);

            // busqueda en la base de datos
            if (pokemonSearch.error){ // no encontrado en la API externa
                pokemonSearch = await getPokemonsDbByName(name); 

                if (!pokemonSearch){
                    return res.status(404).json({message: "el nombre no existe"});
                }
            }
            return res.status(200).json(pokemonSearch);
        }


        // ------------------------------------- retornar todos los pokemon
        const allPokemons = await getAllPokemons(); 
        return res.status(200).json(allPokemons);
       
    } catch (error) {
        res.json({error: "error" })
    }
});




router.get('/:idPokemon', async (req, res, next) => {
    
    try {       
        const {idPokemon} = req.params;

        if (idPokemon){
            // -------------------------------- consultar por name
            // si idPokemon es numero buscar en api externa
            let pokemonSearch = null;

            if (isNaN(idPokemon)){
                pokemonSearch = await getPokemonDbById(idPokemon);
                // busqueda en la BD
            } else {
                pokemonSearch = await getPokemonApiById(idPokemon);
                // busqueda en la API externa
            }

            // busqueda en la base de datos
            if (pokemonSearch){ // no encontrado en la API externa
                return res.status(200).json(pokemonSearch);
            }
            
        }

        return res.status(404).json({"message": "No existe el id"});
    } catch (error) {
        next(error);
    }
});



router.post('/', async (req, res, next) => {
  
    const {name, image, hp, attack, defense, speed, height, weight, types} = req.body;
    
    if (!name || !image) {
        return res.status(404).json({error : 'El name y la imagen son requeridos'});
    }

      //Verificar que el nombre este disponible.
      let pokemonSearch = await getPokemonApiByName(name);

      // busqueda en la base de datos
      if (pokemonSearch.error){ // no encontrado en la API externa
          pokemonSearch = await getPokemonsDbByName(name); }

      if (pokemonSearch){
          return res.status(400).json({ error: "El nombre ya existe" });}
       
        
        
    try {
        let obj = { 
            name,
            hp,
            attack,
            defense,
            speed,
            weight,
            height,
            image,

         }

         
        const newPokemon = await Pokemons.create(obj);

       
        types.forEach( async (T) => {
            let pokemonTypes = await Types.findAll({ where: { name: T } })
            await newPokemon.addTypes(pokemonTypes)
          })

            


        //  --------- aca agrego la relacion con Types
        return res.status(201).json(newPokemon); // pokemon creado
    }
    catch (error) {
        res.json({error: error.message})
    }
    
});


module.exports = router;