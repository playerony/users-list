import { ReactNode } from 'react';
import { StyledHeading } from './big-heading.styles';

interface BigHeadingProps {
  children: string | ReactNode | ReactNode[];
}

export const BigHeading = ({ children }: BigHeadingProps) => (
  <StyledHeading>{children}</StyledHeading>
);
