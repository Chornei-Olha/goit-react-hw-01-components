import PropTypes from 'prop-types';
import {
  BlockStatistics,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <BlockStatistics>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>
            <span>{label}</span><br/>
            </Label>
            <Percentage>
            <span>{percentage}%</span>
            </Percentage>
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
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
