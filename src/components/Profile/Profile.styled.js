import styled from '@emotion/styled';

export const ProfCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 10px;

  background: linear-gradient(
    90deg,
    rgba(57, 209, 10, 1) 5%,
    rgba(121, 9, 109, 1) 59%,
    rgba(0, 212, 255, 0.8407738095238095) 100%
  );
`;

export const ProfDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 233px;

  border: 2px solid orange;
`;

export const ProfAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid orange;
  width: 150px;
`;

export const ProfName = styled.p`
  font-weight: 700;
  font-size: 28px;

  color: #d8d639;
`;

export const ProfTag = styled.p`
  font-weight: 600;
  font-size: 20px;

  color: #db4224;
`;

export const ProfLocation = styled.p`
  font-size: 20px;

  color: #359114;
`;

export const ProfList = styled.ul`
  display: flex;

  list-style: none;
`;

export const ProfItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 75px;

  border: 2px solid orange;
`;

export const ProfLabel = styled.span`
  color: #fff;
`;

export const ProfQuantity = styled.span``;
