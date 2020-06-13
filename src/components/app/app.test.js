import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`App component should render correctly`, () => {
    const tree = rerender.create(<App errorsCount={3}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
