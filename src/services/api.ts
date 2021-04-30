import api from 'axios'

export const apiRequest = api({
  baseURL: process.env.URL_POKEMON
})
