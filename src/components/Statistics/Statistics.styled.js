import styled from '@emotion/styled';

export const StatisticsSec = styled.section`
  display: contents;
  text-align: center;
`;

export const StatTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;

  background: linear-gradient(
    90deg,
    rgba(57, 209, 10, 1) 5%,
    rgba(121, 9, 109, 1) 59%,
    rgba(0, 212, 255, 0.8407738095238095) 100%
  );

  color: #d8d639;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;

  background: linear-gradient(
    90deg,
    rgba(57, 209, 10, 1) 5%,
    rgba(121, 9, 109, 1) 59%,
    rgba(0, 212, 255, 0.8407738095238095) 100%
  );
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 75px;

  border-radius: 10px;
`;

export const StatLabel = styled.span``;

export const StatPercent = styled.span`
  color: #fff;
`;
