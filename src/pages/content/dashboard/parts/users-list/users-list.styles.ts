import styled, { css } from 'styled-components';

import { respondTo } from '@styles/mixins';

interface StyledWrapperProps {
  centerContent: boolean;
}

export const StyledWrapper = styled.ul<StyledWrapperProps>`
  text-align: left;
  min-height: 250px;
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing.small};

  ${({ centerContent }) =>
    centerContent &&
    css`
      text-align: center;
    `}

  ${({ theme }) => respondTo.xmobile`
    min-height: 210px;
    padding-left: ${theme.spacing.xsmall};
  `}
`;
