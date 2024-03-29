// Import the Axios library
const axios = require('axios');


(async () => {

    const url = 'http://quotes.toscrape.com/';
    const response = await axios.get(url); // get HTML
    const $ = cheerio.load(response.data); // parse HTML with Cheerio
    const title = $('h1'); // use selectors to find data you need
    console.log(title.text());
  
  })();