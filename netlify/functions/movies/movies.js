const baseUrl = "https://www.omdbapi.com";
const axios = require("axios");

const handler = async (event) => {
  try {
    const { query } = event.queryStringParameters;
    if(!query){
      throw new Error("Missing query string");
    }
    const url = `${baseUrl}/?apikey=${process.env.API_KEY}&type=movie&s=${query}&page=1`
    const movies = axios.get(url).data;
    return {
      statusCode: 200,
      body: JSON.stringify({ movies: movies.Search }),
     
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
