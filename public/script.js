const mainContainer = document.querySelector(".mainContainer");
const searchBtn = document.querySelector(".searchBtn");
const countryInput = document.querySelector("input");

const searchCountry = () => {
  fetch("https://www.trackcorona.live/api/travel")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((country) => {
        const img = `<div class = "Countries">
        <h4>${country.location}</h4></div>`;
        // console.log(data);

        mainContainer.insertAdjacentHTML("beforeend", img);
      });
    });
};

const sendCountryToServer = (country) => {
  fetch("api/countries/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

searchBtn.addEventListener("click", (event) => {
  console.log(countryInput.value);
  searchCountry(countryInput.value);
  sendCountryToServer({ input: countryInput.value });
  mainContainer.innerHTML = "";
});
searchCountry();
