import React from "react";
import renderer from "react-test-renderer";
import Video from "./video";

const cardData = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`Video`, () => {
  it(`render correctly`, () => {
    const dom = (
      <Video
        width={280}
        height={175}
        poster={cardData.poster}
        src={cardData.trailer}
        isPlaying={true}
      />
    );

    const component = renderer.create(dom, { createNodeMock: () => ({}) });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
