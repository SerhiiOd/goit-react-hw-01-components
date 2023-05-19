import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  background: linear-gradient(
    90deg,
    rgba(57, 209, 10, 1) 5%,
    rgba(121, 9, 109, 1) 59%,
    rgba(0, 212, 255, 0.8407738095238095) 100%
  );
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;

  width: 400px;

  padding: 5px;

  border: 2px solid orange;
  border-radius: 25px;
  background: #7fffd4;
`;

export const FriendsStatus = styled.span`
  width: 15px;
  height: 15px;

  margin-right: 75px;

  border-radius: 50%;

  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendsAvatar = styled.img`
  width: 75px;

  margin-right: 110px;
`;

export const FriendsName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
