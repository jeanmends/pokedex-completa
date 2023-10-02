/*
function fetchPokemonData(pokemon){
    let url = 'https://pokeapi.co/api/v2/pokemon/' // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
        let pokemons = pokeData.results;
        console.log(pokemons);
        pokemons.forEach((pokemon) => {
          const {name,url} = pokemon;
          let listaPokemon = document.getElementById("lista");

          let li = document.createElement("li");
          li.classList.add('link-pokemon');
          li.innerHTML = name;
          listaPokemon.append(li);
          console.log(name);
          console.log(url);

        })
      })
    }

fetchPokemonData();

function detalhePokemon(urlPokemon,pokemonName){
    fetch(urlPokemon)
    .then(response => response.json())
    .then(function(pokemonDetalhe){
        const {front_default} = pokemonDetalhe.sprites;
        const lugar = document.getElementById("imagens");
       // const imgs = document.createElement("div");
        lugar.innerHTML = `
        <h1>${pokemonName}</h1>
        <img src= ${front_default}>`;

    })
}



    window.addEventListener('click', function(e){   
        let pokemonsLista = document.querySelectorAll(".link-pokemon");
        for (let i = 0; i < pokemonsLista.length; i++)
        if (pokemonsLista[i].contains(e.target)){
            console.log(pokemonsLista[i].innerHTML);
            detalhePokemon('https://pokeapi.co/api/v2/pokemon/'+(i+1),pokemonsLista[i].innerHTML);
        } else{

        }
      });
*/