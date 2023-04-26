console.log("Hello Pokemon World");

let actualPage; // per gestire le pagine

PokeService.getNextPokemon(actualPage).then(pokemon => {
    console.log(pokemon);
}).catch (err => {
    console.log("Unable to get the pokemon")
});