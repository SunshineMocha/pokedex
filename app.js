// console.log('hello pokemon!!!')

let pokemonCollection = new PokeDex();

let actualPage;

// PokeService.getNextPokemon(actualPage).then(pokemon => {
//     actualPage = pokemon;
//     console.log(actualPage);
// })

loadNextPage();

displayPokeDex();

function loadNextPage(){
    if (actualPage !== undefined && actualPage.next === null) {
        return;
    }
    PokeService.getNextPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        console.log(actualPage);
        addPokeData(actualPage.results);
        displayPokeDex();
    })
}

function loadPreviousPage(){
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage => {
        actualPage = pokemonPage;
        console.log(actualPage);
        addPokeData(actualPage.results);
        displayPokeDex();
    })
}

function addPokeData(data){

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const newPokemon = new Pokemon(element.name);
        pokemonCollection.addPokemon(newPokemon);

    }
}

function displayPokeDex(){
    const container = document.getElementById('pokedex-container');
    container.innerHTML =``;
    for(let i = 0; i < pokemonCollection.pokemonArray.length; i++) {
        const pokemon = pokemonCollection.pokemonArray[i];
        container.innerHTML += `
                <div>
                    <span>${pokemon.name}</span>
                </div>
        ` 
    }
}