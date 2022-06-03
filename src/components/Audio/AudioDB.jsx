const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
  params: { s: 'daft_punk' },
  headers: {
    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
    'X-RapidAPI-Key': '978b7dd24emsh05f9bf8d01a5d90p1db7e4jsna346879037fa',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
