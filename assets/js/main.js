function convertPokemonToHtml(pokemon){
    return `<li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            
            <img src=".." alt="${pokemon.name}"
        </div>
    </li>
    `
}

const pokemonOL = document.getElementById("pokemonList")

PokeApi.getPokemons().then((pokemons = []) => {
    pokemonOL.innerHTML += pokemons.map(convertPokemonToHtml).join('')
})