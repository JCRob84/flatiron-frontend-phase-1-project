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

          