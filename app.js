console.log("Hello Pokemon World");

PokeService.getAllPokemon().then(pokemon => {
    console.log(pokemon);
}).catch (err => {
    console.log("Unable to get the pokemon")
});