import PropTypes from 'prop-types';
import {
  ProfCard,
  ProfDescription,
  ProfAvatar,
  ProfName,
  ProfTag,
  ProfLocation,
  ProfList,
  ProfItem,
  ProfLabel,
  ProfQuantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfCard>
      <ProfDescription>
        <ProfAvatar src={avatar} alt={username} />
        <ProfName> {username} </ProfName>
        <ProfTag> @{tag} </ProfTag>
        <ProfLocation> {location} </ProfLocation>
      </ProfDescription>
      <ProfList>
        <ProfItem>
          <ProfLabel>Followers</ProfLabel>
          <ProfQuantity> {stats.followers} </ProfQuantity>
        </ProfItem>
        <ProfItem>
          <ProfLabel>Views</ProfLabel>
          <ProfQuantity> {stats.views} </ProfQuantity>
        </ProfItem>
        <ProfItem>
          <ProfLabel>Likes</ProfLabel>
          <ProfQuantity> {stats.likes} </ProfQuantity>
        </ProfItem>
      </ProfList>
    </ProfCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
