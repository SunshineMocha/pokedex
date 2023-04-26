class PokeService{

    static api_URL = 'https://pokeapi.co/api/v2/pokemon';

    static getAllPokemon(){
        return fetch(this.api_URL).then(resp => resp.json());
    }

}