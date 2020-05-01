import React from 'react';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import module from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    {total > 0 ? (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    ) : (
      <Notification message={'No feedback given'} />
    )}
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
