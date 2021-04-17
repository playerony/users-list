import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  centerContent: boolean;
}

export const StyledWrapper = styled.ul<StyledWrapperProps>`
  text-align: left;
  min-height: 400px;
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing.small};

  ${({ centerContent }) =>
    centerContent &&
    css`
      text-align: center;
    `}
`;
