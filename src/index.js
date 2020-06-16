import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

const settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(<App errorsCount={settings.ERRORS_COUNT} questions={questions}/>, document.querySelector(`#root`));
