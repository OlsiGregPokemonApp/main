<<<<<<< HEAD
const placeHolderValue = "empty";

fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // generating a random number based on the returned data
    // const randomPoko = Math.floor(Math.random() * data.results.length);
    // console.log(data)
    // setting values from the objects
    // const name = data.results[0].name;
    // const url = data.results[0].url;
    let optionsHtml = "";
    const dropdown = document.getElementById("dropdown");
    const firstOption = `<option value=${placeHolderValue}> --- </option>`;
    data.results.forEach((result) => {
      dropdown;
      // console.log(result.name )
      optionsHtml += `<option value="${result.url}">${result.name}</option>`;
      // console.log(dropdown)
    });
    dropdown.innerHTML = firstOption + optionsHtml;
    
  });

//  event listener onchange
const select = document.querySelector("select");
select.addEventListener("change", () => {
  const pokemonUrl = select.value;
  //   console.log(pokemonUrl);

  if (pokemonUrl !== placeHolderValue){
    fetch(pokemonUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //   console.log(name)
        const imageUrl = data.sprites.front_default;
        console.log(data.name);
        const pokemonCard = document.querySelector(".pokemonCard");
        pokemonCard.innerHTML = `<div >
      <img class="image" src=${imageUrl} alt="Photo of a ${data.name}"/>
      </div>`;
      });
  }
});
=======
// Psuedo Code

// Main Goals of App
  
  // Drop down menu with 20 pokemon(their pokedex number and name)
  
  // When selecting pokemon from drop down, their name, photo and type display below drop down menu
  
  // Changing selection of drop down changes the image, name and type to reflect what new pokemon is selected

  // If there is a amount of loading, display a "pokeball" where image is

  // namespace to organize our app - appPokemon = {};

  // store variables 
    // apiURL
  
  // create a method for URLSearchParams
    // name of selected pokemon
    // type of selected pokemon
    // sprite of selected pokemon
    
  // create a method to update variable of user selection of dropdown 
    
  // create init method to start app
  
  // STRETCHGOALS:
    // have two buttons besides selected pokemon card that will either move back one selection or forward one selection
      // this will update selected pokemon card as well as update selection in dropdown to reflect the new pokemon
    // If app takes time to load (could implement a load time), the a pokeball appears (maybe spins? - css implementation)
>>>>>>> e6bcd1656827f9a12f5063b2602aa9e7a6dd98f3
