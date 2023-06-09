const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemons = require("./pokemons.js")
const types = require("./types.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', Pokemons)
router.use("/types", types)

module.exports = router;
