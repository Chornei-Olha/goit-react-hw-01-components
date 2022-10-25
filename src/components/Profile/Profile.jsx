// import React from 'react';
import PropTypes from 'prop-types';
import {
  UseCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UseCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList>
        <StatsItem>
          <span>Followers</span><br/>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span><br/>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span><br/>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </UseCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
