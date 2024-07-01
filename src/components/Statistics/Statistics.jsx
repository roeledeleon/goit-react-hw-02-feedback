import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div className={`${css.txtwrapper} ${css.firstwrapper}`}>
        <p className={css.txt}>
          Good:
          <span className={css.txtspan}>{good}</span>
        </p>
        <p className={css.txt}>
          Neutral:
          <span className={css.txtspan}>{neutral}</span>
        </p>
        <p className={css.txt}>
          Bad:
          <span className={css.txtspan}>{bad}</span>
        </p>
      </div>
      <div className={`${css.txtwrapper} ${css.secondwrapper}`}>
        <p className={css.txt}>
          Total:
          <span className={css.txtspan}>{total}</span>
        </p>
        <p className={css.txt}>
          Positive Feedback:
          <span className={css.txtspan}>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
