import axios from "axios";

export function getNews(category = "General") {
  const API_KEY = `6e925b7e737a4242b537a2716e677edf`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

  return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`);
  //  .then((response) => {
  //    console.log(response.data.articles);
  //  })
  //  .catch((err) => {
  //    console.log(err);
  //  });
}
