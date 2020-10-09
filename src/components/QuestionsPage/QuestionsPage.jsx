import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './QuestionsPage.module.css';
import QuestionTitle from './QuestionTitle/QuestionTitle';
import QuestionOptions from './QuestionOptions/QuestionOptions';
import EarnedMoney from './EarnedMoney/EarnedMoney';
import questions from '../../db/questions.json';

const QuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false);

  const history = useHistory();
  const goToGameOver = (score) => setTimeout(() => history.push({ pathname: '/game-over', state: { score } }), 1000);
  const goToNextQuestion = (nextQuestion) =>
    setTimeout(() => {
      setCurrentQuestion(nextQuestion);
      setAnswerChecked(false);
    }, 1000);

  const handleAnswerOptionClick = (isCorrect) => {
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length && isCorrect) {
        goToNextQuestion(nextQuestion);
      } else if (nextQuestion === questions.length) {
        goToGameOver(questions[currentQuestion].cost);
      } else {
        const finalQuestionCost = currentQuestion > 0 ? questions[currentQuestion - 1].cost : 0;
        goToGameOver(finalQuestionCost);
      }
      setAnswerChecked(true);
    }, 2000);
  };

  const getCosts = () => questions.map((question) => question.cost);
  return (
    <div className={styles.container}>
      <div className={styles.questionTitle}>
        <QuestionTitle text={questions[currentQuestion].questionText} />
      </div>
      <div className={styles.questionOptions}>
        <QuestionOptions
          options={questions[currentQuestion].answerOptions}
          handleAnswerOptionClick={handleAnswerOptionClick}
          answerChecked={answerChecked}
        />
      </div>
      <div className={styles.earnedMoney}>
        <EarnedMoney earnedMoney={questions[currentQuestion].earnedMoney} currentQuestion={currentQuestion} costs={getCosts()} />
      </div>
    </div>
  );
};

export default QuestionsPage;
