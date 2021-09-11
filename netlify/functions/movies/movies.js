const axios = require("axios");

const baseUrl = "https://www.omdbapi.com";

const handler = async (event) => {
  try {
    const { query } = event.queryStringParameters;
    if (!query) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          Response: "False",
          Error: "Missing query string",
        }),
      };
    }
    const url = `${baseUrl}/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${query}&page=1`;
    const response = (await axios.get(url)).data;
    if (response.hasOwnProperty("Error")) {
      return {
        statusCode: 500,
        body: JSON.stringify(response),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ Response: "False", Error: "Internal server error" }),
    };
  }
};

module.exports = { handler };
