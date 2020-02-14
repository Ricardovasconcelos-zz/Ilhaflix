import axios from "axios";

export const Movies = type => {
  return axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=71dba6ec&${type}`
  });
};
