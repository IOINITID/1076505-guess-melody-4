import React from 'react';
import rerender from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = rerender.create(<App errorsCount={3}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
