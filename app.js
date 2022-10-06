const placeHolderValue = "empty";

fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then((response) => {
    // console.log(response)
    if (response.ok === true) {
      return response.json();
    } else {
      throw new Error()
    }
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
    // console.log("these are the data results", data.results[0].name);
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


  })
  .catch((error)=> {
    // console.log(error)
    if (error.message === "Not Found"){
      alert("No pokemon found!")
    } else {
      alert("Something is broken.")
    }
  })

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
        const statsID = data.id; 
        // console.log("THis is ID", statsID);
        const statsHeight = data.height; 
        // console.log("this is height", statsHeight);
        const statsWeight = data.weight;  
        // console.log("this is weight", statsWeight);
        
        const pokemonCard = document.querySelector(".pokemonCard");
        pokemonCard.innerHTML = `<div class="pokemonName"> <p>${data.name}</p> <p>ID ${statsID}</p> </div><div class="imageContainer">
        <img class="image" src=${imageUrl} alt="Photo of a ${data.name}"/> </div> 
        <div> <p>Height ${statsHeight}</p></div>
        <div> <p>Weight ${statsWeight}</p></div>`;
      });
  }
});
