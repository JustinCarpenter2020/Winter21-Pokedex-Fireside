export class ActivePokemon{
  constructor(data){
    this.id = data.id
    this.img = data.sprites.other.dream_world.front_default
    this.name = data.species.name
    this.types = data.types
  }

  get Template(){
    return ` <div class="card">
    <img class="card-img-top" src="${this.img}" alt="">
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">${this.FormatTypes}</p>
      <button class="btn btn-danger" onclick="app.myPokemonController.catch('${this.id}')">Catch</button>
    </div>
  </div>`
  }


  get FormatTypes(){
    let template = ''
    console.log(this.types)
    this.types.forEach(t => template += `${t.type.name} `)
    return template
  }
}