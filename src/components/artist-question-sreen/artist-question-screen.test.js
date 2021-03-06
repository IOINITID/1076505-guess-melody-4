import React from 'react';
import rerender from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  },
  answers: [{
    artist: `John Snow`,
    picture: `https://api.adorable.io/avatars/128/0`
  },
  {
    artist: `Jack Daniels`,
    picture: `https://api.adorable.io/avatars/128/1`
  },
  {
    artist: `Jim Beam`,
    picture: `https://api.adorable.io/avatars/128/2`
  }]
};

describe(`ArtistQuestionScreen`, () => {
  it(`ArtistQuestionScreen should render correctly`, () => {
    const tree = rerender.create(
        <ArtistQuestionScreen
          question={question}
          onAnswer={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
