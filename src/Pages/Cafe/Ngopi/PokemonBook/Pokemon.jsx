import React, { useState, useEffect } from 'react';
import { getAllPokemon } from './Pokeservice';
import PokeCard from './Card';
import PokeNavbar from './Navbar';
import { getPokemon } from './Pokeservice';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import HTMLFlipBook from 'react-pageflip';

function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  var pokeSliceA = pokemonData.slice(0, 5);
  var pokeSliceB = pokemonData.slice(5, 10);
  var pokeSliceC = pokemonData.slice(10, 15);
  var pokeSliceD = pokemonData.slice(15, 20);
  return (
    <>
      <PokeNavbar />

      <Box display={'flex'}>

          <>
            <Button
              pos={'absolute'}
              margin="auto"
              zIndex={10}
              left="0"
              right={'0'}
              w="100px"
              top={'30%'}
              transform="translateX(-400px)"
              filter="drop-shadow(3px 3px #222)"
              onClick={prev}
            >
              Prev
            </Button>
            <Button
              pos={'absolute'}
              margin="auto"
              zIndex={10}
              left="0"
              right={'0'}
              w="100px"
              top={'30%'}
              transform="translateX(400px)"
              filter="drop-shadow(3px 3px #222)"
              onClick={next}
            >
              Next
            </Button>

            <Box
              className="HalA"
              bgColor="white"
              h={'700px'}
              w={'200px'}
              padding="30px"
            >
              {pokeSliceA.map((pokemon, i) => {
                return <PokeCard key={i} pokemon={pokemon} />;
              })}
            </Box>
            <Box
              className="HalA"
              bgColor="white"
              h={'700px'}
              w={'200px'}
              padding="30px"
            >
              {pokeSliceB.map((pokemon, i) => {
                return <PokeCard key={i} pokemon={pokemon} />;
              })}
            </Box>
            <Box
              className="HalA"
              bgColor="white"
              h={'700px'}
              w={'200px'}
              padding="30px"
            >
              {pokeSliceC.map((pokemon, i) => {
                return <PokeCard key={i} pokemon={pokemon} />;
              })}
            </Box>
            <Box
              className="HalA"
              bgColor="white"
              h={'700px'}
              w={'200px'}
              padding="30px"
            >
              {pokeSliceD.map((pokemon, i) => {
                return <PokeCard key={i} pokemon={pokemon} />;
              })}
            </Box>
          </>
        
      </Box>
    </>
  );
}

export default Pokemon;
