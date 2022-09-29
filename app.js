
// this is a native for JS this is a promise based fxn
// it will wait for a respoinse to come back
// performing a the network request
// fetch(`https://www.septastats.com/api/current/system/latest`)


fetch(`https://pokeapi.co/api/v2/pokemon`)
.then((response) => {
    return response.json();
})
.then((data) => {
    // generating a random number based on the returned trains
    const randomPoko = Math.floor(Math.random() * data.results.length);
    // setting values from the objects
    console.log(data.results);
    const name = data.results[randomPoko].name;
    const url = data.results[randomPoko].url;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(name)
        const imageUrl = data.sprites.front_default;

        // work on the type beside 
        // 

                
        const sentence = `This is ${name} and he looks like this ${imageUrl}.`
        // // displaying the msg to our console
        console.log(sentence);
    });

})




   