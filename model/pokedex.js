class PokeDex{

    constructor (pokemonArray = []){
        this.pokemonArray = pokemonArray
    }

    addPokemon(pokemon){
       this.pokemonArray.push(pokemon);  
    }

}