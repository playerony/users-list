import styled from 'styled-components';

export const StyledPlainBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.color.background};
`;
