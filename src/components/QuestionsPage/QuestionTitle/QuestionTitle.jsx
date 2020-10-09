import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionTitle.module.css';

const QuestionTitle = ({ text }) => <p className={styles.question}>{text}</p>;

QuestionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionTitle;
