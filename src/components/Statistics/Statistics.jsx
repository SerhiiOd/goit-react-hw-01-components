import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor.js';
import {
  StatisticsSec,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSec>
      {title && <StatTitle>Upload stats</StatTitle>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercent>{stat.percentage}%</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSec>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
