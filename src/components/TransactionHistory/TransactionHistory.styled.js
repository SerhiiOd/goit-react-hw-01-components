import styled from '@emotion/styled';

export const TransTable = styled.table`
  margin: 40px auto;
  padding: 5px;

  border-collapse: collapse;
  table-layout: auto;
  border: 2px solid silver;

  background: linear-gradient(
    90deg,
    rgba(57, 209, 10, 1) 5%,
    rgba(121, 9, 109, 1) 59%,
    rgba(0, 212, 255, 0.8407738095238095) 100%
  );
`;

export const TableTr = styled.tr`
  :nth-of-type(even) {
    background-color: #d3d3d3;
  }

  :hover,
  :focus {
    background-color: #87ceeb;
    transition: background-color 0.5s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const TableTh = styled.th`
  padding: 10px 80px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #00ced1;
  color: #ffffff;
  :not(:last-child) {
    border-right: 2px solid #ffff;
  }
`;

export const TableTd = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  :not(:last-child) {
    border-right: 2px solid #778899;
  }
`;
