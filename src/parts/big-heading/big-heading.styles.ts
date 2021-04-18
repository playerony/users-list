import styled from 'styled-components';

import { respondTo } from '@styles/mixins';

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.big};
  `}
`;
