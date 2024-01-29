"use strict";

var offset = 0;
var limit = 10;
var url = "https://pokeapi.co/api/v2/pokemon?offset=".concat(offset, "&limit=").concat(limit);

function convertPokemonToHtml(pokemon) {
  return "<li class=\"pokemon\">\n        <span class=\"number\">#001</span>\n        <span class=\"name\">".concat(pokemon.name, "</span>\n        \n        <div class=\"detail\">\n            <ol class=\"types\">\n                <li class=\"type\">grass</li>\n                <li class=\"type\">poison</li>\n            </ol>\n            \n            <img src=\"..\" alt=\"").concat(pokemon.name, "\"\n        </div>\n    </li>\n    ");
}

var pokemonOL = document.getElementById("pokemonList");
fetch(url).then(function (response) {
  return response.json();
}).then(function (jsonBody) {
  return jsonBody.results;
}).then(function (pokemonList) {
  for (var i = 0; i < pokemonList.length; i++) {
    var pokemon = pokemonList[i];
    var pokemonHtml = convertPokemonToHtml(pokemon);
    pokemonOL.innerHTML += pokemonHtml;
  }
});