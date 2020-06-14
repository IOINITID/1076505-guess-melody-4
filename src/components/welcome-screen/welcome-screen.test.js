import React from 'react';
import rerender from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`WelcomeScreen`, () => {
  it(`WelcomeScreen component should render correctly`, () => {
    const tree = rerender.create(<WelcomeScreen errorsCount={3} onWelcomeButtonClick={() => {}}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
