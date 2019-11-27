import React from "react";
import MainPage from "./pages/main-page/main-page";
import DetailsPage from "./pages/details-page/details-page";
import SignInPage from "./pages/sign-in-page/sign-in-page";

const App = () => {
  switch (location.pathname) {
    case `/details`:
      return <DetailsPage />;
    case `/auth`:
      return <SignInPage />;
    default:
      return <MainPage />;
  }
};

export default App;
