import styled from 'styled-components';

import { respondTo } from '@styles/mixins';

export const StyledPlainBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.background};

  ${({ theme }) => respondTo.xmobile`
    padding: ${theme.spacing.xsmall};
  `}
`;
