import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

const SectionTitle = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => (
  <>
    <div className={styles.two}>
      <h2>{title}</h2>
    </div>
    <FeedbackOptions
      goodIncrement={goodIncrement}
      neutralIncrement={neutralIncrement}
      badIncrement={badIncrement}
    />

    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage}
    />
  </>
);

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
