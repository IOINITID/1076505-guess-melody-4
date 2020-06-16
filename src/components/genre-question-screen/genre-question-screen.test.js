import React from 'react';
import rerender from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

describe(`GenreQuestionScreen`, () => {
  it(`GenreQuestionScreen should render correctly`, () => {
    const tree = rerender.create(<GenreQuestionScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
