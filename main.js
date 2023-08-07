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


