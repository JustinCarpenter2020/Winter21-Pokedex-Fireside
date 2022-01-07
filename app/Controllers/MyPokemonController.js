import { myPokemonService } from "../Services/MyPokemonService.js"

export class MyPokemonController{
  constructor(){

  }

  async catch(id){
    try {
      await myPokemonService.catch(id)
    } catch (error) {
      console.error(error)
    }
  }
}