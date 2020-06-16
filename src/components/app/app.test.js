import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [{
      artist: `John Snow`,
      picture: `https://api.adorable.io/avatars/128/0`
    }, {
      artist: `Jack Daniels`,
      picture: `https://api.adorable.io/avatars/128/1`
    }, {
      artist: `Jim Beam`,
      picture: `https://api.adorable.io/avatars/128/2`
    }]
  }
];

describe(`App`, () => {
  it(`App component should render correctly`, () => {
    const tree = rerender.create(<App errorsCount={3} questions={questions}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
