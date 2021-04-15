import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  text-align: left;
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing.small};
`;
