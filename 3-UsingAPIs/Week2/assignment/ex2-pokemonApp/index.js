// import { error } from "../../../../node_modules/@actions/core";

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(selectElement) {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemonsData = data.results;
   
    pokemonsData.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    })

    selectElement.addEventListener('change', (event) => {
      const selectedPokemonUrl = event.target.value;
      const imageElement = document.querySelector('#pokemon-image');
      fetchImage(selectedPokemonUrl, imageElement);
    })
    
  } catch (error) {
    console.error('Error populating Pokemon list:', error);
  }
}

async function fetchImage(pokemonUrl, imgElement) {
  try {
    const pokemonData = await fetchData(pokemonUrl);
    imgElement.src = pokemonData.sprites.front_default;
    imgElement.alt = pokemonData.name;
    return imgElement;
    
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

async function main() {

  const body = document.querySelector('body');
  body.innerHTML = String.raw`
    <div id="container">
      <button id="get-pokemon">Get Pokemon</button>
      <select id="pokemons-list">
      </select>
      <img id="pokemon-image">
    </div>`

  const selectElement = document.querySelector('#pokemons-list');
  const getPokemonBtn = document.querySelector('#get-pokemon');

  getPokemonBtn.addEventListener('click', () => fetchAndPopulatePokemons(selectElement))
  
}

window.addEventListener('load', main);

