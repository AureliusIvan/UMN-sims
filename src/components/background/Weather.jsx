import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Text } from '@chakra-ui/react';

const WeatherApp = () => {
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
        // Kelvin to Fahrenheit
        // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);

        // Kelvin to Celsius
        setTemperature(response.data.main.temp - 273.15);
        // console.log(response.data);
        setDesc(response.data.weather[0].main);
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
    <Box
    height={'70px'}
    width='400px'
    bgColor={'#94e5ff'}
    display='flex'
    justifyContent={'center'}
    alignItems='center'
    fontSize={'25px'}
    >
          {/* {Math.round(temperature * 100) / 100} ℉ */}
          {Math.round(temperature * 100) / 100} ℃ - {desc}
        </Box>
    </>
  );
};

export default WeatherApp;
