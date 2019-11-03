import React, { useEffect } from "react";
import { array, func } from "prop-types";

import ShowMoreButton from "../../components/buttons/show-more-button/show-more-button";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MoviesList from "../../components/movies-list/movies-list";

const Catalog = ({ movies, fetchMoviesAsync }) => {
  useEffect(() => {
    fetchMoviesAsync();
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MoviesFilter />
      <MoviesList movies={movies} />

      <div className="catalog__more">
        <ShowMoreButton />
      </div>
    </section>
  );
};

Catalog.propTypes = {
  movies: array.isRequired,
  fetchMoviesAsync: func.isRequired
};

export default Catalog;
