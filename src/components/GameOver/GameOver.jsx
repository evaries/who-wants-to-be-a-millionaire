import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './GameOver.module.css';
import hand from '../../assets/images/hand1.svg';

const GameOver = () => {
  const history = useHistory();
  const location = useLocation();
  const [score, setScore] = useState(0);

  const goToGameStartPage = () => history.push('/game-start');

  useEffect(() => {
    if (location?.state?.hasOwnProperty('score')) {
      setScore(location.state.score);
    } else {
      goToGameStartPage();
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <img className={styles.handImage} src={hand} alt='hand' />
      <div className={styles.startingInfo}>
        <div>
          <p className={styles.subTitle}> Total Score:</p>
          <p className={styles.title}> {`$${score} earned`} </p>
        </div>
        <button type='button' className={styles.tryAgainButton} onClick={goToGameStartPage}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
