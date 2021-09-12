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
    const { status, data } = await axios.get(url);

    if (status !== 200) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          Response: "False",
          Error: "Failed to fetch movie",
        }),
      };
    }

    if (data.hasOwnProperty("Error")) {
      return {
        statusCode: 500,
        body: JSON.stringify(data),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        Response: "False",
        Error: "Internal server error",
      }),
    };
  }
};

module.exports = { handler };
