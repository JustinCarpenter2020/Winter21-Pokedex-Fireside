import { MyPokemonController } from "./Controllers/MyPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  valuesController = new ValuesController();

  wildPokemonController = new WildPokemonController()

  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
