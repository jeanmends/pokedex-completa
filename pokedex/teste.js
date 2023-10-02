var offSet = 0;
var pokemonColor;
function fetchPokemonData(pokemon){
  let erro = document.getElementById("erro");
  erro.innerHTML = '';
 
    let urlGeral = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(urlGeral)
      .then(response => response.json())
      .then(function(pokeData){
        let pokemons = pokeData.results;
        console.log(pokemons);

        pokemons.forEach((pokemon) => {
          const {name,url} = pokemon;
          //const lugar = document.getElementById("imagens");
          
            fetch(url)
            .then(response => response.json())
            .then(function(pokemonDetalhe){
                const {front_default} = pokemonDetalhe.sprites;
                const lugar = document.getElementById("imagens"); 
                const divGeral = document.createElement("div");
                const pokemonId = pokemonDetalhe.id;

                const types = pokemonDetalhe.types.map((typeSlot) => typeSlot.type.name)
                const [type] = types
                  console.log(types);
                  //console.log(type);
                //console.log(pokemonId);
                divGeral.classList.add("geral");
                let tipo = '';
                for (let i = 0;i < types.length; i++){
                  //console.log(type[i]);
                  if (types[i] === "grass"){
                    tipo += `<span class='grass tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "poison"){
                    tipo += `<span class='poison tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "fire"){
                    tipo += `<span class='fire tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "flying"){
                    tipo += `<span class='flying tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "water"){
                    tipo += `<span class='water tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "bug"){
                    tipo += `<span class='bug tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "normal"){
                    tipo += `<span class='normal tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "fighting"){
                    tipo += `<span class='fighting tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "electric"){
                    tipo += `<span class='electric tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "ground"){
                    tipo += `<span class='ground tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "psychic"){
                    tipo += `<span class='psychic tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "rock"){
                    tipo += `<span class='rock tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "ice"){
                    tipo += `<span class='ice tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "dragon"){
                    tipo += `<span class='dragon tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "ghost"){
                    tipo += `<span class='ghost tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "dark"){
                    tipo += `<span class='dark tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "steel"){
                    tipo += `<span class='steel tipo-geral'> ${types[i]} </span>`
                  }else if (types[i] === "fairy"){
                    tipo += `<span class='fairy tipo-geral'> ${types[i]} </span>`
                  }
                   
                }
                /*
                types.forEach((ty) =>
                   
                  tipo += `<span> ${ty} </span>`
                );
                */
                
                divGeral.innerHTML = `
                <h6 class='pokemon-number'>#${('0000'+pokemonId).slice(-4)}</h6>
                <h1>${name}</h1>
                <img src='${front_default}'>
                <p class='tipagem'>${tipo}</p>
                `

                
                //divGeral.append(tipo);
                //divGeral.style.backgroundColor = "red";
                lugar.append(divGeral);
        
            })
        
          
        })
      })
    }

fetchPokemonData();

const carregarMais = document.getElementById("carregar-mais");

carregarMais.addEventListener("click", function(){
  offSet += 10;
  fetchPokemonData();
  
})

const carregarTodos = document.getElementById("carregar-todos");

carregarTodos.addEventListener("click",()=>{
  let lugar = document.getElementById("imagens"); 
  lugar.innerHTML = '';
  offSet = 0;
  fetchPokemonData();
})


/*



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
/*
let n = 1
var zerofilled = ('0000'+n).slice(-4);
console.log(zerofilled)
*/