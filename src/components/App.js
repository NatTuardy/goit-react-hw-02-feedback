import React, { Component } from 'react';

import SectionTitle from './SectionTitle/SectionTitle';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodIncrement = () => {
    this.setState(prev => {
      return { good: prev.good + 1 };
    });
  };
  neutralIncrement = () => {
    this.setState(prev => {
      return { neutral: prev.neutral + 1 };
    });
  };

  badIncrement = () => {
    this.setState(prev => {
      return { bad: prev.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((100 / this.countTotalFeedback()) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.two}>
        <SectionTitle
          title={'Please leave feedback'}
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
