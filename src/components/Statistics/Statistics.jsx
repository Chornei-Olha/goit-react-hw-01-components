// import PropTypes from 'prop-types';

import {
  Statistics,
  StatTitle,
  StatList,
  StatItem
} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return <Statistics>
    <StatTitle>{title}</StatTitle>
    <StatList>
      <StatItem>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </StatItem>
      <StatItem>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </StatItem>
      <StatItem>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </StatItem>
      <StatItem>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </StatItem>
    </StatList>
  </Statistics>
}

// Statistics.PropTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired
// }