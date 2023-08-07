document.addEventListener("DOMContentLoaded", () => {
  function handleCountryClick(event) {
    const countryDiv = event.currentTarget;
    countryDiv.classList.toggle("selected");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      alert("Welcome to world info!");
    }
  }

  const countryDivs = document.querySelectorAll(".country");

  countryDivs.forEach((countryDiv) => {
    countryDiv.addEventListener("click", handleCountryClick);
  });

  document.addEventListener("keydown", handleKeyPress);

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const countriesContainer = document.querySelector(".countries-container");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          countriesContainer.innerHTML = "";
          data.forEach((country) => {
            const countryDiv = document.createElement("div");
            countryDiv.classList.add("country");
            countryDiv.id = country.cca3;

            const nameElement = document.createElement("p");
            nameElement.textContent = `Country: ${country.name.common}`;
            countryDiv.appendChild(nameElement);

            const flagImg = document.createElement("img");
            flagImg.src = country.flags.png;
            flagImg.alt = `${country.name.common} flag`;
            countryDiv.appendChild(flagImg);

            const capitalElement = document.createElement("p");
            capitalElement.textContent = `Capital: ${country.capital}`;
            countryDiv.appendChild(capitalElement);

            const populationElement = document.createElement("p");
            populationElement.textContent = `Population: ${country.population}`;
            countryDiv.appendChild(populationElement);

            const languages = Object.values(country.languages).join(", ");
            const languagesElement = document.createElement("p");
            languagesElement.textContent = `Languages: ${languages}`;
            countryDiv.appendChild(languagesElement);

            countriesContainer.appendChild(countryDiv);
          });
        })
        .catch((err) => console.log(err));
    }
  });
});
