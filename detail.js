const urlSearchParams = new URLSearchParams(window.location.search);

const pokemonName = urlSearchParams.get('pokemon');

// PokeService.getDetail(pokemonName).then(pokemon => {
//     console.log(pokemon);
// })

/*NEW*/ 

PokeService.getDetail(pokemonName).then(pokemon => {

    const newPokemon  = createNewPokemon(pokemon);
    console.log(pokemon);
    displayName(pokemon);
    displaySprite(pokemon);
    displayTypes(newPokemon);
    displayDexNumber(pokemon);
    displayHeight(pokemon);
    displayWeight(pokemon);
    displayStats(newPokemon);
})

function displayName(pokemon){ // displayPokemon
    // console.log(pokemon.name);
    const container = document.getElementById('pokemon-Name');
    const pokeName = document.createTextNode(`${pokemon.name}`);
    container.appendChild(pokeName);
}

function displayStats(pokemon){
    const statsContainer = document.getElementById('pokemon-stats')
    for (const stat of pokemon.stats){
        statsContainer.innerHTML += `<li>${stat.name} : ${stat.baseValue}</li>`
    }
}

function displayTypes(pokemon){
    const typesContainer = document.getElementById('pokemon-types')
    for (let i = 0; i < pokemon.types.length; i++) {
        const type = pokemon.types[i];
        typesContainer.innerHTML += `<li> TYPE ${i+1} : <a href="./type.html?typeUrl=${type.url}">${type.name}</a></li>`
    }
}

function displayHeight(pokemon){
    const container = document.getElementById('pokemon-Page');
    container.innerHTML += `
                <div>
                    <span>
                        <h1>
                        HT : ${pokemon.height *10} cm
                        </h1>
                    </span>
                </div>
        ` 
}
function displayWeight(pokemon){
    const container = document.getElementById('pokemon-Page');
    container.innerHTML += `
                <div>
                    <span>
                        <h1>
                        WT : ${pokemon.weight /10} Kg
                        </h1>
                    </span>
                </div>
        ` 
}

function displayDexNumber(pokemon){
    const container = document.getElementById('pokemon-Page');
    container.innerHTML += `
                <div>
                    <span>
                        <h1>
                          No. ${pokemon.id}
                        </h1>
                    </span>
                </div>
        ` 
}

function displaySprite(pokemon){
    const container = document.getElementById('pokemon-Page');
    container.innerHTML += `
                <div>
                    <span>
                        <h1>
                        <img src="${pokemon.sprites./*official-artwork.*/front_default}" alt="">
                        </h1>
                    </span>
                </div>
        ` 
}

/*NEW*/

function createNewPokemon(pokemonObject){
    const myPokemon = new Pokemon(pokemonObject.name)
    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i]; 
        myPokemon.addStat(statObject.stat.name, statObject.base_stat)
    }
    for (let i = 0; i < pokemonObject.types.length; i++) {
        const typeObject = pokemonObject.types[i];
        myPokemon.addType(typeObject.type.name, typeObject.type.url);
        console.log(typeObject);
    }
    return myPokemon;
}
