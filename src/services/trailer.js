import axios from "axios";

export const Trailer = titleTrailer => {
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC5IFOLr_tbNIZPJx7tEIY1SjvThd0NPjE&q=${titleTrailer}&type=video&maxResults=1`
  });
};
