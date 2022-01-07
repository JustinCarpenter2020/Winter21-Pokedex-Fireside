import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonService{
 async catch(id) {
    const res = await sandboxApi.post('JBalvin/pokemon', ProxyState.active)
    ProxyState.myPokemon = [...ProxyState.myPokemon, res.data]
  }
  
}


export const myPokemonService = new MyPokemonService()