import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionOptions.module.css';
import QuestionOption from './QuestionOption/QuestionOption';

const QuestionOptions = ({ options, handleAnswerOptionClick, answerChecked }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [optionState, setOptionState] = useState('');

  const selectAnswer = (option) => setSelectedAnswer(option);
  const handleConfirmClick = () => handleAnswerOptionClick(selectedAnswer.isCorrect);

  useEffect(() => setSelectedAnswer(null), [options]);
  useEffect(() => {
    if (!selectedAnswer) {
      setOptionState('');
    } else if (answerChecked) {
      const checkedOptionState = selectedAnswer.isCorrect ? 'correct' : 'wrong';
      setOptionState(checkedOptionState);
    }
  }, [answerChecked, selectedAnswer]);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        {options.map((option) => (
          <div className={styles.option} key={option.id}>
            <QuestionOption option={option} selectAnswer={selectAnswer} isSelected={selectedAnswer?.id === option.id} optionState={optionState} />
          </div>
        ))}
      </div>
      <button type='button' className={styles.confirmButton} disabled={!selectedAnswer} onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
};

QuestionOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAnswerOptionClick: PropTypes.func.isRequired,
  answerChecked: PropTypes.bool.isRequired,
};

export default QuestionOptions;
