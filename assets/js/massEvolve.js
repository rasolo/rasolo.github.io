module.exports = function () {

    let pokemon = require('./pokemon.js');

    pokemon.list.forEach(function (pokemon) {
        let pokemonSelect = document.querySelectorAll('#pokemonSelect')[0];

        if (pokemonSelect === undefined) {
            return;
        }

        let pokemonOption = document.createElement("option");
        pokemonOption.value = pokemon.name;
        pokemonOption.text = pokemon.name;

        pokemonSelect.add(pokemonOption, null);
    });

};