import PropTypes from 'prop-types';
import {
  BlockStatistics,
  StatTitle,
  StatList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <BlockStatistics>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span><br/>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </BlockStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
