import React from 'react';
import rerender from 'react-test-renderer';
import AudioPlayer from '../audio-player/audio-player.jsx';

const mockAudio = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

describe(`AudioPlayer`, () => {
  it(`AudioPlayer shold render correctly`, () => {
    const {song} = mockAudio;

    const tree = rerender.create(
        <AudioPlayer
          isPlaying={false}
          onPlayButtonClick={() => {}}
          src={song.src}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
