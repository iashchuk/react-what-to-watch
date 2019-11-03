import * as types from "./types.js";
import { data } from "../../api/mocks";

export const fetchMoviesAsync = () => (dispatch) => {
  const movies = [...data];
  dispatch(fillMovies(movies));
};

export const fillMovies = (movies) => {
  return {
    type: types.FILL_MOVIES,
    payload: movies
  };
};
