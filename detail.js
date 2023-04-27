const urlSearchParams = new URLSearchParams(window.location.search);

const pokemonName = urlSearchParams.get('pokemon');

PokeService.getDetail(pokemonName).then(pokemon => {
    console.log(pokemon);
})