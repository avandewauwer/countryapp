const sqlite3 = require("sqlite3").verbose();

// BACKEND FILE FOR MY DATABASES QUERIES
const addCountryToDb = (countryFromTheBrain) => {
  console.log("From the server I present:", countryFromTheBrain);
};

exports.addCountryToDb = addCountryToDb;
