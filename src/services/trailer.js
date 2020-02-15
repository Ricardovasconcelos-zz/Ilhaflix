import axios from "axios";

export const Trailer = titleTrailer => {
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCHiSs445VA85S8P6Rg6Bf-X8SwWueJ7MA&q=${titleTrailer}&type=video&maxResults=1`
  });
};
