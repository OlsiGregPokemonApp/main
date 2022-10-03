const placeHolderValue = "empty";

fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // ****************************************************
    // generating a random number based on the returned data
    // const randomPoke = Math.floor(Math.random() * data.results.length);
    // console.log(data)
    // setting values from the objects
    // const name = data.results[0].name;
    // const url = data.results[0].url;
    // ******************************************************

    let optionsHtml = "";
    const dropdown = document.getElementById("dropdown");

    // placeholder for first item on the dropdown menu
    const firstOption = `<option value=${placeHolderValue}> --- </option>`;
    
    // requesting all names from  API
    // create a list of names for the dropdown menu
    data.results.forEach((result) => {
      dropdown;

      // adding names to the list
      optionsHtml += `<option value="${result.url}">${result.name}</option>`;
    });
    // combine placeholder with names to have a full dropdown
    dropdown.innerHTML = firstOption + optionsHtml;

    // loader code
    const loaderElement = document.querySelector(".loader");
    const pokemonElement = document.querySelector("#mainDisplay");

    // code hides main display and shows loader image(message) while waiting for the API data
    loaderElement.classList.add("hide");
    pokemonElement.classList.remove("hide");
    // console.log(pokemonElement);
  });

//  event listener onchange
// displays  sprite when name is clicked
const select = document.querySelector("select");
select.addEventListener("change", () => {
  const pokemonUrl = select.value;
  //   console.log(pokemonUrl);

  // shows image only when a name is clicked
  if (pokemonUrl !== placeHolderValue) {
    // API request to fetch and display image 
    fetch(pokemonUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imageUrl = data.sprites.other.dream_world.front_default;
        console.log(data.name);
        const pokemonCard = document.querySelector(".pokemonCard");
        pokemonCard.innerHTML = `<div >
      <img class="image" src=${imageUrl} alt="Photo of a ${data.name}"/>
      </div>`;
      });
  }
});
