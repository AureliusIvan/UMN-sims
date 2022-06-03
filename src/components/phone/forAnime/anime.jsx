import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Box, Center, Text, Image, Flex, VStack, Stack, Skeleton } from '@chakra-ui/react';
import { AllContext } from '../../Value/CoinContext';
import PokeCard from '../forPokedex/Card';

function Card(props) {
  return (
    <>
      <Flex
        margin={'10px'}
        padding="10px"
        h={'200px'}
        w="160px"
        borderRadius={'10px'}
        bgColor={'white'}
        border="1px solid gray"
        justifyContent="center"
        textAlign={'center'}
        alignItems={'center'}
        filter="drop-shadow(1px 1px 1px #222)"
      >
        <Flex
          margin={'10px'}
          h={'120px'}
          w="120px"
          borderRadius={'50%'}
          bgColor={'whiteAlpha.400'}
          justifyContent="center"
          alignContent="center"
          textAlign={'center'}
          alignItems={'center'}
        >
          <Image
            sizes="20"
            src={props.image}
            zIndex={3}
            margin={'10px'}
            borderRadius="10px"
            filter="drop-shadow(5px 5px rgb(0,0,0, .5))"
          />
          <Text
            pos={'absolute'}
            bgColor={'red.600'}
            zIndex={'5'}
            transform="translateY(-90px)"
            margin="auto"
            borderRadius="5px"
            textAlign={'center'}
            padding="5px"
            w={'110%'}
            color="white"
          >
            {props.name}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}


const AnimeApp = () => {
  const [animeData, setAnimedata] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('Jakarta');
  const [country, setCountry] = useState('ID');
  const [loading, setLoading] = useState(true);

  const getWeatherData = () => {
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/anime/1/recommendations`,
    })
      .then(response => {
        setAnimedata(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    async function fetchData() {
      getWeatherData(city, country);
    }
    setLoading(false);
    fetchData();
  }, []); 
  return (
    <>
      <Center>
        <VStack height={'auto'} width="400px" spacing={8} bgColor={'white'}>
          <Text bgColor={"red.500"} width="100%" h="40px" fontSize={"20px"} color="white" textAlign={"center"}>MY ANIME LIST</Text>
          {!loading
            ? 	animeData.map((object, i) => (
                // console.log(object.entry)
                  <Card
                    image={object.entry.images.jpg.image_url}
                    name={object.entry.title}
                  />
            ))

            : (
            <Stack>
              <Skeleton height="44px" />
              <Skeleton height="44px" />
              <Skeleton height="44px" />
              <Skeleton height="44px" />
              <Skeleton height="44px" />
              <Skeleton height="44px" />
            </Stack>
            )
              }
        </VStack>
      </Center>
    </>
  );
};

export default AnimeApp;
