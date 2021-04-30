import { Pokemon } from './../domain/entities/pokemon';
import { Region } from "../domain/entities/pokemon";
import { apiRequest } from "./api";

export async function pokemonGetAll(region: Region) : Promise<Pokemon[]> {
  debugger
  var response = await apiRequest.get<Pokemon[]>(`/Pokemon?${region}`)
  return response.data
}
