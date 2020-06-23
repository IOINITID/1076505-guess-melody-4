import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  render() {
    const {onAnswer, question, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >

          {answers.map((answer, index) => {
            const handlerInputChange = (evt) => {
              const value = evt.target.checked;

              this.setState({
                answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)]
              });
            };

            return (
              <div className="track" key={`${answer.src}-${index}`}>
                {renderPlayer(answer.src, index)}
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index}`}
                    id={`answer-${index}`}
                    checked={userAnswers[index]}
                    onChange={handlerInputChange} />
                  <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};
