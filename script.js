const getPika = document.getElementById("pika");
        const result = document.getElementById("result");
        getPika.addEventListener('click', async() => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
                method: "GET"
            })  
            const json = await response.json();
            const idPokemon = json.id;
            const pikaName = json.name;
            const pikaPic = json.sprites.front_default;
            const pokemonType = +json.types[0].type.name;
            const pokeName = document.createElement("p");
            const pokePic = document.createElement("img");
            const pokeType = document.createElement("p");

            pokeName.innerHTML = idPokemon + ": " +pikaName;
            pokePic.src = pikaPic; 
            pokeType.innerHTML ="Type: " + pokemonType;

            result.append(pokeName);
            result.append(pokePic);
            result.append(pokeType);
        })
