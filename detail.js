const urlSearchParams = new URLSearchParams(window.location.search);

const pokemonName = urlSearchParams.get('pokemon');

// PokeService.getDetail(pokemonName).then(pokemon => {
//     console.log(pokemon);
// })

/*NEW*/ 

PokeService.getDetail(pokemonName).then(pokemon => {
    console.log(pokemon);
    displayName(pokemon);
    displayHeight(pokemon);
    displayWeight(pokemon);
    displayDexNumber(pokemon);
    displaySprite(pokemon)
})

function displayName(pokemon){
    // console.log(pokemon.name);
    const container = document.getElementById('pokemon-Name');
    container.innerHTML =``;
    const pokeName = document.createTextNode(`${pokemon.name}`);
    container.appendChild(pokeName);
}

function displayHeight(pokemon){
    const container = document.getElementById('pokemon-Page');
    container.innerHTML =``;
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
                        <img src="${pokemon.sprites.front_default}" alt="">
                        </h1>
                    </span>
                </div>
        ` 
}

/*NEW*/
