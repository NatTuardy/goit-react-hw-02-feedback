import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <>
    <button type="button" className={styles.button} onClick={goodIncrement}>
      Good
    </button>
    <button type="button" className={styles.button} onClick={neutralIncrement}>
      Neutral
    </button>
    <button type="button" className={styles.button} onClick={badIncrement}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodIncrement: PropTypes.func,
  neutralIncrement: PropTypes.func,
  badIncrement: PropTypes.func,
};
