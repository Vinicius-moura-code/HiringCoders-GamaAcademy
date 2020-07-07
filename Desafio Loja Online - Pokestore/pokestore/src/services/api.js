import axios from 'axios';

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemona'});
//const myPoke = axios.get({baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=410&limit=21'});

export default api;