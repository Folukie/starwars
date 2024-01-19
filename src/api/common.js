import axios from 'axios'

const baseURL = 'https://swapi.dev/api/'

export const Axios = axios.create({ baseURL })
