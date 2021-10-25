console.log("Hello World!")


const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:2525/imposters')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
