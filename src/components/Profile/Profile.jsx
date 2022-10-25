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
  Label,
  Quantity,
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
          <Label>
            <span>Followers</span>
            <br />
          </Label>
          <Quantity>
            <span>{stats.followers}</span>
          </Quantity>
        </StatsItem>
        <StatsItem>
          <Label>
            <span>Views</span>
            <br />
          </Label>
          <Quantity>
            <span>{stats.views}</span>
          </Quantity>
        </StatsItem>
        <StatsItem>
          <Label>
            <span>Likes</span>
            <br />
          </Label>
          <Quantity>
            <span>{stats.likes}</span>
          </Quantity>
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
