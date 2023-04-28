const urlSearchParams = new URLSearchParams(window.location.search);

const typeUrl = urlSearchParams.get('typeUrl');

console.log(typeUrl);

PokeService.getType(typeUrl).then(typeObj => {
    console.log(typeObj);
})