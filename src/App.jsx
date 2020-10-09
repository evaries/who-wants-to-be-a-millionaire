import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import GameOver from './components/GameOver/GameOver';
import GameStart from './components/GameStart/GameStart';
import NotFound from './components/NotFound/NotFound';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Redirect exact from='/' to='game-start' />
          <Route path='/game-start'>
            <GameStart />
          </Route>
          <Route path='/questions-page'>
            <QuestionsPage />
          </Route>
          <Route path='/game-over'>
            <GameOver />
          </Route>
          <Route path='*' exact>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
