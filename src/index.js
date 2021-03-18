import racoonTemplate from './templates/racoonsTemplate.hbs';
import pokemonTemplate from './templates/pokemonTemplate.hbs';
import racoonsDB from './dataBases/racoonsBase.js';
import pokemon from './dataBases/pokemon.json';
import pokemon2 from './dataBases/pokemon2.json';
import pokemon3 from './dataBases/pokemon3.json';
import css from './css/style.css';

// console.log(racoonTemplate); //function
// console.log(racoonsDB); //object

const markup = racoonTemplate(racoonsDB);
// console.log(markup); //разметка

// document.body.innerHTML = markup;
console.log(pokemon); //pokemon
const pokemonRender = function (pokemon) {
  let { name, moves, sprites, weight } = pokemon;
  // console.log(name, moves, sprites['back_default'], weight);

  document.body.innerHTML += `<article class="card${name}">
  <h2>${name}</h2>
  <p>weight: ${weight}kg</p>
  <ul class="moves-list"></ul>
  <article>`;

  moves.forEach(el => {
    document
      .querySelector(`.card${name} .moves-list`)
      .insertAdjacentHTML('beforeend', `<li>${el.move.name} </li>`);
  });

  document
    .querySelector(`.card${name} `)
    .insertAdjacentHTML(
      'afterbegin',
      `<img src="${sprites.back_default} " /><img src="${sprites.front_default} " />`,
    );
};
document.body.insertAdjacentHTML('beforebegin', pokemonTemplate(pokemon));
document.body.insertAdjacentHTML('beforebegin', pokemonTemplate(pokemon2));
document.body.insertAdjacentHTML('beforebegin', pokemonTemplate(pokemon3));

pokemonRender(pokemon);
pokemonRender(pokemon2);
pokemonRender(pokemon3);

document.querySelectorAll('article').forEach(el => {
  el.addEventListener('click', e => {
    // e.currentTarget.style.height = 'auto';
    e.currentTarget.classList.toggle('is-open');
  });
});
