// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
let dataCountries;
let dataCountryCard;
const countries = document.querySelector(".countries-container");
const search = document.getElementById("inputSearch");
const range = document.getElementById("inputRange");
let rangeValueDisplay = document.getElementById("rangeValue");
let rangeValue = 24;
let searchValue = "";
const minToMax = document.getElementById("minToMax");
const maxToMin = document.getElementById("maxToMin");
const alpha = document.getElementById("alpha");

minToMax.addEventListener("click", () => {
  dataCountryCard;
  console.log("alpha");
});

search.addEventListener("input", (e) => {
  searchValue = e.target.value;
  fetcher();
});

range.addEventListener("input", () => {
  rangeValue = range.value;
  rangeValueDisplay.innerText = rangeValue;
  fetcher();
});

async function fetcher() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  dataCountries = data;
  dataCountryCard = dataCountries
    .filter((country) =>
      country.name.official.toUpperCase().includes(searchValue.toUpperCase())
    )
    .slice(0, rangeValue)
    .map((country) => {
      return {
        flag: country.flags.svg,
        flagAlt: country.flags.alt,
        name: country.name.official,
        capital: country.capital,
        population: country.population,
      };
    });

  countries.innerHTML = "";
  dataCountryCard.forEach((country) => {
    countries.innerHTML += `
    <div class="card">
    <img src="${country.flag}" alt="${country.flagAlt}">
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <p>${country.population}</p>
    </div>
    `;
  });
}

fetcher();
// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays