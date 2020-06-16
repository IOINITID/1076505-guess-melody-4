import React from 'react';
import rerender from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

describe(`ArtistQuestionScreen`, () => {
  it(`ArtistQuestionScreen should render correctly`, () => {
    const tree = rerender.create(<ArtistQuestionScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
