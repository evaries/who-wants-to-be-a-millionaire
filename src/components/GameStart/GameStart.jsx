import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameStart.module.css';
import hand from '../../assets/images/hand1.svg';

const GameStart = () => (
  <div className={styles.container}>
    <img className={styles.handImage} src={hand} alt='hand' />
    <div className={styles.startingInfo}>
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <Link className={styles.link} to='/questions-page'>
        <button type='button' className={styles.startButton}>
          Start
        </button>
      </Link>
    </div>
  </div>
);

export default GameStart;
