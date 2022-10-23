import PropTypes from 'prop-types';

// import styles from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return <section class="statistics">
    <h2 class="title">Upload stats</h2>
  
    <ul class="stat-list">
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
    </ul>
  </section>
}