import PropTypes from 'prop-types';

export default function Statistics({good,neutral,bad,total,positiveFeedbackPerc}) {
    return (
        <div>
            <p>{good}</p>
            <p>{neutral}</p>
            <p>{bad}</p>
            <p>{total()}</p>
            <p>{positiveFeedbackPerc()}%</p>
        </div>
    )
}
/* Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
} */