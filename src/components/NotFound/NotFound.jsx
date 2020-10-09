import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NotFound.module.css';
import hand from '../../assets/images/hand1.svg';

const NotFound = () => {
  const history = useHistory();
  const goToGameStart = () => history.push('/game-start');

  return (
    <div className={styles.container}>
      <img className={styles.handImage} src={hand} alt='hand' />
      <div className={styles.finalInfo}>
        <h1 className={styles.title}>Page not found</h1>
        <button type='button' className={styles.goHomeButton} onClick={goToGameStart}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
