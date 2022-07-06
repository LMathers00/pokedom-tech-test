import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

//Function for reading type array whether its 1 or 2 
const displayType = (type) => {
    if (type.length == 1) {
    return type[0];
    } else {return `${type[0]} & ${type[1]}`};
}
    
//Making a function to produce each card and then replicate might be easier than going directly in container
const makeIndividualCards = () => {
  let IndividualCardsHtml = "";

  for (const pokemon of pokemonArray) {
    const pokemonHtml = `<div class="card">
	  <img
		class="card__image"
		src="${pokemon.sprite}"
		alt="${pokemon.name}"
	  />
	  <div class="card__content">
		<h2 class="card__heading">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h2>
		<p class="card__text">${pokemon.name} (#${pokemon.id})
         is a ${displayType(pokemon.types)} type pokemon.</p>
	  </div>
	</div>`;

    IndividualCardsHtml += pokemonHtml;
  }
  return IndividualCardsHtml;
};

//Make it actually appear
cardContainer.innerHTML = makeIndividualCards();

//Attempting extension on separate branch not pushed to github
