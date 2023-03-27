"use strict";

window.addEventListener("load", initApp);

console.log("JS kører");

async function initApp() {
  console.log("iniApp is running");
  const pokemon = await getData();
  pokemon.forEach(showPokemonList);

  // const wattrel = await fetchJsonAboutPokemon(
  // "https://raw.githubusercontent.com/PalleGregersJensen/Pokemon-projekt/main/data/wattrel.json"
  // );
  // const groudon = await fetchJsonAboutPokemon(
  // "https://raw.githubusercontent.com/OliKirk/Poke-Project-Object/main/data/pok%C3%A9mon.json?token=GHSAT0AAAAAAB6HFM3GYO32IIUDC3EB52NIZA4F3ZA"
  // );

  // const sunflora = await fetchJsonAboutPokemon(
  // "https://raw.githubusercontent.com/sebbex1337/Pokemon-app/main/sunflora.json"
  // );

  // console.log(wattrel);
  // console.log(groudon);
  // console.log(sunflora);
  // showPokemonList(wattrel);
  // showPokemonList(groudon);
  showPokemonList(pokemon);
}

async function getData(url) {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = await response.json();
  return data;
}

function showPokemonList(pokemon) {
  const html =
    /*html*/
    `<table>
        <tr>
          <td>${pokemon.name}</td>
          <td><img src="${pokemon.image}"></td>
          <td>${pokemon.dexindex}</td>
          <td>${pokemon.type}</td>
        </tr>
     `;

  document.querySelector("#pokemons").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#pokemons table:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon) {
  console.log(pokemon);
  // document.querySelector("#dialog_window").showModal();
  // change elements in dialog
  document.querySelector("#dialog-name").textContent = pokemon.name;
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog-weight").textContent = pokemon.description;
  document.querySelector("#dialog-height").textContent = pokemon.height;
  document.querySelector("#dialog-weight").textContent = pokemon.weight;
  document.querySelector("#dialog-ability").textContent = pokemon.abilty;
  document.querySelector("#dialog-gender").textContent = pokemon.gender;
  document.querySelector("#dialog-footprint").textContent = pokemon.footprint;
  document.querySelector("#dialog-canEvolve").textContent = pokemon.canEvolve;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-generation").textContent = pokemon.generation;
  document.querySelector("#dialog_window").showModal();
}

// -------------Elementer, der fremhæves via textContent i Potter-app------
// document.querySelector("#dialog-birthday").textContent = character.dateOfBirth;
// document.querySelector("#dialog-species").textContent = character.species;
// document.querySelector("#dialog-gender").textContent = character.gender;
// document.querySelector("#dialog-ancestry").textContent = character.ancestry;
// document.querySelector("#dialog-eyecolor").textContent = character.eyeColour;
// document.querySelector("#dialog-haircolor").textContent = character.hairColour;
// document.querySelector("#dialog-wand").textContent = character.wand;
// document.querySelector("#dialog-patrous").textContent = character.patronus;
// document.querySelector("#dialog-hogwartsStudent").textContent =character.hogwartsStudent;
// document.querySelector("#dialog-hogwartsStaff").textContent =character.hogwartsStaff;
// document.querySelector("#dialog-actor").textContent = character.actor;
// document.querySelector("#dialog-alive").textContent = character.alive;

// -----Wattrel properties--------------
/* <li>Dexindex: ${pokemon.dexindex}</li> */
// <li>Type: ${pokemon.type}</li>
// <li>Subtype: ${pokemon.subtype}</li>
// <li>Weaknesses: ${pokemon.weaknesses}</li>
// <li>Gender: ${pokemon.gender}</li>
// <li>Weight: ${pokemon.weight}</li>
// <li>Height: ${pokemon.height}</li>
// <li>Generation: ${pokemon.generation}</li>
// <li>Gameversion: ${pokemon.spilversion}</li>
// <li>Can evolve: ${pokemon.canEvolve}</li>
// <li>HP: ${pokemon.statsHP}</li>
// <li>Attack: ${pokemon.statsAttack}</li>
// <li>Defense: ${pokemon.statsDefence}</li>
// <li>Special attack: ${pokemon.statsSpecialAttack}</li>
// <li>Special defence: ${pokemon.statsSpecialDefence}</li>
//  <li>Speed: ${pokemon.statsSpeed}</li>

// --------Datamodel for Pokemon er som følger:
// name: tekst
// description: tekst
// ability: tekst
// image: url
// footprint: url (til et andet billede)
// dexindex: tal
// type: tekst – begrænset til: fire, ice, flying, etc …
// subtype: tekst
// weaknesses: tekst – en kommasepareret liste over types
// gender: tekst: male eller female
// weight: tal – vægt i gram
// height: tal – højde i cm
// generation: tal
// spilversion: tekst
// canEvolve: boolean
// statsHP: tal 0-10
// statsAttack: tal 0-10
// statsDefence: tal 0-10
// statsSpecialAttack: tal 0-10
// statsSpecialDefence: tal 0-10
// statsSpeed: 0-10
// properties kan være null eller undefined,
// men alle skal være der, og have den type der er angivet -
// altså, string, number, boolean, etc.eller null / undefined

// const wattrel = {
// name: "Wattrel",
// description:
// "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them",
// ability: "volt absorb, wind power",
// image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/940.png",
// footprint: undefined,
// dexindex: 940,
// type: "electric, flying",
// subtype: undefined,
// weaknesses: "ice, rock",
// gender: "male/female",
// weight: 3600,
// height: 40,
// generation: undefined,
// spilversion: undefined,
// canEvolve: true,
// statsHP: 2,
// statsAttack: 2,
// statsDefence: 2,
// statsSpecialAttack: 3,
// statsSpecialDefence: 2,
// statsSpeed: 3,
// };

// const ron = await showPokemon(
// "https://raw.githubusercontent.com/PalleGregersJensen/Pokemon-projekt/main/wattrel.json"
// );

// console.log(ron);
// showCharacter(ron);

// const severus = await showPokemon(
// "https://raw.githubusercontent.com/PalleGregersJensen/Pokemon-projekt/main/wattrel.json"
// );
// console.log(severus);
// showCharacter(severus);
// }

// function showList() {
// const list =
/*html*/
// `<table>
// <tr>
// <th>Name</th>
// <th>Dexindex</th>
// <th>Type</th>
// </tr>
// <tr>
// <td></td>
// </tr>
//  `;

// document
// .querySelector("#table_of_pokemons")
// .insertAdjacentHTML("beforeend", list);
// }
