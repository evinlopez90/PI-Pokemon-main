import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { useSelector } from 'react-redux';


describe("Componente Detail", () => {
    test('Tiene que renderizar un H2 con el nombre del pokemon', () => {
        let pokemons = useSelector((state) => state.pokemonDetails)

        
    })
    
} )