import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

//Making a function to produce each card and then replicate might be easier than going directly in container
const makeIndividualCards = () => {
  let IndividualCardsHtml = "";

  for (const pokemon of pokemonArray) {
    const pokemonHtml = `<div>
	  <img
		src="${pokemon.sprite}"
		alt="${pokemon.name}"
	  />
	  <div><h2>${pokemon.name}</h2><p>${pokemon.name} (#${pokemon.id})is a TBD type pokemon.</p></div>
	</div>`;

    IndividualCardsHtml += pokemonHtml;
  }
  return IndividualCardsHtml;
};
//This should make it actually appear
cardContainer.innerHTML = makeIndividualCards();


