import PropTypes from 'prop-types';
import {Friend,
    Status,
    Foto,
    Name} from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline})=>{
    return(<Friend>
        <Status isOnline={isOnline}></Status>
        <Foto src={avatar} alt="User avatar" width="80px" height="80px" />
        <Name>{name}</Name>
      </Friend>
)}

FriendListItem.protoType = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}