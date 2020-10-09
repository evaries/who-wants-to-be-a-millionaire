import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './QuestionOption.module.css';

const QuestionOption = ({ option, selectAnswer, optionState, isSelected }) => {
  return (
    <>
      <svg
        className={cx(styles.option, styles[optionState], isSelected ? styles.selected : null)}
        onClick={() => selectAnswer(option)}
        viewBox='0 0 405 72'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M388 36L405 36' />
        <path d='M0 36L17 36' />
        <path d='M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z' />
        <text textAnchor='start' y='40' x='50' fill='#FF8B37'>
          {option.id}
        </text>
        <text textAnchor='start' y='40' x='67' fill='#000' stroke='none'>
          {option.answerText}
        </text>
      </svg>
    </>
  );
};

QuestionOption.propTypes = {
  option: PropTypes.shape({ answerText: PropTypes.string.isRequired, id: PropTypes.string.isRequired }).isRequired,
  selectAnswer: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  optionState: PropTypes.string.isRequired,
};

export default QuestionOption;
