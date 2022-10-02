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
