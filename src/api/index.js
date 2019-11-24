import axios from "axios";

export const api = {
  movies: {
    fetch() {
      return axios.get(`https://htmlacademy-react-2.appspot.com/wtw/films`);
    }
  }
};
