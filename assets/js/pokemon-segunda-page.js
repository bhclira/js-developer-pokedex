const pokemonSegundaPage = documento.querySelector('.pokemon-segunda-page');
const pokedex = document.querySelector('.pokedex');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const api = 'https://pokeapi.co/api/v2';

async function getPokemonSpecies(pokemonId, info, gender) {
        const response = await fetch(`${api}pokemon-species${pokemonId}`)

        if (info == 'egg_groups') {
            const data = await response.json()
            .then(dataSpecie => dataSpecie.egg_groups.map(eggs => eggs.name).join(', '))

            return '${data}'

        } else if (info == 'specie') {
            const data = await response.json()
            .then(genera => genera.genera[7].genus)
            return '${data}'

        } else {
            const data = await response.jason()
            .then(gender => gender.gender_rate)

        }
       
}
