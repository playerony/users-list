import styled from 'styled-components';

import { respondTo } from '@styles/mixins';

export const StyledInput = styled.input`
  width: 100%;
  padding: 3px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 2px solid ${({ theme }) => theme.color.black};

  ${({ theme }) => respondTo.xmobile`
    border-width: 1px;
    font-size: ${theme.fontSize.xsmall};
  `}
`;
