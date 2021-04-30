import axios from 'axios'

export const apiRequest = axios.create({
  baseURL: process.env.URL_POKEMON
})
