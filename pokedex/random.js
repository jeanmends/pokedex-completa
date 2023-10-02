//pegar um pokemon de forma alatória

function fetchPokemonRandom(pokemon){
  let erro = document.getElementById("erro");
  erro.innerHTML = '';
       let pokemonAleatorio = Math.floor(Math.random() * 1291) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}` // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
          fetch(url)
          .then(response => response.json())
          .then(function(pokeData){
            let lugar = document.getElementById("imagens"); 
            lugar.innerHTML = '';
            const divGeral = document.createElement("div");
            const{name, id} = pokeData;
            const{front_default} = pokeData.sprites;
            const types = pokeData.types.map((typeSlot) => typeSlot.type.name)
            const [type] = types
            divGeral.classList.add("geral");
            console.log(name,id, front_default,types);
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

            divGeral.innerHTML = `
            <h6 class='pokemon-number'>#${('0000'+id).slice(-4)}</h6>
            <h1>${name}</h1>
            <img src='${front_default}'>
            <p class='tipagem'>${tipo}</p>
            `

            
            //divGeral.append(tipo);
            //divGeral.style.backgroundColor = "red";
            lugar.append(divGeral);
          })
        }

let btnRandom = document.getElementById("random-pokemon");

btnRandom.addEventListener("click", function(){
    fetchPokemonRandom();
})