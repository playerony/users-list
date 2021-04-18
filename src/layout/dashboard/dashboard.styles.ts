import styled from 'styled-components';

import { respondTo } from '@styles/mixins';

export const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.medium};

    ${({ theme }) => respondTo.xmobile`
      margin-top: ${theme.spacing.small};
    `}
  }
`;
