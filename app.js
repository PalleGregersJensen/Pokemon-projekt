// Datamodel for Pokemon er som følger:

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

"use strict";

console.log("JS kører");

const wattrel = {
  name: "Wattrel",
  description:
    "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them",
  ability: "volt absorb, wind power",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/940.png",
  footprint: undefined,
  dexindex: 940,
  type: "electric, flying",
  subtype: undefined,
  weaknesses: "ice, rock",
  gender: "male/female",
  weight: 3600,
  height: 40,
  generation: undefined,
  spilversion: undefined,
  canEvolve: true,
  statsHP: 2,
  statsAttack: 2,
  statsDefence: 2,
  statsSpecialAttack: 3,
  statsSpecialDefence: 2,
  statsSpeed: 3,
};

console.log(wattrel);

function showPokemon(pokemon) {
  const html =
    /*html*/
 `<li>Name: ${pokemon.name}</li> 
  <li><img src="${pokemon.image}"></li> 
  <li>Dexindex: ${pokemon.dexindex}</li>
  <li>Type: ${pokemon.type}</li> 
  <li>Subtype: ${pokemon.subtype}</li> 
  <li>Weaknesses: ${pokemon.weaknesses}</li>
  <li>Gender: ${pokemon.gender}</li> 
  <li>Weight: ${pokemon.weight}</li> 
  <li>Height: ${pokemon.height}</li>
  <li>Generation: ${pokemon.generation}</li> 
  <li>Gameversion: ${pokemon.spilversion}</li> 
  <li>Can evolve: ${pokemon.canEvolve}</li>
  <li>HP: ${pokemon.statsHP}</li> 
  <li>Attack: ${pokemon.statsAttack}</li>
  <li>Defense: ${pokemon.statsDefence}</li> 
  <li>Special attack: ${pokemon.statsSpecialAttack}</li> 
  <li>Special defence: ${pokemon.statsSpecialDefence}</li>
   <li>Speed: ${pokemon.statsSpeed}</li>
  `;
  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", html);
}

showPokemon(wattrel);
