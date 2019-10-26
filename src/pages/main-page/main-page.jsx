import React from "react";
import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Catalog from "../../modules/catalog/catalog";
import CardBackground from "../../components/card-background/card-background";
import CardManage from "../../components/card-manage/card-manage";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Poster from "../../components/poster/poster";

const MainPage = () => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card">
        <CardBackground />
        <Header />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <Poster />
            <CardManage />
          </div>
        </div>
      </section>
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
