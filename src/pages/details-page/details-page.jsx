import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { SimilarMoviesContainer } from "../../modules/similar-movies/similar-movies-container";

import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CardBackground from "../../components/card-background/card-background";
import Poster from "../../components/poster/poster";
import Tabs from "../../components/tabs/tabs";
import CardManage from "../../components/card-manage/card-manage";
import VideoPlayer from "../../components/video-player-full/video-player";
import { fetchMovieAsync, resetMovie } from "../../store/movie/actions";

const DetailsPage = () => {
  const [isFull, setFull] = useState(false);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    const id = match.params.id;
    dispatch(fetchMovieAsync(id));

    return () => dispatch(resetMovie());
  }, []);

  return (
    <>
      {isFull && (
        <VideoPlayer
          name="Transpotting"
          poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
          src={movie.trailer}
          onClose={() => setFull(false)}
        />
      )}
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <CardBackground />
          <Header />
          <div className="movie-card__wrap">
            <CardManage
              name={movie.name}
              genre={movie.genre}
              released={movie.released}
              onPlayClick={() => setFull(true)}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <Poster big={true} src={movie.posterImage} />
            <Tabs movie={movie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarMoviesContainer />
        <Footer />
      </div>
    </>
  );
};

export default DetailsPage;
