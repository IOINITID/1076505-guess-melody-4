import React from 'react';
import rerender from 'react-test-renderer';
import GameScreen from '../game-screen/game-screen.jsx';
import {GameType} from '../../const.js';

const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`GameScreen should render correctly with type: GameType.ARTIST`, () => {
    const tree = rerender.create(
        <GameScreen
          type={GameType.ARTIST}
        >
          {children}
        </GameScreen>

    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GameScreen should render correctly with type: GameType.GENRE`, () => {
    const tree = rerender.create(
        <GameScreen
          type={GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
