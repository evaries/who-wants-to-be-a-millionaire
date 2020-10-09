import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import MoneyCell from './MoneyCell/MoneyCell';
import styles from './EarnedMoney.module.css';

const EarnedMonney = ({ currentQuestion, costs }) => {
  const checkAnswer = (index) => {
    if (currentQuestion === index) {
      return `active`;
    }
    if (currentQuestion > index) {
      return `comming`;
    }
    return `passed`;
  };

  return (
    <div className={styles.container}>
      {costs.map((cell, index) => (
        <MoneyCell key={uuidv4()} earned={cell} questionState={checkAnswer(index)} />
      ))}
    </div>
  );
};

EarnedMonney.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  costs: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EarnedMonney;
