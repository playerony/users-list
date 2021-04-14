import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@styles/theme-config';
import { ResetStyles } from '@styles/reset.styles';
import { GlobalStyles } from '@styles/global.styles';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
