import styled from 'styled-components';

import { respondTo } from '@styles/mixins';

export const StyledWrapper = styled.li`
  list-style-type: none;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: ${({ theme }) => theme.spacing.xsmall};

  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.xsmall};
  `}
`;

export const StyledName = styled.span`
  padding-left: ${({ theme }) => theme.spacing.xsmall};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  ${({ theme }) => respondTo.xmobile`
    padding-left: ${theme.spacing.xsmall};
  `}
`;

export const StyledUsername = styled.span`
  padding-left: ${({ theme }) => theme.spacing.small};

  ${({ theme }) => respondTo.xmobile`
    padding-left: ${theme.spacing.xsmall};
  `}
`;
