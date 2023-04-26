console.log("Hello Pokemon World");

let actualPage; // per gestire le pagine

// PokeService.getNextPokemon(actualPage).then(pokemon => {
//     actualPage = pokemon;
//     console.log(actualPage);
// }).catch (err => {
//     console.log("Unable to get the pokemon")
// });

loadNextPage();

function loadNextPage(){
    PokeService.getNextPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        console.log(actualPage);
    }).catch (err => {
        console.log("Unable to get the pokemon")
    });
}

function loadPreviousPage(){
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        console.log(actualPage);
    }).catch (err => {
        console.log("Unable to get the pokemon")
    });
}