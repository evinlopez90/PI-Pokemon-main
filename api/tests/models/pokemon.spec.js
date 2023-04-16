const { Pokemons, conn } = require('../../src/db.js');
const { expect, assert } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemons.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemons.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });



      it('should create the Pokemon if all required properties are ok', async () => {
            const pokemon = await Pokemons.create({
              name: 'Charmander',
              hp: 100,
              attack:200,
              defense: 150,
              speed:150,
              height: 78, 
              weight: 100,
            });
            expect(pokemon.toJSON()).to.have.own.property('name');
            expect(pokemon.toJSON().name).to.equal('Charmander');
        });

      
    

    
    });
  });

});