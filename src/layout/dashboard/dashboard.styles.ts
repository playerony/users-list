import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;
