
const apiHost = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fac26990e8a943b8b37f3372e623188d';

export default {
  async fetchInitialNews() {
    try {
      const response = await fetch(apiHost);
      const responseJson = await response.json();
      return responseJson.articles;
    } catch(error) {
      console.error(error);
    }
  }
};
