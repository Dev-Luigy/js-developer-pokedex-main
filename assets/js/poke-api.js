const PokeApi = {}


function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.order

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const [type] = types

    pokemon.types =types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    return pokemon
};

PokeApi.getPokemonsDetail = (pokemon) =>{
    return fetch(pokemon.url)
            .then(response => response.json())
            .then(convertPokeApiDetailToPokemon)
};

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(PokeApi.getPokemonsDetail))
        .then(detailRequest => Promise.all(detailRequest))
        .then(pokemonsDetails => {
            return pokemonsDetails
        })
}