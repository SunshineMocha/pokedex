class PokeService{

    static api_URL = 'https://pokeapi.co/api/v2/pokemon';

    static getNextPokemon(page){
        if (page) {
            
        } else {
            return fetch(this.api_URL).then(resp => resp.json());
        }
    }
    
}