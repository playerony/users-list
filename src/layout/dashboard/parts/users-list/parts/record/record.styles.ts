import styled from 'styled-components';

export const StyledWrapper = styled.li`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: ${({ theme }) => theme.spacing.xsmall};
`;

export const StyledName = styled.span`
  padding-left: ${({ theme }) => theme.spacing.xsmall};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const StyledUsername = styled.span`
  padding-left: ${({ theme }) => theme.spacing.small};
`;
