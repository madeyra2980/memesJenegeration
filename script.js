const main1 = document.querySelector(".main1");
const generateMemes = document.createElement("div");
const input = document.querySelector("#input-search");

main1.appendChild(generateMemes);

generateMemes.classList.add("card");

fetch(`https://api.imgflip.com/get_memes`)
  .then((response) => response.json())
  .then((data) => {
    const {
      data: { memes },
    } = data;
    displayMemes(memes);
  });

function displayMemes(memes) {
  generateMemes.innerHTML = "";
  memes.forEach((element) => {
    const { name, url } = element;

    generateMemes.innerHTML += ` 
                  <div class="card_people"> 
                  <img id='img-memes' src="${url}" alt=""/> 
                  <h2>${name}</h2> 
                  </div> 
                   
                  `;
  });
}



input.addEventListener("input", (event) => {
  let searchText = event.target.value;
  fetch(`https://api.imgflip.com/get_memes`)
    .then((response) => response.json())
    .then((data) => {
      const {
        data: { memes },
      } = data;

      let filteredArray = memes.filter((key) =>
        key.name.toLowerCase().includes(searchText.toLowerCase())
      );
      displayMemes(filteredArray);
    });
});
