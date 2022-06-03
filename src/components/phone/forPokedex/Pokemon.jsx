import React, { useState, useEffect } from 'react';
import { getAllPokemon } from './Pokeservice';
import PokeCard from './Card';
import PokeNavbar from './Navbar';
import { getPokemon } from './Pokeservice';
import { Box, Flex, Button, Stack, Skeleton } from '@chakra-ui/react';

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
  let bg = 'bug';
  return (
    <>
      <PokeNavbar />
      {!loading
        ? 	
        <Box
          className="HalA"
          bgColor="blue.200"
          h={'110%'}
          w={'100%'}
          padding="30px"
        >
          {pokemonData.map((pokemon, i) => {
            return <PokeCard key={i} pokemon={pokemon} />;
          })}
          <Flex justifyContent={"space-between"}>
            <Button marginTop={"10px"} bgColor={"blue.800"} color="white" onClick={prev}>Prev</Button>
            <Button marginTop={"10px"} bgColor={"blue.800"} color="white" onClick={next}>Next</Button>
          </Flex>
        </Box>
          
        : (
        <Box
          className="HalA"
          bgColor="blue.200"
          h={'110%'}
          w={'100%'}
          padding="30px"
        >
          <Stack>
            <Skeleton height="44px" />
            <Skeleton height="44px" />
            <Skeleton height="44px" />
            <Skeleton height="44px" />
            <Skeleton height="44px" />
            <Skeleton height="44px" />
          </Stack>
        </Box>
        )
        }
    </>
  );
}

{/*
<Box
  className="HalA"
  bgColor="blue.200"
  h={'110%'}
  w={'100%'}
  padding="30px"
>
  {pokemonData.map((pokemon, i) => {
    return <PokeCard key={i} pokemon={pokemon} />;
  })}
  <Flex justifyContent={"space-between"}>
    <Button marginTop={"10px"} bgColor={"blue.800"} color="white" onClick={prev}>Prev</Button>
    <Button marginTop={"10px"} bgColor={"blue.800"} color="white" onClick={next}>Next</Button>
  </Flex>
</Box> */}

export default Pokemon;
