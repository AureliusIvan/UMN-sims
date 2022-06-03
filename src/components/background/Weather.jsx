import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Image, Flex } from '@chakra-ui/react';
import { AllContext } from '../Value/CoinContext';

const WeatherApp = () => {
  const {weather, setWeather} = useContext(AllContext)
  const [temperature, setTemperature] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('Jakarta');
  const [country, setCountry] = useState('ID');

  const getWeatherData = (city, country) => {
    axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=c939e13af41e947602c5aa3c8330056f`,
    })
      .then(response => {
        console.log(response.data.main.temp);
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main);
        setWeather(response.data.weather[0].main);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    async function fetchData() {
      getWeatherData(city, country);
    }
    fetchData();
  }, []);

  return (
    <>
      <Flex
        pt={3}
        height={'70px'}
        width='100%'
        justifyContent={'center'}
        alignItems="center"
        fontSize={'20px'}
      >
        <Image w={'100px'} h='100px' src='http://openweathermap.org/img/w/02d.png'/>
          {/* {Math.round(temperature * 100) / 100} ℉ */}
          {Math.round(temperature * 100) / 100} ℃ - {desc}
      </Flex>
    </>
  );
};

export default WeatherApp;
