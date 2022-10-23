import PropTypes from 'prop-types';

import styled from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return <Statistics>
    <StatTitle>{title}</StatTitle>
    <StatList>
      <Item>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </Item>
      <Item>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </Item>
      <Item>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </Item>
      <Item>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </Item>
    </StatList>
  </Statistics>
}

Statistics.PropTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}