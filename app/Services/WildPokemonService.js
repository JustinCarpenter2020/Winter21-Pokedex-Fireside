import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { pokeApi } from "./AxiosService.js"

class WildPokemonService{

  async getWildPokes(){
    const res = await pokeApi.get('pokemon?limit=100')
    console.log(res.data)
    ProxyState.wildPokes = res.data.results
  }

  async setActive(name){
    const res = await pokeApi.get('pokemon/' + name)
    ProxyState.active = new ActivePokemon(res.data)
    console.log(ProxyState.active)
  }
}


export const wildPokemonService = new WildPokemonService()