import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsStatus,
  FriendsAvatar,
  FriendsName,
} from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem>
      <FriendsStatus status={isOnline}></FriendsStatus>
      <FriendsAvatar src={avatar} alt={name} />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
