const app = document.querySelector(".container");

const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const shuffledCountries = data.sort(() => Math.random() - 0.5);
    const randomTenCountries = shuffledCountries.slice(0, 10);

    randomTenCountries.forEach((country) => {
      const name = country.name.common;
      const flagUrl = country.flags.png;
      const population = country.population;
      const languages = Object.values(country.languages).join(", ");

      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");
    });
  });
