
import { ProxyState } from "../AppState.js"
import {wildPokemonService} from '../Services/WildPokemonService.js'

function _drawWild() {
  let template = ''
  ProxyState.wildPokes.forEach(w => template += `<button class="btn btn-success m-2" onclick="app.wildPokemonController.setActive('${w.name}')">${w.name}</button>`)
  document.getElementById('wild').innerHTML = template
}

function _drawActive() {
  document.getElementById('active').innerHTML = ProxyState.active.Template
}

export class WildPokemonController {
  constructor(){
    console.log("Controller working")
    ProxyState.on('wildPokes', _drawWild)
    ProxyState.on('active', _drawActive)
    this.getWildPokes()
  }
  async getWildPokes() {
    try {
      await wildPokemonService.getWildPokes()
    } catch (error) {
      console.error(error)
    }
  }

  async setActive(name){
    try {
      await wildPokemonService.setActive(name)
    } catch (error) {
      console.error(error)
    }
  }
}


