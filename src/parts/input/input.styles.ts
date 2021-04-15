import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 3px;
  width: calc(100% - 10px);
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: ${({ theme }) => theme.radius.default};
  border: 2px solid ${({ theme }) => theme.color.black};
`;
